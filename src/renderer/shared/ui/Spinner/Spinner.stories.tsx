import { Meta, StoryObj } from "@storybook/react";

import Text from "renderer/shared/ui/Text";

import Spinner from "./Spinner";
import css from "./Story.module.scss";

type Story = StoryObj<typeof meta>;

const meta = {
  title: "UI/Spinner",
  component: Spinner,
  tags: ["autodocs"],
} satisfies Meta<typeof Spinner>;

const spinnerTypes = [
  "bars",
  "oval",
  "puff",
  "rings",
  "ripple",
  "tail-spin",
] as const;

const Default: Story = {
  render: () => (
    <div className={css.Story}>
      {spinnerTypes.map((spinnerType) => (
        <div key={spinnerType} className={css.loader}>
          <Text>{spinnerType}</Text>
          <Spinner type={spinnerType} />
        </div>
      ))}
    </div>
  ),
};

export { Default };

export default meta;
