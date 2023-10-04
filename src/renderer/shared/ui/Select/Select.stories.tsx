/* eslint-disable react-hooks/rules-of-hooks */
import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import Select from "./Select";
import css from "./Story.module.scss";

type Story = StoryObj<typeof meta>;

const meta = {
  title: "UI/Select",
  component: Select,
  tags: ["autodocs"],
} satisfies Meta<typeof Select>;

const Default: Story = {
  args: {
    getActiveOption: () => false,
    getOptionLabel: () => null,
    options: [],
  },
  render: (args) => {
    const [selectedOption, setSelectedOption] = useState<string>();

    const states = [
      "Alabama",
      "Alaska",
      "Arizona",
      "Arkansas",
      "California",
      "Colorado",
      "Connecticut",
      "Delaware",
      "Florida",
      "Georgia",
      "Hawaii",
      "Idaho",
      "Illinois",
      "Indiana",
      "Iowa",
      "Kansas",
      "Kentucky",
      "Louisiana",
      "Maine",
      "Maryland",
      "Massachusetts",
      "Michigan",
      "Minnesota",
      "Mississippi",
      "Missouri",
      "Montana",
      "Nebraska",
      "Nevada",
      "New Hampshire",
      "New Jersey",
      "New Mexico",
      "New York",
      "North Carolina",
      "North Dakota",
      "Ohio",
      "Oklahoma",
      "Oregon",
      "Pennsylvania",
      "Rhode Island",
      "South Carolina",
      "South Dakota",
      "Tennessee",
      "Texas",
      "Utah",
      "Vermont",
      "Virginia",
      "Washington",
      "West Virginia",
      "Wisconsin",
      "Wyoming",
    ];

    const getOptionLabel = (value?: string) => value ?? "";
    const getActiveOption = (value: string) => value === selectedOption;

    return (
      <div className={css.Story}>
        <Select
          {...args}
          options={states}
          getOptionLabel={getOptionLabel}
          getActiveOption={getActiveOption}
          onChange={setSelectedOption}
          value={selectedOption}
        />
      </div>
    );
  },
};

export { Default };

export default meta;
