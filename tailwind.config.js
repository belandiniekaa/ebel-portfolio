import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            colors: {
                'dreamy-pink': '#f1cadc',
                'dreamy-blue-light': '#d6def5',
                'dreamy-blue-bold': '#a0bdf0',
                'dreamy-purple': '#c0cbff',
                'dreamy-bg': '#fbf3ff',
                'text-main': '#1e1b4b',
                'text-muted': '#64748b',
                base: '#FBFBF9',
                dark: '#1e1b4b',
                muted: '#64748b',
                border: 'rgba(160, 189, 240, 0.25)', // Border kaca yang lebih halus
            },
            fontFamily: {
                sans: ['Inter', ...defaultTheme.fontFamily.sans],
                display: ['Space Grotesk', 'sans-serif'],
                mono: ['IBM Plex Mono', 'monospace'],
            },
        },
    },

    plugins: [forms],
};