
import { ToastContainer } from "react-toastify"
import MarkdownBody from "../pages/MarkdownBody"
import Header from "./Header"
import Sidenav from "./Sidenav"
import MarkdownView from "./markdownVIew"

export default function Applayout (){
return(
    <main >
        <div className="flex dark:bg-black-600 ">
            <Sidenav></Sidenav>

            <div className=" w-full h-screen">

            <Header></Header>
            <div>
            <MarkdownBody ></MarkdownBody>
            </div>
        
            </div>
       
           
        </div>

    </main>
)
}