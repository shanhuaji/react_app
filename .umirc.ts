import { defineConfig } from 'umi';
import routes from './src/config/route'
export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes,
  layout:{
    name: '后台管理系统', 
    logo:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2437426068,1571926295&fm=26&gp=0.jpg',
    locale: true,
  },
  dva: {
    immer: true,
    hmr: true,
  },
});
