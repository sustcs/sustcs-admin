import React, { Component } from 'react';
import { Card , Icon, message, Button} from 'antd';
import uuidv1 from 'uuid/v1';
import { formatMessage } from 'umi-plugin-react/locale';
import QRCode from 'qrcode.react';
import { connect } from 'dva';
import io from 'socket.io-client';
import styles from './Login.less';

const qrCodeUrl = "http://localhost:3000/";// domain
const serverUrl = "http://localhost:8080/";

@connect(({ login}) => ({
  login
}))
class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uuid: "",
      error: null,
      isLoaded: false
    }
  }

  componentDidMount() {
    var uuid = uuidv1();
    this.fetchQrCode(uuid, 'login');
  }

  createConnect(channel) {
    var url = serverUrl + '?channel=' + channel;
    const socket = (this.socket = io(
      url,
    ))
    socket.on('connect', () => {
      socket.emit('listen', channel);

    });
    socket.on('isScan', (res) => {
      console.log('isScan', res);
      message.success('scaned, Please authorize');
    });
    socket.on('auth result', (res) => {
      console.log('auth result', res);
      message.success('welcome' + JSON.stringify(res));

      const { dispatch } = this.props;
      dispatch({
        type: 'login/login',
        payload: {
          ...res,
        },
      });

      this.disconnectSocket();
    });
    socket.on('expired', () => {
      message.error('expired, please refresh');
      this.disconnectSocket();
    });
    socket.on('sys', (msg) => {
      console.log('sys', msg);
    });
  }

  disconnectSocket() {
    this.socket.emit('leave', 'client');
    if (this.socket) {
      this.socket.close()
      this.socket = null
    }
  }

  fetchQrCode(uuid, action) {
    var url = serverUrl + 'qrcode';
    fetch(
      url, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          uuid: uuid,
          action: action
        })
      }
    ).then(res => res.json())
      .then(
        (result) => {
          if (result.uuid === uuid) {
            this.setState({
              isLoaded: true,
              qrCode: qrCodeUrl + result.qrCodeKey
            });
            this.createConnect(uuid);
          } else {
            console.log('render error', result);
          }
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
          console.log('fetch error', error);
        }
      )
  }
  
  refresh = () => {
    if (this.socket) {
      this.socket.emit('leave', 'client');
    }
    var uuid = uuidv1();
    this.fetchQrCode(uuid, 'login');
  }
  
  render() {
    const { error, isLoaded, qrCode, spin } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className={styles.main} style={{ textAlign: 'center', padding: 24 }}>
          <Card title={formatMessage({ id: 'app.login.scan' })} bordered={false} style={{ width: 300 }} extra={<Button  shape="circle" icon="reload" onClick={this.refresh}/>} >
            <QRCode size={250} value={qrCode} />
          </Card>
        </div>
      );
    }
  }
}

export default LoginPage;
