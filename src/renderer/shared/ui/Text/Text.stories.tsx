import { Meta, StoryObj } from "@storybook/react";

import css from "./Story.module.scss";
import Text from "./Text";

type Story = StoryObj<typeof meta>;

const meta = {
  title: "UI/Text",
  component: Text,
  tags: ["autodocs"],
} satisfies Meta<typeof Text>;

const Default: Story = {
  args: {
    children:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias beatae, consectetur consequatur culpa cumque debitis dignissimos, doloremque dolores ducimus id in incidunt iusto laboriosam minima modi molestiae molestias natus nesciunt nihil odio quisquam recusandae repudiandae tenetur unde, vero voluptate voluptatibus voluptatum! Cumque delectus distinctio dolorum ea, et explicabo fugit impedit iusto magnam minus natus nulla omnis, quisquam reprehenderit saepe suscipit ut, voluptas voluptates? Consectetur et eum ex natus neque nesciunt numquam odio omnis pariatur quod.",
  },
  render: (args) => (
    <div className={css.Story}>
      <Text {...args} />
    </div>
  ),
};

const LongText: Story = { ...Default };

LongText.args = {
  children:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias beatae, consectetur consequatur culpa cumque debitis dignissimos, doloremque dolores ducimus id in incidunt iusto laboriosam minima modi molestiae molestias natus nesciunt nihil odio quisquam recusandae repudiandae tenetur unde, vero voluptate voluptatibus voluptatum! Cumque delectus distinctio dolorum ea, et explicabo fugit impedit iusto magnam minus natus nulla omnis, quisquam reprehenderit saepe suscipit ut, voluptas voluptates? Consectetur et eum ex natus neque nesciunt numquam odio omnis pariatur quod. Accusamus, adipisci aperiam asperiores consequuntur delectus eius eos est excepturi hic illum laborum magnam mollitia natus nemo nisi officia officiis perspiciatis placeat porro quos repellat, sed tenetur unde vero vitae! Architecto at beatae consequuntur culpa excepturi facere fuga fugit in itaque iure minus molestiae nemo nihil non optio placeat quam quibusdam quidem reiciendis rerum tempora, unde veniam veritatis vero voluptatum? A ab accusantium aspernatur, atque consectetur enim esse eveniet ex expedita explicabo iste magnam minus molestiae nam natus necessitatibus nesciunt non nulla, odit pariatur quas quod sapiente sequi tempore veritatis vitae voluptates voluptatibus. Ab aspernatur assumenda dignissimos dolor doloremque dolores eaque earum eos ex facilis fugiat, illo iure laborum libero neque nisi nostrum porro quam reiciendis reprehenderit sint tempore veritatis vero. Ab aliquam aperiam consequuntur delectus deserunt dignissimos distinctio dolore dolores ea error eum ex exercitationem fuga illo inventore ipsa laboriosam molestiae, molestias nemo nisi nobis non odit officia officiis omnis quasi, quibusdam repellendus, sed temporibus tenetur unde voluptatem voluptatibus voluptatum. Ab asperiores distinctio dolorem earum ipsum natus numquam omnis rem sed ullam. Animi commodi cumque explicabo ipsa magnam nobis nostrum repellat, ullam voluptates voluptatum. Aliquam architecto deserunt dolorum et impedit inventore maiores nam perferendis voluptates? Aut beatae culpa cum enim fuga, odio officiis omnis pariatur provident quasi quis tempora, temporibus. Accusamus ad illo vel? Accusantium dolore fuga iure, laudantium molestias quae quas unde. Ab ad adipisci alias animi architecto, atque beatae consectetur deleniti deserunt dolor, doloribus dolorum ducimus eveniet ex facere fugiat illum laboriosam libero minima molestias non optio perferendis perspiciatis porro provident quasi quibusdam saepe tenetur unde voluptatibus! Aliquid aspernatur cum doloremque doloribus dolorum ea eos excepturi exercitationem explicabo incidunt ipsa laborum nihil obcaecati odit omnis placeat quisquam, quos sint soluta, sunt ut veniam veritatis. Ab eveniet magni odit quos. Accusamus adipisci aspernatur consequatur dolorum eius et fugit inventore, iste labore nobis quaerat rem tempora voluptatibus? Aliquid aspernatur cupiditate dolorem error quae, quaerat sunt! Cumque doloribus earum excepturi ipsa, iste laudantium nihil obcaecati quaerat quisquam quod ratione rem repudiandae sed sequi tempora voluptate voluptates? Amet autem fuga hic itaque laborum, molestiae obcaecati porro sed suscipit voluptatum. Architecto autem cupiditate esse eum, inventore minima molestias officiis quas reiciendis vitae? Debitis exercitationem suscipit unde. Blanditiis dolorum ea enim itaque iusto molestias necessitatibus nulla possimus praesentium recusandae sapiente, unde. Architecto at autem commodi culpa ducimus et exercitationem hic ipsum labore laudantium molestiae nemo, neque nesciunt optio pariatur quae quam reiciendis rerum tempore voluptate. Consequatur corporis dicta dolores error in laudantium maiores mollitia, nihil pariatur, perspiciatis porro quis tempore temporibus? Laborum, rerum, velit. Facilis illo obcaecati quo.",
};

export { Default, LongText };

export default meta;
