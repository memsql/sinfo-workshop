import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import buttonStory, { Primary } from './Button.story';

describe('renders the button in the primary state:', () => {
    render( <Primary {...buttonStory.args} />);
    const button = screen.getByRole('button');

    it('button has class "primary"', () => {
        expect(button).toHaveClass("primary");
    });

    it('button is enabled', () => {
        expect(button).toBeEnabled();
    });

    it('button content', () => {
        expect(button).toHaveTextContent("I am a button");
    });
});
