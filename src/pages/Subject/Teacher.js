import React from 'react';
import { findDOMNode } from 'react-dom';
import styles from './Teacher.less';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import {
  Card,
  List,
  Icon,
  Tooltip,
  Divider,
  Tag,
  Drawer,
  Empty,
  Comment,
  Menu,
  Dropdown,
  Modal,
  Form,
  Select,
  Input,
  Upload,
  Row,
  Col,
  Statistic,
  Result,
  Button,
} from 'antd';
import moment from 'moment';
import { TagCloud } from '@/components/Charts';

const { Option } = Select;
@Form.create()
class Teacher extends React.Component {
  state = {
    drawerVisible: false,
    modalVisible: false,
    previewVisible: false,
    previewImage: '',
    done: false,
    fileList: [],
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

  /**
   * @event add
   * @type modal
   */
  addModal = () => {
    this.setState({
      modalVisible: true,
    });
  };

  /**
   * @event edit
   * @type modal
   */
  editModal = item => {
    this.props.form.setFieldsValue({});
    this.setState({
      modalVisible: true,
      current: item,
      fileList: [],
    });
  };

  handleDone = () => {
    this.setState({
      done: false,
      modalVisible: false,
    });
  };

  handleCancel = () => {
    this.setState({
      modalVisible: false,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { dispatch, form } = this.props;
    const { current } = this.state;
    const id = current ? current.id : '';

    form.validateFields((err, fieldsValue) => {
      if (err) return;
      this.setState({
        done: true,
      });
      dispatch({
        type: 'list/submit',
        payload: { id, ...fieldsValue },
      });
    });
  };

  // upload
  previewCancel = () => this.setState({ previewVisible: false });

  uploadChange = ({ fileList }) => this.setState({ fileList });

  uploadPreview = file => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    });
  };

  /**
   * @event delete
   */
  deleteItem = id => {
    const { dispatch } = this.props;
    dispatch({
      type: 'list/submit',
      payload: { id },
    });
  };

