import { useRouter } from 'next/router'
import * as React from 'react'
import useApp from '../../hooks/useApp'

interface Props {
  children: React.ReactNode | React.ReactNode[]
}

export default function AuthWrapper(props: Props) {
  const { isAuth, loading } = useApp()
  const { push } = useRouter()

  if (loading) return <p>Loading</p>

  // TODO: Logic for validate isAuth

  return (
    <>{props.children}</>
  )
}
