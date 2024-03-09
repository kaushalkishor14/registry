
import type { packageSummary } from "../types/packageSummary";


interface searchResponse {
    objects:{
        package:{
            name:string;
            version:string;
            description:string;
            keywords:string[];
        }
    }
}

export async function searchPackages(term:string): Promise<packageSummary[]>{
    
    const res = await fetch(
        `http://registry.npmjs.org/-/v1/search?text=${term}`
      );

      const data: searchResponse= await res.json();

      
      return data.objects.map(({package:{name,description,version,keywors} })=>{

        return{
            name,
            description,
            version,
            keywors,

        };
      });
}