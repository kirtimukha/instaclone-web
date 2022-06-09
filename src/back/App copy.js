import { useState } from 'react';
import { useReactiveVar } from '@apollo/client';
import {BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
//import {HashRouter as Router, Route, Routes } from 'react-router-dom';

/* import Navigate from  'react-router-dom'; */
import Home from "./screens/Home";
import Login from "./screens/Login";
import NotFound from "./screens/NotFound";

import { darkModeVar, isLoggedInVar } from "./apollo";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme, GlobalStyles} from "./styles";


function App() {

  const isLoggedIn = useReactiveVar(isLoggedInVar); // 이제 어떤 곳에서든 isLoggedIn 을 변경할 수 있다.
  const darkMode = useReactiveVar(darkModeVar);

  // 1. const isLoggedIn = false;
  //  <Route path="/" element={isLoggedIn ? <Home /> : <Login />} ></Route>

  //2. 로그인, 로그아웃 버튼에 props으로 state 값 넘기기
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // return ( <Route path="/" element={isLoggedIn ? <Home setIsLoggedIn={setIsLoggedIn} /> : <Login setIsLoggedI={setIsLoggedIn} />} ></Route> )
  // Home.js  <button onClick={() => setIsLoggedIn(false)}>Log out</button>

  // 3. 아폴로 서버를 이용해서 var 생성, 어느곳에서든지 isLoggedIn의 상태를 변경할 수 있게 하기
  // [ reactive Variables 사용]
  // 1) reactive Variables란?
  // react.js에서는 어떤 것의 상태 변화가 있을 시, 상태 변화에 따라 다시 component를 render 하도록 만든다.
  // reactive variables를 사용하면 상태 변화를 간단히 할 수 있다.
  // 다크모드, 유튜브의 재생상태 등은 백엔드로 갈 필요가 없다. 그럴 때 reactive variables를 사용한다.)
  // 2) reactive Variables 설정방법: apollo.js에  makeVar를 설정하고 hook을 사용한다.
  // const isLoggedIn = useReactiveVar(isLoggedInVar);


  return (
  <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
  <GlobalStyles />
    <Router>
        <Routes>
          <Route path="/" element={isLoggedIn ? <Home /> : <Login  />} >
          </Route>
          <Route path="*" element={<NotFound />}></Route>
            {/*<Route path="/" element={ <Navigate to="/" /> } />*/}
        </Routes>
        {/* <!-- 맨 마지막에 놓아야 함 --> */}
        {/* <Route path="*" element={<Navigate to="/" />} /> */}
       {/* <Route path="*" element={<NotFound />} />*/}

    </Router>
  </ThemeProvider>
  );
}

export default App;
