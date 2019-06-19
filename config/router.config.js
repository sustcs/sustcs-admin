export default [
  // user
  {
    path: '/user',
    component: '../layouts/UserLayout',
    routes: [
      { path: '/user', redirect: '/user/login' },
      { path: '/user/login', name: 'login', component: './User/Login' },
      {
        component: '404',
      },
    ],
  },
  {
    path: '/weapp',
    component: '../layouts/UserLayout',
    routes: [
      {
        component: './Exception/Weapp',
      },
    ],
  },
  // app
  {
    path: '/',
    component: '../layouts/BasicLayout',
    Routes: ['src/pages/Authorized'],
    routes: [
      // dashboard
      { path: '/', redirect: '/dashboard/analysis', authority: ['admin', 'teacher'] },
      {
        path: '/dashboard',
        name: 'dashboard',
        icon: 'dashboard',
        routes: [
          {
            path: '/dashboard/analysis',
            name: 'analysis',
            component: './Dashboard/Analysis',
          },
        ],
      },

      // faculty
      {
        path: '/faculty',
        icon: 'sketch',
        name: 'faculty',
        routes: [
          {
            path: '/faculty/introduction',
            name: 'introduction',
            component: './Faculty/Introduction',
          },
          {
            path: '/faculty/teacher',
            name: 'teacher',
            component: './Faculty/Teacher',
          },
          {
            path: '/faculty/news',
            name: 'news',
            component: './Faculty/News',
          },
        ],
      },
      // course
      {
        path: '/course',
        icon: 'table',
        name: 'course',
        routes: [
          {
            path: '/course/all',
            name: 'course',
            component: './Course/Course',
          },
          {
            path: '/course/structure',
            name: 'structure',
            component: './Course/Structure',
          },
        ],
      },
      // activity
      // {
      //   path: '/activity',
      //   icon: 'compass',
      //   name: 'activity',
      //   routes: [
      //     {
      //       path: '/activity/seminar',
      //       name: 'seminar',
      //       component: './Activity/Seminar',
      //     },
      //   ],
      // },
      // competition
      {
        path: '/competition',
        icon: 'fire',
        name: 'competition',
        routes: [
          {
            path: '/competition/competitions',
            name: 'competitions',
            component: './Competition/Competitions',
          },
        ],
      },
      // source
      {
        path: '/source',
        icon: 'cloud',
        name: 'source',
        routes: [
          {
            path: '/source/github',
            name: 'github',
            component: './Source/Github',
          },
        ],
      },
      {
        path: '/test',
        name: 'test',
        component: './Test/index',
      },
      {
        component: '404',
      },
    ],
  },
];
