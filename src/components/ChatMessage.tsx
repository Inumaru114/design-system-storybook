import styled, { css } from "styled-components";

interface ChatMessageProps {
  sender?: "user" | "bot";
}

export const ChatMessage = styled.div<ChatMessageProps>`
  max-width: 70%;
  padding: 10px 14px;
  border-radius: 16px;
  margin: 6px 0;
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  line-height: 1.4;

  ${({ sender }) =>
    sender === "user"
      ? css`
          background-color: #eaf8de;
          color: #132a31;
          align-self: flex-end;
        `
      : css`
          background-color: #9aab89;
          color: #fefefe;
          align-self: flex-start;
        `}
`;
