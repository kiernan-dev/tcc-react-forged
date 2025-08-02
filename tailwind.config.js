/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ['class'],
	content: [
		'./pages/**/*.{ts,tsx}',
		'./components/**/*.{ts,tsx}',
		'./app/**/*.{ts,tsx}',
		'./src/**/*.{ts,tsx}',
	],
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px',
			},
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: '#2B5D3A',
					foreground: 'hsl(var(--primary-foreground))',
				},
				secondary: {
					DEFAULT: '#4A90E2',
					foreground: 'hsl(var(--secondary-foreground))',
				},
				accent: {
					DEFAULT: '#F5A623',
					foreground: 'hsl(var(--accent-foreground))',
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))',
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))',
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
				},
			},
			borderRadius: {
				xxl: 'calc(var(--radius) + 8px)',
				xl: 'calc(var(--radius) + 4px)',
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
			keyframes: {
				'accordion-down': {
					from: { height: 0 },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: 0 },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
			},
			backgroundImage: {
				'radial-gradient': 'radial-gradient(circle, var(--tw-gradient-stops))',
				'radial-at-t': 'radial-gradient(ellipse at top, var(--tw-gradient-stops))',
				'radial-at-b': 'radial-gradient(ellipse at bottom, var(--tw-gradient-stops))',
				'radial-at-l': 'radial-gradient(ellipse at left, var(--tw-gradient-stops))',
				'radial-at-r': 'radial-gradient(ellipse at right, var(--tw-gradient-stops))',
				'radial-at-tl': 'radial-gradient(ellipse at top left, var(--tw-gradient-stops))',
				'radial-at-tr': 'radial-gradient(ellipse at top right, var(--tw-gradient-stops))',
				'radial-at-bl': 'radial-gradient(ellipse at bottom left, var(--tw-gradient-stops))',
				'radial-at-br': 'radial-gradient(ellipse at bottom right, var(--tw-gradient-stops))',
			},
		},
	},
	plugins: [require('tailwindcss-animate')],
}