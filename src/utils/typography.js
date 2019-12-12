import Typography from 'typography'

const typography = new Typography({
    headerFontFamily: ['Trebuchet MS', 'Helvetica', 'sans-serif'],
	bodyFontFamily: ['Trebuchet MS', 'Helvetica', 'sans-serif'],
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
