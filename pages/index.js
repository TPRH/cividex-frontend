import Head from 'next/head'
import Header from '../components/header'
import LoginForm from '../components/LoginForm'
import InputForm from '../components/InputForm'
import FactsTable from '../components/FactsTable'
import Footer from '../components/Footer'
import { useAuth } from '../contexts/auth'
import useResource from '../hooks/useResource'


export default function Home() {
  const { user, login, logout } = useAuth();
  const { resources, createResource } = useResource();

  return (
    <div>
      <Head>
        <title>CiviDex App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <h1>Hello World from CiviDex</h1>
        <LoginForm onLogin={login} ></LoginForm>
        <InputForm createFact={createResource} user={user} />
        <FactsTable facts={resources || []} />
      </main>
      <Footer />
    </div>
  )
}
