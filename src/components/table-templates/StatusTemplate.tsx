import {Tag} from "primereact/tag";
import {getCorDeSituacao} from "@/util/styles";

export const StatusTemplate = (solicitacao: any) => {
    if (solicitacao.situacao) {
        const { situacao } = solicitacao
        return (
            <Tag className="text-sm "
                 style={getCorDeSituacao(solicitacao.situacao)}
                 value={situacao}
            />
        )
    }
    return (

        <Tag
            className="p-0 px-2 my-1"
            icon="pi pi-exclamation-triangle"
            severity="warning"
            value="Não informado."/>
    )
}
