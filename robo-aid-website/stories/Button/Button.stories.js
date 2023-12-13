import { Button } from "./Button";

export default {
  title: "Page Components/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};
export const Primary = {
  args: {
    primary: true,
    label: "Button",
  },
};

export const Secondary = {
  args: {
    label: "Button",
  },
};

export const Large = {
  args: {
    size: "large",
    label: "Button",
  },
};

export const Small = {
  args: {
    size: "small",
    label: "Button",
  },
};

export const Disabled = {
  args: {
    disabled: true,
    label: "Button",
    primary: true,
  },
};
