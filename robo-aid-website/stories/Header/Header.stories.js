import { Header } from "./Header";

export default {
  title: "Layout/Header",
  component: Header,
};

export const LoggedIn = {
  args: {
    user: {
      name: "Jane Doe",
    },
    menuItems: [
      {
        label: "Account",
        destination: "",
      },
      { label: "Instructions", destination: "" },
      { label: "Tournament", destination: "" },
    ],
  },
};

export const LoggedOut = {
  args: {
    menuItems: [
      {
        label: "Account",
        destination: "",
      },
      { label: "Instructions", destination: "" },
      { label: "Tournament", destination: "" },
    ],
  },
};
