import Footer from "../components/Footer";
import Header from "../components/header";
import LoginForm from '../components/LoginForm'
import FactsTable from '../components/FactsTable'
import { useAuth } from "../contexts/auth";
import useResource from "../hooks/useResource";


export default function Admin() {

  const { login, logout, user } = useAuth()
  const { resources, deleteResource, updateResource } = useResource()

  return (
    <>
      <Header user={user} onLogout={logout} />
      {!user ? <LoginForm onLogin={login} ></LoginForm> :
        <FactsTable user={user} facts={resources || []} onDelete={deleteResource} update={updateResource}/>
      }
      <Footer />
    </>
  )
}
