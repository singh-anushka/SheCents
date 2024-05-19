 import {eq} from "drizzle-orm";
import {NextResponse} from "next/server";
import db from "@/db/drizzle";
import {units} from "@/db/schema";
import {IsAdmin} from "@/lib/admin";

export const GET = async(
    req:Request,
    {paramas}:{ paramas:{unitId: number}},
)=>{
    if(!IsAdmin()){
        return new NextResponse("Unauthorized",{status: 403});
    }
    
    const data = await db.query.units.findFirst({
        where: eq(units.id,paramas.unitId)
    });
    return NextResponse.json(data);
};

export const PUT = async(
    req:Request,
    {paramas}:{ paramas:{unitId: number}},
)=>{
    if(!IsAdmin()){
        return new NextResponse("Unauthorized",{status: 403});
    }
      const body=await req.json();
    const data = await db.update(units).set({
        ...body,
        }).where(eq(units.id,paramas.unitId)).returning();
    
    return NextResponse.json(data[0]);
};

 export const DELETE = async(
    req:Request,
    {paramas}:{ paramas:{unitId: number}},
)=>{
    if(!IsAdmin()){
        return new NextResponse("Unauthorized",{status: 403});
    }
    
    const data = await db.delete(units). where(eq(units.id,paramas.unitId)).returning();
    
    return NextResponse.json(data[0]);
};
