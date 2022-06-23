import FactsTable from "../components/FactsTable";
import LoginForm from "../components/LoginForm";
import { useAuth } from '../contexts/auth'

export default function Home2() {
    const { user, login, logout } = useAuth();
    if (!user) return <LoginForm onSubmit={login} />

    return <FactsTable
        onLogout = {logout}
        username = {user.username}
    />
}
