import { runApp } from 'ice';

const appConfig = {
  app: {
    rootId: 'ice-container',
  },
  router: {
    type: 'browser',
    modifyRoutes: (routes) => {
      return routes;
    },
  },
  request: {
    // eslint-disable-next-line @iceworks/best-practices/no-http-url
    baseURL: 'http://127.0.0.1:8080/v1',
  },
};
runApp(appConfig);
