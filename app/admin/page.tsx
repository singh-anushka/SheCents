import {redirect} from "next/navigation";
import dynamic from "next/dynamic";
import {IsAdmin} from "@/lib/admin";
// import App from "./app";

const App=dynamic(()=> import("./app"),{ssr:false});
const AdminPage =  () =>{
//    const isAdmin=IsAdmin();

    if(!IsAdmin()){
        redirect("/");
    }

    return(
        <div>
            <App />
            </div>
       
    );
};

export default AdminPage;  