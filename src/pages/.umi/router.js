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
          "teacher"
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
  
  component: () => import(/* webpackChunkName: "p__Dashboard__Analysis" */'../Dashboard/Analysis'),
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
        "path": "/faculty",
        "icon": "sketch",
        "name": "faculty",
        "routes": [
          {
            "path": "/faculty/introduction",
            "name": "introduction",
            "component": _dvaDynamic({
  
  component: () => import(/* webpackChunkName: "p__Faculty__Introduction" */'../Faculty/Introduction'),
  LoadingComponent: require('/home/jerry/data/react/antd/admin/src/components/PageLoading/index').default,
}),
            "exact": true
          },
          {
            "path": "/faculty/teacher",
            "name": "teacher",
            "component": _dvaDynamic({
  
  component: () => import(/* webpackChunkName: "p__Faculty__Teacher" */'../Faculty/Teacher'),
  LoadingComponent: require('/home/jerry/data/react/antd/admin/src/components/PageLoading/index').default,
}),
            "exact": true
          },
          {
            "path": "/faculty/news",
            "name": "news",
            "component": _dvaDynamic({
  
  component: () => import(/* webpackChunkName: "p__Faculty__News" */'../Faculty/News'),
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
            "path": "/course/all",
            "name": "course",
            "component": _dvaDynamic({
  
  component: () => import(/* webpackChunkName: "p__Course__Course" */'../Course/Course'),
  LoadingComponent: require('/home/jerry/data/react/antd/admin/src/components/PageLoading/index').default,
}),
            "exact": true
          },
          {
            "path": "/course/structure",
            "name": "structure",
            "component": _dvaDynamic({
  
  component: () => import(/* webpackChunkName: "p__Course__Structure" */'../Course/Structure'),
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
