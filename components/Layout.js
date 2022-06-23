import { useAuth } from '../contexts/auth'
import useResource from '../hooks/useResource'
import Header from './Header'
import Footer from './Footer'
import Head from 'next/head'


export default function Layout({children}) {

    const { user, logout } = useAuth();
    const { resources } = useResource();

    return (
        <div>
            <Head>
                <title>Admin</title>
            </Head>
            <Header username = {user?.user} onLogout={logout} />
                <main>{children}</main>
            <Footer reports={resources || []} />
        </div>
    )

}
