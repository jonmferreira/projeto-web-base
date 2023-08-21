import {
    styleBtnLoginApresentacao,
    styleCardLogin,
    styleLogoApresentacao,
    styleRow,
    tituloApresentacao
} from "@pages/general/Login/style.ts";
import {Button} from "primereact/button";
import {Image} from "primereact/image";
import React, {useCallback, useEffect, useMemo} from "react";
import {logoEST, logoUEA} from "@/util/styles";
import {EtapaLogin} from "@pages/general/Login";

// @ts-ignore
export function Apresentacao({show, setShow, setEtapaLogin}) {
    const showBtn = () => {
        if (!show) {
            setTimeout(() => {
                setShow(true)
            }, 1000)
        }
    }
    showBtn()
    
    const handleClickIcon = () => {
        window.open('https://www2.uea.edu.br')
    }
    const handleClickLogo = useCallback(() => {
        setTimeout(() => {
            setEtapaLogin(EtapaLogin.LOGIN)
        }, 200)
    }, [setEtapaLogin])

    const showButton = useMemo(() => {
        if (show) {
            return (

                <Button
                    text
                    className={styleBtnLoginApresentacao}
                    onClick={handleClickLogo}
                    size="large"
                >
                    <Image
                        width="250"
                        src={logoUEA}
                        alt="Image"
                    />

                </Button>
            )
        }
        return <></>
    }, [handleClickLogo, show])

    useEffect(() => {
        setTimeout(() => {
            handleClickLogo()
        }, 1600)
    }, [handleClickLogo])
    return (
        <div className={styleCardLogin}>
            <div className={styleRow}>
                <img
                    onClick={handleClickIcon}
                    src={logoEST}
                    className={styleLogoApresentacao}
                    alt="logo https://www2.uea.edu.br"/>
            </div>

            {showButton}
            <h6 className={tituloApresentacao}>
                © 2023 UEA, EST. Todos os direitos reservados.
            </h6>
        </div>
    )
}
