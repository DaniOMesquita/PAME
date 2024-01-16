class Usuario   {
    // Classe que caracteriza um usuário

    constructor(idU, nomeU, contato, senha, historico)    {
        this._idU = idU;
        this._nomeU = nomeU;
        this._contato = contato
        this._senha = senha;
        this._historico = [];

    }

    // Métodos getter e setter de idU (ID de Usuário)

    get idU()   {
        return this._idU;
    }

    set idU (novoIdU)   {
        this._idU = novoIdU
    }

    // Métodos getter e setter de nomeU (nome de Usuário)

    get nomeU()   {
        return this._nomeU;
    }

    set nomeU (novoNomeU)   {
        this._nomeU = novoNomeU
    }

    // Métodos getter e setter de contato

    get contato()   {
        return this._contato;
    }

    set contato (novoContato)   {
        this._contato = novoContato
    }

    // Métodos getter e setter de senha

    get senha()   {
        return this._senha;
    }

    set senha (novaSenha)   {
        this._senha = novaSenha
    }

    // Métodos getter e setter de contato

    get historico()   {
        return this._contato;
    }

    set historico (novoHistorico)   {
        this._historico = novoHistorico
    }

    // Método toString

    toString () {
        return '\nInformações de Usuário:\n\nNome de Usuário: ${this._idU}\nNome: ${this._nomeU}\nTelefone de Contato: ${this._contato}\nHistórico:\n\n${this._historico}';
    }
    
}

class Propriedade   {
    // Classe que caracteriza uma propriedade
    constructor (idP, nomeP, endereco, capacidade, quartos, preco, disponibilidade)    {
        this._idP = idP;
        this._nomeP = nomeP;
        this._endereco = endereco;
        this._capacidade = capacidade;
        this._quartos = quartos;
        this._preco = preco;
        this._disponibilidade = disponibilidade;
    }

    // Métodos getter e setter de idP (ID da Propriedade)

    get idP ()   {
        return this._idP;
    }

    set idP (novoIdP)   {
        this._idP = novoIdP
    
    }

    // Métodos getter e setter de nomeP (nome da Propriedade)

    get nomeP ()   {
        return this._idP;
    }

    set nomeP (novoNomeP)   {
        this._nomeP = novoNomeP
    
    }

}

class Reserva   {
    // Classe que caracteriza a reserva de uma propriedade
    constructor (idR, idP, data, dataCheckin, dataCheckout, valor, statusPagamento)   {
        this._idR = idR
        this.idP = idP
        this.idU = idU
        this._data = data
        this._dataCheckin = dataCheckin
        this._dataCheckout = dataCheckout
        this._valor = valor
        this._statusPagamento = statusPagamento
    }

    // Métodos getter e setter de idR (ID da reserva)

    get idR ()   {
        return this._idR;
    }

    set idR (novoIdR)   {
        this._idR = novoIdR
    }

    // Métodos getter e setter de data

    get data ()   {
        return this._data;
    }

    set data (novaData)   {
        this._data= novaData
    }

    // Métodos getter e setter de dataCheckin (data de Check-in)

    get dataCheckin ()   {
        return this._dataCheckin;
    }

    set dataCheckin (novaDataCheckin)   {
        this._dataCheckin = novaDataCheckin
    }

    // Métodos getter e setter de dataCheckin (data de Check-out)

    get dataCheckout ()   {
        return this._dataCheckout;
    }

    set dataCheckout (novaDataCheckout)   {
        this._dataCheckout = novaDataCheckout

    }

    // Método toString

    toString () {
        return '\nID da Reserva: ${this._idR}\nID da Propriedade: ${this.idP}\nNome de Usuário: ${this.idU}\nData: ${this._data}\nData de Check-in: ${this._dataCheckin}\nData de Check-out: ${this._dataCheckout}';
    }

}

const prompt = require("prompt-sync")({sigint: true});

// Constantes

let nomeUR;
let nomeUR2;
let nomeR;
let contatoR;
let senhaR;
let senhaR2;

class Sistema   {
    // Classe que contém os métodos do sistema

