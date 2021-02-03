const { API } = require('prpr-lerna-core');
const axios = require('axios');

const getPopularImg = () => axios.get(API)

module.exports = getPopularImg;

// 测试代码，发布时删除
getPopularImg().then((res) => console.log(res.data.length));