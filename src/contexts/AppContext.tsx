import * as React from 'react'
import { orders as initialOrders } from '../example/orders'

interface AppContextType {
	orders: typeof initialOrders
}

export const AppContext = React.createContext<AppContextType>({} as AppContextType)

interface Props {
	children: React.ReactNode | React.ReactNode[]
}

export default function AppProvider(props: Props) {
	const [orders, setOrders] = React.useState<typeof initialOrders>(initialOrders)

	React.useEffect(() => {}, [])

	const values = {
		orders,
	}

	return <AppContext.Provider value={values}>{props.children}</AppContext.Provider>
}
