type zeroBounceResponse=any;

const baseUrl="https://api.zerobounce.net/v2"

export const validateEmail=async({email}:{email:string}):Promise<zeroBounceResponse>=>{
    const uri=`${baseUrl}/validate?api_key=${process.env.ZERO_BOUNCE_API_KEY}&email=${email}`
    try{
        const response=await fetch(uri);
        if(!response.ok)
        {
            throw new Error(`HTTP error with status: ${response.status}`)
        }
        const data:zeroBounceResponse=await response.json();
        
        return JSON.stringify(data);
    }
    catch(err)
    {
        console.log(err)
        throw err;
    }
}