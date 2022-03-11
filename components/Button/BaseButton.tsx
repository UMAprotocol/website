import styled from "@emotion/styled";

export const BaseButton = styled.button`
  display: block;
  padding: 0;
  margin: 0;
  border: none;
  cursor: pointer;
  text-align: left;
  background: transparent;
  font-size: inherit;
  &:focus {
    outline-offset: 2px;
  }
  &:focus:not(:focus-visible) {
    outline: none;
  }
`;
