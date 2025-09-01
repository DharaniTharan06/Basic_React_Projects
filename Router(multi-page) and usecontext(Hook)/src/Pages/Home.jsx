import { useContext } from 'react';
import { Appcontext } from '../App';
import { useQuery } from '@tanstack/react-query';
import Axios from "axios";

export const Home = () => {
    const { data,isLoading,isError,error,refetch } = useQuery({
        queryKey: ["catFact"],
        queryFn: async () => {
            const response = await Axios.get("https://catfact.ninja/fact");
            return response.data;
        },
    });/*This function takes in a array which contains an unique id and second is a function that 
    fetchs a data*/
    //we are doing the isloading and isError so that we get the data.fact value, because without the value the react will not render   
    //Rather than using data? we can use isloading and iserror 
    //To use refetch we can't directly pass refetch we have to do it like refetch()
    const { username } = useContext(Appcontext);
    if (isLoading) {
        return (
            <div>
                <h1>This is the Home page and user is: {username}</h1>
                <p>Loading a cat fact...</p>
            </div>
        );
    }
    if (isError) {
        return (
            <div>
                <h1>This is the Home page and user is: {username}</h1>
                <p>Error fetching cat fact: {error.message}</p>
            </div>
        );
    }
    return (
        <div>
            <h1>This is the Home page and user is: {username}</h1>
            <p>{data.fact}</p>
            <button onClick={()=>{refetch()}}>Update Fact</button>
        </div>
    );
};