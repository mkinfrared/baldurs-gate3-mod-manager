/* eslint-disable react-hooks/rules-of-hooks */
import { Meta, StoryObj } from "@storybook/react";
import { createRef, useRef, useState } from "react";

import Button from "renderer/shared/ui/Button";
import MenuItem from "renderer/shared/ui/MenuItem";

import Menu from "./Menu";
import css from "./Story.module.scss";

type Story = StoryObj<typeof meta>;

const meta = {
  title: "UI/Menu",
  component: Menu,
  tags: ["autodocs"],
} satisfies Meta<typeof Menu>;

const Default: Story = {
  args: {
    id: "marklar",
    comboboxRef: createRef(),
  },
  render: ({ id }) => {
    const [showMenu, setShowMenu] = useState(false);
    const ref = useRef<HTMLButtonElement>(null);

    const toggleMenu = () => {
      setShowMenu((prevState) => !prevState);
    };

    return (
      <div className={css.Story}>
        <Button buttonRef={ref} onClick={toggleMenu}>
          Show
        </Button>
        {showMenu && (
          <Menu id={id} comboboxRef={ref} onClose={() => setShowMenu(false)}>
            <MenuItem value={1}>Foobar-Lorem-ipsum-dolor-set-amet-1</MenuItem>
            <MenuItem value={2}>Foobar-Lorem-ipsum-dolor-set-amet-2</MenuItem>
            <MenuItem value={3}>Foobar-Lorem-ipsum-dolor-set-amet-3</MenuItem>
            <MenuItem value={4}>Foobar-Lorem-ipsum-dolor-set-amet-4</MenuItem>
            <MenuItem value={5}>Foobar-Lorem-ipsum-dolor-set-amet-5</MenuItem>
            <MenuItem value={6}>Foobar-Lorem-ipsum-dolor-set-amet-6</MenuItem>
            <MenuItem value={7}>Foobar-Lorem-ipsum-dolor-set-amet-7</MenuItem>
            <MenuItem value={8}>Foobar-Lorem-ipsum-dolor-set-amet-8</MenuItem>
            <MenuItem value={9}>Foobar-Lorem-ipsum-dolor-set-amet-9</MenuItem>
            <MenuItem value={10}>Foobar-Lorem-ipsum-dolor-set-amet-10</MenuItem>
            <MenuItem value={11}>Foobar-Lorem-ipsum-dolor-set-amet-11</MenuItem>
            <MenuItem value={12}>Foobar-Lorem-ipsum-dolor-set-amet-12</MenuItem>
            <MenuItem value={13}>Foobar-Lorem-ipsum-dolor-set-amet-13</MenuItem>
            <MenuItem value={14}>Foobar-Lorem-ipsum-dolor-set-amet-14</MenuItem>
            <MenuItem value={15}>Foobar-Lorem-ipsum-dolor-set-amet-15</MenuItem>
            <MenuItem value={16}>Foobar-Lorem-ipsum-dolor-set-amet-16</MenuItem>
            <MenuItem value={17}>Foobar-Lorem-ipsum-dolor-set-amet-17</MenuItem>
            <MenuItem value={18}>Foobar-Lorem-ipsum-dolor-set-amet-18</MenuItem>
            <MenuItem value={19}>Foobar-Lorem-ipsum-dolor-set-amet-19</MenuItem>
            <MenuItem value={20}>Foobar-Lorem-ipsum-dolor-set-amet-20</MenuItem>
            <MenuItem value={21}>Foobar-Lorem-ipsum-dolor-set-amet-21</MenuItem>
            <MenuItem value={22}>Foobar-Lorem-ipsum-dolor-set-amet-22</MenuItem>
            <MenuItem value={23}>Foobar-Lorem-ipsum-dolor-set-amet-23</MenuItem>
            <MenuItem value={24}>Foobar-Lorem-ipsum-dolor-set-amet-24</MenuItem>
            <MenuItem value={25}>Foobar-Lorem-ipsum-dolor-set-amet-25</MenuItem>
            <MenuItem value={26}>Foobar-Lorem-ipsum-dolor-set-amet-26</MenuItem>
            <MenuItem value={27}>Foobar-Lorem-ipsum-dolor-set-amet-27</MenuItem>
            <MenuItem value={28}>Foobar-Lorem-ipsum-dolor-set-amet-28</MenuItem>
            <MenuItem value={29}>Foobar-Lorem-ipsum-dolor-set-amet-29</MenuItem>
            <MenuItem value={30}>Foobar-Lorem-ipsum-dolor-set-amet-30</MenuItem>
            <MenuItem value={31}>Foobar-Lorem-ipsum-dolor-set-amet-31</MenuItem>
            <MenuItem value={32}>Foobar-Lorem-ipsum-dolor-set-amet-32</MenuItem>
            <MenuItem value={33}>Foobar-Lorem-ipsum-dolor-set-amet-33</MenuItem>
            <MenuItem value={34}>Foobar-Lorem-ipsum-dolor-set-amet-34</MenuItem>
            <MenuItem value={35}>Foobar-Lorem-ipsum-dolor-set-amet-35</MenuItem>
            <MenuItem value={36}>Foobar-Lorem-ipsum-dolor-set-amet-36</MenuItem>
            <MenuItem value={37}>Foobar-Lorem-ipsum-dolor-set-amet-37</MenuItem>
            <MenuItem value={38}>Foobar-Lorem-ipsum-dolor-set-amet-38</MenuItem>
            <MenuItem value={39}>Foobar-Lorem-ipsum-dolor-set-amet-39</MenuItem>
            <MenuItem value={40}>Foobar-Lorem-ipsum-dolor-set-amet-40</MenuItem>
            <MenuItem value={41}>Foobar-Lorem-ipsum-dolor-set-amet-41</MenuItem>
            <MenuItem value={42}>Foobar-Lorem-ipsum-dolor-set-amet-42</MenuItem>
            <MenuItem value={43}>Foobar-Lorem-ipsum-dolor-set-amet-43</MenuItem>
            <MenuItem value={44}>Foobar-Lorem-ipsum-dolor-set-amet-44</MenuItem>
            <MenuItem value={45}>Foobar-Lorem-ipsum-dolor-set-amet-45</MenuItem>
            <MenuItem value={46}>Foobar-Lorem-ipsum-dolor-set-amet-46</MenuItem>
            <MenuItem value={47}>Foobar-Lorem-ipsum-dolor-set-amet-47</MenuItem>
            <MenuItem value={48}>Foobar-Lorem-ipsum-dolor-set-amet-48</MenuItem>
            <MenuItem value={49}>Foobar-Lorem-ipsum-dolor-set-amet-49</MenuItem>
            <MenuItem value={50}>Foobar-Lorem-ipsum-dolor-set-amet-50</MenuItem>
            <MenuItem value={51}>Foobar-Lorem-ipsum-dolor-set-amet-51</MenuItem>
            <MenuItem value={52}>Foobar-Lorem-ipsum-dolor-set-amet-52</MenuItem>
            <MenuItem value={53}>Foobar-Lorem-ipsum-dolor-set-amet-53</MenuItem>
            <MenuItem value={54}>Foobar-Lorem-ipsum-dolor-set-amet-54</MenuItem>
            <MenuItem value={55}>Foobar-Lorem-ipsum-dolor-set-amet-55</MenuItem>
            <MenuItem value={56}>Foobar-Lorem-ipsum-dolor-set-amet-56</MenuItem>
            <MenuItem value={57}>Foobar-Lorem-ipsum-dolor-set-amet-57</MenuItem>
            <MenuItem value={58}>Foobar-Lorem-ipsum-dolor-set-amet-58</MenuItem>
            <MenuItem value={59}>Foobar-Lorem-ipsum-dolor-set-amet-59</MenuItem>
            <MenuItem value={60}>Foobar-Lorem-ipsum-dolor-set-amet-60</MenuItem>
            <MenuItem value={61}>Foobar-Lorem-ipsum-dolor-set-amet-61</MenuItem>
            <MenuItem value={62}>Foobar-Lorem-ipsum-dolor-set-amet-62</MenuItem>
            <MenuItem value={63}>Foobar-Lorem-ipsum-dolor-set-amet-63</MenuItem>
            <MenuItem value={64}>Foobar-Lorem-ipsum-dolor-set-amet-64</MenuItem>
            <MenuItem value={65}>Foobar-Lorem-ipsum-dolor-set-amet-65</MenuItem>
            <MenuItem value={66}>Foobar-Lorem-ipsum-dolor-set-amet-66</MenuItem>
            <MenuItem value={67}>Foobar-Lorem-ipsum-dolor-set-amet-67</MenuItem>
            <MenuItem value={68}>Foobar-Lorem-ipsum-dolor-set-amet-68</MenuItem>
            <MenuItem value={69}>Foobar-Lorem-ipsum-dolor-set-amet-69</MenuItem>
            <MenuItem value={70}>Foobar-Lorem-ipsum-dolor-set-amet-70</MenuItem>
            <MenuItem value={71}>Foobar-Lorem-ipsum-dolor-set-amet-71</MenuItem>
            <MenuItem value={72}>Foobar-Lorem-ipsum-dolor-set-amet-72</MenuItem>
            <MenuItem value={73}>Foobar-Lorem-ipsum-dolor-set-amet-73</MenuItem>
            <MenuItem value={74}>Foobar-Lorem-ipsum-dolor-set-amet-74</MenuItem>
            <MenuItem value={75}>Foobar-Lorem-ipsum-dolor-set-amet-75</MenuItem>
            <MenuItem value={76}>Foobar-Lorem-ipsum-dolor-set-amet-76</MenuItem>
            <MenuItem value={77}>Foobar-Lorem-ipsum-dolor-set-amet-77</MenuItem>
            <MenuItem value={78}>Foobar-Lorem-ipsum-dolor-set-amet-78</MenuItem>
            <MenuItem value={79}>Foobar-Lorem-ipsum-dolor-set-amet-79</MenuItem>
            <MenuItem value={80}>Foobar-Lorem-ipsum-dolor-set-amet-80</MenuItem>
            <MenuItem value={81}>Foobar-Lorem-ipsum-dolor-set-amet-81</MenuItem>
            <MenuItem value={82}>Foobar-Lorem-ipsum-dolor-set-amet-82</MenuItem>
            <MenuItem value={83}>Foobar-Lorem-ipsum-dolor-set-amet-83</MenuItem>
            <MenuItem value={84}>Foobar-Lorem-ipsum-dolor-set-amet-84</MenuItem>
            <MenuItem value={85}>Foobar-Lorem-ipsum-dolor-set-amet-85</MenuItem>
            <MenuItem value={86}>Foobar-Lorem-ipsum-dolor-set-amet-86</MenuItem>
            <MenuItem value={87}>Foobar-Lorem-ipsum-dolor-set-amet-87</MenuItem>
            <MenuItem value={88}>Foobar-Lorem-ipsum-dolor-set-amet-88</MenuItem>
            <MenuItem value={89}>Foobar-Lorem-ipsum-dolor-set-amet-89</MenuItem>
            <MenuItem value={90}>Foobar-Lorem-ipsum-dolor-set-amet-90</MenuItem>
            <MenuItem value={91}>Foobar-Lorem-ipsum-dolor-set-amet-91</MenuItem>
            <MenuItem value={92}>Foobar-Lorem-ipsum-dolor-set-amet-92</MenuItem>
            <MenuItem value={93}>Foobar-Lorem-ipsum-dolor-set-amet-93</MenuItem>
            <MenuItem value={94}>Foobar-Lorem-ipsum-dolor-set-amet-94</MenuItem>
            <MenuItem value={95}>Foobar-Lorem-ipsum-dolor-set-amet-95</MenuItem>
            <MenuItem value={96}>Foobar-Lorem-ipsum-dolor-set-amet-96</MenuItem>
            <MenuItem value={97}>Foobar-Lorem-ipsum-dolor-set-amet-97</MenuItem>
            <MenuItem value={98}>Foobar-Lorem-ipsum-dolor-set-amet-98</MenuItem>
            <MenuItem value={99}>Foobar-Lorem-ipsum-dolor-set-amet-99</MenuItem>
            <MenuItem value={100}>
              Foobar-Lorem-ipsum-dolor-set-amet-100
            </MenuItem>
          </Menu>
        )}
      </div>
    );
  },
};

export { Default };

export default meta;
