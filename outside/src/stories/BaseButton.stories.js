import BaseButton from "../components/BaseButton.vue";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: "BaseButton",
  component: BaseButton,
  tags: ["autodocs"],
  argTypes: {
    onClick: {},
    size: {
      control: {
        type: "select",
      },
      options: ["small", "medium", "large"],
    },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {
    primary: true,
    label: "Button",
  },
};

export const Secondary = {
  args: {
    label: "Button",
  },
};

export const Large = {
  args: {
    size: "large",
    label: "Button",
  },
};

export const Small = {
  args: {
    size: "small",
    label: "Button",
  },
};
