import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import buttonStory, { BrandPrimary } from './Button.story';

describe('renders the button in the primary state:', () => {
    render( <BrandPrimary {...buttonStory.args} />);
    const button = screen.getByRole('button');

    it('button has class "brand-primary"', () => {
        expect(button).toHaveClass("brand-primary");
    });

    it('button is enabled', () => {
        expect(button).toBeEnabled();
    });

    it('button content', () => {
        expect(button).toHaveTextContent("I am a button");
    });
});

//📙 Testing Library jest-dom: https://github.com/testing-library/jest-dom
//   Testing with Storybook: https://storybook.js.org/docs/react/workflows/testing-with-storybook
//   Storybook addon Jest: https://www.npmjs.com/package/@storybook/addon-jest