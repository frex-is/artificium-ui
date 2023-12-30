import React from "react";

import { Tag } from "../components";

export default {
  title: "Tag",
  component: Tag
}

const Template = (args: any) => (
  <>
    <Tag {...args} />
  </>
)

export const InterActive: any = Template.bind({});