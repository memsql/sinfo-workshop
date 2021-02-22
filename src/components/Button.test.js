import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { Primary } from './Button.story';

it('renders the button in the primary state', () => {
    render( <Primary {...Primary.args} />);
    expect(screen.getByRole('button')).toHaveClass("button-component");
    expect(screen.getByRole('button')).not.toHaveClass("inverted");
    // expect(screen.getByRole('button')).toBeDisabled();
    expect(screen.getByRole('button')).toHaveTextContent('I am a button');
});

test('Failing test', () => {
    expect(["foo", "bar"]).toEqual(["barf", "food"]);
})