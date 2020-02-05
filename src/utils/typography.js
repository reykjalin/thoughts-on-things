import Typography from 'typography'

const typography = new Typography({
	headerFontFamily: ['sans-serif'],
	bodyFontFamily: ['serif'],
	baseFontSize: '20px',
	scaleRatio: 2.5,
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
    typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
