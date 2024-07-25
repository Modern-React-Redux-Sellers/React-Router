import {useLoaderData} from "react-router-dom";


export default function SearchPage() {
    //used to retrieve data from loader function from App.tsx
    const data = useLoaderData();

    console.log(data);

    return <div>Search Page!</div>
}