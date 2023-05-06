import styled from "styled-components";

export const OneSingleProductStyle = styled.div`
  display: flex;
  padding: 20px;
  margin: 50px 50px;
  border-radius: 30px;
  align-items: center;
  justify-content: space-around;
  flex-wrap: nowrap;
  background-color: var(--color-very-light-grey);

  @media (max-width: 650px) {
    flex-direction: column;
    align-items: center;
    width: 80%;
    margin: auto;
    margin-bottom: 20px;
    gap: 10px;
    border-radius: 20px;
  }
`;

export const OneSingleProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 10px;
  border-radius: 20px;
  background-color: white;
  gap: 5px;

  @media (max-width: 650px) {
    width: 90%;

    h3 {
      font-size: 1.2rem;
    }

    h4 {
      font-size: 1rem;
    }
    p {
      font-size: 0.8rem;
    }
  }
`;

export const AllPhotos = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  border-radius: 20px;

  img {
    border-radius: 20px;
    width: 300px;
    height: auto;

    @media (max-width: 650px) {
      width: 200px;
    }
  }
`;
