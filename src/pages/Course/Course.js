import React from 'react';

import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import {
  Input,
  Button,
  Card,
  Empty,
  List,
  Tooltip,
  Icon,
  Drawer,
  Divider,
  Statistic,
  Comment,
} from 'antd';
import Ellipsis from '@/components/Ellipsis';
import moment from 'moment';
import styles from './Course.less';

class Course extends React.Component {
  state = {
    currentTab: 'all',
    drawerVisible: false,
  };

  /**
   * @event comments
   * @type drawer
   */
  commentsDrawer = item => {
    this.setState({
      drawerVisible: true,
      current: item,
    });
  };

  onClose = () => {
    this.setState({
      drawerVisible: false,
    });
  };

  handleTabChange = key => {
    this.setState({
      currentTab: key,
    });
  };

  render() {
    // data
    const tabList = [
      {
        key: 'all',
        tab: '所有',
      },
      {
        key: 'general',
        tab: '通识教育课',
      },
      {
        key: 'basis',
        tab: '学科基础课',
      },
      {
        key: 'proBasis',
        tab: '专业基础课',
      },
      {
        key: 'professional',
        tab: '专业课',
      },
      {
        key: 'inPractice',
        tab: '课内实践',
      },
      {
        key: 'outPractice',
        tab: '课外实践',
      },
    ];
    const list = [
      {
        id: 0,
        name: 'Course orientation',
        cover: 'https://gw.alipayobjects.com/zos/rmsportal/uMfMFlvUuceEyPpotzlq.png',
        description: `<p style="text-align:center;">sdscscdcs</p>`,
        createdAt: new Date().getTime(),
        required: true,
        score: [
          {
            id: '0',
            standard: 'standard1',
            value: '80',
            suffix: '/ 100',
          },
          {
            id: '1',
            standard: 'standard2',
            value: '80',
            suffix: '/ 100',
          },
          {
            id: '2',
            standard: 'standard3',
            value: '80',
            suffix: '/ 100',
          },
        ],

        comments: [
          {
            actions: [<span>Reply to</span>],
            author: 'Han Solo',
            avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            content: (
              <p>
                We supply a series of design principles, practical patterns and high quality design
                resources (Sketch and Axure), to help people create their product prototypes
                beautifully and efficiently.
              </p>
            ),
            datetime: (
              <Tooltip
                title={moment()
                  .subtract(2, 'days')
                  .format('YYYY-MM-DD HH:mm:ss')}
              >
                <span>
                  {moment()
                    .subtract(2, 'days')
                    .fromNow()}
                </span>
              </Tooltip>
            ),
          },
        ],
      },
      {
        id: 1,
        name: 'The teaching goal',
        cover: 'https://gw.alipayobjects.com/zos/rmsportal/iZBVOIhGJiAnhplqjvZW.png',
        description: `<pre><code>{&quot;blocks&quot;:[{&quot;key&quot;:&quot;eekk&quot;,&quot;text&quot;:&quot;sdscscdcssd&quot;,&quot;type&quot;:&quot;unstyled&quot;,&quot;depth&quot;:0,&quot;in</code></pre><p><span style="color:#f39c12">ascsdvsdc测试测试的</span></p><p></p><ul><li><span style="color:#f39c12">爱仕达所多</span></li></ul><ol><li><span style="color:#f39c12">撒大声地</span></li></ol>`,
        createdAt: new Date().getTime(),
        required: true,
        score: [
          {
            id: '0',
            standard: 'standard1',
            value: '80',
            suffix: '/ 100',
          },
          {
            id: '1',
            standard: 'standard2',
            value: '80',
            suffix: '/ 100',
          },
          {
            id: '2',
            standard: 'standard3',
            value: '80',
            suffix: '/ 100',
          },
        ],

        comments: [
          {
            actions: [<span>Reply to</span>],
            author: 'Han Solo',
            avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            content: (
              <p>
                We supply a series of design principles, practical patterns and high quality design
                resources (Sketch and Axure), to help people create their product prototypes
                beautifully and efficiently.
              </p>
            ),
            datetime: (
              <Tooltip
                title={moment()
                  .subtract(2, 'days')
                  .format('YYYY-MM-DD HH:mm:ss')}
              >
                <span>
                  {moment()
                    .subtract(2, 'days')
                    .fromNow()}
                </span>
              </Tooltip>
            ),
          },
        ],
      },
      {
        id: 2,
        name: 'The teaching goal',
        cover: 'https://gw.alipayobjects.com/zos/rmsportal/iXjVmWVHbCJAyqvDxdtx.png',
        description: '',
        createdAt: new Date().getTime(),
        required: false,
      },
      {
        id: 3,
        name: 'The teaching goal',
        cover: 'https://gw.alipayobjects.com/zos/rmsportal/gLaIAoVWTtLbBWZNYEMg.png',
        description: '',
        createdAt: new Date().getTime(),
        required: true,
      },
      {
        id: 4,
        name: 'The teaching goal',
        cover: 'https://gw.alipayobjects.com/zos/rmsportal/gLaIAoVWTtLbBWZNYEMg.png',
        description: '',
        createdAt: new Date().getTime(),
        required: true,
      },
      {
        id: 5,
        name: 'The teaching goal',
        cover: 'https://gw.alipayobjects.com/zos/rmsportal/gLaIAoVWTtLbBWZNYEMg.png',
        description: '',
        createdAt: new Date().getTime(),
        required: true,
      },
      {
        id: 6,
        name: 'The teaching goal',
        cover: 'https://gw.alipayobjects.com/zos/rmsportal/gLaIAoVWTtLbBWZNYEMg.png',
        description: 'this is the teaching goal',
        createdAt: new Date().getTime(),
        required: false,
      },
    ];
    // component
    const mainSearch = (
      <div style={{ textAlign: 'center' }}>
        <Input.Search
          placeholder="请输入"
          enterButton="搜索"
          size="large"
          onSearch={this.handleFormSubmit}
          style={{ maxWidth: 522, width: '100%' }}
        />
          <Button type="primary" size="large" style={{ marginLeft: 20 }}>
            新建
          </Button>
      </div>
    );
    const MyIcon = Icon.createFromIconfontCN({
      scriptUrl: '//at.alicdn.com/t/font_1132945_4ebx3dispbn.js',
    });
    // Drawer detail

    const getDrawerContent = content => (
      <div>
        <Card bordered={false}>
          <List
            grid={{ gutter: 16, column: content.score.length }}
            dataSource={content.score}
            renderItem={item => (
              <List.Item key={item.id} className={styles.headerInfo}>
                <span>{item.standard}</span>
                <Statistic value={item.id} suffix={item.suffix} />
              </List.Item>
            )}
          />
        </Card>
        <Divider />
        <List
          header={`${content.comments.length} comments`}
          itemLayout="horizontal"
          dataSource={content.comments}
          split={false}
          renderItem={item => (
            <li>
              <Comment
                author={item.author}
                avatar={item.avatar}
                content={item.content}
                datetime={item.datetime}
              />
            </li>
          )}
        />
      </div>
    );
    // state
    const { current, drawerVisible, currentTab } = this.state;
    return (
      <PageHeaderWrapper
        title="课程列表"
        content={mainSearch}
        extra={
          <Button type="dashed">
            <Icon type="setting" />
            setting
          </Button>
        }
        tabList={tabList}
        tabActiveKey={currentTab}
        onTabChange={this.handleTabChange}
      >
        <div className={styles.coverCardList}>
          <div className={styles.cardList}>
            {list.length !== 0 ? (
              <List
                rowKey="id"
                grid={{ gutter: 24, xl: 4, lg: 3, md: 3, sm: 2, xs: 1 }}
                dataSource={list}
                renderItem={item => (
                  <List.Item>
                    <Card
                      className={styles.card}
                      hoverable
                      cover={<img alt={item.name} src={item.cover} />}
                      actions={[
                        <Tooltip title="编辑">
                          <Icon type="edit" />
                        </Tooltip>,
                        <Tooltip title="删除">
                          <Icon type="delete" />
                        </Tooltip>,
                        <Tooltip title="github">
                          <Icon type="github" />
                        </Tooltip>,
                        <Tooltip title="评论">
                          <Icon
                            type="message"
                            onClick={e => {
                              e.preventDefault();
                              this.commentsDrawer(item);
                            }}
                          />
                        </Tooltip>,
                      ]}
                    >
                      <Card.Meta
                        avatar={
                          <MyIcon
                            type={item.required ? 'my-icon-bizuo' : 'my-icon-xuan'}
                            style={{ fontSize: 30 }}
                          />
                        }
                        title={<a>{item.name}</a>}
                        description={<Ellipsis lines={1}>{item.description}</Ellipsis>}
                      />
                    </Card>
                  </List.Item>
                )}
              />
            ) : (
              <Empty />
            )}
          </div>
        </div>
        <Drawer
          width={640}
          placement="right"
          closable={false}
          onClose={this.onClose}
          visible={drawerVisible}
          title={current !== undefined ? current.name : ''}
        >
          {current !== undefined ? getDrawerContent(current) : ''}
        </Drawer>
      </PageHeaderWrapper>
    );
  }
}

export default Course;