    // Métodos para o funcionário não logado 

    inicializar ()    {
        
        console.log("Bem-vindo(a) ao sistema da Pousada Eclipse!\nDigite o número referente à ação que você gostaria de realizar:\n\n1. Fazer Cadastro\n2. Fazer Login\n3. Sair do Programa\n\nResposta:")
    
        const r0 = prompt();
    
        const n0 = parseInt(r0);
    
        if (n0 === 1) {
            this.cadastrar();
        } else if (n0 === 2) {
            this.logar();
        
        } else if (n0 === 3) {
            this.sair();
        
        } else {
            console.log("\nOpção inválida\n");
            this.inicializar();
        
        }
    
    }

    cadastrar ()    {

        console.log("\nÁrea de Cadastro\n");
        nomeUR = prompt("Nome de Usuário: ");
        nomeR = prompt("Nome: ");
        contatoR = prompt("Telefone de Contato: ");
        senhaR = prompt("Senha: ");
    
        // Construção da instância usuario com base nos dados informados
        this.usuario = new Usuario (nomeUR, nomeR, contatoR, senhaR);
        this.logar ();
    
    }

    logar ()   {
        console.log("\nÁrea de Login\n");
        nomeUR2 = prompt("Nome de usuário: ");
        senhaR2 = prompt("Senha: ");
    
        if (nomeUR === nomeUR2 && senhaR === senhaR2)  {
            this.entrar ()
    
        } else  {
            console.log("Dados incorretos. Por favor, tente novamente.")
            this.logar ()
        }
    
    }

    sair ()    {
        console.log("\nSessão finalizada\n");
        process.exit();
    }

    entrar() {
        console.log("\nLogin realizado com sucesso.\n\nDigite o número referente à ação que você gostaria de realizar:\n\n1. Ver Meus Dados\n2. Modificar Meus Dados\n3. Ver Lista de Propriedades\n4. Ver Lista de Reservas\n5. Ver Lista de Anúncios\n6. Reservar Propriedade\n7. Cancelar Reserva (Exige pelo menos 24h de antecedência)\n8. Adicionar Propriedade\n9. Excluir Propriedade\n10. Fazer Anúncio\n11. Excluir Anúncio\n12. Avaliar Estadia\n13. Visualizar Avaliaçoes\n\nResposta:");
        const r1 = prompt();
        const n1 = parseInt(r1);
    
        if (n1 === 1) {
            this.verMeusDados();
        } else if (n1 === 2) {
            this.modificarMeusDados();
        } else if (n1 === 3) {
            this.verListaProp();
        } else if (n1 === 4) {
            this.verListaReservas();
        } else if (n1 === 5) {
            this.verListaAnuncios();
        } else if (n1 === 6) {
            this.reservarProp();
        } else if (n1 === 7) {
            this.cancelarReserva();
        } else if (n1 === 8) {
            this.addProp();
        } else if (n1 === 9) {
            this.excluirProp();  
        } else if (n1 === 10) {
            this.fazerAnuncio();
        } else if (n1 === 11) {
            this.excluirAnuncio();
        } else if (n1 === 12) {
            this.avaliarEstadia();
        } else if (n1 === 13) {
            this.visualizarAvaliacoes();  
        } else {
            console.log("\nOpção inválida\n");
            this.entrar();
        }
    }

    // Métodos para o funcionário logado

    verMeusDados () {

        if (this.usuario) {
            console.log(this.usuario.toString());
        } else {
            console.log("Usuário não encontrado.");
        }

    }

    modificarMeusDados()    {

    }

    verListaProp () {

    }

    verListaReservas () {

    }

    verListaAnuncios () {

    }

    reservarProp () {
        
    }

    cancelarReserva ()  {

    }

    addProp ()  {

    }

    excluirProp ()  {

    }

    fazerAnuncio () {

    }

    excluirAnuncio () {

    }

    avaliarEstadia ()  {

    }

    visualizarAvaliacoes () {

    }

}

// O programa é inicializado automaticamente

const programa = new Sistema();
programa.inicializar ();








