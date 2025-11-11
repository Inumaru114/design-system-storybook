import React from "react";
import styled from "styled-components";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  withMicrophone?: boolean;
  onMicrophoneClick?: () => void;
}

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const StyledInput = styled.input<{ $withMicrophone?: boolean }>`
  width: 100%;
  padding: 16px 20px;
  padding-right: ${({ $withMicrophone }) => ($withMicrophone ? "60px" : "20px")};
  border-radius: 50px;
  border: 1px solid #758664;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  color: #132a31;
  background-color: #eaf8de;
  transition: all 0.2s ease;

  &::placeholder {
    color: #758664;
  }

  &:focus {
    outline: none;
    border-color: #9aab89;
    box-shadow: 0 0 0 2px rgba(154, 171, 137, 0.3);
  }
`;

const MicrophoneButton = styled.button`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: none;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }

  &:active {
    transform: translateY(-50%) scale(0.95);
  }
`;

const MicrophoneIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 15C13.6569 15 15 13.6569 15 12V6C15 4.34315 13.6569 3 12 3C10.3431 3 9 4.34315 9 6V12C9 13.6569 10.3431 15 12 15Z"
      stroke="#132A31"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M19 10V12C19 15.866 15.866 19 12 19C8.13401 19 5 15.866 5 12V10"
      stroke="#132A31"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 19V23"
      stroke="#132A31"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Input: React.FC<InputProps> = ({
  withMicrophone = false,
  onMicrophoneClick,
  ...props
}) => {
  return (
    <InputWrapper>
      <StyledInput $withMicrophone={withMicrophone} {...props} />
      {withMicrophone && (
        <MicrophoneButton onClick={onMicrophoneClick} type="button">
          <MicrophoneIcon />
        </MicrophoneButton>
      )}
    </InputWrapper>
  );
};
