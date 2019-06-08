import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/_renderRoutes';
import history from '@tmp/history';
import RendererWrapper0 from '/home/jerry/data/react/antd/admin/src/pages/.umi/LocaleWrapper.jsx'
import _dvaDynamic from 'dva/dynamic'

const Router = require('dva/router').routerRedux.ConnectedRouter;

const routes = [
  {
    "path": "/user",
    "component": _dvaDynamic({
  
  component: () => import(/* webpackChunkName: "layouts__UserLayout" */'../../layouts/UserLayout'),
  LoadingComponent: require('/home/jerry/data/react/antd/admin/src/components/PageLoading/index').default,
}),
    "routes": [
      {
        "path": "/user",
        "redirect": "/user/login",
        "exact": true
      },
      {
        "path": "/user/login",
        "name": "login",
        "component": _dvaDynamic({
  
  component: () => import(/* webpackChunkName: "p__User__Login" */'../User/Login'),
  LoadingComponent: require('/home/jerry/data/react/antd/admin/src/components/PageLoading/index').default,
}),
        "exact": true
      },
      {
        "component": _dvaDynamic({
  
  component: () => import(/* webpackChunkName: "p__404" */'../404'),
  LoadingComponent: require('/home/jerry/data/react/antd/admin/src/components/PageLoading/index').default,
}),
        "exact": true
      },
      {
        "component": () => React.createElement(require('/home/jerry/data/react/antd/admin/node_modules/_umi-build-dev@1.9.2@umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
      }
    ]
  },
  {
    "path": "/weapp",
    "component": _dvaDynamic({
  
  component: () => import(/* webpackChunkName: "layouts__UserLayout" */'../../layouts/UserLayout'),
  LoadingComponent: require('/home/jerry/data/react/antd/admin/src/components/PageLoading/index').default,
}),
    "routes": [
      {
        "component": _dvaDynamic({
  
  component: () => import(/* webpackChunkName: "p__Exception__Weapp" */'../Exception/Weapp'),
  LoadingComponent: require('/home/jerry/data/react/antd/admin/src/components/PageLoading/index').default,
}),
        "exact": true
      },
      {
        "component": () => React.createElement(require('/home/jerry/data/react/antd/admin/node_modules/_umi-build-dev@1.9.2@umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
      }
    ]
  },
  {
    "path": "/",
    "component": _dvaDynamic({
  
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../../layouts/BasicLayout'),
  LoadingComponent: require('/home/jerry/data/react/antd/admin/src/components/PageLoading/index').default,
}),
    "Routes": [require('../Authorized').default],
    "routes": [
      {
        "path": "/",
        "redirect": "/dashboard/analysis",
        "authority": [
          "admin",
          "user"
        ],
        "exact": true
      },
      {
        "path": "/dashboard",
        "name": "dashboard",
        "icon": "dashboard",
        "routes": [
          {
            "path": "/dashboard/analysis",
            "name": "analysis",
            "component": _dvaDynamic({
  app: require('@tmp/dva').getApp(),
models: () => [
  import(/* webpackChunkName: 'p__Dashboard__models__activities.js' */'/home/jerry/data/react/antd/admin/src/pages/Dashboard/models/activities.js').then(m => { return { namespace: 'activities',...m.default}}),
  import(/* webpackChunkName: 'p__Dashboard__models__chart.js' */'/home/jerry/data/react/antd/admin/src/pages/Dashboard/models/chart.js').then(m => { return { namespace: 'chart',...m.default}}),
  import(/* webpackChunkName: 'p__Dashboard__models__monitor.js' */'/home/jerry/data/react/antd/admin/src/pages/Dashboard/models/monitor.js').then(m => { return { namespace: 'monitor',...m.default}})
],
  component: () => import(/* webpackChunkName: "p__Dashboard__Analysis" */'../Dashboard/Analysis'),
  LoadingComponent: require('/home/jerry/data/react/antd/admin/src/components/PageLoading/index').default,
}),
            "exact": true
          },
          {
            "path": "/dashboard/monitor",
            "name": "monitor",
            "component": _dvaDynamic({
  app: require('@tmp/dva').getApp(),
models: () => [
  import(/* webpackChunkName: 'p__Dashboard__models__activities.js' */'/home/jerry/data/react/antd/admin/src/pages/Dashboard/models/activities.js').then(m => { return { namespace: 'activities',...m.default}}),
  import(/* webpackChunkName: 'p__Dashboard__models__chart.js' */'/home/jerry/data/react/antd/admin/src/pages/Dashboard/models/chart.js').then(m => { return { namespace: 'chart',...m.default}}),
  import(/* webpackChunkName: 'p__Dashboard__models__monitor.js' */'/home/jerry/data/react/antd/admin/src/pages/Dashboard/models/monitor.js').then(m => { return { namespace: 'monitor',...m.default}})
],
  component: () => import(/* webpackChunkName: "p__Dashboard__Monitor" */'../Dashboard/Monitor'),
  LoadingComponent: require('/home/jerry/data/react/antd/admin/src/components/PageLoading/index').default,
}),
            "exact": true
          },
          {
            "path": "/dashboard/workplace",
            "name": "workplace",
            "component": _dvaDynamic({
  app: require('@tmp/dva').getApp(),
models: () => [
  import(/* webpackChunkName: 'p__Dashboard__models__activities.js' */'/home/jerry/data/react/antd/admin/src/pages/Dashboard/models/activities.js').then(m => { return { namespace: 'activities',...m.default}}),
  import(/* webpackChunkName: 'p__Dashboard__models__chart.js' */'/home/jerry/data/react/antd/admin/src/pages/Dashboard/models/chart.js').then(m => { return { namespace: 'chart',...m.default}}),
  import(/* webpackChunkName: 'p__Dashboard__models__monitor.js' */'/home/jerry/data/react/antd/admin/src/pages/Dashboard/models/monitor.js').then(m => { return { namespace: 'monitor',...m.default}})
],
  component: () => import(/* webpackChunkName: "p__Dashboard__Workplace" */'../Dashboard/Workplace'),
  LoadingComponent: require('/home/jerry/data/react/antd/admin/src/components/PageLoading/index').default,
}),
            "exact": true
          },
          {
            "component": () => React.createElement(require('/home/jerry/data/react/antd/admin/node_modules/_umi-build-dev@1.9.2@umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
          }
        ]
      },
      {
        "path": "/subject",
        "icon": "sketch",
        "name": "subject",
        "routes": [
          {
            "path": "/subject/subject-column",
            "name": "subjectcolumn",
            "component": _dvaDynamic({
  
  component: () => import(/* webpackChunkName: "p__Subject__SubjectColumn" */'../Subject/SubjectColumn'),
  LoadingComponent: require('/home/jerry/data/react/antd/admin/src/components/PageLoading/index').default,
}),
            "exact": true
          },
          {
            "path": "/subject/teacher",
            "name": "teacher",
            "component": _dvaDynamic({
  
  component: () => import(/* webpackChunkName: "p__Subject__Teacher" */'../Subject/Teacher'),
  LoadingComponent: require('/home/jerry/data/react/antd/admin/src/components/PageLoading/index').default,
}),
            "exact": true
          },
          {
            "path": "/subject/news",
            "name": "news",
            "component": _dvaDynamic({
  
  component: () => import(/* webpackChunkName: "p__Subject__News" */'../Subject/News'),
  LoadingComponent: require('/home/jerry/data/react/antd/admin/src/components/PageLoading/index').default,
}),
            "exact": true
          },
          {
            "component": () => React.createElement(require('/home/jerry/data/react/antd/admin/node_modules/_umi-build-dev@1.9.2@umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
          }
        ]
      },
      {
        "path": "/course",
        "icon": "table",
        "name": "course",
        "routes": [
          {
            "path": "/course/courses",
            "name": "courses",
            "component": _dvaDynamic({
  
  component: () => import(/* webpackChunkName: "p__Course__Courses" */'../Course/Courses'),
  LoadingComponent: require('/home/jerry/data/react/antd/admin/src/components/PageLoading/index').default,
}),
            "exact": true
          },
          {
            "path": "/course/setting",
            "name": "setting",
            "component": _dvaDynamic({
  
  component: () => import(/* webpackChunkName: "p__Course__Setting" */'../Course/Setting'),
  LoadingComponent: require('/home/jerry/data/react/antd/admin/src/components/PageLoading/index').default,
}),
            "exact": true
          },
          {
            "component": () => React.createElement(require('/home/jerry/data/react/antd/admin/node_modules/_umi-build-dev@1.9.2@umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
          }
        ]
      },
      {
        "path": "/activity",
        "icon": "compass",
        "name": "activity",
        "routes": [
          {
            "path": "/activity/seminar",
            "name": "seminar",
            "component": _dvaDynamic({
  
  component: () => import(/* webpackChunkName: "p__Activity__Seminar" */'../Activity/Seminar'),
  LoadingComponent: require('/home/jerry/data/react/antd/admin/src/components/PageLoading/index').default,
}),
            "exact": true
          },
          {
            "component": () => React.createElement(require('/home/jerry/data/react/antd/admin/node_modules/_umi-build-dev@1.9.2@umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
          }
        ]
      },
      {
        "path": "/competition",
        "icon": "fire",
        "name": "competition",
        "routes": [
          {
            "path": "/competition/competitions",
            "name": "competitions",
            "component": _dvaDynamic({
  
  component: () => import(/* webpackChunkName: "p__Competition__Competitions" */'../Competition/Competitions'),
  LoadingComponent: require('/home/jerry/data/react/antd/admin/src/components/PageLoading/index').default,
}),
            "exact": true
          },
          {
            "component": () => React.createElement(require('/home/jerry/data/react/antd/admin/node_modules/_umi-build-dev@1.9.2@umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
          }
        ]
      },
      {
        "path": "/source",
        "icon": "cloud",
        "name": "source",
        "routes": [
          {
            "path": "/source/github",
            "name": "github",
            "component": _dvaDynamic({
  
  component: () => import(/* webpackChunkName: "p__Source__Github" */'../Source/Github'),
  LoadingComponent: require('/home/jerry/data/react/antd/admin/src/components/PageLoading/index').default,
}),
            "exact": true
          },
          {
            "component": () => React.createElement(require('/home/jerry/data/react/antd/admin/node_modules/_umi-build-dev@1.9.2@umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
          }
        ]
      },
      {
        "path": "/test",
        "name": "test",
        "component": _dvaDynamic({
  
  component: () => import(/* webpackChunkName: "p__Test__index" */'../Test/index'),
  LoadingComponent: require('/home/jerry/data/react/antd/admin/src/components/PageLoading/index').default,
}),
        "exact": true
      },
      {
        "component": _dvaDynamic({
  
  component: () => import(/* webpackChunkName: "p__404" */'../404'),
  LoadingComponent: require('/home/jerry/data/react/antd/admin/src/components/PageLoading/index').default,
}),
        "exact": true
      },
      {
        "component": () => React.createElement(require('/home/jerry/data/react/antd/admin/node_modules/_umi-build-dev@1.9.2@umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
      }
    ]
  },
  {
    "component": () => React.createElement(require('/home/jerry/data/react/antd/admin/node_modules/_umi-build-dev@1.9.2@umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
  }
];
window.g_routes = routes;
const plugins = require('umi/_runtimePlugin');
plugins.applyForEach('patchRoutes', { initialValue: routes });

// route change handler
function routeChangeHandler(location, action) {
  plugins.applyForEach('onRouteChange', {
    initialValue: {
      routes,
      location,
      action,
    },
  });
}
history.listen(routeChangeHandler);
routeChangeHandler(history.location);

export { routes };

export default function RouterWrapper() {
  return (
<RendererWrapper0>
          <Router history={history}>
      { renderRoutes(routes, {}) }
    </Router>
        </RendererWrapper0>
  );
}
