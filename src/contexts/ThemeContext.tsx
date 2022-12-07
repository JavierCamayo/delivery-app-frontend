import * as React from 'react'
import { ThemeProvider as MUIThemeProvider, createTheme } from '@mui/material/styles'
import { useMediaQuery } from '@mui/material'

export const ColorModeContext = React.createContext({ toggleColorMode: () => {} })

interface Props {
	children: React.ReactNode | React.ReactNode[]
}

export default function ThemeProvider(props: Props) {
	const [mode, setMode] = React.useState<'light' | 'dark'>('light')
	const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
	const colorMode = React.useMemo(
		() => ({
			toggleColorMode: () => {
				setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'))
			},
		}),
		[]
	)

	const theme = React.useMemo(
		() =>
			createTheme({
				palette: {
					mode,
					primary: {
						main: '#0f6131',
					},
				},
			}),
		[mode]
	)

	React.useEffect(() => {
		setMode(prefersDarkMode ? 'dark' : 'light')
	}, [prefersDarkMode])

	return (
		<ColorModeContext.Provider value={colorMode}>
			<MUIThemeProvider theme={theme}>{props.children}</MUIThemeProvider>
		</ColorModeContext.Provider>
	)
}
