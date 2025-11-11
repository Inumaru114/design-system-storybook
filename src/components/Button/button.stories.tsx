import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    docs: {
      description: {
        component: `
Botão principal do Design System, que inclui:
- **Large:** ações principais, mais arredondado;
- **Small:** confirmações e envios;
- **Toggle:** controle de dois estados (ativado/desativado) estilo iOS.
        `,
      },
    },
  },
  argTypes: {
    type: {
      control: "select",
      options: ["large", "small", "toggle", "menu"],
      description: "Define o tipo de botão ou controle.",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Large: Story = {
  args: {
    label: "Confirmar",
    type: "large",
  },
};

export const Small: Story = {
  args: {
    label: "Enviar",
    type: "small",
  },
};

export const ToggleOff: Story = {
  args: {
    type: "toggle",
    toggled: false,
  },
};

export const ToggleOn: Story = {
  args: {
    type: "toggle",
    toggled: true,
  },
};

export const Menu: Story = {
  args: {
    type: "menu",
  },
};
