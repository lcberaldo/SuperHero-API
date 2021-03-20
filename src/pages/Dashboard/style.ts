import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
  hasError: boolean;
}

export const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  height: 100%;

  img {
    width: 300px;
    margin: 30px auto;
    display: block;
  }
`;

export const HeaderLogo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Form = styled.form<FormProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;
  width: 100%;

  align-items: center;

  ${props =>
    props.hasError &&
    css`
      border-color: #c53030;
    `}

  input {
    height: 70px;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    border: none;
    padding: 20px;
    flex: 1;
  }
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 5px;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    border: none;
    width: 20%;
    background-color: red;
    color: white;
    font-weight: bold;
    height: 71px;

    &:hover {
      background: ${shade(0.2, 'red')};
    }
  }
`;

export const CharBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
  flex-wrap: wrap;

  a {
    width: 32%;
    background: #c3c3c3;
    border-radius: 8px;
    padding-bottom: 30px;
    text-decoration: none;
    color: #000;
    font-family: 'Chango', cursive;
    margin-bottom: 30px;
    transition: top 0.5s ease-in-out;
    position: relative;

    &:hover {
      transition: top 0.5s ease-in-out;
      top: 5px;
    }

    img {
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
      width: 100%;
      margin: 0;
      height: 430px;
    }

    span {
      padding: 20px 20px 0 20px;
      font-size: 20px;
      display: block;
      text-align: center;
    }
    p {
      padding: 20px;
      padding-bottom: 0;
      font-size: 14px;
      font-family: cursive;
      text-align: center;
    }
  }
`;

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 8px;
`;
