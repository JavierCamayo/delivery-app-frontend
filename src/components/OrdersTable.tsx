import * as React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { orders } from '../example/orders'

function createData(name: string, calories: number, fat: number, carbs: number, protein: number) {
	return { name, calories, fat, carbs, protein }
}

const rows = [
	createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
	createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
	createData('Eclair', 262, 16.0, 24, 6.0),
	createData('Cupcake', 305, 3.7, 67, 4.3),
	createData('Gingerbread', 356, 16.0, 49, 3.9),
]

interface Props {
	orders: typeof orders
}

export default function OrdersTable(props: Props) {
	return (
		<TableContainer component={Paper}>
			<Table sx={{ minWidth: 650 }} size='small' aria-label='a dense table'>
				<TableHead>
					<TableRow>
						<TableCell align='center'>fecha</TableCell>
						<TableCell align='center'>hora</TableCell>
						<TableCell align='center'>estado</TableCell>
						<TableCell align='center'>largo</TableCell>
						<TableCell align='center'>ancho</TableCell>
						<TableCell align='center'>alto</TableCell>
						<TableCell align='center'>peso</TableCell>
						<TableCell align='center'>direccionRecogida</TableCell>
						<TableCell align='center'>ciudadRecogida</TableCell>
						<TableCell align='center'>nombreDestinatario</TableCell>
						<TableCell align='center'>cedulaNitDestinatario</TableCell>
						<TableCell align='center'>direccionEntrega</TableCell>
						<TableCell align='center'>ciudadEntrega</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{orders.map((row, index) => (
						<TableRow key={`order-${index}`} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
							<TableCell align='center'>{row.fecha}</TableCell>
							<TableCell align='center'>{row.hora}</TableCell>
							<TableCell align='center'>{row.estado}</TableCell>
							<TableCell align='center'>{row.largo}</TableCell>
							<TableCell align='center'>{row.ancho}</TableCell>
							<TableCell align='center'>{row.alto}</TableCell>
							<TableCell align='center'>{row.peso}</TableCell>
							<TableCell align='center'>{row.direccionRecogida}</TableCell>
							<TableCell align='center'>{row.ciudadRecogida}</TableCell>
							<TableCell align='center'>{row.nombreDestinatario}</TableCell>
							<TableCell align='center'>{row.cedulaNitDestinatario}</TableCell>
							<TableCell align='center'>{row.direccionEntrega}</TableCell>
							<TableCell align='center'>{row.ciudadEntrega}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	)
}
