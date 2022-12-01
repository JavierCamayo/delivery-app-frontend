import type { AppProps } from 'next/app'
import AuthWrapper from '../components/layout/AuthWrapper'
import AppProvider from '../contexts/AppContext'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<AppProvider>
			<AuthWrapper>
				<Component {...pageProps} />
			</AuthWrapper>
		</AppProvider>
	)
}
