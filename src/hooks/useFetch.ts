import { useCallback, useEffect, useState } from "react";


type Method = 'GET' | 'POST' | 'PUT' | 'DELETE';

interface UseFetchOptions {
  method?: Method;
  headers?: HeadersInit;
  body?: any;
  immediate?: boolean; 
  credentials?: RequestCredentials
}

export default async function useFetch<T>(url: string, options: UseFetchOptions = {}){
    const {
        method = 'GET',
        headers = { 'Content-Type': 'application/json' },
        body = null,
        // immediate = true,
        credentials = "omit"
    } = options;

    const [data, setData] = useState<T | null>(null)
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState<boolean>(false);

    const fetchData = useCallback(async () => {
        setLoading(true);
        setError(null);

        try {
            const res = await fetch(url, {
                method: method,
                headers: headers,
                body: body ? JSON.stringify(body) : null,
                credentials: credentials
            })

            const contentType = res.headers.get('Content-Type');
            const responseData = contentType?.includes('application/json')
                ? await res.json()
                : await res.text();

            if (!res.ok) {
                throw new Error(responseData?.message || responseData || 'Erro na requisição');
            }
            setData(responseData)

        } catch (error: any) {
            setError(error.message || 'Unknow error');
        } finally {
            setLoading(false);
        }
    }, [url, headers, method, body])

    // useEffect(() => {
    //     if (immediate) {
    //         fetchData();
    //     }
    // }, [fetchData, immediate]);

    return {data, loading, error, refetch: fetchData}
}
