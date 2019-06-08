import React, { Component } from 'react';
import { Card , Icon, message, Button, Tooltip, Alert} from 'antd';
import uuidv1 from 'uuid/v1';
import { formatMessage } from 'umi-plugin-react/locale';
import QRCode from 'qrcode.react';
import { connect } from 'dva';
import io from 'socket.io-client';
import { getQueryPath } from '@/utils/utils';
import styles from './Login.less';
import { func } from 'prop-types';

const clientUrl = "http://localhost:8000/";// QRcode prefix
const serverUrl = "http://localhost:7001/"; // fetch QRcode ,io
let isExpired = null;
@connect(({ login}) => ({
  login,
}))
class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  componentDidMount() {
    var uuid = uuidv1();
    this.setState({
      uuid: uuid,
    });
    const { dispatch, login: { qrCode }  } = this.props;
    dispatch({
      type: 'login/getQrCode',
      payload: {
        prefix: clientUrl,
        scanType: 'weapp',
        key: uuid,
        action:'login'
      },
    })
    
  }

  componentDidUpdate() {
    if(isExpired !== null) {
      clearTimeout(isExpired);
      isExpired = null;
    }
    const { uuid } = this.state;
    const { dispatch, login: { qrCode }  } = this.props;
    let that = this;
    if(qrCode.expire !== '') {
      isExpired = setTimeout(function() {
         message.info('QRcode expired,please refresh',1)
         .then(that.refresh);
      },qrCode.expire * 1000);

      this.createConnect(uuid, qrCode.expire);
    }
  }

  createConnect(room, expire) {
    const socket = (this.socket = io(
      serverUrl + 'qrcode', {
        query: {
          room: room,
          type: 'admin',
          expire: expire
        },
        transports: ['websocket']
      }
    ))
    socket.on('join', type => {
      if(type === 'admin') {
        message.success('QRcode updated', 1);
      } else if(type === 'weapp') {
        message.success('scaned, Please authorize', 1);
      }
    });
    socket.on('admin', (res) => {
      const {statusCode, msg} = res.data.payload;
      if(statusCode === 1) {
        
        this.handleSubmit(msg);
      } else {
        message.error(msg);
      }
      this.disconnectSocket();
    });
    
    socket.on('disconnect', msg => {
      console.log('#disconnect', msg);
    });
  
    socket.on('disconnecting', () => {
      console.log('#disconnecting');
    });
  
    socket.on('error', (err) => {
      console.log(err);
    });
  };

  disconnectSocket() {
    if (this.socket) {
      this.socket.close()
      this.socket = null
    }
  };
　
  handleSubmit(values) {
    const { dispatch , login} = this.props;
    dispatch({
      type: 'login/login',
      payload: {
        ...values,
      },
    });

  };

  refresh = () => {
    if (this.socket) {
      this.disconnectSocket();
      
    }
    var uuid = uuidv1();
    this.setState({
      uuid: uuid,
    });
    const { dispatch, login: { qrCode } } = this.props;
    dispatch({
      type: 'login/getQrCode',
      payload: {
        prefix: clientUrl,
        scanType: 'weapp',
        key: uuid,
        action:'login'
      },
    })
  }
  
  render() {
    const { login: { qrCode, status,userInfo} } = this.props;
    if(status === 'ok') {
      message.success('welcome ' + userInfo.openid, 1);
    } else if(status === 'error'){
      message.error("Sorry, you don't seem to have access");
    }
    return (
      <div className={styles.main} style={{ textAlign: 'center', padding: 24 }}>
        <Card title={formatMessage({ id: 'app.login.scan' })} bordered={false} style={{ width: 300 }} 
          extra={<Tooltip title="Refresh">
              <Button  shape="circle" icon="reload" onClick={this.refresh}/>
            </Tooltip>} >
          <QRCode size={250} value={qrCode.qrCode} />
        </Card>
      </div>
    );
  }
}

export default LoginPage;
