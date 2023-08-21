import {ImExit} from 'react-icons/im'
import {MenuItem} from 'primereact/menuitem';
import React, {useRef} from 'react';
import {Link} from "react-router-dom";
import {Menu} from "primereact/menu";
import {Button} from "primereact/button";
import {Avatar} from 'primereact/avatar';
import {useAuth} from "@/provider/Auth";
import {RoutersPathName} from "@/routes/schemas.ts";
import './style.css'
import {
    logoUEA,
    styeleFlexRowCenter
} from "@/util/styles";
import RenderObject from "@/components/RenderObject.tsx";
import {HeaderClass, styleAvatar, styleHeaderBtn, styleLogoHome} from "@/layout/header/style-home.ts";

export const AvatarUser = <Avatar
    icon="pi pi-user"
    size="large"
    style={styleAvatar}
    shape="circle"
    className="p-0"
/>

export function Header() {
    const auth = useAuth();

    const { user } = useAuth()


    const itemsUser: MenuItem[] = [
    
        {
            label: 'Logout',
            icon: <ImExit size={20} className='mr-2'/>,
            command() {
                auth.signout()
            },
        },
    ];

    const menuUser = useRef<Menu>(null);
    const itemsMenuUser = [
        {
            label: `Bem-vindo ${auth.perfil}`,
            items: itemsUser
        }
    ];
    return (

        <header className={HeaderClass}>
            <Link
                to={RoutersPathName.Home}
                className={styleHeaderBtn}>
                <div className={styeleFlexRowCenter}>
                    <img
                        src={logoUEA}
                        className={styleLogoHome}
                        alt="nome siscme"/>
                </div>
            </Link>

            <Menu
                model={itemsMenuUser}
                popup
                ref={menuUser}
                id="popup_menu_user"
            />

            <Button
                className='text-gray-100 font-bold h-2rem hover:bg-blue-800'
                onClick={(event) => {
                    menuUser?.current?.toggle(event)
                }}
                text
                aria-controls="popup_menu_left"
                aria-haspopup
            >
                <RenderObject
                    data={user}
                    keyObject="user.nome"
                />
                {AvatarUser}
            </Button>
        </header>
    )
}
