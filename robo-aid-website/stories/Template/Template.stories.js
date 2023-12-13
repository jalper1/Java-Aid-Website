// This story file has no direct effect on your React component, its just mock-running your component

// Actually import your jsx file, make sure you use the file path for yours
import { Template } from "./Template";

export default {
  // Name the component and what folder its part of on storyboard
  title: "Template/Template",
  // Define what component you're importing for the stories
  component: Template,
};

// You must have a default story always, but you can add more
export const Default = {};

// You use each of these different "stories" to showcase different states for your component
// ex: A big button and a small button
export const ExampleOne = {
  // Tell storybook that you're defining the inputs for your components props
  args: {
    // Define what your components props will be
    text: "I'm in the ExampleOne story",
  },
};
