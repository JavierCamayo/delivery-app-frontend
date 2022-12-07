import * as React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Head from 'next/head'
import Image from 'next/image'
import OrdersTable from '../components/OrdersTable'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import useApp from '../hooks/useApp'
import CreateOrder from '../components/CreateOrder'

export default function Home() {
	const { orders } = useApp()
	return (
		<>
			<Head>
				<title>InstaYa - Ordenes</title>
				<meta name='description' content='Aplicación de envio de paquetes y mercancia.' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Paper>
				<Box sx={{ p: 2 }}>
					<Stack direction='row' justifyContent='space-between'>
						<Typography variant='h4'>Ordenes</Typography>
						<CreateOrder />
					</Stack>
				</Box>
				<Divider />
				<OrdersTable orders={orders} />
			</Paper>
		</>
	)
}