  render() {
    const list = [
      {
        id: '1',
        name: 'test',
        avatar: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
        openid: '00000001',
        email: 'antdesign@alipay.com',
        title: '讲师',
        group: '基础教研室',
        office: '2B410',
        phone: '18812345678',
        workTime: '8:00-12:00',
        course: [
          {
            id: '0',
            logo: 'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png',
            name: '数据结构',
            href: '#',
          },
          {
            id: '1',
            logo: 'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png',
            name: '计算机网络',
            href: '#',
          },
          {
            id: '2',
            logo: 'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png',
            name: '科学搬砖组',
            href: '#',
          },
        ],
        introduction:
          '<pre><code>{&quot;blocks&quot;:[{&quot;key&quot;:&quot;eekk&quot;,&quot;text&quot;:&quot;sdscscdcssd&quot;,&quot;type&quot;:&quot;unstyled&quot;,&quot;depth&quot;:0,&quot;in</code></pre><p><span style="color:#f39c12">ascsdvsdc测试测试的</span></p><p></p><ul><li><span style="color:#f39c12">爱仕达所多</span></li></ul><ol><li><span style="color:#f39c12">撒大声地</span></li></ol>',
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
        tags: [
          {
            name: '爱仕达',
            value: '15',
            type: '2',
          },
          {
            name: '撒女',
            value: '10',
            type: '2',
          },
          {
            name: '安师大',
            value: '16',
            type: '0',
          },
          {
            name: '爱谁谁',
            value: '19',
            type: '1',
          },
          {
            name: '时代大厦',
            value: '10',
          },
          {
            name: '阿萨德',
            value: '15',
          },
          {
            name: '本公告',
            value: '10',
          },
          {
            name: '爱上的',
            value: '16',
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
        id: '2',
        name: 'debug',
        avatar: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
        userid: '00000001',
        email: 'antdesign@alipay.com',
        title: '教授',
        group: '教授工作室',
        office: '2B410',
        phone: '18812345678',
        workTime: '8:00-12:00',
        course: [
          {
            id: '0',
            logo: 'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png',
            name: '数据结构',
            href: '#',
          },
          {
            id: '1',
            logo: 'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png',
            name: '计算机网络',
            href: '#',
          },
          {
            id: '2',
            logo: 'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png',
            name: '科学搬砖组',
            href: '#',
          },
        ],
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
                  .subtract(1, 'days')
                  .format('YYYY-MM-DD HH:mm:ss')}
              >
                <span>
                  {moment()
                    .subtract(1, 'days')
                    .fromNow()}
                </span>
              </Tooltip>
            ),
          },
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
    ];
    const courses = [
      {
        id: '0',
        name: 'DS',
      },
      {
        id: '1',
        name: 'CN',
      },
      {
        id: '2',
        name: 'CS',
      },
    ];

    const {
      form: { getFieldDecorator },
    } = this.props;
    const {
      current,
      drawerVisible,
      modalVisible,
      done,
      previewVisible,
      previewImage,
      fileList,
    } = this.state;
    // pageHeaderContent
    const content = (
      <div className={styles.pageHeaderContent}>
        <p>用于专业教师介绍,右上角...</p>
        <div className={styles.contentLink}>
          <a
            onClick={this.addModal}
            ref={component => {
              /* eslint-disable */
              this.addBtn = findDOMNode(component);
              /* eslint-enable */
            }}
          >
            <Icon type="plus" /> 新增
          </a>
        </div>
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
    // card
    const itemMenu = item => (
      <Menu>
        <Menu.Item>
          <div
            onClick={e => {
              e.preventDefault();
              this.commentsDrawer(item);
            }}
          >
            <Icon type="message" style={{ marginRight: 8 }} />
            comments
          </div>
        </Menu.Item>
        <Menu.Item>
          <div
            onClick={e => {
              e.preventDefault();
              this.editModal(item);
            }}
          >
            <Icon type="edit" style={{ marginRight: 8 }} />
            edit
          </div>
        </Menu.Item>
        <Menu.Item>
          <div
            onClick={e => {
              e.preventDefault();
              this.deleteItem(item.id);
            }}
          >
            <Icon type="delete" style={{ marginRight: 8 }} />
            delete
          </div>
        </Menu.Item>
      </Menu>
    );

    // Drawer detail

    const getDrawerContent = detail => (
      <div>
        <Card bordered={false}>
          <List
            grid={{ gutter: 16, column: detail.score.length }}
            dataSource={detail.score}
            renderItem={item => (
              <List.Item key={item.id} className={styles.headerInfo}>
                <span>{item.standard}</span>
                <Statistic value={item.id} suffix={item.suffix} />
              </List.Item>
            )}
          />
        </Card>
        <Card bordered={false}>
          {detail.tags === undefined ? <Empty /> : <TagCloud data={detail.tags} height={150} />}
        </Card>
        <Divider />
        <List
          header={`${detail.comments.length} comments`}
          itemLayout="horizontal"
          dataSource={detail.comments}
          split={false}
          renderItem={item => (
            <li>
              <Comment
                author={item.author}
                avatar={item.avatar}
                content={item.detail}
                datetime={item.datetime}
              />
            </li>
          )}
        />
      </div>
    );

    // modal
    const modalFooter = done
      ? { footer: null, onCancel: this.handleDone }
      : { okText: '保存', onOk: this.handleSubmit, onCancel: this.handleCancel };
    const getModalContent = () => (
      <div>
        {done ? (
          {/* <Result
            type="success"
            title="操作成功"
            description="一系列的信息描述，很短同样也可以带标点。"
            actions={
              <Button type="primary" onClick={this.handleDone}>
                知道了
              </Button>
            }
            className={styles.formResult}
          /> */}
        ) : (
          <Form layout="vertical" hideRequiredMark>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item label="Avatar">
                  {getFieldDecorator('avatar', {
                    rules: [{ required: true, message: 'Please upload a photo' }],
                  })(
                    <Upload
                      accept=".jpg, .jpeg, .png"
                      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                      listType="picture-card"
                      fileList={fileList}
                      onPreview={this.uploadPreview}
                      onChange={this.uploadChange}
                    >
                      {fileList.length >= 1 ? null : (
                        <div>
                          <Icon type="plus" />
                          <div className="ant-upload-text">Upload</div>
                        </div>
                      )}
                    </Upload>
                  )}
                  <Modal visible={previewVisible} footer={null} onCancel={this.previewCancel}>
                    <img alt="example" style={{ width: '100%' }} src={previewImage} />
                  </Modal>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="Name">
                  {getFieldDecorator('name', {
                    rules: [{ required: true, message: 'Please enter user name' }],
                  })(<Input placeholder="Please enter user name" />)}
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="Title">
                  {getFieldDecorator('title', {
                    rules: [{ required: true, message: 'Please select a title' }],
                  })(
                    <Select placeholder="Please select a titler">
                      <Option value="assistant">assistant</Option>
                      <Option value="lecturer">lecturer</Option>
                      <Option value="associate professor">associate professor</Option>
                      <Option value="professor">professor</Option>
                    </Select>
                  )}
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item label="Position">
                  {getFieldDecorator('position', {
                    rules: [{ required: true, message: 'Please enter user position' }],
                  })(<Input placeholder="Please enter user position" />)}
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="Office">
                  {getFieldDecorator('office', {
                    rules: [{ required: true, message: 'Please input an office' }],
                  })(<Input placeholder="Please input an office" />)}
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item label="Phone">
                  {getFieldDecorator('phone', {
                    rules: [
                      { required: true, message: 'Please enter user phone' },
                      {
                        pattern: /^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/,
                        message: 'Please enter valid phone',
                      },
                    ],
                  })(<Input placeholder="Please enter user phone" type="number" />)}
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="Email">
                  {getFieldDecorator('email', {
                    rules: [{ required: true, message: 'Please enter user email' }],
                  })(
                    <Input
                      placeholder="Please enter user email"
                      addonAfter={
                        <Select defaultValue="@sust.edu.cn" style={{ width: 150 }}>
                          <Option value="@sust.edu.cn">@sust.edu.cn</Option>
                          <Option value="@qq.com">@qq.com</Option>
                          <Option value="@163.com">@163.com</Option>
                          <Option value="@gmail.com">@gmail.com</Option>
                        </Select>
                      }
                    />
                  )}
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col>
                <Form.Item label="Course">
                  {getFieldDecorator('approver', {
                    rules: [{ required: true, message: 'Please choose the approver' }],
                  })(
                    <Select mode="multiple" style={{ width: '100%' }} placeholder="Please select">
                      {courses.map(item => (
                        <Option key={item.id}>{item.name}</Option>
                      ))}
                    </Select>
                  )}
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={24}>
                <Form.Item label="Description">
                  {getFieldDecorator('description', {
                    rules: [
                      {
                        required: true,
                        message: 'please enter url description',
                      },
                    ],
                  })(<Input.TextArea rows={4} placeholder="please enter url description" />)}
                </Form.Item>
              </Col>
            </Row>
          </Form>
        )}
      </div>
    );
    return (
      <PageHeaderWrapper title="教师列表" content={content} extraContent={extraContent}>
        <div className={styles.cardList}>
          <List
            rowKey="id"
            grid={{ gutter: 24, xl: 4, lg: 3, md: 3, sm: 2, xs: 1 }}
            dataSource={[...list]}
            renderItem={item => (
              <List.Item key={item.id}>
                <Card
                  bordered={false}
                  style={{ marginBottom: 24 }}
                  extra={
                    <Dropdown overlay={itemMenu(item)}>
                      <Icon type="ellipsis" />
                    </Dropdown>
                  }
                >
                  <div>
                    <div className={styles.avatarHolder}>
                      <img alt="" src={item.avatar} />
                      <div className={styles.name}>{item.name}</div>
                    </div>
                    <div className={styles.detail}>
                      <p>
                        <Icon type="sketch" style={{ marginRight: 8 }} />
                        {item.title}
                      </p>
                      <p>
                        <Icon type="apartment" style={{ marginRight: 8 }} />
                        {item.group}
                      </p>
                      <p>
                        <Icon type="home" style={{ marginRight: 8 }} />
                        {item.office}
                      </p>
                      <p>
                        <Icon type="mail" style={{ marginRight: 8 }} />
                        {item.email}
                      </p>
                    </div>
                    <Divider style={{ marginTop: 16 }} dashed />
                    <div className={styles.tags}>
                      <div className={styles.tagsTitle}>主讲</div>
                      {item.course.map(course => (
                        <Tag key={course.id}>{course.name}</Tag>
                      ))}
                    </div>
                  </div>
                </Card>
              </List.Item>
            )}
          />
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
        <Modal
          title={current === undefined ? `Add teacher` : `edit ${current.name}`}
          width={640}
          destroyOnClose
          visible={modalVisible}
          {...modalFooter}
        >
          {getModalContent(current)}
        </Modal>
      </PageHeaderWrapper>
    );
  }
}

export default Teacher;
