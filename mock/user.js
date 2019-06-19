// 代码中会兼容本地 service mock 以及部署站点的静态数据
export default {
  // 支持值为 Object 和 Array
  'GET /api/users/currentUser': (req, res) => {
    return res.json({
      name: 'admin',
      avatar: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
    });
  },

  'POST /api/users/login': (req, res) => {
    const { username, avatarUrl } = req.body;
    const currentAuthority = username.length === 4 ? 'teacher': 'student';

    if (currentAuthority === 'teacher') {
      res.send({
        statusCode: 200,
        msg: {
          status: 'ok',
          currentAuthority,
          userInfo: {
            username,
            avatarUrl,
          }
        }, 
      });
      return;
    }
    res.send({
      statusCode: 403,
      msg: {
        status: 'error',
        currentAuthority: 'guest',
      }, 
    });
  },
  'GET /api/500': (req, res) => {
    res.status(500).send({
      timestamp: 1513932555104,
      status: 500,
      error: 'error',
      message: 'error',
      path: '/base/category/list',
    });
  },
  'GET /api/404': (req, res) => {
    res.status(404).send({
      timestamp: 1513932643431,
      status: 404,
      error: 'Not Found',
      message: 'No message available',
      path: '/base/category/list/2121212',
    });
  },
  'GET /api/403': (req, res) => {
    res.status(403).send({
      timestamp: 1513932555104,
      status: 403,
      error: 'Unauthorized',
      message: 'Unauthorized',
      path: '/base/category/list',
    });
  },
  'GET /api/401': (req, res) => {
    res.status(401).send({
      timestamp: 1513932555104,
      status: 401,
      error: 'Unauthorized',
      message: 'Unauthorized',
      path: '/base/category/list',
    });
  },
};
