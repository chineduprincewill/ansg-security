import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext';
import { fetchAllStates } from '../apis/utilityActions';

const StatesComponent = ({ setState, placeholder }) => {

    const { token } = useContext(AppContext);
    const [allStates, setAllStates] = useState();
    const [error, setError] = useState();
    const [fetching, setFetching] = useState(false);

    useEffect(() => {
        fetchAllStates(token, setAllStates, setError, setFetching)
    }, [])

    return (
        <select
            className='w-full md:w-[48%] p-2 rounded-md border dark:border-gray-700 bg-transparent'
            onChange={(e) => setState(e.target.value)}
            required
        >
            <option value="">
            { 
                fetching && !allStates ? 'fetching states' : placeholder
            }
            </option>
        {
            (allStates && allStates?.data.length > 0) &&
                allStates?.data.map(state => (
                    <opiton key={state?.id} value={state?.id}>{state?.name}</opiton>
                ))
        }
        </select>
    )
}

export default StatesComponent