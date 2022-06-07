import { useReactiveVar } from '@apollo/client';
import {BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
//import {HashRouter as Router, Route, Routes } from 'react-router-dom';

/* import Navigate from  'react-router-dom'; */
import Home from "./screens/Home";
import Login from "./screens/Login";
import NotFound from "./screens/NotFound";

import { darkModeVar, isLoggedInVar } from "./apollo";
import { ThemeProvider } from "styled-components";
import { darkTheme, GlobalStyles, lightTheme } from "./styles";

/* const lightTheme = {
  fontColor: "#2c2c2c",
  bgColor: "lightgray",
};

const darkTheme = {
  fontColor: "lightgray",
  bgColor: "#2c2c2c",
};
 */
const isLoggedIn = false;

function App() {

  /* const [isLoggedIn, setIsLoggedIn] = useState(false); */
  // 아폴로 서버를 이용해서 var 생성, 어느곳에서든지 isLoggedIn의 상태를 변경할 수 있게 해준다.
  //const isLoggedIn = useReactiveVar(isLoggedInVar);
  //const darkMode = useReactiveVar(darkModeVar);
  return (
  //<ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
  //<GlobalStyles />
    <Router>
        <Routes>
            <Route path="/" element={ isLoggedIn ? <Home /> : <Login /> } ></Route>
            <Route path="*" element={<NotFound />}></Route>
            {/*<Route path="/" element={ <Navigate to="/" /> } />*/}
        </Routes>
        {/* <!-- 맨 마지막에 놓아야 함 --> */}
        {/* <Route path="*" element={<Navigate to="/" />} /> */}
       {/* <Route path="*" element={<NotFound />} />*/}

    </Router>
  //</ThemeProvider>
  );
}

export default App;
