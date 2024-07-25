import {searchPackages} from "../../api/queries/searchPackages";


//Gets data for SearchPage component, utilizes search packages and pulls term from URL
export async function searchLoader({request}:{request:Request}) {
    const {searchParams} = new URL(request.url);
    const term = searchParams.get('term');

    if (!term){
        throw new Error('Search term must be provided');
    }

    const results = await searchPackages(term);

    return {
        searchResults: results
    }
    //return an object in order to return multiple results if more than one fetch request
}