import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";

const meta: Meta<typeof Card> = {
  title: "Componentes/Card",
  component: Card,
};
export default meta;

export const Padrao: StoryObj = {
  render: () => <Card>Exemplo de conteúdo dentro de um card.</Card>,
};
