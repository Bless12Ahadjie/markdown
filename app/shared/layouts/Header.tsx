'use client'

import Button from "../components/SaveButton";
import Logo from "../components/Logo";
import DocumentName from "../components/DocumentName";
import DeleteBtn from "../components/DeleteBtn";
import Toggle from "../components/Toggle";
import store from '../../core/libraries/sidenavStore';
import documentStore from '../../core/libraries/forDocumentStore';
import { observer } from 'mobx-react';

const Header = observer(() => {
    const toggleSidebar = () => {
        store.toggleSidebar();
      };
    


    return(
        <main className={`w-full absolute ${store.isSidebarOpen? 'right-[-250px]':'right-[0px]'}`}>
            <div className="flex h-72 bg-black-400 justify-between pr-6 items-center cursor">
                <div className="flex gap-25">
                    <Toggle></Toggle>

                    <div className='flex justify-start items-center gap-6'>
                        <Logo></Logo>
   
                        <div className='hidden sm:block h-12 w-0.1 bg-black-200'></div>
                        <DocumentName></DocumentName>

                    </div>

                </div>

                <div className="flex justify-center items-center gap-6 ">
                   <DeleteBtn></DeleteBtn>
                    <Button className={"text-white text-[15px]"} name={"Save Changes"}></Button>
                </div>

            </div>
        </main>
    )
});

export default Header;