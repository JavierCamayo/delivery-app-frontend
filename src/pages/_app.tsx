import AppProvider from '../contexts/AppContext'
import AuthLoading from '../components/layout/AuthLoading'
import AuthProvider from '../contexts/AuthContext'
import CssBaseline from '@mui/material/CssBaseline'
import Layout from '../components/layout/Layout'
import ThemeProvider from '../contexts/ThemeContext'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<CssBaseline />
			<ThemeProvider>
				<AuthProvider>
					<AppProvider>
						<AuthLoading>
							<Layout>
								<Component {...pageProps} />
							</Layout>
						</AuthLoading>
					</AppProvider>
				</AuthProvider>
			</ThemeProvider>
		</>
	)
}
