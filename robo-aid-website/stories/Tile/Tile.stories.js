import { Tile } from "./Tile";

export default {
  title: "Maze Components/Tile",
  component: Tile,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const Empty = {};

export const Wall = {
  args: {
    isWall: true,
  },
};

export const Goal = {
  args: {
    isGoal: true,
  },
};
