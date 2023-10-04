/* eslint-disable react-hooks/rules-of-hooks */
import { Meta, StoryObj } from "@storybook/react";
import axios from "axios";
import { useEffect, useState } from "react";

import Search from "./Search";
import { Character, ServerResponse } from "./Search.type";
import css from "./Story.module.scss";

type Story = StoryObj<typeof meta>;

const meta = {
  title: "UI/Search",
  component: Search,
  parameters: {
    componentSubtitle: "Subtitle goes here",
  },
} satisfies Meta<typeof Search>;

const Default: Story = {
  args: {
    getActiveOption: () => false,
    getOptionLabel: () => null,
    options: [],
    searchValue: "",
  },
  render: (args) => {
    const [selectedOption, setSelectedOption] = useState<string>();
    const [searchValue, setSearchValue] = useState<string>();

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

    const options = states.filter((state) => {
      if (!searchValue) {
        return true;
      }

      const regex = new RegExp(searchValue, "i");

      return regex.test(state);
    });

    return (
      <div className={css.Story}>
        <Search
          {...args}
          options={options}
          getOptionLabel={getOptionLabel}
          getActiveOption={getActiveOption}
          onChange={setSelectedOption}
          onSearch={setSearchValue}
          searchValue={searchValue}
          value={selectedOption}
        />
      </div>
    );
  },
};

const Async: Story = {
  args: {
    getActiveOption: () => false,
    getOptionLabel: () => null,
    options: [],
    searchValue: "",
  },
  render: (args) => {
    const baseUrl = "https://rickandmortyapi.com/api/character";
    const [selectedOption, setSelectedOption] = useState<Character>();
    const [searchValue, setSearchValue] = useState<string>();
    const [characters, setCharacters] = useState<Character[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    const searchCharacters = async (search?: string) => {
      try {
        setIsLoading(true);

        const params = { name: search };
        const { data } = await axios.get<ServerResponse>(baseUrl, { params });

        setCharacters(data.results);
      } catch (e) {
        console.error(e);
      } finally {
        setIsLoading(false);
      }
    };

    useEffect(() => {
      searchCharacters(searchValue);
    }, [searchValue]);

    const getOptionLabel = (value?: Character) => {
      if (!value) {
        return null;
      }

      return (
        <div className={css.option}>
          <img src={value.image} alt={value.name} />
          {value.name}
        </div>
      );
    };

    const getActiveOption = (value: Character) =>
      value.id === selectedOption?.id;

    return (
      <div className={css.Story}>
        <Search
          {...args}
          isLoading={isLoading}
          options={characters}
          getOptionLabel={getOptionLabel}
          getActiveOption={getActiveOption}
          onChange={setSelectedOption}
          onSearch={setSearchValue}
          searchValue={searchValue}
          value={selectedOption}
        />
      </div>
    );
  },
};

export { Default, Async };

export default meta;
