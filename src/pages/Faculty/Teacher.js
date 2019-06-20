import React ,{Component}from 'react';
import { connect } from 'dva';
import { findDOMNode } from 'react-dom';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import {
  Card,
  List,
  Icon,
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
  Popconfirm,
  Button,
} from 'antd';
const { Option } = Select;

import { TagCloud } from '@/components/Charts';
import { getBase64 } from '@/utils/utils';
import oss from 'ali-oss';
import moment from 'moment';
import styles from './Teacher.less';

const client = (self) => {
  const {token} = self.state
  return new oss({
    accessKeyId: token.access_key_id,
    accessKeySecret: token.access_key_secret,
    region: 'oss-cn-shenzhen', //
    bucket: 'makergyt',//
  });
}

const uploadPath = (path, file) => {
  // 上传文件的路径，使用日期命名文件目录
  return `${moment().format('YYYYMMDD')}/${file.name.split(".")[0]}-${file.uid}.${file.type.split("/")[1]}`
}
const UploadToOss = (self, path, file) => {
  const url = uploadPath(path, file)
  return new Promise((resolve, reject) => {
    client(self).multipartUpload(url, file).then(data => {
      resolve(data);
    }).catch(error => {
      reject(error)
    })
  })
}

@Form.create()
class OperationModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      previewVisible: false,
      previewImage: '',
      fileList: [],
      loading: false,
      token: {
        access_key_id: 'LTAIOPVY4aC4WyRy', // oss的key_id
        access_key_secret: 'HxHPdelYOr6FCfrErhjLF21IoOiNpl', // oss的secret
        OSS_ENDPOINT: 'oss-cn-shenzhen.aliyuncs.com',  // 自己oss服务器的配置信息
        OSS_BUCKET: 'alicdn.makergyt.com', // 自己oss服务器的配置信息
      }
    };
  }

  showModalHandler = e => {
    
    if (e) e.stopPropagation();
   
    this.setState({
      visible: true,
    });
  };

  hideModelHandler = () => {
    this.setState({
      visible: false,
    });
  };

  okHandler = () => {
    const { onOk, form } = this.props;
    form.validateFields((err, values) => {
      if (!err) {
        onOk(values);
        this.hideModelHandler();
      }
    });
  };

  handleChange = (info) => {
    if (info.file.status === 'uploading') {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, imageUrl => this.setState({
        imageUrl,
        loading: false,
      }));
    }
  }
  beforeUpload = (file) => {
    const isJPG = file.type === 'image/jpeg';
    if (!isJPG) {
      message.error('You can only upload JPG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      // 使用ossupload覆盖默认的上传方法
      UploadToOss(this, '/', file).then(data => {
        this.setState({ imageUrl: `https://alicdn.makergyt.com/${data.name}` });
      })
    }
    return false; // 不调用默认的上传方法
  }

  previewCancel = () => this.setState({ previewVisible: false });

  uploadPreview = file => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    });
  };

  render() {
    const { children, form, record } = this.props;
    const { getFieldDecorator } = form;
    const { title, description, credit_required, credit_elective } = record;
    const { visible, fileList, previewVisible, previewImage, imageUrl } = this.state;
    return (
      <span>
        <span onClick={this.showModalHandler}>{children}</span>
        <Modal
          title="Edit teacher"
          visible={visible}
          onOk={this.okHandler}
          onCancel={this.hideModelHandler}
          width={480}
        >
          <Form layout="vertical" hideRequiredMark onSubmit={this.okHandler}>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item label="Avatar">
                  {getFieldDecorator('avatar', {
                    rules: [{ required: false, message: 'Please upload a photo' }],
                  })(
                    <Upload
                      name="avatar"
                      listType="picture-card"
                      className="avatar-uploader"
                      showUploadList={false}
                      beforeUpload={this.beforeUpload}
                      onChange={this.handleChange}
                      fileList={fileList}
                      onPreview={this.uploadPreview}
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
                  {getFieldDecorator('course', {
                    rules: [{ required: true, message: 'Please enter the course' }],
                  })(
                    // <Select mode="multiple" style={{ width: '100%' }} placeholder="Please select">
                    //   {courses.map(item => (
                    //     <Option key={item.id}>{item.name}</Option>
                    //   ))}
                    // </Select>
                    <Input placeholder="Please enter course separated by commas " />
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
        </Modal>
      </span>
    );
  }
}

@connect(({ teacher, loading }) => ({
  teacher,
  loading: loading.models.teacher,
}))
class Teacher extends React.Component {
  state = {
    drawerVisible: false,
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'teacher/fetch',
    });
  }

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

  deleteHandler = (text, record) => {
    const { dispatch } = this.props;
    const params = {
      id: record.id,
    };
    new Promise(resolve => {
      dispatch({
        type: 'structure/delete',
        payload: {
          resolve,
          params,
        },
      });
    }).then(res => {
      if (res === 'OK') {
        notification.success({
          message: `Delete ${text.title} success`,
        });
      } else {
        notification.error({
          message: res,
        });
      }
    });
  };

  createHandler = values => {
    const { dispatch } = this.props;
    const params = values;
    new Promise(resolve => {
      dispatch({
        type: 'structure/create',
        payload: {
          resolve,
          params,
        },
      });
    }).then(res => {
      if (res !== undefined) {
        notification.success({
          message: `create ${values.title} success`,
        });
      }
    });
  };

  editHandler(id, values) {
    const { dispatch } = this.props;
    const params = {
      id,
      values,
    };
    new Promise(resolve => {
      dispatch({
        type: 'structure/update',
        payload: {
          resolve,
          params,
        },
      });
    }).then(res => {
      if (res === '') {
        notification.success({
          message: `edit ${values.title} success`,
        });
      }
    });
  }

  

  render() {
    const {
      teacher: { list },
      loading,
    } = this.props;
    const {
      drawerVisible,
      current
    } = this.state;
    // pageHeaderContent
    const content = (
      <div className={styles.pageHeaderContent}>
        <p>用于专业教师介绍,右上角...</p>
        <div className={styles.contentLink}>
          <OperationModal record={{}} onOk={this.createHandler}>
          　<a>
              <Icon type="plus" /> 新增
            </a>
          </OperationModal>
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
          <OperationModal record={record} onOk={this.editHandler.bind(null, record.id)}>
            <Icon type="edit" style={{ marginRight: 8 }} />
              edit
          </OperationModal>
        </Menu.Item>
        <Menu.Item>
          <Popconfirm
            title="Sure to delete?"
            onConfirm={() => this.deleteHandler(text, record)}
          >
            <a>Delete</a>
          </Popconfirm>
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

    return (
      <PageHeaderWrapper title="教师列表" content={content} extraContent={extraContent}>
        <div className={styles.cardList}>
          <List
            rowKey="id"
            grid={{ gutter: 24, xl: 4, lg: 3, md: 3, sm: 2, xs: 1 }}
            dataSource={list}
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
                        {item.position}
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
      </PageHeaderWrapper>
    );
  }
}

export default Teacher;
