import "dotenv/config"

import { drizzle } from "drizzle-orm/neon-http"

import {neon} from "@neondatabase/serverless";

import * as schema from "../db/schema";

const sql = neon(process.env.DATABASE_URL!);

//@ts-ignore

const db = drizzle( sql , {schema});
const main = async () =>{
    try{
        console.log("Seeding db");
        await db.delete(schema.courses)
        await db.delete(schema.userProgress);

        await db.insert(schema.courses).values([
            {
                id:1,
                title:"Personal Finance",
                imageSrc:"/es.svg",
            },
            {
                id:2,
                title:"saving and budgeting",
                imageSrc:"/es.svg",
            },

        ])


    }
    catch(error){
console.error(error); 
throw new Error ("Failed to seed the db ")
    }
};

main ();
