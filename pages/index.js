import Head from 'next/head'
import Header from '../components/header'
import InputForm from '../components/InputForm'
import Footer from '../components/Footer'
import { useAuth } from '../contexts/auth'
import useResource from '../hooks/useResource'
import FactsCards from '../components/FactsCards'


export default function Home() {
  const { user, login, logout } = useAuth();
  const { resources, createResource } = useResource();

  return (
    <div>
      <Head>
        <title>CiviDex App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header login={login} />
      <main>
        <br></br>
        <h1>Welcome to CiviDex</h1>
        <InputForm createFact={createResource} user={user} />
        <br></br>
        <FactsCards facts={resources || []} />
      </main>
      <Footer />
    </div>
  )
}
