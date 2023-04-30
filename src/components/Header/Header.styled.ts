import styled from "styled-components";

export const CompanyHeaderSection = styled.section`
  position: fixed;
  top: 0;
  margin: auto;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  background: var(--color-white);
  box-shadow: 1px 1px 1px var(--color-orange);
  z-index: 1;

  @media (max-width: 1024px) {
    position: relative;
  }
`;

export const CompanyHeaderUser = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const CompanyHeaderLeft = styled.form`
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  width: 500px;
  border-radius: 4px;
  padding-left: 20px;
  margin-bottom: 10px;

  :hover {
    outline: none;
    border-color: var(--color-orange);
    box-shadow: 0 0 5pt 0.5pt var(--color-orange);
  }

  :focus {
    outline: none;
    border-color: var(--color-orange);
    box-shadow: 0 0 5pt 0.5pt var(--color-orange);
  }

  @media (max-width: 1024px) {
    width: 250px;
    margin-right: 0px;
  }
`;
export const CompanyHeaderRight = styled.div`
  margin-left: 16px;
`;

export const CompanyHeaderSign = styled.div`
  order: 4;
  margin-right: 70px;

  @media (max-width: 650px) {
    margin-right: 20px;
  }
`;

// export const PhotoMainPage = styled.div`
//   background-color: gray;
//   width: auto;
//   height: 30%;
// `;
