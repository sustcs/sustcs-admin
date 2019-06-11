import React, { PureComponent } from 'react';
import { findDOMNode } from 'react-dom';
import { connect } from 'dva';
import moment from 'moment';
import {
  Card,
  Button,
  Icon,
  List,
  Avatar,
  Tooltip,
  Switch,
  Modal,
  Drawer,
  Form,
  Col,
  Row,
  Input,
} from 'antd';

import Ellipsis from '@/components/Ellipsis';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import Result from '@/components/Result';

import BraftEditor from 'braft-editor';
import 'braft-editor/dist/index.css';

import styles from './SubjectColumn.less';

@connect(({ subject, loading }) => ({
  subject,
  loading: loading.models.subject,
}))
@Form.create()
class CardList extends PureComponent {
  state = {
    visible: false,
    done: false,
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'subject/fetch',
      payload: {
        count: '',
      },
    });
  }

  editDrawer = item => {
    const { form } = this.props;
    form.setFieldsValue({
      title: item.title,
      enable: item.enable === 1,
      description: BraftEditor.createEditorState(item.description),
    });
    this.setState({
      visible: true,
      current: item,
    });
  };

  createDrawer = () => {
    const { form } = this.props;
    form.setFieldsValue({
      title: '',
      enable: true,
      description: BraftEditor.createEditorState(null),
    });
    this.setState({
      visible: true,
      current: undefined,
    });
  };

  deleteSubmit = id => {
    const { dispatch } = this.props;
    dispatch({
      type: 'subject/submit',
      payload: { id },
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { dispatch, form } = this.props;
    const { current } = this.state;
    const id = current ? current.id : '';
    form.validateFields((err, fieldsValue) => {
      if (!err) {
        this.setState({
          done: true,
        });
        const submitData = {
          title: fieldsValue.title,
          description: fieldsValue.description.toHTML(),
          enable: fieldsValue.enable,
        };
        dispatch({
          type: 'subject/submit',
          payload: { id, ...submitData },
        });
      }
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
      done: false,
      current: undefined,
    });
  };

  render() {
    const { form, subject, loading } = this.props;
    const { list } = subject;
    const { getFieldDecorator } = form;
    const { done, current = {}, visible } = this.state;
    const content = (
      <div className={styles.pageHeaderContent}>
        <p>用于专业简介栏目</p>
      </div>
    );

    const extraContent = (
      <div className={styles.extraImg}>
        <img
          alt="preview"
          src="https://gw.alipayobjects.com/zos/rmsportal/RzwpdLnhmvDJToTdfDPe.png"
        />
      </div>
    );
    const deleteColumn = item => {
      Modal.confirm({
        title: '删除栏目',
        content: '确定删除该栏目吗？',
        okText: '确认',
        cancelText: '取消',
        onOk: () => this.deleteSubmit(item.id),
      });
    };

    const getDrawerContent = () => {
      if (done) {
        return (
          <Result
            type="success"
            title="操作成功"
            description="一系列的信息描述，很短同样也可以带标点。"
            actions={
              <Button type="primary" onClick={this.onClose}>
                知道了
              </Button>
            }
            className={styles.formResult}
          />
        );
      }
      return (
        <div>
          <Form layout="vertical" hideRequiredMark onSubmit={this.handleSubmit}>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item label="Title">
                  {getFieldDecorator('title', {
                    rules: [{ required: true, message: 'Please enter column title' }],
                  })(<Input placeholder="Please enter column title" />)}
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="Enable">
                  {getFieldDecorator('enable', {
                    valuePropName: 'checked',
                  })(<Switch />)}
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={24}>
                <Form.Item label="Description">
                  {getFieldDecorator('description', {
                    validateTrigger: 'onBlur',
                    rules: [
                      {
                        required: true,
                        validator: (_, value, callback) => {
                          if (value.isEmpty()) {
                            callback('please enter column description');
                          } else {
                            callback();
                          }
                        },
                      },
                    ],
                  })(<BraftEditor placeholder="please enter column description" />)}
                </Form.Item>
              </Col>
            </Row>
            <div
              style={{
                position: 'absolute',
                left: 0,
                bottom: 0,
                width: '100%',
                borderTop: '1px solid #e9e9e9',
                padding: '10px 16px',
                background: '#fff',
                textAlign: 'right',
              }}
            >
              <Form.Item>
                <Button type="primary" htmlType="submit" block>
                  Submit
                </Button>
              </Form.Item>
            </div>
          </Form>
        </div>
      );
    };

    return (
      <PageHeaderWrapper title="栏目列表" content={content} extraContent={extraContent}>
        <div className={styles.cardList}>
          <List
            rowKey="id"
            loading={loading}
            grid={{ gutter: 24, xl: 4, lg: 3, md: 3, sm: 2, xs: 1 }}
            dataSource={['', ...list]}
            renderItem={item =>
              item ? (
                <List.Item key={item.id}>
                  <Card
                    hoverable
                    className={styles.card}
                    actions={[
                      <Tooltip title="编辑">
                        <Icon
                          type="edit"
                          onClick={e => {
                            e.preventDefault();
                            this.editDrawer(item);
                          }}
                        />
                      </Tooltip>,
                      <Tooltip title="删除">
                        <Icon type="delete" onClick={() => deleteColumn(item)} />
                      </Tooltip>,
                      <Tooltip title={`创建于${moment(item.createdAt).format('YYYY-MM-DD HH:mm')}`}>
                        <Switch
                          checkedChildren="启用"
                          unCheckedChildren="下线"
                          defaultChecked={item.enable === 1}
                        />
                        ,
                      </Tooltip>,
                    ]}
                  >
                    <Card.Meta
                      avatar={
                        <Avatar
                          size="small"
                          src="http://www.sust.edu.cn/_mediafile/sust2018/2015/08/06/3lwd2p0kr1.jpg"
                        />
                      }
                      title={<a>{item.title}</a>}
                      description={
                        <Ellipsis className={styles.item} lines={3}>
                          {item.description}
                        </Ellipsis>
                      }
                    />
                  </Card>
                </List.Item>
              ) : (
                <List.Item>
                  <Button
                    type="dashed"
                    className={styles.newButton}
                    onClick={this.createDrawer}
                    ref={component => {
                      /* eslint-disable */
                      this.addBtn = findDOMNode(component);
                      /* eslint-enable */
                    }}
                  >
                    <Icon type="plus" /> 新建栏目
                  </Button>
                </List.Item>
              )
            }
          />
        </div>
        <Drawer
          title={done ? null : `${current.id === undefined ? 'Create' : 'Edit'} a column`}
          width={720}
          onClose={this.onClose}
          visible={visible}
        >
          {getDrawerContent()}
        </Drawer>
      </PageHeaderWrapper>
    );
  }
}

export default CardList;
