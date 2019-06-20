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
          key: 'home',
          title: formatMessage({ id: 'component.globalFooter.home' }),
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
          title: formatMessage({ id: 'component.globalFooter.plan' }),
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
