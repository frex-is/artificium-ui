import React from "react";

import { Tag } from "../components";
import { ArtificiumProvider } from "../providers";

export default {
  title: "Tag",
  component: Tag,
};

export const Primary = () => (
  <div>
    <Tag name="TypeScript" />
  </div>
);

const Template = (args: any) => (
  <ArtificiumProvider>
    <div style={{ backgroundColor: "#131619", height: "100vh", width: "100vw", padding: "40px" }}>
      <Tag {...args} />
    </div>
  </ArtificiumProvider>
);

export const InterActive: any = Template.bind({});
