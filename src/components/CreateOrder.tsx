import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { MobileDateTimePicker } from '@mui/x-date-pickers/MobileDateTimePicker'
import { useFormik } from 'formik'
import * as React from 'react'
import dayjs, { Dayjs } from 'dayjs'
import FormDialog from './misc/FormDialog'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import * as Yup from 'yup'

const orderValidationSchema = Yup.object({
	date: Yup.string().min(3).required(),
	hour: Yup.string().min(3).required(),
	status: Yup.string().min(3).required(),
	width: Yup.number().min(1).required(),
	long: Yup.number().min(1).required(),
	height: Yup.number().min(1).required(),
	weight: Yup.number().min(1).required(),
	originAddress: Yup.string().min(3).required(),
	originCity: Yup.string().min(3).required(),
	destinyName: Yup.string().min(3).required(),
	destinyNumber: Yup.string().min(3).required(),
	destinyAddress: Yup.string().min(3).required(),
	destinyCity: Yup.string().min(3).required(),
})

export default function CreateOrder() {
	const [dateTime, setDateTime] = React.useState<Dayjs | null>(dayjs(new Date()))
	const formik = useFormik({
		initialValues: {
			date: '',
			hour: '',
			status: '',
			width: 0,
			long: 0,
			height: 0,
			weight: 0,
			originAddress: '',
			originCity: '',
			destinyName: '',
			destinyNumber: '',
			destinyAddress: '',
			destinyCity: '',
		},
		validationSchema: orderValidationSchema,
		onSubmit: values => {
			console.log(values)
		},
	})

	return (
		<FormDialog
			title='Crear orden'
			cancelButtonText='Cancelar'
			okAction={formik.handleSubmit}
			okButtonText='Crear'
			openButtonText='Crear orden'
		>
			<Grid container spacing={2} sx={{ py: 2 }} component='form'>
				<LocalizationProvider dateAdapter={AdapterDayjs}>
					<Grid item xs={12}>
						<MobileDateTimePicker
							label='Fecha y hora'
							value={dateTime}
							onChange={newValue => {
								setDateTime(newValue)
							}}
							renderInput={params => <TextField fullWidth {...params} />}
						/>
					</Grid>
					<Grid item xs={6}>
						<TextField
							fullWidth
							type='number'
							label='Ancho'
							name='width'
							value={formik.values.width}
							onChange={formik.handleChange}
						/>
					</Grid>
					<Grid item xs={6}>
						<TextField
							fullWidth
							type='number'
							label='Largo'
							name='long'
							value={formik.values.long}
							onChange={formik.handleChange}
						/>
					</Grid>
					<Grid item xs={6}>
						<TextField
							fullWidth
							type='number'
							label='Alto'
							name='height'
							value={formik.values.height}
							onChange={formik.handleChange}
						/>
					</Grid>
					<Grid item xs={6}>
						<TextField
							fullWidth
							type='number'
							label='Peso'
							name='weight'
							value={formik.values.weight}
							onChange={formik.handleChange}
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							fullWidth
							label='Direccion de origen'
							name='originAddress'
							value={formik.values.originAddress}
							onChange={formik.handleChange}
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							fullWidth
							label='Ciudad de origen'
							name='originCity'
							value={formik.values.originCity}
							onChange={formik.handleChange}
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							fullWidth
							label='Nombre de destinatario'
							name='destinyName'
							value={formik.values.destinyName}
							onChange={formik.handleChange}
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							fullWidth
							label='Cedula de destinatario'
							name='destinyNumber'
							value={formik.values.destinyNumber}
							onChange={formik.handleChange}
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							fullWidth
							label='Dirección de destino'
							name='destinyAddress'
							value={formik.values.destinyAddress}
							onChange={formik.handleChange}
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							fullWidth
							label='Ciudad de destino'
							name='destinyCity'
							value={formik.values.destinyCity}
							onChange={formik.handleChange}
						/>
					</Grid>
				</LocalizationProvider>
			</Grid>
		</FormDialog>
	)
}
