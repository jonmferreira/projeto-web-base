import "./style.css"

export const logoUEA = "src/assets/logo/logoUEA.svg";
export const logoEST = "src/assets/logo/logoEST.png";

export const styleFlexRow = `
flex
flex-row
`
export const styeleFlexRowCenter = `
${styleFlexRow}
justify-content-center
align-items-center
`

export const flexScreenCenter = "flex " +
    "w-screen " +
    "h-screen " +
    "justify-content-center " +
    "align-items-center ";
export const flexScreenCenterColumn = "flex " +
    "w-screen " +
    "h-screen " +
    "justify-content-top " +
    "align-items-center " +
    "flex-column "
export const styleBtn1 = "w-full " +
    "mt-2 " +
    "text-white " +
    "hover:bg-blue-500 " +
    "bg-custom";

export const styleDivRadioGroup = "flex gap-5 mb-2 p-2 border-1 border-round border-gray-400"

export const styleSpan = "-mt-5 -ml-2 p-0 text-xs text-gray-600 absolute"

export const styleDropdown = 'w-full text-left h-dropdown'

export const titleFlexCss = "m-0 p-0 mb-4 text-blue-600 text-4xl";

export const headerTableStyle = { backgroundColor: '#204887', color: '#fff' }

export const ContainerFlexDiv = `
    w-full 
    flex 
    flex-column 
    align-items-center 
    px-2 
    md:px-8 
    text-center 
    pt-4
    `

export const getCorDeSituacao = (situacao: string) => {
    switch (situacao) {
        case "Aguardando Coleta":
            return {
                background: '#EF4444'
            }
        case "Processando":
            return {
                background: '#6366f1'
            }
        case "Entregue":
            return {
                background: '#22c55e'
            }
        case "Em Transporte":
            return {
                background: '#22c55e'
            }

        default:
            return {
                background: '#014983'
            }

    }
}

export const divContainerForm = 'flex gap-5 justify-content-between'

export const divSectionForm = 'flex flex-column gap-4 w-full'

export const titleStyle = 'text-4xl text-blue-600 mt-0'
