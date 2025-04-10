import styled from "@emotion/styled";

export const StyledButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  background-color: aliceblue;
  color: black;
`;

export const StyledText = styled.p`
  font-size: 32px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & > div {
    display: flex;
    gap: 5px;
  }
`;
