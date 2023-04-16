import styled from "styled-components";

export const CompanyHeaderSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  height: 8vh;
  background: var(--color-white);
  box-shadow: 1px 1px 1px var(--color-orange);

  @media (max-width: 48.12em) {
    box-shadow: none;
  }
`;
export const CompanyHeaderLogo = styled.div`
  /* order: 1; */
`;

// export const CompanyHeaderSearch = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   margin-right: 100px;
// `;

export const CompanyHeaderUser = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const CompanyHeaderLeft = styled.form`
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  height: 44px;
  width: 500px;
  border-radius: 4px;
  padding-left: 20px;
  margin-bottom: 10px;

  @media (max-width: 40em) {
    width: 250px;
    margin-top: 15px;
    margin-right: 0px;
  }
`;
export const CompanyHeaderRight = styled.div`
  margin-left: 16px;
`;

export const CompanyHeaderSign = styled.div`
  order: 4;
`;

// export const PhotoMainPage = styled.div`
//   background-color: gray;
//   width: auto;
//   height: 30%;
// `;
