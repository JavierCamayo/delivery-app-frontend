import * as React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import useApp from '../hooks/useApp'
import OrdersTable from '../components/OrdersTable'

export default function Home() {
	const { isAuth, orders, logout } = useApp()

	React.useEffect(() => {}, [])

	return (
		<>
			<Head>
				<title>InstaYa</title>
				<meta name='description' content='Aplicación de envio de paquetes y mercancia.' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Box>
				<Typography>Ordenes</Typography>
				<Stack>
					<Button variant='contained' >Crear nueva orden</Button>
					<Button variant='contained' onClick={logout}>Cerrar sesión</Button>
				</Stack>
				<OrdersTable orders={orders} />
			</Box>
		</>
	)
}
