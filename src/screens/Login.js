import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebookSquare, faInstagram} from '@fortawesome/free-brands-svg-icons';
import Authlayout from "../components/auth/Authlayout";
import Button from "../components/auth/Button";
import Seperator from "../components/auth/Seperator";
import Input from "../components/auth/Input";
import FormBox from "../components/auth/FormBox";
import BottomBox from "../components/auth/BottomBox";
import routes from "../routes";
import { useForm } from "react-hook-form";
import FormError from './../components/auth/FormError';

const FacebookLogin = styled.div`
  color: #385285;
  font-weight: 500;
  span{margin-left:10px; font-weight: 600;}
`;


function Login( ) {
  const { register, handleSubmit, formState, errors } = useForm({
    mode: "onChange", // all, onChange, onSubmit, onTouched 모드
  } );
  const onSubmitValid = (data) => { }
  const onSubmitInValid = (data) => {
    //console.log(data, 'inValid')
  }
console.log(errors);
//console.log(formState.isValid);
//console.log(register);

  return (
    <Authlayout>
        <FormBox>
           <div>
             <FontAwesomeIcon icon={faInstagram} size="3x" />
           </div>
           <form action="" onSubmit={handleSubmit(onSubmitValid , onSubmitInValid )}>
            <Input
              {...register('username', {
                required: 'Username is required', minLength: {
                  value: 5,
                  message: 'Need more than 5 Characters.'
                },
                maxLength: {
                  value: 20,
                  message:'Need less than 20 Characters.'
                }
               // validate: (currentValue) => currentValue.includes("potato"),
              })}
              name="username"
              type="text" id=""
            placeholder="User Name"
            hasError={ formState.errors?.username?.message}
          />
          <FormError message={ formState.errors?.username?.message} />
          <Input
              name="password"
              { ...register( 'password',
                { required: 'password is required.', minLength: { value: 6, message:'Needs more than 6 Characters.'},maxLength: 20} )
              }
              type="password" id="pw"
            placeholder="Password"
            hasError={ formState.errors?.password?.message}
          />
           {errors?.password?}
           <FormError message={ formState.errors?.password?.message} />
          <Button type="submit" name="login_button" id="" value="Log in" disabled={!formState.isValid} />
           </form>
           <Seperator />
           <FacebookLogin>
               <FontAwesomeIcon icon={faFacebookSquare} />
               <span>Login in with Facebook</span>
           </FacebookLogin>
        </FormBox>
        <BottomBox
            message="Don't Have an account?"
            linkText="Sing Up"
            link={routes.signUp}
        />
    </Authlayout>
  );
}

export default Login;