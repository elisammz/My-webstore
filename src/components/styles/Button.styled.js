import styled from "styled-components";

const Button = styled.button`
  background: rgb(71, 98, 255);
  background: linear-gradient(
    90deg,
    rgba(71, 98, 255, 1) 0%,
    rgba(255, 121, 142, 1) 100%
  );
  border-radius: 50px;
  border-color: white;
  color: white;
  font-size: 18px;
  padding: 15px 40px;
  cursor: pointer;

  &:hover {
    background: rgb(255, 121, 142);
    background: linear-gradient(
      90deg,
      rgba(255, 121, 142, 1) 0%,
      rgba(71, 98, 255, 1) 100%
    );
  }
`;

export default Button;
