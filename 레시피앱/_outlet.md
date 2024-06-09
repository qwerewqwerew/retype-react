### 6.6. 네비게이션 만들기-outlet

> 모든 컴포넌트에서 공통적으로 보여야 하는 UI들이 있다.
> 대표적으로 GNB 나 패널 메뉴등을 예로 들수 있다.
> 이런 전역 링크들은 outlet 객체를 활용하면 편리하다.

1. pages/Navi.js 를 생성후 아래 코드를 작성한다.

   ```js # pages/Navi.js

   ```

2. Navi.css 는 아래의 코드를 복붙한다
   ```css #
   nav {display: flex;max-width: 80%;margin: auto;list-style: none; gap:2rem;}
   ```
3. Navi 컴포넌트는 모든 컴포넌트에서 표시되어야 한다
   그럴경우 우리는 Home, Product 컴포넌트마다 이동하여 Navi 컴포넌트를 임포트 하거나
   App 컴포넌트에서도 Navi 를 임포트 하는 방법을 사용할수 있는데 이럴경우 코드의 복잡성이 높아져 유지보수가 어려워진다.

#### 6.6.1. 중첩라우터

1.  src\pages\RootLayout.js 를 만든다
    이 컴포넌트는 공통 라우터 설정을 가진 컴포넌트로 최상위 부모 역할을 한다

    ```jsx # src\pages\RootLayout.js
    const RootLayout = () => {
       return (
       <>
          <h1>RootLayout</h1>

       </>
       );
    };
    export default RootLayout;
    ```

2.  index.js 으로 이동하여 중첩 라우터를 작성한다.
    이때 App 컴포넌트는 일단 삭제하자

    ```jsx #3,9 index.js
      import React from 'react';
      import ReactDOM from 'react-dom/client';
      import { createBrowserRouter, RouterProvider } from 'react-router-dom';
      import './index.css';
      import App from './App';
      import Home from './pages/Home';
      import Products from './pages/Products';
      import RootLayout from './pages/RootLayout';
      const router = createBrowserRouter([
         {
            path: '/',
            element: <RootLayout />,
            children: [
               {
                  path: '/products',
                  element: <Products />,
               },
               {
                  path: '/home',
                  element: <Home />,
               },
            ],
         },
      ]);
      const root = ReactDOM.createRoot(document.querySelector('#root'));
      root.render(
         <RouterProvider router={router}>
            <Home />
         </RouterProvider>
      );
    ```

    여기까지 작성하면 첫화면은 RootLayout 로 렌더된다.

#### 6.6.2. Outlet 모듈 임포트

1. Root 로 이동하여 Outlet 모듈을 임포트 한다 이 모듈이 모든 하위 라우터를 모아주는 역할을 한다
2. return 에 Outlet 컴포넌트를 추가하면 App의 children 에 작성한 라우터 경로로 컴포넌트의 렌더가 되는것을 확인할수 있다

   ```jsx # RootLayout.js
     import { Outlet } from 'react-router-dom';
     const RootLayout = () => {
        return (
           <>
              <h1>RootLayout</h1>
              <Outlet />
           </>
        );
     };
     export default RootLayout;

   ```

3. src\pages\RootLayout.js에 Navi를 임포트 해보자

```jsx
import { Outlet } from "react-router-dom";
import Navi from './Navi';
import Navi from './Navi';
const RootLayout = () => {
  return (
    <>
      <h1>RootLayout</h1>
      <MainNavigation />
      <Outlet />
    </>
  );
};
export default RootLayout;
```

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c4f8a5e6-63da-4aa8-b12e-63c236c1c09d/Untitled.png)
