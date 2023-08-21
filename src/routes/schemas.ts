export enum RoutersPathName {
    Login = '/login',
    Home = '/Home',
    /* Cliente */
    Solicitacoes = "/solicitacoes",
    /* Tecnico CME Gerencimaneto de demandas */
    DemandasPendentes = `/demandas-pendentes`,
    SolicitacoesEmAndamento = `/solicitacoes-em-andamento`,
    DemandasEntregues = `/demandas-entregues`,
    DemandasEmAndamento = "/demandas-em-andamento",
    Demandas = "/demandas",
    /* Motorista Gerencimaneto de demandas */
    SolicitacoesEntregaColeta = "/Solicitacoes-entrega-e-coleta",
    /* Gerenciar Coleta ou Entrega por Motorista */
    GerenciarSolicitacoesEntregaColeta = "/gerencia-solicitacoes-entrega-e-coleta",
    /* processo interno */
    Esterilizacao = "/esterilizacao",
    Distribuicao = "/distribuicao",
    Recebimento = "/recebimento",
    Producao = "/producao",
    Termo = "/termo",
    /* crud processo interno produtos */
    NovoSequencialEtiqueta = "/novo-sequencial-etiqueta",
    PesquisarEtiqueta = "/pesquisa-etiqueta",
    NovaEtiqueta = "/nova-etiqueta",
    PesquisarCaixas = "/pesquisar-caixa",
    /* crud processo interno patrimonio */
    Caixa = "/caixa",
    Produto = '/produto',
    /* crud processo interno especificações */
    TipoDeProduto = '/tipo-de-produto',
    SubTipoDeProduto = '/subtipo-de-produto',
    /* crud pessoas interno */
    CadastroUsuario = "/cadastro-usuario",
    NovoCliente = "/novo-cliente",
    NovoUsuarioCliente = "/novo-usuario-cliente",
    NovoMotorista = '/novo-motorista',
    NovoVeiculo = "/novo-veiculo",
}

