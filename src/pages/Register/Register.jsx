import RegisterForm from 'components/RegisterForm/RegisterForm';
import { RegisterContainer, Title } from './Register.styled';

const Register = () => {
  return (
    <RegisterContainer>
      <Title>Register</Title>
      <RegisterForm />
    </RegisterContainer>
  );
};

export default Register;
