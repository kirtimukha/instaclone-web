import { useReactiveVar } from '@apollo/client';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from "./screens/Home";
import Login from "./screens/Login";
import NotFound from "./screens/NotFound";

import { darkModeVar, isLoggedInVar } from "./apollo";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme, GlobalStyles} from "./styles";

import routes from "./routes";
import SignUp from "./screens/SignUp";


function App() {

  const isLoggedIn = useReactiveVar(isLoggedInVar); 
  const darkMode = useReactiveVar(darkModeVar);

  return (
  <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
  <GlobalStyles />
    <Router>
        <Routes>
          <Route path={routes.home} element={isLoggedIn ? <Home /> : <Login  />} >
          </Route>
          {!isLoggedIn ? (
           <Route path={routes.signUp} element={<SignUp />} />
          ):  null}
          <Route path="*" element={<NotFound />}></Route>
        </Routes>


    </Router>
  </ThemeProvider>
  );
}

export default App;
