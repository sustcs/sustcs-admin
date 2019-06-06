import React, { Component } from 'react';

import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import { Card, List, Avatar, Button, Skeleton, Switch, Icon } from 'antd';
import moment from 'moment';
import styles from './News.less';

const count = 2;
class App extends Component {
  state = {
    initLoading: true,
    loading: false,
    data: [],
    list: [],
  };

  componentDidMount() {
    this.getData(res => {
      this.setState({
        initLoading: false,
        data: res.results,
        list: res.results,
      });
    });
  }

  getData = callback => {
    const res = {
      results: [
        {
          title: 'male',
          publishAt: new Date().getDate(),
          owner: 'ES',
          stars: 5,
          likes: 4,
          comments: 7,
        },
        {
          title: 'male',
          publishAt: new Date().getDate(),
          owner: 'US',
          stars: 5,
          likes: 4,
          comments: 7,
        },
      ],
    };
    callback(res);
  };

  onLoadMore = () => {
    this.setState({
      loading: true,
      list: this.state.data.concat([...new Array(count)].map(() => ({ loading: true, name: {} }))),
    });
    this.getData(res => {
      const data = this.state.data.concat(res.results);
      this.setState(
        {
          data,
          list: data,
          loading: false,
        },
        () => {
          window.dispatchEvent(new Event('resize'));
        }
      );
    });
  };

  render() {
    // data
    const { initLoading, loading, list } = this.state;
    // component
    const loadMore =
      !initLoading && !loading ? (
        <div
          style={{
            textAlign: 'center',
            marginTop: 12,
            height: 32,
            lineHeight: '32px',
          }}
        >
          <Button onClick={this.onLoadMore}>loading more</Button>
        </div>
      ) : null;
    const ListContent = ({ data: { owner, publishAt, stars, likes, comments } }) => (
      <div className={styles.listContent}>
        <div className={styles.listContentItem}>
          <span>Owner</span>
          <p>{owner}</p>
        </div>
        <div className={styles.listContentItem}>
          <span>发布时间</span>
          <p>{moment(publishAt).format('YYYY-MM-DD HH:mm')}</p>
        </div>
        <div className={styles.listContentItem}>
          <Icon type="star" />
          <p>{stars}</p>
        </div>
        <div className={styles.listContentItem}>
          <Icon type="like" />
          <p>{likes}</p>
        </div>
        <div className={styles.listContentItem}>
          <Icon type="message" />
          <p>{comments}</p>
        </div>
      </div>
    );
    const actions = [
      <Icon type="edit" style={{ marginRight: 8 }} />,
      <Icon type="delete" style={{ marginRight: 8 }} />,
      <Switch checkedChildren="发布" unCheckedChildren="隐藏" defaultChecked />,
    ];
    // state

    return (
      <PageHeaderWrapper title="新闻列表" extra={<Button type="primary">新增</Button>}>
        <Card bordered={false}>
          <List
            className="demo-loadmore-list"
            loading={initLoading}
            itemLayout="horizontal"
            loadMore={loadMore}
            dataSource={list}
            renderItem={item => (
              <List.Item actions={actions}>
                <Skeleton avatar title={false} loading={item.loading} active>
                  <List.Item.Meta
                    avatar={
                      <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                    }
                    title={<a href="https://ant.design">{item.title}</a>}
                    description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                  />
                  <ListContent data={item} />
                </Skeleton>
              </List.Item>
            )}
          />
        </Card>
      </PageHeaderWrapper>
    );
  }
}

export default App;
