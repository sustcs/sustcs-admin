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
      { path: '/', redirect: '/dashboard/analysis', authority: ['admin', 'user'] },
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
          {
            path: '/dashboard/monitor',
            name: 'monitor',
            component: './Dashboard/Monitor',
          },
          {
            path: '/dashboard/workplace',
            name: 'workplace',
            component: './Dashboard/Workplace',
          },
        ],
      },

      // subject
      {
        path: '/subject',
        icon: 'sketch',
        name: 'subject',
        routes: [
          {
            path: '/subject/subject-column',
            name: 'subjectcolumn',
            component: './Subject/SubjectColumn',
          },
          {
            path: '/subject/teacher',
            name: 'teacher',
            component: './Subject/Teacher',
          },
          {
            path: '/subject/news',
            name: 'news',
            component: './Subject/News',
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
            path: '/course/courses',
            name: 'courses',
            component: './Course/Courses',
          },
          {
            path: '/course/setting',
            name: 'setting',
            component: './Course/Setting',
          },
        ],
      },
      // activity
      {
        path: '/activity',
        icon: 'compass',
        name: 'activity',
        routes: [
          {
            path: '/activity/seminar',
            name: 'seminar',
            component: './Activity/Seminar',
          },
        ],
      },
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
