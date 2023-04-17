import styled from "styled-components";

export const CompanyHeaderSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  height: 70px;
  background: var(--color-white);
  box-shadow: 1px 1px 1px var(--color-orange);

  @media (max-width: 1024px) {
    box-shadow: none;
  }
`;
export const CompanyHeaderLogo = styled.div``;

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
`;

// export const PhotoMainPage = styled.div`
//   background-color: gray;
//   width: auto;
//   height: 30%;
// `;
