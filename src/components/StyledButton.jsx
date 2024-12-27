import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background-color: ${(props) => (props.primary ? "#4caf50" : "#f44336")};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin: 5px;

  &:hover {
    background-color: ${(props) => (props.primary ? "#45a049" : "#d32f2f")};
  }
`;

const StyledButton = () => (
  <div>
    <Button primary>Primary Button</Button>
    <Button>Secondary Button</Button>
  </div>
);

export default StyledButton;
