import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";

const meta: Meta<typeof Input> = {
  title: "Componentes/Input",
  component: Input,
};
export default meta;

export const Padrao: StoryObj = {
  render: () => <Input placeholder="Digite aqui..." />,
};
