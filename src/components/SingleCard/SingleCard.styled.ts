import styled from "styled-components";

export const SingleCardSection = styled.article`
  padding: 1rem 3.2rem 3.2rem;
  position: relative;
  opacity: 1;
  ::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: calc(100% - 3.5rem);
    background-color: var(--color-very-light-grey);
    border-radius: 10px;
    transition: 0.2s linear;
  }
  > * {
    position: relative;
  }
`;

export const SingleCardImage = styled.div`
  display: grid;
  place-items: center;
  flex-shrink: 0;
  img {
    width: 80%;
    height: 80%;
  }
`;

export const SingleCardInfo = styled.div`
  display: flex;
  align-items: baseline;
  gap: 1.2rem;
`;
