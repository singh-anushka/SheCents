import {eq} from "drizzle-orm";
import {NextResponse} from "next/server";
import db from "@/db/drizzle";
import {courses} from "@/db/schema";
import {IsAdmin} from "@/lib/admin";

export const GET = async(
    req:Request,
    {paramas}:{ paramas:{courseId: number}},
)=>{
    if(!IsAdmin()){
        return new NextResponse("Unauthorized",{status: 403});
    }
    
    const data = await db.query.courses.findFirst({
        where: eq(courses.id,paramas.courseId)
    });
    return NextResponse.json(data);
};

export const PUT = async(
    req:Request,
    {paramas}:{ paramas:{courseId: number}},
)=>{
    if(!IsAdmin()){
        return new NextResponse("Unauthorized",{status: 403});
    }
      const body=await req.json();
    const data = await db.update(courses).set({
        ...body,
        }). where(eq(courses.id,paramas.courseId)).returning();
    
    return NextResponse.json(data[0]);
};

 export const DELETE = async(
    req:Request,
    {paramas}:{ paramas:{courseId: number}},
)=>{
    if(!IsAdmin()){
        return new NextResponse("Unauthorized",{status: 403});
    }
    
    const data = await db.delete(courses). where(eq(courses.id,paramas.courseId)).returning();
    
    return NextResponse.json(data[0]);
};
