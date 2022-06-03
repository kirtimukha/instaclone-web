//reactive Variable을 가지고 있을 곳

import { makeVar } from "@apollo/client";

export const isLoggedInVar = makeVar(false);
export const darkModeVar = makeVar(false);

//isLoggedInVar();//true or false 를 받게 됨