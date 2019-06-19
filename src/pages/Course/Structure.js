import React, { PureComponent, Fragment, Component } from 'react';
import { connect } from 'dva';
import {
  Row,
  Col,
  Card,
  Form,
  Input,
  Button,
  InputNumber,
  notification,
  Modal,
  Table,
  Divider,
  Popconfirm,
} from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';

import styles from './Structure.less';

const { TextArea } = Input;

@Form.create()
class OperationModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
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

  render() {
    const { children, form, record } = this.props;
    const { getFieldDecorator } = form;
    const { title, description, credit_required, credit_elective } = record;
    const { visible } = this.state;
    return (
      <span>
        <span onClick={this.showModalHandler}>{children}</span>
        <Modal
          title="Edit structure"
          visible={visible}
          onOk={this.okHandler}
          onCancel={this.hideModelHandler}
          width={480}
        >
          <Form layout="vertical" onSubmit={this.okHandler}>
            <Row gutter={16}>
              <Col>
                <Form.Item label="Title">
                  {getFieldDecorator('title', {
                    initialValue: title,
                    rules: [{ required: true, message: 'Please enter structure title' }],
                  })(<Input placeholder="Please enter structure title" />)}
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col>
                <Form.Item label="Description">
                  {getFieldDecorator('description', {
                    initialValue: description,
                    rules: [{ required: true, message: 'Please enter description' }],
                  })(<TextArea rows={3} />)}
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item label="Credit_required">
                  {getFieldDecorator('credit_required', {
                    initialValue: credit_required,
                    rules: [{ required: true, message: 'Please enter credit_required' }],
                  })(<InputNumber min={0} max={10} step={0.1} />)}
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="Credit_elective">
                  {getFieldDecorator('credit_elective', {
                    initialValue: credit_elective,
                    rules: [{ required: true, message: 'Please enter credit_elective' }],
                  })(<InputNumber min={0} max={10} step={0.1} />)}
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Modal>
      </span>
    );
  }
}

/* eslint react/no-multi-comp:0 */
@connect(({ structure, loading }) => ({
  structure,
  loading: loading.models.structure,
}))
class TableList extends PureComponent {
  constructor(props) {
    super(props);
    this.editHandler = this.editHandler.bind(this);
    this.state = {
      columns: [
        {
          title: '课程类别',
          dataIndex: 'title',
          key: 'title',
        },
        {
          title: '描述',
          dataIndex: 'description',
          key: 'description',
        },
        {
          title: '必修课学分',
          dataIndex: 'credit_required',
          key: 'credit_required',
        },
        {
          title: '选修课学分',
          dataIndex: 'credit_elective',
          key: 'credit_elective',
        },
        {
          title: '操作',
          key: 'operation',
          render: (text, record) => (
            <div>
              <Fragment>
                <OperationModal record={record} onOk={this.editHandler.bind(null, record.id)}>
                  <a>Edit</a>
                </OperationModal>
              </Fragment>
              <Divider type="vertical" />
              <Popconfirm
                title="Sure to delete?"
                onConfirm={() => this.deleteHandler(text, record)}
              >
                <a>Delete</a>
              </Popconfirm>
            </div>
          ),
        },
      ],
    };
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'structure/fetch',
    });
  }

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
      structure: { list },
      loading,
    } = this.props;
    const { columns } = this.state;
    return (
      <PageHeaderWrapper title="课程体系设置">
        <Card bordered={false}>
          <div className={styles.tableList}>
            <div className={styles.tableListOperator}>
              <OperationModal record={{}} onOk={this.createHandler}>
                <Button icon="plus" type="primary">
                  新建
                </Button>
              </OperationModal>
            </div>
            <Table
              dataSource={list}
              columns={columns}
              rowKey={record => record.id}
              loading={loading}
            />
          </div>
        </Card>
      </PageHeaderWrapper>
    );
  }
}

export default TableList;
