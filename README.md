# init
```js
create-react-app antd-demo
cd antd-demo
cnpm i antd react-app-rewired babel-plugin-import customize-cra less less-loader
// App.js
import { Button } from 'antd';
// config-overrides.js
```
```sh
cnpm i --save husky lint-staged prettier
# .eslintrc.json
# .vscode/launch.json
# package.json
"lint-staged": {...}
"husky": {...}
cnpm install --save react-styleguidist
```
## error
- The react-scripts package provided by Create React App requires a dependency:
"webpack-dev-server": "3.2.1"
However, a different version of webpack-dev-server was detected higher up in the tree:
/home/jerry/work/react/antd-demo/node_modules/webpack-dev-server (version: 3.3.1)

```sh
npm ls webpack-dev-server
antd-demo@0.1.0 /home/jerry/work/react/antd-demo
└── webpack-dev-server@3.3.1  extraneous
```
- The proxy did not work
```js
// package.json
"proxy": "http://127.0.0.1:7001"
```
Configuring the Proxy Manually
Direct redirection
contentscript.js:1 Uncaught Error
    at contentscript.js:1
- gh-pages do not upload
  origin <--> homepage

# Router
react-router
|──react-router-dom
└──react-router-native
```sh
cnpm i react-router-dom --save
```
## Error
- router '/'
- The href attribute is required for an anchor to be keyboard accessible. Provide a valid, navigable address as the href value. If you cannot provide an href, but still need the element to resemble a link, use a button and change it with appropriate styles
## Reference
<small>
[1] REACT TRAINING.WEB-Quick Start.https://reacttraining.com/react-router/web/guides/quick-start [EB/OL] 2018
</small>
