import { makeVar } from "@apollo/client";
//reactive Variable을 가지고 있을 곳


export const isLoggedInVar = makeVar(false); //isLoggedInVar();의 기본값을 false로 설정했다.
export const darkModeVar = makeVar(false);

