import dva from 'dva';
import createLoading from 'dva-loading';

const runtimeDva = window.g_plugins.mergeConfig('dva');
let app = dva({
  history: window.g_history,
  
  ...(runtimeDva.config || {}),
});

window.g_app = app;
app.use(createLoading());
(runtimeDva.plugins || []).forEach(plugin => {
  app.use(plugin);
});

app.model({ namespace: 'global', ...(require('/home/jerry/data/react/antd/pro-ant-design/src/models/global.js').default) });
app.model({ namespace: 'list', ...(require('/home/jerry/data/react/antd/pro-ant-design/src/models/list.js').default) });
app.model({ namespace: 'login', ...(require('/home/jerry/data/react/antd/pro-ant-design/src/models/login.js').default) });
app.model({ namespace: 'menu', ...(require('/home/jerry/data/react/antd/pro-ant-design/src/models/menu.js').default) });
app.model({ namespace: 'project', ...(require('/home/jerry/data/react/antd/pro-ant-design/src/models/project.js').default) });
app.model({ namespace: 'setting', ...(require('/home/jerry/data/react/antd/pro-ant-design/src/models/setting.js').default) });
app.model({ namespace: 'subject', ...(require('/home/jerry/data/react/antd/pro-ant-design/src/models/subject.js').default) });
app.model({ namespace: 'user', ...(require('/home/jerry/data/react/antd/pro-ant-design/src/models/user.js').default) });
