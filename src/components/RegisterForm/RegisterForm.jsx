import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import {
  Form,
  Input,
  RegisterButton,
  FormContainer,
} from './RegisterForm.styled';

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <label htmlFor="name-input">Username</label>
        <Input type="text" name="name" id="name-input" />

        <label htmlFor="email-input">Email</label>
        <Input type="email" name="email" id="email-input" />

        <label htmlFor="password-input">Password</label>
        <Input type="password" name="password" id="password-input" />

        <RegisterButton type="submit">Register</RegisterButton>
      </Form>
    </FormContainer>
  );
};

export default RegisterForm;
