import axios from "./baseUrl";

export const fetchAllStates = async ( token, setAllStates, setError, setFetching ) => {

    setFetching(true);

    try{
        const response  = await axios.get(`states`,
            {
                headers: { 'Accept' : 'application/json' }
            }
        );    

        console.log(response.data);
        setAllStates(response.data);
    }
    catch (err) {
        if (!err?.response) {
            setError('No Response from Server');
        } else {
            console.log(err.response.data);
            setError(err.response.data);
        }
    }

    setFetching(false);
}