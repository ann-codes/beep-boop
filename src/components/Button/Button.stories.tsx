import React from "react";

import { Button } from "./Button";

export default {
    title: "Example/Button",
    component: Button,
    parameters: {
        jsx: { skip: 1 },
    },
    argTypes: {
        colorBg: { control: "color" },
        colorText: { control: "color" }
    },
};

export const Usage = (args: any) => <Button {...args} />;
