import LoginForm from 'components/LoginForm';
import { Title } from 'pages/Register/Register.styled';
import { LoginContainer } from './Login.styled';

const Login = () => {
  return (
    <LoginContainer>
      <Title>Login</Title>
      <LoginForm />
    </LoginContainer>
  );
};

export default Login;
