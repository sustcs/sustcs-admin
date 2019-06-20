import React, { Component } from 'react';
import { Card } from 'antd';
import { formatMessage } from 'umi-plugin-react/locale';
import styles from './Weapp.less';

class weapp extends Component {
  constructor(props) {
    super(props);
    this.state = { imgUrl: 'https://sustcs-cdn.makergyt.com/weapp-qrcode.png' };
  }

  render() {
    const { imgUrl } = this.state;
    return (
      <div className={styles.main} style={{ textAlign: 'center', padding: 24 }}>
        <Card
          title={formatMessage({ id: 'app.login.weapp' })}
          bordered={false}
          style={{ width: 500 }}
        >
          <img src={imgUrl} alt="weapp-qrcode" width="100%" />
        </Card>
      </div>
    );
  }
}

export default weapp;
