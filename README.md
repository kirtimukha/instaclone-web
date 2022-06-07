# instaclone WEB

# 1. SET UP
-[] Router: 화면전환 - react router 사용
    1. Router는 특정 url로 이동시 components를 보여줌
    2. 방법 
        1) hash router       '/#/login' //import { HashRouter as Router } from 'react-router-dom'; // 매치되는 url을 찾는 방법이라서 home의 내용이 계속 포함되어 보임
        2) browser router    '/login'   //import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
-[] Authentication: 로그인 여부 전달
-[] Arch: 파일을 어디에 놓을지 결정 
-[] Styles: Style, theme(Dark, Normal) 설정


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
