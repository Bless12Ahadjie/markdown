
import Header from "./Header"
import Sidenav from "./Sidenav"

export default function Applayout (){
return(
    <main >
        <div className="flex ">
            <Sidenav></Sidenav>

            <div>

            <Header></Header>

            </div>
            {/* <NightMode></NightMode> */}
           
        </div>

    </main>
)
}