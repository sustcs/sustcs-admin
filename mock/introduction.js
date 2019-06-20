let sourceData;
export default {

  'GET /api/introductions': (req, res) => {
    const subjectColumn = [
      {
        id: 0,
        title: 'Course orientation',
        description: `<p style="text-align:center;">sdscscdcs</p>`,
        created_at: new Date(),
        updated_at: new Date(),
        enable: 1,
      },
      {
        id: 1,
        title: 'The teaching goal',
        description: `<pre><code>{&quot;blocks&quot;:[{&quot;key&quot;:&quot;eekk&quot;,&quot;text&quot;:&quot;sdscscdcssd&quot;,&quot;type&quot;:&quot;unstyled&quot;,&quot;depth&quot;:0,&quot;in</code></pre><p><span style="color:#f39c12">ascsdvsdc测试测试的</span></p><p></p><ul><li><span style="color:#f39c12">爱仕达所多</span></li></ul><ol><li><span style="color:#f39c12">撒大声地</span></li></ol>`,
        created_at: new Date(),
        updated_at: new Date(),
        enable: 0,
      },
    ];
    sourceData = subjectColumn;
    return res.json(subjectColumn);
  },
  'POST /api/introductions': (req, res) => {
    const { title, description, enable } = req.body;
    const result = sourceData;
    result.unshift({
      id: result.length,
      createdAt: new Date(),
      updated_at: new Date(),
      title,
      description,
      enable,
    });
  
    return res.json(result);
  },
  // 'PUT /api/introductions/:id': updateSubjectColumn,
  // 'DELETE /api/introductions/:id': destroySubjectColumn,
};