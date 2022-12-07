import * as React from 'react'
import AuthWrapper from '../../components/auth/AuthWrapper'
import Head from 'next/head'
import SignInForm from '../../components/auth/LoginForm'

export default function LoginPage() {
	return (
		<>
			<Head>
				<title>InstaYa - Iniciar sesion</title>
				<meta name='description' content='Aplicación de envio de paquetes y mercancia.' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<AuthWrapper title='Iniciar sesión'>
				<SignInForm />
			</AuthWrapper>
		</>
	)
}
