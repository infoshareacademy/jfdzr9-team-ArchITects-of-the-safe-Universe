import styled from "styled-components";

export const UserDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`;

export const UserDataForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  margin-top: 15px;
`;

export const EmptyDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;

export const UserDataInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  & > .info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
    margin-bottom: 10px;
  }

  & > .buttons {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    & > button {
      display: block;
      margin-bottom: 10px;
    }
  }
`;
