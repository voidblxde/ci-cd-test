import React from 'react';
import { describe, test, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../src/App.jsx';

describe('App', () => {
    test('changes input and updates computed result', () => {
        render(<App />);

        const input = screen.getByRole('spinbutton');
        fireEvent.change(input, { target: { value: '5' } });

        expect(screen.getByText('8')).toBeInTheDocument();

        expect(screen.getByText(/is even/i)).toBeInTheDocument();
    });
});
