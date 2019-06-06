import React from 'react';
import ShoppingList from './ShoppingList';
import { Card, Tabs, Tree } from 'antd';
const TabPane = Tabs.TabPane;
const { TreeNode } = Tree;
const MyInput = ({ value = '', onChange }) => (
  <input onChange={onChange} value={value} />
);
class Content extends React.Component {
  state = {
    text: '',
    activeKey: '',
    expandedKeys: []
  };
  onTextChange = event => {
    this.setState({
      text: event.target.value
    });
  };
  onTextReset = () => {
    this.setState({
      text: ''
    });
  };
  onTabChange = activeKey => {
    activeKey = activeKey % 2 === 1 ? '2' : '1';
    console.log(activeKey);
    this.setState({ activeKey: activeKey }); //?
  };
  onExpand = expandedKeys => {
    this.setState({
      expandedKeys
    });
  };
  onSelect = selectedKeys => {
    const { expandedKeys } = this.state;
    const key = selectedKeys[0];
    if (expandedKeys.includes(key)) {
      this.setState({
        expandedKeys: expandedKeys.filter(k => k !== key)
      });
    } else {
      this.setState({
        expandedKeys: [...expandedKeys, key]
      });
    }
  };
  render() {
    const style = {
      width: '400px',
      margin: '30px',
      boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
      border: '1px solid #e8e8e8'
    };
    const picture = {
      title: 'cover',
      src:
        'https://cdn.nlark.com/yuque/0/2018/jpeg/84141/1536207007004-59352a41-4ad8-409b-a416-a4f324eb6d0b.jpeg'
    };

    return (
      <div>
        
        <ShoppingList name="test" alt={picture.title} src={picture.src}>
          {picture.title}
        </ShoppingList>
        <Card style={style} actions={[<p>action 1</p>, <p>action 2</p>]}>
          <Card.Meta
            avatar={
              <img
                alt=""
                style={{ width: '64px', height: '64px', borderRadius: '32px' }}
                src="https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png"
              />
            }
            title="Alipay"
            description="this is a test"
          />
        </Card>
        <MyInput onChange={this.onTextChange} value={this.state.text} />
        <button onClick={this.onTextReset}>Reset</button>
        <Tabs activeKey={this.state.activeKey} onChange={this.onTabChange}>
          <TabPane tab="Tab 1" key="1">
            Content of Tab Pane 1
          </TabPane>
          <TabPane tab="Tab 2" key="2">
            Content of Tab Pane 2
          </TabPane>
        </Tabs>
        <Tree
          expandedKeys={this.state.expandedKeys}
          selectedKeys={[]}
          onExpand={this.onExpand}
          onSelect={this.onSelect}
        >
          <TreeNode title="parent 1" key="0-0">
            <TreeNode title="leaf" key="0-0-0" />
            <TreeNode title="leaf" key="0-0-1" />
          </TreeNode>
        </Tree>
      </div>
    );
  }
}

export default Content;
