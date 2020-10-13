export default {
  // 支持自定义函数，API 参考 express@4
  'POST /api/checkAuth': (req, res) => {
    res.json({
      data: {
        status: 1,
        msg: '验证成功',
        root: 'admin',
      },
    });
  },

  'POST /api/userAuth': (req, res) => {
    res.json({
      data: {
        status: 1,
        msg: '注册成功',
      },
    });
  },
  'POST /api/login': (req, res) => {
    res.json({
      data: {
        status: 1,
        msg: '登录成功',
        token: '',
        pic: 'https://elm.cangdu.org/img/1751bdab8d479310.jpg',
      },
    });
  },
  'GET /api/token': (req, res) => {
    res.json({
      data: {
        status: 1,
        msg: '验证成功',
      },
    });
  },
 
  
};
