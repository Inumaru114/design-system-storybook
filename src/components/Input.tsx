import styled from "styled-components";

export const Input = styled.input`
  width: 100%;
  padding: 10px 14px;
  border-radius: 8px;
  border: 1px solid #758664;
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  color: #132a31;
  background-color: #eaf8de;

  &:focus {
    outline: none;
    border-color: #9aab89;
    box-shadow: 0 0 0 2px rgba(154, 171, 137, 0.3);
  }
`;
