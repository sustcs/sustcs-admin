import React, { PureComponent } from 'react';

import { Row, Col, Avatar, List, Drawer } from 'antd';

class FilterCardList extends PureComponent {
  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    const { visible } = this.state;
    const DescriptionItem = ({ title, content }) => (
      <div
        style={{
          fontSize: 14,
          lineHeight: '22px',
          marginBottom: 7,
          color: 'rgba(0,0,0,0.65)',
        }}
      >
        <p
          style={{
            marginRight: 8,
            display: 'inline-block',
            color: 'rgba(0,0,0,0.85)',
          }}
        >
          {title}:
        </p>
        {content}
      </div>
    );
    return (
      <div>
        <List
          dataSource={[
            {
              name: 'Lily',
            },
            {
              name: 'Lily',
            },
          ]}
          bordered
          renderItem={item => (
            <List.Item key={item.id} actions={[<a onClick={this.showDrawer}>View Profile</a>]}>
              <List.Item.Meta
                avatar={
                  <Avatar src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png" />
                }
                title={<a href="https://ant.design/index-cn">{item.name}</a>}
                description="Progresser AFX"
              />
            </List.Item>
          )}
        />
        <Drawer
          width={560}
          title="ad"
          placement="right"
          closable={false}
          onClose={this.onClose}
          visible={visible}
        >
          <Row>
            <Col span={12}>
              <DescriptionItem title="Full Name" content="Lily" />{' '}
            </Col>
            <Col span={12}>
              <DescriptionItem title="Account" content="AntDesign@example.com" />
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <DescriptionItem title="City" content="HangZhou" />
            </Col>
            <Col span={12}>
              <DescriptionItem title="Country" content="China🇨🇳" />
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <DescriptionItem title="Birthday" content="February 2,1900" />
            </Col>
            <Col span={12}>
              <DescriptionItem title="Website" content="-" />
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <DescriptionItem
                title="Message"
                content="Make things as simple as possible but no simpler."
              />
            </Col>
          </Row>
        </Drawer>
      </div>
    );
  }
}

export default FilterCardList;
