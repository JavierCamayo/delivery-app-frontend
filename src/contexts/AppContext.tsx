import { useRouter } from 'next/router'
import * as React from 'react'
import { orders as initialOrders } from '../example/orders'

interface AppContextType {
	isAuth: boolean
	loading: boolean
	orders: typeof initialOrders
	login: () => Promise<void>
	register: () => Promise<void>
	logout: () => Promise<void>
}

export const AppContext = React.createContext<AppContextType>({} as AppContextType)

interface Props {
	children: React.ReactNode | React.ReactNode[]
}

export default function AppProvider(props: Props) {
	const router = useRouter()
	const [isAuth, setIsAuth] = React.useState(false)
	const [loading, setLoading] = React.useState(true)
	const [orders, setOrders] = React.useState<typeof initialOrders>(initialOrders)

	React.useEffect(() => {
		if (!isAuth) validateSession()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const validateSession = async () => {
		try {
			setLoading(true)
			const isAuth = window.localStorage.getItem('isAuth')
			if (isAuth === 'true') {
				setIsAuth(true)
			} else {
				router.push('/login')
			}

		} catch (error) {
			console.error(error)
		} finally {
			setLoading(false)
		}
	}

	const login = async () => {
		try {
			setLoading(true)
			window.localStorage.setItem('isAuth', 'true')
			setIsAuth(true)
			router.push('/')
		} catch (error) {
			console.error(error)
		} finally {
			setLoading(false)
		}
	}

	const register = async () => {
		try {
			setLoading(true)
			window.localStorage.setItem('isAuth', 'true')
			setIsAuth(true)
			router.push('/')
		} catch (error) {
			console.error(error)
		} finally {
			setLoading(false)
		}
	}

	const logout = async () => {
		try {
			setLoading(true)
			window.localStorage.removeItem('isAuth')
			setIsAuth(true)
			router.push('/login')
		} catch (error) {
			console.error(error)
		} finally {
			setLoading(false)
		}
	}

	const values = {
		isAuth,
		loading,
		orders,
		login,
		register,
		logout,
	}

	return <AppContext.Provider value={values}>{props.children}</AppContext.Provider>
}
