import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/header";
import LoginForm from '../components/LoginForm'
import FactsTable from '../components/FactsTable'
import { useAuth } from "../contexts/auth";
import useResource from "../hooks/useResource";


export default function Admin() {

  const { login } = useAuth()
  const { resources, deleteResource, updateResource } = useResource()

  return (
    <>
      <Header />
      <LoginForm onLogin={login} ></LoginForm>
      <FactsTable facts={resources || []} onDelete={deleteResource} update={updateResource}/>
      <Footer />
    </>
  )
}
