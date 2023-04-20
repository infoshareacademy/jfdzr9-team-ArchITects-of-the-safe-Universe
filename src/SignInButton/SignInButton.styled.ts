import styled from "styled-components";

export const UserOptionsContainer = styled.div<{ isMobile?: boolean }>`
  position: absolute;
  top: 65px;
  right: 0;
  padding: 10px;
  border: 1px solid var(--color-grey);
  background-color: white;
  border-radius: 10px;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${({ isMobile }) =>
    isMobile &&
    `
    max-width: 100vw;
    max-height: 100vh;
  `}

  button {
    margin-top: 10px;
  }

  .close-button {
    position: absolute;
    top: -5px;
    left: 10px;
    width: 30px;
    height: 30px;
    background-color: transparent;
    border: none;
    cursor: pointer;

    &:before,
    &:after {
      position: absolute;
      top: 50%;
      left: 50%;
      content: "";
      height: 2px;
      width: 15px;
      background-color: black;
    }

    &:before {
      transform: translate(-50%, -50%) rotate(45deg);
    }

    &:after {
      transform: translate(-50%, -50%) rotate(-45deg);
    }
  }

  .user-info {
    display: flex;
    align-items: center;
  }

  .user-info div:first-child {
    margin-right: 10px;
  }

  .options {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
