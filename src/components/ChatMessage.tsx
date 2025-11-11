import React from "react";
import styled, { css } from "styled-components";

interface ChatMessageProps {
  sender?: "user" | "bot";
  children: React.ReactNode;
}

const MessageWrapper = styled.div<{ sender?: "user" | "bot" }>`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin: 12px 0;
  ${({ sender }) =>
    sender === "user"
      ? css`
          flex-direction: row-reverse;
          justify-content: flex-start;
        `
      : css`
          flex-direction: row;
        `}
`;

const Avatar = styled.div`
  min-width: 50px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #758664;
  border: 3px solid #9aab89;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const RobotFace = styled.div`
  width: 28px;
  height: 20px;
  background-color: #132a31;
  border-radius: 8px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  &::before,
  &::after {
    content: "";
    width: 4px;
    height: 4px;
    background-color: #9aab89;
    border-radius: 50%;
  }

  &::after {
    position: absolute;
    bottom: 4px;
    left: 50%;
    transform: translateX(-50%);
    width: 12px;
    height: 3px;
    border-radius: 2px;
    background-color: #ffa500;
  }
`;

const MessageBubble = styled.div<{ sender?: "user" | "bot" }>`
  max-width: 70%;
  padding: 14px 18px;
  border-radius: 20px;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  line-height: 1.5;

  ${({ sender }) =>
    sender === "user"
      ? css`
          background-color: #eaf8de;
          color: #132a31;
        `
      : css`
          background-color: #9aab89;
          color: #fefefe;
        `}
`;

export const ChatMessage: React.FC<ChatMessageProps> = ({
  sender = "bot",
  children,
}) => {
  return (
    <MessageWrapper sender={sender}>
      {sender === "bot" && (
        <Avatar>
          <RobotFace />
        </Avatar>
      )}
      <MessageBubble sender={sender}>{children}</MessageBubble>
    </MessageWrapper>
  );
};
