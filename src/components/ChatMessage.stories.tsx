import type { Meta, StoryObj } from "@storybook/react";
import { ChatMessage } from "./ChatMessage";

const meta: Meta<typeof ChatMessage> = {
  title: "Componentes/ChatMessage",
  component: ChatMessage,
};
export default meta;

export const Bot: StoryObj = {
  render: () => <ChatMessage sender="bot">Olá! Posso te ajudar?</ChatMessage>,
};

export const Usuario: StoryObj = {
  render: () => <ChatMessage sender="user">Sim, por favor!</ChatMessage>,
};
