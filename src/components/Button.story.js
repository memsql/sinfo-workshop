import React from 'react';

import Button from './Button';
import Page from '../utils-storybook/Page';

const Template = (args) => (
    <Page title="Button" inverted={args.inverted}>
        <Button {...args}>
            {args.children}
        </Button>
    </Page>
    );

export const Primary = Template.bind();
Primary.parameters = {
    jest: ['Button.test.js'],
};


export const Secondary = Template.bind();
Secondary.args = {
    type: "secondary",
};

export const Inverted = Template.bind();
Inverted.args = {
    inverted: true,
};

const buttonStory = {
    title: "Components/Button",
    component: Button,
    args: {
        children: "I am a button",
        onClick: () => { alert("You clicked me.") },
    },
    argTypes: {
        children: { control: 'text' },
    },
};

export default buttonStory;
