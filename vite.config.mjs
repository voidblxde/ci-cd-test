import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
    base: '/ci-cd-lab-2/',
    plugins: [react()],
    test: {
        environment: 'jsdom',
        include: ['tests/**/*.test.{js,jsx}'],
        setupFiles: './tests/setupTests.js',
        coverage: { provider: 'v8' }
    }
});
