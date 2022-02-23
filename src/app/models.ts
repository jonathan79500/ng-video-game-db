export interface Game{

    background_image : string;
    name:string;
    released:string;
    metacritic_url:string;
    description:string;
    website:string;
    metacritic:number; 
    genres:Array<Genre>;
    parent_platforms:Array<ParentPletform>;
    publishers:Array<Publishers>;
    ratings:Array<Rating>;
    screenshots:Array<Screenshots>;
    trailers:Array<Trailer>;
}

export interface APIResponse<T>{
    results:Array<T>;
}

interface Genre{
    name:string;
}

interface ParentPletform{
    platform:{
      name:string;
    }
}
interface Publishers{
    name:string;
}
interface Rating{
    id:number;
    count:number;
    title:string;
}

interface Screenshots{
    image:string;
}

interface Trailer{
data: {
    max:string;
}
}