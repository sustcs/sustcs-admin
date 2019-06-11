import React, { Component } from 'react';
import { Card, message, Button, Tooltip } from 'antd';
import uuidv1 from 'uuid/v1';
import { formatMessage } from 'umi-plugin-react/locale';
import QRCode from 'qrcode.react';
import { connect } from 'dva';
import io from 'socket.io-client';
import styles from './Login.less';

const clientUrl = 'http://localhost:8000/'; // QRcode prefix
const serverUrl = 'http://localhost:7001/'; // fetch QRcode ,io
let isExpired = null;
@connect(({ login }) => ({
  login,
}))
class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.showQrCode();
  }

  componentDidUpdate() {
    if (isExpired !== null) {
      clearTimeout(isExpired);
      isExpired = null;
    }
    const { uuid } = this.state;
    const {
      login: { qrCode },
    } = this.props;
    const that = this;
    if (qrCode.expire !== '') {
      isExpired = setTimeout(() => {
        message.info('QRcode expired,please refresh', 1).then(that.refresh);
      }, qrCode.expire * 1000);

      this.createConnect(uuid, qrCode.expire);
    }
  }

  refresh = () => {
    if (this.socket) {
      this.disconnectSocket();
    }
    this.showQrCode();
  };

  showQrCode = () => {
    const uuid = uuidv1();
    this.setState({
      uuid,
    });
    const { dispatch } = this.props;
    dispatch({
      type: 'login/auth',
      payload: {
        prefix: clientUrl,
        scanType: 'weapp',
        param: uuid,
        action: 'login',
      },
    });
  };

  createConnect(room, expire) {
    const socketUrl = `${serverUrl}qrcode`;
    this.socket = io(socketUrl, {
      query: {
        room,
        type: 'admin',
        expire,
      },
      transports: ['websocket'],
    });
    this.socket.on('join', type => {
      if (type === 'admin') {
        message.success('QRcode updated', 1);
      } else if (type === 'weapp') {
        message.success('scaned, Please authorize', 1);
      }
    });
    this.socket.on('admin', res => {
      const { statusCode, msg } = res.data.payload;
      if (statusCode === 1) {
        this.handleSubmit(msg);
      } else {
        message.error(msg);
      }
      this.disconnectSocket();
    });

    this.socket.on('disconnecting', () => {
      message.warn('disconnecting', 1);
    });

    this.socket.on('error', err => {
      message.error(err, 1);
    });
  }

  disconnectSocket() {
    if (this.socket) {
      this.socket.close();
      this.socket = null;
    }
  }

  handleSubmit(values) {
    const { dispatch } = this.props;
    dispatch({
      type: 'login/login',
      payload: {
        ...values,
      },
    });
  }

  render() {
    const {
      login: { qrCode, status, userInfo },
    } = this.props;
    if (status === 'ok') {
      message.success(`welcome${userInfo.username}`, 1);
    } else if (status === 'error') {
      message.error("Sorry, you don't seem to have access");
    }
    return (
      <div className={styles.main} style={{ textAlign: 'center', padding: 24 }}>
        <Card
          title={formatMessage({ id: 'app.login.scan' })}
          bordered={false}
          style={{ width: 300 }}
          extra={
            <Tooltip title="Refresh">
              <Button shape="circle" icon="reload" onClick={this.refresh} />
            </Tooltip>
          }
        >
          <QRCode size={250} value={qrCode.qrCode} />
        </Card>
      </div>
    );
  }
}

export default LoginPage;
