import styled from 'styled-components';

export const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  height: 100%;
  border: 2px solid yellow;
  border-radius: 30px;
  padding-bottom: 20px;
  margin-bottom: 40px;

  img {
    width: 300px;
    margin: 50px auto;
    display: block;
    border-radius: 50%;
  }

  span {
    display: flex;
    font-family: 'Chango', cursive;
    justify-content: center;
    span {
      padding-left: 4px;
    }
  }
  .pt-3 {
    padding-top: 10px;
  }
  p {
    text-align: center;
  }
`;

export const Infos = styled.div`
  max-width: 800px;
  margin: 30px auto;

  .title {
    margin-bottom: 40px;
    font-family: 'Chango', cursive;
    text-transform: uppercase;
    color: #d1232a;
  }

  div {
    display: flex;
    justify-content: space-between;
    div {
      display: block;

      span {
        font-family: 'Lobster', cursive;
        text-transform: uppercase;
        &:last-child {
          font-family: 'Chango', cursive;
          color: yellow;
          margin-top: 15px;
        }
      }

      .d-flex {
        display: flex;
      }

      svg {
        font-size: 30px;
        margin: 10px auto;
        display: block;
        color: #d1232a;
      }
    }
  }

  & + div {
    margin-top: 70px;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 30px auto 0 auto;
  div {
    width: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      margin: 0;
      width: 100%;
    }
    span {
      font-family: 'Lobster Two', cursive;
      font-size: 25px;
      color: yellow;
      position: relative;
      left: 25px;
      top: -30px;
      transform: rotate(-8deg);
    }
  }
  a {
    text-decoration: none;
    display: flex;
    align-items: center;
    &:hover {
      opacity: 0.8;
    }

    span {
      font-family: 'Lobster Two', cursive !important;
      font-size: 24px;
      color: yellow;
      margin-left: 10px;
    }
    svg {
      color: yellow;
    }
  }
`;
