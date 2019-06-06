import React, { Fragment } from 'react';
import { Layout, Icon } from 'antd';
import GlobalFooter from '@/components/GlobalFooter';

const { Footer } = Layout;
const FooterView = () => (
  <Footer style={{ padding: 0 }}>
    <GlobalFooter
      links={[
        {
          key: '首页',
          title: '首页',
          href: '',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <Icon type="github" />,
          href: 'https://github.com/sustcs',
          blankTarget: true,
        },
        {
          key: '课程共享计划',
          title: '课程共享计划',
          href: 'https://sustcs.github.io/course',
          blankTarget: true,
        },
      ]}
      copyright={
        <Fragment>
          Copyright <Icon type="copyright" /> 2019 电子信息与人工智能学院计算机系出品
        </Fragment>
      }
    />
  </Footer>
);
export default FooterView;
