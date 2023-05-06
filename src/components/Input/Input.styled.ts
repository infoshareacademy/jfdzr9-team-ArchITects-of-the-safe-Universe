import styled from "styled-components";

export const InputField = styled.input`
  border: none;
  height: 35px;
  width: 220px;
  outline: none;
  font-size: 16px;
  padding-left: 25px;
  box-shadow: border-box;
  /* border: 1px solid lightgray; */
  border-radius: 5px;

  :hover {
    outline: none;
    /* box-shadow: 0 0 5pt 0.5pt #d3d3d3; */
  }
  :focus {
    /* box-shadow: 0 0 5pt 2pt #f5f5f5; */
    outline-width: 0px;
  }
`;

export const InputLabel = styled.label`
  position: relative;
  display: flex;
  align-items: center;

  @media (max-width: 1024px) {
    height: 35px;
  }
`;
