import { InputText } from "./InputText";

export default {
  title: "Page Components/Input Text Box",
  component: InputText,
};

export const Primary = {
  args: {
    label: "Email",
  },
};

export const Password = {
  args: {
    password: true,
    label: "Password",
  },
};

export const Success = {
  args: {
    label: "Email",
    success: true,
  },
};

export const Error = {
  args: {
    label: "Email",
    error: true,
  },
};
