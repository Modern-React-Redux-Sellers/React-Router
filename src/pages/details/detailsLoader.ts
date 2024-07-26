import {getPackage} from "../../api/queries/getPackage";
import type {Params} from "react-router-dom";
import type {PackageDetails} from "../../api/types/packageDetails";

interface LoaderArgs {
    params:Params
}

export interface DetailsLoaderResult {
    details:PackageDetails
}

//params pulls from the wildcard after /packages/ url
export async function detailsLoader({params}:LoaderArgs):Promise<DetailsLoaderResult> {
    const {name} = params;

    if (!name){
        throw new Error('Name must be provided')
    }

    const details = await getPackage(name);

    return {
        details
    }
}