import { Meta, StoryObj } from "@storybook/react";

import avif1x from "../../assets/images/man-bear-pig-avif-1x.avif";
import avif2x from "../../assets/images/man-bear-pig-avif-2x.avif";
import avif3x from "../../assets/images/man-bear-pig-avif-3x.avif";
import jpg1x from "../../assets/images/man-bear-pig-jpg-1x.jpg";
import webp1x from "../../assets/images/man-bear-pig-webp-1x.webp";
import webp2x from "../../assets/images/man-bear-pig-webp-2x.webp";
import webp3x from "../../assets/images/man-bear-pig-webp-3x.webp";
import Skeleton from "../../assets/spinners/skeleton.svg";

import { LazyImage } from "./LazyImage";
import css from "./Story.module.scss";

type Story = StoryObj<typeof meta>;

const meta = {
  title: "UI/LazyImage",
  component: LazyImage,
  tags: ["autodocs"],
} satisfies Meta<typeof LazyImage>;

const Default: Story = {
  args: {
    src: "https://picsum.photos/150/200",
    srcSet:
      "https://picsum.photos/id/249/150/200 1x, https://picsum.photos/id/239/150/200 2x, https://picsum.photos/id/237/150/200 3x",
  },
  render: (args) => (
    <div className={css.Story}>
      <div className={css.def}>
        <LazyImage {...args} />
      </div>
    </div>
  ),
};

const Multiple: Story = {
  render: () => (
    <div className={css.Story}>
      <div className={css.grid}>
        <LazyImage src="https://picsum.photos/id/237/300/200" />
        <LazyImage src="https://picsum.photos/id/238/300/200" />
        <LazyImage src="https://picsum.photos/id/239/300/200" />
        <LazyImage src="https://picsum.photos/id/240/300/200" />
        <LazyImage src="https://picsum.photos/id/241/300/200" />
        <LazyImage src="https://picsum.photos/id/242/300/200" />
        <LazyImage src="https://picsum.photos/id/243/300/200" />
        <LazyImage src="https://picsum.photos/id/244/300/200" />
        <LazyImage src="https://picsum.photos/id/245/300/200" />
        <LazyImage src="https://picsum.photos/id/246/300/200" />
        <LazyImage src="https://picsum.photos/id/247/300/200" />
        <LazyImage src="https://picsum.photos/id/248/300/200" />
        <LazyImage src="https://picsum.photos/id/249/300/200" />
      </div>
    </div>
  ),
};

const Source: Story = {
  render: () => (
    <div className={css.Story}>
      <div className={css.grid}>
        <LazyImage src={jpg1x}>
          <source
            srcSet={`${avif3x} 3x, ${avif2x} 2x, ${avif1x} 1x`}
            type="image/avif"
          />
          <source
            srcSet={`${webp3x} 3x, ${webp2x} 2x, ${webp1x} 1x`}
            type="image/webp"
          />
        </LazyImage>
      </div>
    </div>
  ),
};

const SkeletonImageLoader: Story = {
  render: () => (
    <div className={css.Story}>
      <Skeleton className={css.skeleton} />
    </div>
  ),
};

export { Default, Multiple, SkeletonImageLoader, Source };

export default meta;
