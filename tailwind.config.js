export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Segoe UI', 'sans-serif'],
      },
      colors: {
        midnight: '#050816',
        panel: '#0b1220',
        card: '#0f172a',
        accent: '#5ec2ff',
        accentSoft: '#8ad9ff',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(94, 194, 255, 0.3), 0 18px 40px rgba(14, 165, 233, 0.18)',
      },
      backgroundImage: {
        mesh: 'radial-gradient(circle at top, rgba(94,194,255,0.18), transparent 38%), radial-gradient(circle at bottom right, rgba(59,130,246,0.12), transparent 28%)',
      },
    },
  },
  plugins: [],
}
