import { lazy } from 'react';
 /*
  * react lazy - function-promise that is asynchronously called and it returns import() function
 */

export const reactLazyLoad = componentName => {
  return lazy(() => {
    return import(`../pages/${componentName}`);
  });
};

export const reactLazyLoadReaderApi = componentName => {
  return lazy(() => {
    return import(`../pages/Reader/pages/${componentName}`);
  });
};
