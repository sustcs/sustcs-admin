export default {
  'GET /api/qrcode': (req, res) => {
    const { prefix, scanType, param, action } = req.query;
    res.status = 200;
    return res.json({
      statusCode: 200,
      msg: {
        qrCode: `${prefix}${scanType}/pages/auth/auth?param=${param}&action=${action}`,
        expire: 300,
      }
    });
  },
};
