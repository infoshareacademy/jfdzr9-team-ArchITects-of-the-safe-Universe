import styled from "styled-components";

export const SingleCardSection = styled.div`
  padding: 1rem 3.2rem 3.2rem;
  position: relative;
  opacity: 1;
  /* background-color: var(--color-dark-grey); */
  ::before {
    content: "";
    position: absolute;
    margin: 10px;
    bottom: 0;
    left: 0;
    width: 100%;
    height: calc(115% - 3.5rem);

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
  flex-wrap: wrap;
  flex-shrink: 0;
  margin: 2%;
  img {
    width: 100%;
    height: 100%;
  }
`;

export const SingleCardInfo = styled.div`
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  padding: 0.2rem;
  gap: 1.2rem;
`;
