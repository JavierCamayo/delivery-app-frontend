import * as React from 'react'
import AuthWrapper from '../../components/auth/AuthWrapper'
import Head from 'next/head'
import RegisterForm from '../../components/auth/RegisterForm'

export default function RegisterPage() {
	return (
		<>
			<Head>
				<title>InstaYa - Registro</title>
				<meta name='description' content='Aplicación de envio de paquetes y mercancia.' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<AuthWrapper title='Registrate'>
				<RegisterForm />
			</AuthWrapper>
		</>
	)
}
