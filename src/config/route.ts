import {
  HomeOutlined,
  DotChartOutlined,
  DingdingOutlined,
  UnorderedListOutlined,
  SettingOutlined,
} from '@ant-design/icons';
export default [
  {
    path: '/',
    icon: 'HomeOutlined',
    locale: 'menu.home',
    component: '@/pages/index',
    name: '首页',
  },
  /* 数据可视化 */
  {
    path: '/dashboard',
    name: '数据可视化',
    locale: 'menu.dashboard',
    icon: 'DotChartOutlined',
    routes: [
      {
        path: '/dashboard/analysis',
        component: '../pages/dashboard/Analysis',
        name: '分析页',
        locale: 'menu.other.upLoad',
      },
      {
        path: '/dashboard/monitor',
        component: '../pages/dashboard/Monitor',
        name: '监控页',
        locale: 'menu.other.upLoadMenu',
      },
      {
        path: '/dashboard/workbench',
        component: '../pages/dashboard/Workbench',
        name: '工作台',
        locale: 'menu.other.homeEdit',
      },
    ],
  },
  /* 数据管理 */
  {
    path: '/data-manger',
    name: '数据管理',
    icon: 'DingdingOutlined',
    routes: [
      {
        path: '/data-manger/userlist',
        name: '用户列表',
        component: '../pages/data-manger/UserList',
      },
      {
        path: '/data-manger/worklist',
        name: '工单列表',
        component: '../pages/data-manger/WorkList',
      },
      {
        path: '/data-manger/applylist',
        name: '申请列表',
        component: '../pages/data-manger/ApplyList',
      },
    ],
  },
  /* 列表页 */
  {
    path: '/data-list',
    name: '列表页',
    icon: 'UnorderedListOutlined',
    routes: [
      {
        path: '/data-list/staff',
        name: '教师列表',
        component: '../pages/data-list/StaffList',
      },
      {
        path: '/data-list/student',
        name: '学生列表',
        component: '../pages/data-list/StudentList',
      },
    ],
  },
  /* 个人页 */
  {
    path: '/user',
    name: '设置',
    icon: 'SettingOutlined',
    routes: [
      {
        path: '/user/core',
        name: '个人中心',
        component: '../pages/user/Core',
      },
      {
        path: '/user/settings',
        name: '个人设置',
        component: '../pages/user/Settings',
        wrappers: ['@/wrappers/auth'],
      },
      {
        /* 注册 */
        path: '/user/register',
       component: '../pages/user/Register',
      },
      {
        /* 登录 */
        path: '/user/login',
        component: '@/pages/user/Login',
      },
    ],
  },
 
  {
    path: '*',
    component: '@/pages/404/index',
  },
];
