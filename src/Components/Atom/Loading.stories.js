import React from "react";

import { Loading, SkelLoader } from "./Loading";

export default {
  title: "Atom/Loading",
  component: Loading,
  parameters: { docs: { page: () => <>This is the Loading Component</> } },
  argTypes: { onClick: { action: "CheckClick" } },
};

const Template = (args) => <Loading {...args} />;

export const Loaded = Template.bind({});
Loaded.args = {
  state: true,
  message: "You have been loaded successfully",
};

export const LoadingProg = Template.bind({});
LoadingProg.args = {
  state: false,
  message: "Your data is loading...",
};

const SkelTemplate = (args) => (
  <SkelLoader style={{ width: 300, height: 300 }} {...args} />
);

export const SkelLoad = SkelTemplate.bind({});
SkelLoad.args = {
  bones: [
    {
      variant: "rect",
      width: 300,
      height: 30,
      style: { marginBottom: 8 },
    },
    {
      variant: "rect",
      width: 300,
      height: 30,
      style: { marginBottom: 8 },
    },
    {
      variant: "rect",
      width: 80,
      height: 35,
      style: { margin: "20px auto 0" },
    },
  ],
};
