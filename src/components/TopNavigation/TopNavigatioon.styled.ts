import styled from "styled-components";

export const TopNavSection = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 10vh;
  margin: auto;

  @media (max-height: 650px) {
    height: 8vh;
  }

  @media (max-width: 650px) {
    margin-top: 10px;
    flex-direction: column;
  }
`;
