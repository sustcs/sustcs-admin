function getQrCode(req, res) {
  const { prefix, scanType, param, action } = req.query;
  res.status = 200;
  return res.json({
    statusCode: 200,
    msg: {
      qrCode: `${prefix}${scanType}/pages/auth/auth?param=${param}&action=${action}`,
      expire: 3000,
    }
  });
}
let sourceData;
const subjectColumn = [
  {
    id: 0,
    title: 'Course orientation',
    description: `<p style="text-align:center;">sdscscdcs</p>`,
    createdAt: new Date().getTime(),
    enable: true,
  },
  {
    id: 1,
    title: 'The teaching goal',
    description: `<pre><code>{&quot;blocks&quot;:[{&quot;key&quot;:&quot;eekk&quot;,&quot;text&quot;:&quot;sdscscdcssd&quot;,&quot;type&quot;:&quot;unstyled&quot;,&quot;depth&quot;:0,&quot;in</code></pre><p><span style="color:#f39c12">ascsdvsdc测试测试的</span></p><p></p><ul><li><span style="color:#f39c12">爱仕达所多</span></li></ul><ol><li><span style="color:#f39c12">撒大声地</span></li></ol>`,
    createdAt: new Date().getTime(),
    enable: false,
  },
];

function getSubjectColumn(req, res) {
  const result = subjectColumn;
  sourceData = result;
  return res.json(result);
}

function postSubjectColumn(req, res) {
  const { /* url = '', */ body } = req;
  // const params = getUrlParams(url);
  const { method, id } = body;
  // const count = (params.count * 1) || 20;
  let result = sourceData;

  switch (method) {
    case 'delete':
      result = result.filter(item => item.id !== id);
      break;
    case 'update':
      result.forEach((item, i) => {
        if (item.id === id) {
          result[i] = Object.assign(item, body);
        }
      });
      break;
    case 'post':
      result.unshift({
        body,
        id: result.length,
        createdAt: new Date().getTime(),
        title: body.title,
        enable: body.enable,
      });
      break;
    default:
      break;
  }

  return res.json(result);
}
// modify

export default {
  'GET /api/qrcode': getQrCode,
  // add
  'GET /api/introductions': getSubjectColumn,
  'POST /api/introductions': postSubjectColumn,
};
