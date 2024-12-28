import styled from "styled-components";

const StyledButton = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== "primary",
})`
  background: ${({ primary }) => (primary ? "blue" : "red")};
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background: ${({ primary }) => (primary ? "darkblue" : "darkred")};
  }
`;

const App = () => {
  return (
    <div>
      <StyledButton primary={true} onClick={() => alert("Primary Button")}>
        Primary Button
      </StyledButton>
      <StyledButton primary={false} onClick={() => alert("Secondary Button")}>
        Secondary Button
      </StyledButton>
    </div>
  );
};

export default App;
