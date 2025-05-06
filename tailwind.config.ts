
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// MyAccurate Books brand colors (updated)
				'accurate-blue': {
					50: '#e6f4fb',
					100: '#cce9f7',
					200: '#99d3ef',
					300: '#66bde7',
					400: '#33a7df',
					500: '#1388cd', // primary blue
					600: '#106da4',
					700: '#0d517b',
					800: '#093652',
					900: '#061b29',
				},
				'accurate-purple': {
					50: '#eaeaff',
					100: '#d5d5ff',
					200: '#aaaaff',
					300: '#8080ff',
					400: '#5555ff',
					500: '#4646d4',
					600: '#3939aa',
					700: '#2d32b2', // secondary blue
					800: '#1c1c66',
					900: '#0e0e33',
				},
				'accurate-yellow': {
					50: '#fffce3',
					100: '#fff9c7',
					200: '#fff38f',
					300: '#ffec57',
					400: '#ffe25a', // primary yellow
					500: '#ffcb28',
					600: '#cca020',
					700: '#997818',
					800: '#665010',
					900: '#332808',
				},
				'accurate-orange': {
					50: '#fff5eb',
					100: '#ffebd7',
					200: '#ffd7af',
					300: '#ffc387',
					400: '#ffa753', // secondary orange
					500: '#ff8c21',
					600: '#cc701a',
					700: '#995414',
					800: '#66380d',
					900: '#331c07',
				},
			},
			fontFamily: {
				// Update font family based on the design instructions
				sans: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
				heading: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
				// Alternative option
				alt: {
					heading: ['Montserrat', 'system-ui', 'sans-serif'],
					body: ['Open Sans', 'Lato', 'system-ui', 'sans-serif'],
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					from: { opacity: '0', transform: 'translateY(10px)' },
					to: { opacity: '1', transform: 'translateY(0)' }
				},
				'fade-out': {
					from: { opacity: '1', transform: 'translateY(0)' },
					to: { opacity: '0', transform: 'translateY(10px)' }
				},
				'scale-in': {
					'0%': { opacity: '0', transform: 'scale(0.95)' },
					'100%': { opacity: '1', transform: 'scale(1)' }
				},
				'scale-out': {
					'0%': { opacity: '1', transform: 'scale(1)' },
					'100%': { opacity: '0', transform: 'scale(0.95)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.4s ease-out',
				'fade-out': 'fade-out 0.4s ease-out',
				'scale-in': 'scale-in 0.3s ease-out',
				'scale-out': 'scale-out 0.3s ease-out',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
