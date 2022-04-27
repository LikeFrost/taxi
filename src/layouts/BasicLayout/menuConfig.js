const asideMenuConfig = [
  // {
  //   name: '公司管理',
  //   path: '/company',
  //   icon: 'chart-bar',
  //   auth: ['super'],
  // },
  {
    name: '人员管理',
    path: '/driver',
    icon: 'account',
    auth: ['super', 'admin'],
  },
  {
    name: '个人信息',
    path: '/drivermessage',
    icon: 'account',
    auth: ['user'],
  },
  {
    name: '车辆信息',
    path: '/carmessage',
    icon: 'dashboard',
    auth: ['user'],
  },
  {
    name: '车辆信息',
    path: '/car',
    icon: 'dashboard',
    auth: ['super', 'admin'],
  },
  {
    name: '投诉信息',
    path: '/question',
    icon: 'cry',
    auth: ['super', 'admin', 'user'],
  },
  {
    name: '违章信息',
    path: '/traffic',
    icon: 'error',
    auth: ['super', 'admin', 'user'],
  },
  // {
  //   name: '信息查询',
  //   path: '/search',
  //   icon: 'search',
  //   auth: ['super', 'admin'],
  // },
];
const headerMenuConfig = [];
export { headerMenuConfig, asideMenuConfig };
