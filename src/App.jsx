import React, { useState } from 'react';
import { sum, isEven } from './math.js';

export default function App() {
    const [value, setValue] = useState(2);
    const total = sum(value, 3);

    return (
        <main style={{ fontFamily: 'system-ui, sans-serif'    , padding: '2rem' }}>
            <h1>CI/CD demo</h1>
            <p>Vite + React + Vitest + GitHub Actions</p>

            <section style={{ marginTop: '1.5rem' }}>
                <label>
                    <span>Value:&nbsp;</span>
                    <input
                        type="number"
                        value={value}
                        onChange={(e) => setValue(Number(e.target.value))}
                    />
                </label>

                <p style={{ marginTop: '0.5rem' }}>
                    sum(value, 3) = <strong>{total}</strong>
                </p>
                <p>
                    {total} is {isEven(total) ? 'even' : 'odd'}
                </p>
            </section>
        </main>
    );
}
