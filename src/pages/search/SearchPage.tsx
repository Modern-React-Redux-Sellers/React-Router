import {useLoaderData} from "react-router-dom";
import {SearchLoaderResults} from "./searchLoader";

export default function SearchPage() {
    //used to retrieve data from loader function from App.tsx
    const data = useLoaderData() as SearchLoaderResults;

    console.log(data);

    return <div>Search Page!</div>
}