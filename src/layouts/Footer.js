import React, { Fragment } from 'react';
import { Layout, Icon } from 'antd';
import { formatMessage } from 'umi-plugin-react/locale';
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
          Copyright <Icon type="copyright" />
          2019 {formatMessage({ id: 'component.globalFooter.copyright' })}
        </Fragment>
      }
    />
  </Footer>
);
export default FooterView;
