# instaclone WEB

# 1. SET UP

-[O] Router: 화면전환 - react router 사용

1. Router는 특정 url로 이동시 components를 보여줌

2. 방법

1) hash router ex) '/#/login'
   //import { HashRouter as Router } from 'react-router-dom'; // 매치되는 url을 찾는 방법이라서 home의 내용이 계속 포함되어 보임
2) browser router ex) '/login'
   //import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

-[O] Authentication: 로그인 여부 전달

1. apollo.js에 export 할 makeVar 를 설정한다.
2. 사용하고자 하는 컴포넌트에 임포트 하여 <button onClick={() => isLoggedInVar(true)}> 상태정보만 바꾸면 됨 -[O] Arch: 파일을 어디에 놓을지 결정 -[O] Styles: Style, theme(Dark, Normal) 설정

3. 설치 plugin
   vscode-styled-components
4. 설치 npm
   styled-components
   theme-provider
   styled-reset

4-1. Styled-componets 예제
//Title 은 react 컴포넌트이기 때문에 props를 받는다.
const Title = styled.h1`color: ${(props) => (props.potato? "white" : "black")}; background-color:${props => props.potato? "red" : "violet"}; padding: 1rem; font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;`;

4-2. themt-provider 예제

4-3. styled-reset 예제
import reset from 'styled-reset'
const GlobalStyle = createGlobalStyle` ${reset} /* other styles */`

# Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**
