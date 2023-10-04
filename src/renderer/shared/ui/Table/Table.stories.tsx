import { Meta, StoryObj } from "@storybook/react";

import css from "./Story.module.scss";
import Table from "./Table";

type Story = StoryObj<typeof meta>;

const meta = {
  title: "UI/Table",
  component: Table,
  tags: ["autodocs"],
} satisfies Meta<typeof Table>;

const Default: Story = {
  args: {},
  render: (args) => (
    <div className={css.Story}>
      <Table {...args}>
        <tbody>
          <tr>
            <th colSpan={3}>Nissan</th>
          </tr>
          <tr>
            <th>Модель</th>
            <th>Комплектация</th>
            <th>Наличие</th>
          </tr>
          <tr>
            <td rowSpan={2}>Nissan Qashqai</td>
            <td>VISIA</td>
            <td>+</td>
          </tr>
          <tr>
            <td>TEKNA</td>
            <td>+</td>
          </tr>
          <tr>
            <td rowSpan={2}>Nissan X-Trail</td>
            <td>ACENTA</td>
            <td>+</td>
          </tr>
          <tr>
            <td>CONNECTA</td>
            <td>-</td>
          </tr>
        </tbody>
      </Table>
    </div>
  ),
};

export { Default };

export default meta;
