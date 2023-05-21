import styled from "styled-components";

export const ButtonM = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: var(--color-light-grey);
  color: var(--color-dark-grey);
  font-weight: 600;
  border: none;
  border-radius: 20px;
  padding: 10px 20px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  font-weight: bold;

  :hover {
    cursor: pointer;
    background-color: var(--color-orange);
    color: #7e4d20;
  }
`;

export const GoogleIcon = styled.img`
  width: 30px;
  height: 30px;
`;
