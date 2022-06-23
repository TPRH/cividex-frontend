import axios from 'axios';
import useSWR from 'swr';
import { useAuth } from '../contexts/auth';

export const apiUrl = process.env.NEXT_PUBLIC_RESOURCE_URL;

export default function useResource() {
    const { tokens, logout } = useAuth();
    const { data, error, mutate } = useSWR([apiUrl, tokens], fetchResource);
    async function fetchResource(url) {
        if (!tokens) {
            return;
        }
        try {
            const response = await axios.get(apiUrl, config());
            return response.data;
        } catch (err) {
            handleError(err);
        }
    }

    async function createResource(info) {
        try {
            await axios.post(apiUrl, info, config());
            await mutate(); // mutate causes complete collection to be refetched
        } catch (err) {
            handleError(err);
        }
    }

    async function deleteResource(id) {
        try {
            const url = apiUrl + id;
            await axios.delete(url, config());
            await mutate();
        } catch (err) {
            handleError(err);
        }
    }

    async function updateResource(info) {
        try {
            const url = apiUrl + id;
            await axios.put(url, info, config());
            await mutate();
        } catch (err) {
            handleError(err);
        }
    }

    // helper function to handle getting Authorization headers EXACTLY right
    function config() {
        return {
            headers: {
                'Authorization': 'Bearer ' + tokens.access
            }
        };
    }

    function handleError(err) {
        console.error(err);
        // STRETCH: refresh the access token when it has expired
        logout();
    }

    return {
        resources: data,
        error,
        loading: tokens && !error && !data,
        createResource,
        deleteResource,
        updateResource,
    };
}

/* STRETCH
This approach works, but it's not very snappy for the user.
Check the SWR docs to see if you can "optomistically" render updated state while the API response is pending.
*/
