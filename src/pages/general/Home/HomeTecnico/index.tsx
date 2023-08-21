import {useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {Fieldset} from "primereact/fieldset";
import '../style.css'
import {RoutersPathName} from "@/routes/schemas.ts";
import {Button} from "primereact/button";
import {styleMainContent, styleOptionsMainSpace} from "@pages/general/Home/style.ts";

enum FieldsetOptions {
    GerencimentoDeDemandas,
    GerencimentoDePatrimonio,
    GerencimentoDeEtiquetagem,
    GerencimentoDeEspecificacoes,
    GerencimentoDeEsterilizacao,
    _Length
}

export function HomeTecnico() {
    const navigation = useNavigate();
    const goRouter = (rota: string) => {
        navigation(rota)
    }
    const [optionsCollapsed, setOptionsCollapsed] = useState<boolean[]>(Array(FieldsetOptions._Length).fill(true))
    useEffect(() => {
        const options = [...Array(FieldsetOptions._Length).fill(true)]
        options[0] = false
        setOptionsCollapsed(options)
    }, [])
    const handleMenu = (option: number, value: boolean) => {
        const optionOpen = [...optionsCollapsed].fill(true)
        optionOpen[option] = value
        setOptionsCollapsed(optionOpen)
    }

    return (
        <div className={styleMainContent}>
            <Fieldset
                onToggle={e => {
                    handleMenu(FieldsetOptions.GerencimentoDeDemandas, e.value)
                }}
                collapsed={optionsCollapsed[FieldsetOptions.GerencimentoDeDemandas]}
                legend="Gerenciamento de Demandas"
                toggleable
                className='p-0'>
            </Fieldset>
            <Fieldset
                legend="Processo de Esterilização"
                onToggle={e => {
                    handleMenu(FieldsetOptions.GerencimentoDeEsterilizacao, e.value)
                }}
                collapsed={optionsCollapsed[FieldsetOptions.GerencimentoDeEsterilizacao]}
                toggleable
                className='p-0'>
                <div className={styleOptionsMainSpace}>
                    <Button
                        outlined
                        label="Recebimento"
                        onClick={() => goRouter(RoutersPathName.Recebimento)}
                    />
                    <Button
                        severity="warning"
                        disabled
                        label="Produção"
                        icon="pi pi-spin pi-cog"
                        onClick={() => goRouter(RoutersPathName.Producao)}
                    />
                    <Button
                        severity="warning"
                        outlined
                        disabled
                        label="Esterilização"
                        icon="pi pi-spin pi-cog"
                        onClick={() => goRouter(RoutersPathName.Esterilizacao)}
                    />
                    <Button
                        severity="warning"
                        disabled
                        label="Termo"
                        icon="pi pi-spin pi-cog"
                        onClick={() => goRouter(RoutersPathName.Termo)}
                    />
                    <Button
                        severity="warning"
                        outlined
                        disabled
                        label="Distribuição"
                        icon="pi pi-spin pi-cog"
                        onClick={() => goRouter(RoutersPathName.Distribuicao)}
                    />
                </div>
            </Fieldset>

            <Fieldset
                legend="Gerenciamento de Patrimônio"
                onToggle={e => {
                    handleMenu(FieldsetOptions.GerencimentoDePatrimonio, e.value)
                }}
                collapsed={optionsCollapsed[FieldsetOptions.GerencimentoDePatrimonio]}
                toggleable
                className='p-0'>
                <div className={styleOptionsMainSpace}>
                    <Button
                        severity="warning"
                        onClick={() => goRouter(RoutersPathName.Caixa)}
                        label="Caixas"
                    />
                    <Button
                        severity="warning"
                        outlined
                        onClick={() => goRouter(RoutersPathName.Produto)}
                        label="Produtos"
                    />
                </div>
            </Fieldset>

            <Fieldset
                legend="Gerenciamento de Etiquetagem"
                onToggle={e => {
                    handleMenu(FieldsetOptions.GerencimentoDeEtiquetagem, e.value)
                }}
                collapsed={optionsCollapsed[FieldsetOptions.GerencimentoDeEtiquetagem]}
                toggleable
                className='p-0'>
                <div className={styleOptionsMainSpace}>
                    <Button
                        severity="warning"
                        outlined
                        onClick={() => goRouter(RoutersPathName.NovoSequencialEtiqueta)}
                        label="Novo sequencial de etiqueta"
                    />
                    <Button
                        severity="warning"
                        onClick={() => goRouter(RoutersPathName.PesquisarEtiqueta)}
                        label="Pesquisar etiqueta"
                    />
                    <Button
                        severity="warning"
                        outlined
                        onClick={() => goRouter(RoutersPathName.PesquisarCaixas)}
                        label="Pesquisar caixas"
                    />
                </div>
            </Fieldset>
            <Fieldset
                legend="Gerenciamento de Especificações"
                onToggle={e => {
                    handleMenu(FieldsetOptions.GerencimentoDeEspecificacoes, e.value)
                }}
                collapsed={optionsCollapsed[FieldsetOptions.GerencimentoDeEspecificacoes]}
                toggleable
                className='p-0'>
                <div className={styleOptionsMainSpace}>
                    <Button
                        severity="warning"
                        onClick={() => goRouter(RoutersPathName.TipoDeProduto)}
                        label="Tipos de produto"
                    />
                    <Button
                        severity="warning"
                        outlined
                        onClick={() => goRouter(RoutersPathName.SubTipoDeProduto)}
                        label="Subtipos de produto"
                    />
                </div>
            </Fieldset>

        </div>
    )
}
