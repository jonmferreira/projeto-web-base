import React from "react";
import moment from "moment/moment";

export const TimeFormatter = (datetime: any ) => {
    const styleDate =`
        flex flex-column
    `
    if (datetime) {
        const now = moment()
        const dataAlvo = moment(datetime)
        const diffHoras = now.diff(dataAlvo, 'hours')
        const diffMinutos = now.diff(dataAlvo, 'minutes')
        if (diffHoras > 1) {
            return (
                <div className={styleDate}>
                    {`Há ${diffHoras} horas`}
                </div>
            );
        } else if (diffHoras == 1) {
            return (
                <div className={styleDate}>
                    {`Há ${diffHoras} hora`}
                </div>
            );
        }
        else if (diffMinutos == 1) {
            return (
                <div className={styleDate}>
                    {`Há ${diffMinutos} minuto`}
                </div>
            );
        } else {
            return (
                <div className={styleDate}>
                    {`Há ${diffMinutos} minutos`}
                </div>
            );
        }
    } else {
        return (
            <div className={styleDate}>
                --:--
            </div>
        );
    }
};
