import FactsTable from "./FactsTable";
import InputForm from './InputForm';
import useResource from "../hooks/useResource";

export default function FactAdmin() {
    const { resources, createResource, deleteResource, error } = useResource();

    if (error) {
        onLogout();
        return null;
    }
    if (!resources) return <h2>Loading...</h2>

    return (
        <div>
            <InputForm onCreate={createResource} />
            <FactsTable onDelete={deleteResource} />
        </div>
    )
}
