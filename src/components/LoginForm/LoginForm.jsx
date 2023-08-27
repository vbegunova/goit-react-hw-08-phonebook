import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Form, Input, LoginButton } from './LoginForm.styled';

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <label htmlFor="email-input">Email</label>
      <Input type="email" name="email" id="email-input" />

      <label htmlFor="password-input">Password</label>
      <Input type="password" name="password" id="password-input" />

      <LoginButton type="submit">Log In</LoginButton>
    </Form>
  );
};

export default LoginForm;
