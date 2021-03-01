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

export const BrandPrimary = Template.bind();
BrandPrimary.parameters = {
    jest: ['Button.test.js'],
};

export const BrandSecondary = Template.bind();
BrandSecondary.args = {
    type: "brand-secondary",
};

export const AltPrimary = Template.bind();
AltPrimary.args = {
    type: "alt-primary",
};

export const AltSecondary = Template.bind();
AltSecondary.args = {
    type: "alt-secondary",
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
    //📙 argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        children: { control: 'text' },
    },
};

export default buttonStory;

//📙 Storybook React Docs: https://storybook.js.org/docs/react/get-started/introduction
