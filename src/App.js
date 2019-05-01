import React, { Component } from 'react';
import QRCode from 'qrcode.react';
import { Layout, Menu, Row } from 'antd';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Example from './Content';
const { Header, Content, Footer } = Layout;
function Index() {
  return (
    <div style={{ textAlign: 'center', padding: 24 }}>
      <h2>Please scan the QRcode to log in</h2>
      <QRCode
        style={{ margin: '20px' }}
        value={'http://picturesofpeoplescanningqrcodes.tumblr.com/'}
        size={200}
      />
    </div>
  );
}
function About() {
  return <h2>About</h2>;
}
function Topic({ match }) {
  return <h3>Requested Param: {match.params.id}</h3>;
}
function Users({ match }) {
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      <Route path={`${match.path}/:id`} component={Topic} />
      <Route
        exact
        path={match.path}
        render={() => <h3>Please select a topic.</h3>}
      />
    </div>
  );
}
class App extends Component {
  render() {
    return (
      <Router>
        <Layout className="layout">
          <Header>
            <div className="logo" />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['1']}
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="1">
                <Link to="/">Home</Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/about/">About</Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="/users/">Users</Link>
              </Menu.Item>
              <Menu.Item key="4">
                <Link to="/example/">Example</Link>
              </Menu.Item>
            </Menu>
          </Header>
          <Content className="content">
            <Row type="flex" justify="space-around" align="middle">
              <div style={{ background: '#fff', margin: 24, padding: 24 }}>
                <Route path="/" exact component={Index} />
                <Route path="/about" component={About} />
                <Route path="/users" component={Users} />
                <Route path="/example" component={Example} />
              </div>
            </Row>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            SUSTCS ©2019 Created by Makergyt
          </Footer>
        </Layout>
      </Router>
    );
  }
}
export default App;
