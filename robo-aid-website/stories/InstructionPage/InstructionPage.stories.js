import { InstructionPage } from "./InstructionPage";

export default {
  title: "Page Components/Instruction Tooltip",
  component: InstructionPage,
  parameters: {
    layout: "centered",
  },
};

export const Default = {
  args: {
    instructions: [
      "Set CSS for JavaScript tooltips according to your placement preferences.",
      "Create Java Swing tooltips using the setToolTipText method.",
      "Center a CSS tooltip above/below text by adjusting its position.",
      "Ensure your HTML/CSS tooltip appears above other elements and doesn't get cut off.",
      "Building custom tooltip components in HTML/CSS or JavaScript allows more control over their behavior.",
    ],
    openDirection: "down-right",
  },
};
export const DownLeft = {
  args: {
    instructions: [
      "Set CSS for JavaScript tooltips according to your placement preferences.",
      "Create Java Swing tooltips using the setToolTipText method.",
      "Center a CSS tooltip above/below text by adjusting its position.",
      "Ensure your HTML/CSS tooltip appears above other elements and doesn't get cut off.",
      "Building custom tooltip components in HTML/CSS or JavaScript allows more control over their behavior.",
    ],
    openDirection: "down-left",
  },
};
export const UpRight = {
  args: {
    instructions: [
      "Set CSS for JavaScript tooltips according to your placement preferences.",
      "Create Java Swing tooltips using the setToolTipText method.",
      "Center a CSS tooltip above/below text by adjusting its position.",
      "Ensure your HTML/CSS tooltip appears above other elements and doesn't get cut off.",
      "Building custom tooltip components in HTML/CSS or JavaScript allows more control over their behavior.",
    ],
    openDirection: "up-right",
  },
};
export const UpLeft = {
  args: {
    instructions: [
      "Set CSS for JavaScript tooltips according to your placement preferences.",
      "Create Java Swing tooltips using the setToolTipText method.",
      "Center a CSS tooltip above/below text by adjusting its position.",
      "Ensure your HTML/CSS tooltip appears above other elements and doesn't get cut off.",
      "Building custom tooltip components in HTML/CSS or JavaScript allows more control over their behavior.",
    ],
    openDirection: "up-left",
  },
};
