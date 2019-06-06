import React from 'react';

import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import { Tree, Card, Row, Col, Icon } from 'antd';
import Terminal from 'terminal-in-react';
import styles from './Github.less';

const { DirectoryTree } = Tree;
const { TreeNode } = Tree;
class Competitions extends React.Component {
  state = {
    treeData: [
      { title: 'Expand to load', key: '0' },
      { title: 'Expand to load', key: '1' },
      { title: 'Tree Node', key: '2', isLeaf: true },
    ],
  };

  onLoadData = treeNode =>
    new Promise(resolve => {
      if (treeNode.props.children) {
        resolve();
        return;
      }
      setTimeout(() => {
        treeNode.props.dataRef.children = [
          { title: 'Child Node', key: `${treeNode.props.eventKey}-0` },
          { title: 'Child Node', key: `${treeNode.props.eventKey}-1` },
        ];
        this.setState({
          treeData: [...this.state.treeData],
        });
        resolve();
      }, 1000);
    });

  renderTreeNodes = data =>
    data.map(item => {
      if (item.children) {
        return (
          <TreeNode title={item.title} key={item.key} dataRef={item}>
            {this.renderTreeNodes(item.children)}
          </TreeNode>
        );
      }
      return <TreeNode {...item} dataRef={item} />;
    });

  render() {
    // data

    // component
    const content = (
      <div className={styles.pageHeaderContent}>
        <p>开源资料</p>
        <div className={styles.contentLink}>
          <a href="https://sustcs.github.io/course">
            <Icon type="github" style={{ fontSize: 20 }} /> Github
          </a>
        </div>
      </div>
    );

    const tipContent = (
      <div className={styles.extraImg}>
        <img
          alt="preview"
          src="https://gw.alipayobjects.com/zos/rmsportal/RzwpdLnhmvDJToTdfDPe.png"
        />
      </div>
    );
    // state

    return (
      <PageHeaderWrapper title="开放资源" content={content} extraContent={tipContent}>
        <Card bordered={false}>
          <Row>
            <Col sm={8} xs={24}>
              <div className={styles.headerInfo}>
                <Icon type="eye" style={{ fontSize: 20 }} />
                <p>0</p>
                <em />
              </div>
            </Col>
            <Col sm={8} xs={24}>
              <div className={styles.headerInfo}>
                <Icon type="star" style={{ fontSize: 20 }} />
                <p>0</p>
                <em />
              </div>
            </Col>
            <Col sm={8} xs={24}>
              <div className={styles.headerInfo}>
                <Icon type="fork" style={{ fontSize: 20 }} />
                <p>0</p>
              </div>
            </Col>
          </Row>
        </Card>
        <Row>
          <Col span={12}>
            <Card bordered={false} style={{ marginTop: 20, height: '100vh' }}>
              <DirectoryTree loadData={this.onLoadData}>
                {this.renderTreeNodes(this.state.treeData)}
              </DirectoryTree>
            </Card>
          </Col>
          <Col span={12}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                marginTop: 20,
              }}
            >
              <Terminal
                startState="maximised"
                color="white"
                backgroundColor="black"
                barColor="black"
                style={{ fontSize: '1em' }}
                commands={{}}
                descriptions={{}}
                msg="You can do git here."
              />
            </div>
          </Col>
        </Row>
      </PageHeaderWrapper>
    );
  }
}

export default Competitions;
