import { HamburgerMenu } from "./HamburgerMenu";

export default {
  title: "Page Components/Hamburger Menu",
  component: HamburgerMenu,
};
export const Default = {
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
