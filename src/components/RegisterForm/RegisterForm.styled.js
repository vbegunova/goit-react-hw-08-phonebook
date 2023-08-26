import styled from 'styled-components';

export const FormContainer = styled.div`
  width: 300px;
`;

export const Form = styled.form`
  width: 300px;
  display: flex;
  flex-direction: column;

  label {
    font-size: 14px;
  }
`;

export const Input = styled.input`
  /* height: 25px; */
  margin-top: 3px;
  margin-bottom: 10px;
  border: 1px solid #bdbdbd;
  padding: 10px 12px;

  &:last-of-type {
    margin-bottom: 30px;
  }
`;

export const RegisterButton = styled.button`
  height: 50px;
  font-size: 16px;
  font-weight: 500;
  background-color: #e84a5f;
  border: none;
  color: #ffffff;
`;
