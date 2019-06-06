import React from 'react';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import {
  List,
  Avatar,
  Icon,
  Card,
  Button,
  Drawer,
  Tooltip,
  Row,
  Col,
  Divider,
  Timeline,
  Comment,
  Modal,
  Form,
  Upload,
  Input,
  Select,
  Result,
} from 'antd';

import moment from 'moment';
import Ellipsis from '@/components/Ellipsis';
import BraftEditor from 'braft-editor';
import TableForm from './TableForm';
import 'braft-editor/dist/index.css';
import styles from './Competitions.less';

const { Option } = Select;
const { TextArea } = Input;
@Form.create()
class Competitions extends React.Component {
  state = {
    teamVisible: false,
    memberVisible: false,
    modalVisible: false,
    previewVisible: false,
    previewImage: '',
    done: false,
    fileList: [],
  };

  showTeam = competition => {
    this.setState({
      teamVisible: true,
      current: competition,
    });
  };

  closeTeam = () => {
    this.setState({
      teamVisible: false,
    });
  };

  showMember = team => {
    this.setState({
      memberVisible: true,
      currentTeam: team,
    });
  };

  closeMember = () => {
    this.setState({
      memberVisible: false,
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
    // data
    const {
      form: { getFieldDecorator },
    } = this.props;
    const {
      teamVisible,
      memberVisible,
      current,
      currentTeam,
      modalVisible,
      done,
      previewVisible,
      previewImage,
      fileList,
    } = this.state;
    const listData = [];
    for (let i = 0; i < 5; i++) {
      listData.push({
        href: 'http://ant.design',
        title: `ant design part ${i}`,
        poster: 'http://www.appcontest.net/2019/images/ReviewImg04.png',
        description:
          'Ant Design, a design language for background applications, is refined by Ant UED Team.Ant Design, a design language for background applications, is refined by Ant UED Team.Ant Design, a design language for background applications, is refined by Ant UED Team.',
        createdAt: new Date().getDate(),
        type: 'city',
        githubUrl: '',
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
        team: [
          {
            id: '007',
            member: [
              {
                id: '0071',
                username: 'Jack',
                name: '张三',
                grade: '2015',
                major: '艺术',
                phone: '18888888888',
                email: 'admin@qq.com',
                avatar: 'https://img.xiaopiu.com/userImages/img9156799f8280.png',
                experience: [
                  {
                    title: '微信小程序应用开发赛',
                    time: '2018-5-25',
                    role: 'captain',
                  },
                  {
                    title: '网络技术挑战赛',
                    time: '2018-3-25',
                    role: 'member',
                  },
                ],
                state: {
                  action: 'start',
                  team: 'San Antonio Spurs',
                  competition: {
                    title: '微信小程序应用开发赛',
                    description: '2019 -- 中国高校计算机大赛',
                    poster:
                      'https://res.wx.qq.com/community/dist/images/home_img_miniprogarmdevelopmentguides_2x_22399a.png',
                    url: 'detail',
                  },
                  time: '2018-5-25',
                },
              },
              {
                id: '0072',
                username: 'Mike',
                name: '李四',
                grade: '2016',
                major: '计算机科学与技术',
                avatar: 'https://img.xiaopiu.com/userImages/img9156799f8280.png',
                phone: '18888848888',
                email: 'admin@163.com',
                experience: [
                  {
                    title: '微信小程序应用开发赛',
                    time: '2018-5-25',
                    role: 'captain',
                  },
                  {
                    title: '网络技术挑战赛',
                    time: '2018-3-25',
                    role: 'member',
                  },
                ],
                state: {
                  action: 'start',
                  team: 'San Antonio Spurs',
                  competition: {
                    title: '微信小程序应用开发赛',
                    description: '2019 -- 中国高校计算机大赛',
                    poster:
                      'https://res.wx.qq.com/community/dist/images/home_img_miniprogarmdevelopmentguides_2x_22399a.png',
                    url: 'detail',
                  },
                  time: '2018-5-25',
                },
              },
            ],
            title: 'test',
          },
          {
            id: '008',
            member: ['Jack', 'John', 'Mike'],
            title: 'test2',
            member: [
              {
                id: '0071',
                username: 'Jack',
                avatar: 'https://img.xiaopiu.com/userImages/img9156799f8280.png',
                experience: [
                  {
                    title: '微信小程序应用开发赛',
                    time: '2018-5-25',
                    role: 'captain',
                  },
                  {
                    title: '网络技术挑战赛',
                    time: '2018-3-25',
                    role: 'member',
                  },
                ],
                state: {
                  action: 'start',
                  team: 'San Antonio Spurs',
                  competition: {
                    title: '微信小程序应用开发赛',
                    description: '2019 -- 中国高校计算机大赛',
                    poster:
                      'https://res.wx.qq.com/community/dist/images/home_img_miniprogarmdevelopmentguides_2x_22399a.png',
                    url: 'detail',
                  },
                  time: '2018-5-25',
                },
              },
            ],
          },
        ],
      });
    }
    const avatar = {
      national: {
        color: '#f56a00',
        title: '国',
      },
      region: {
        color: '#7265e6',
        title: '区',
      },
      province: {
        color: '#ffbf00',
        title: '省',
      },
      city: {
        color: '#00a2ae',
        title: '市',
      },
      school: {
        color: '#7265e6',
        title: '校',
      },
      college: {
        color: '#7265e6',
        title: '院',
      },
    };
    const download = num => (
      <div>
        {num} teams{' '}
        <Tooltip title="下载报名汇总表">
          <Icon type="download" style={{ fontSize: 20, marginLeft: 10 }} />
        </Tooltip>
      </div>
    );
    // component
    const getTeam = content => (
      <div className={styles.filterCardList}>
        <List
          header={download(content.team.length)}
          rowKey="id"
          grid={{ gutter: 16, column: 2 }}
          dataSource={content.team}
          renderItem={item => (
            <List.Item key={item.id}>
              <Card
                hoverable
                bodyStyle={{ paddingBottom: 20 }}
                actions={[
                  <Tooltip title="下载">
                    <Icon type="download" />
                  </Tooltip>,
                  <Tooltip title="成员">
                    <Icon
                      type="user"
                      onClick={e => {
                        e.preventDefault();
                        this.showMember(item);
                      }}
                    />
                  </Tooltip>,
                ]}
              >
                <Card.Meta
                  avatar={<Avatar size="small" src={item.member[0].avatar} />}
                  title={item.title}
                />
                <div className={styles.cardItemContent}>
                  <div className={styles.cardInfo}>
                    <div>
                      <p>组队ID</p>
                      <p>{item.id}</p>
                    </div>
                    <div>
                      <p>队员数</p>
                      <p>{item.member.length}</p>
                    </div>
                  </div>
                </div>
              </Card>
            </List.Item>
          )}
        />
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
    const DescriptionItem = ({ title, content }) => (
      <div
        style={{
          fontSize: 14,
          lineHeight: '22px',
          marginBottom: 4,
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
    const getMember = content => (
      <div>
        <List
          rowKey="id"
          grid={{ gutter: 16, column: 1 }}
          dataSource={content}
          renderItem={item => (
            <List.Item key={item.id}>
              <Row>
                <Col span={12}>
                  <DescriptionItem title="Name" content={item.name} />{' '}
                </Col>
                <Col span={12}>
                  <DescriptionItem title="ID" content={item.id} />
                </Col>
              </Row>
              <Row>
                <Col span={12}>
                  <DescriptionItem title="Grade" content={item.grade} />
                </Col>
                <Col span={12}>
                  <DescriptionItem title="Major" content={item.major} />
                </Col>
              </Row>
              <Row>
                <Col span={12}>
                  <DescriptionItem title="Phone" content={item.phone} />
                </Col>
                <Col span={12}>
                  <DescriptionItem title="Email" content={item.email} />
                </Col>
              </Row>
              <Row>
                <Col>
                  <DescriptionItem title="Experience" />
                  <Timeline>
                    {item.experience.map(competition => (
                      <Timeline.Item>
                        {competition.time}【{competition.title}】{competition.role}
                      </Timeline.Item>
                    ))}
                  </Timeline>
                  <Divider />
                </Col>
              </Row>
            </List.Item>
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
                <Form.Item label="Poster">
                  {getFieldDecorator('poster', {
                    rules: [{ required: true, message: 'Please upload a poster' }],
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
                <Form.Item label="Title">
                  {getFieldDecorator('title', {
                    rules: [{ required: true, message: 'Please enter title' }],
                  })(<Input placeholder="Please enter competition title" />)}
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="Type">
                  {getFieldDecorator('type', {
                    rules: [{ required: true, message: 'Please select a type' }],
                  })(
                    <Select placeholder="Please select a type">
                      <Option value="national">national</Option>
                      <Option value="region">region</Option>
                      <Option value="province">province</Option>
                      <Option value="city">city</Option>
                      <Option value="school">school</Option>
                      <Option value="college">college</Option>
                    </Select>
                  )}
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col>
                <Form.Item label="Description">
                  {getFieldDecorator('description', {
                    rules: [{ required: true, message: 'Please enter description' }],
                  })(<TextArea rows={3} />)}
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col>
                <Form.Item label="Schedule">
                  {getFieldDecorator('schedule', {
                    initialValue: [
                      {
                        key: '1',
                        scheduleType: '初赛',
                        scheduleState: '',
                        scheduleTime: '',
                      },
                    ],
                  })(<TableForm />)}
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col>
                <Form.Item label="Introduction">
                  {getFieldDecorator('introduction', {
                    validateTrigger: 'onBlur',
                    rules: [
                      {
                        required: true,
                        validator: (_, value, callback) => {
                          if (value.isEmpty()) {
                            callback('please enter column introduction');
                          } else {
                            callback();
                          }
                        },
                      },
                    ],
                  })(<BraftEditor placeholder="please enter column introduction" />)}
                </Form.Item>
              </Col>
            </Row>
          </Form>
        )}
      </div>
    );
    // state

    return (
      <PageHeaderWrapper
        title="竞赛"
        extra={
          <Button type="primary" onClick={this.addModal}>
            新增
          </Button>
        }
      >
        <Card bordered={false}>
          <List
            itemLayout="vertical"
            size="large"
            pagination={{
              onChange: () => {},
              pageSize: 3,
            }}
            dataSource={listData}
            renderItem={item => (
              <List.Item
                key={item.title}
                actions={[
                  <Icon
                    type="edit"
                    onClick={e => {
                      e.preventDefault();
                      this.editModal(item);
                    }}
                  />,
                  <Icon
                    type="delete"
                    onClick={e => {
                      e.preventDefault();
                      {
                        /* this.deleteItem(item.id); */
                      }
                    }}
                  />,
                  <a href={item.githubUrl}>
                    <Icon type="github" />
                  </a>,
                  <Icon
                    type="team"
                    onClick={e => {
                      e.preventDefault();
                      this.showTeam(item);
                    }}
                  />,
                ]}
                extra={<img width={200} alt="poster" src={item.poster} />}
              >
                <List.Item.Meta
                  avatar={
                    <Avatar
                      style={{ backgroundColor: avatar[item.type].color, verticalAlign: 'middle' }}
                      size="large"
                    >
                      {avatar[item.type].title}
                    </Avatar>
                  }
                  title={<a href={item.href}>{item.title}</a>}
                  description={`发布于${moment(item.createdAt).format('YYYY-MM-DD HH:mm')}`}
                />
                <Ellipsis className={styles.item} lines={1}>
                  {item.description}
                </Ellipsis>
              </List.Item>
            )}
          />
        </Card>
        <Drawer
          width={640}
          placement="right"
          onClose={this.closeTeam}
          visible={teamVisible}
          title={current !== undefined ? current.title : ''}
        >
          {current !== undefined ? getTeam(current) : ''}
          <Drawer
            title={currentTeam !== undefined ? currentTeam.title : ''}
            width={560}
            closable={false}
            onClose={this.closeMember}
            visible={memberVisible}
          >
            {currentTeam !== undefined ? getMember(currentTeam.member) : ''}
          </Drawer>
        </Drawer>
        <Modal
          title={current === undefined ? `Add teacher` : `edit ${current.name}`}
          width={720}
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

export default Competitions;
