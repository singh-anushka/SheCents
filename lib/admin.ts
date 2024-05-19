import {auth} from "@clerk/nextjs"


const adminIds =[
   "user_2fzdj2gqVPbHgYT39fhZdIEtjGb",
   "user_2fv8BDLYWHbM2FG7Adh8ITVvfg7",
   "user_2fsax7yUy6Xsh3qbB6Y3kMOx3zZ"
];


export const IsAdmin =  () =>{
    const {userId}=  auth();

    if(!userId){
        return false;

    }

    return adminIds.indexOf(userId) !== -1
}