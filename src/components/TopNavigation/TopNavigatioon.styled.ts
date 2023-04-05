import styled from "styled-components";

export const TopNavSection = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 10vh;
  width: 80%;
  margin: auto;
  margin-bottom: 10px;

  @media (max-width: 40em) {
    flex-direction: column;
  }
`;
