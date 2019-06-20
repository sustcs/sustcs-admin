import React from 'react'
import { Upload, Icon, message } from 'antd';
import oss from 'ali-oss';
import moment from 'moment';
function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

const client = (self) => {
  const {token} = self.state
  return new oss({
    accessKeyId: token.access_key_id,
    accessKeySecret: token.access_key_secret,
    region: 'oss-cn-shenzhen', //
    bucket: 'makergyt',//
  });
}

const uploadPath = (path, file) => {
  // 上传文件的路径，使用日期命名文件目录
  return `${moment().format('YYYYMMDD')}/${file.name.split(".")[0]}-${file.uid}.${file.type.split("/")[1]}`
}
const UploadToOss = (self, path, file) => {
  const url = uploadPath(path, file)
  return new Promise((resolve, reject) => {
    client(self).multipartUpload(url, file).then(data => {
      resolve(data);
    }).catch(error => {
      reject(error)
    })
  })
}

class Example extends React.Component {
  state = {
    loading: false,
    token: {
      access_key_id: 'LTAIOPVY4aC4WyRy', // oss的key_id
      access_key_secret: 'HxHPdelYOr6FCfrErhjLF21IoOiNpl', // oss的secret
      OSS_ENDPOINT: 'oss-cn-shenzhen.aliyuncs.com',  // 自己oss服务器的配置信息
      OSS_BUCKET: 'alicdn.makergyt.com', // 自己oss服务器的配置信息
    }
  };
  handleChange = (info) => {
    if (info.file.status === 'uploading') {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, imageUrl => this.setState({
        imageUrl,
        loading: false,
      }));
    }
  }
  beforeUpload = (file) => {
    const isJPG = file.type === 'image/jpeg';
    if (!isJPG) {
      message.error('You can only upload JPG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      // 使用ossupload覆盖默认的上传方法
      UploadToOss(this, '/', file).then(data => {
        this.setState({ imageUrl: `https://alicdn.makergyt.com/${data.name}` });
      })
    }
    return false; // 不调用默认的上传方法
  }
  render() {
    const uploadButton = (
      <div>
        <Icon type={this.state.loading ? 'loading' : 'plus'} />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    const imageUrl = this.state.imageUrl;
    return (
      <Upload
        name="avatar"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        beforeUpload={this.beforeUpload}
        onChange={this.handleChange}
      >
        {imageUrl ? <img src={imageUrl} alt="" /> : uploadButton}
      </Upload>
    );
  }
}
export default Example;