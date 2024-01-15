class Usuario   {
    // (descrever classe)

    constructor(idU, nomeU, contato, senha, historico)    {
        this._idU = idU;
        this._nomeU = nomeU;
        this._contato = contato;
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
 
}

class Propriedade   {
    // (descrever classe)
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

    get idP()   {
        return this._idP;
    }

    set idP (novoIdP)   {
        this._idP = novoIdP
    
    }

    // Métodos getter e setter de nomeP (nome da Propriedade)

    get nomeP()   {
        return this._idP;
    }

    set nomeP (novoNomeP)   {
        this._nomeP = novoNomeP
    
    }

}

class Reserva   {
    // (descrever classe)

    constructor(idR, idP, data, dataCheckin, dataCheckout, valor, statusPagamento)   {
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

    get idR()   {
        return this._idR;
    }

    set idR (novoIdR)   {
        this._idR = novoIdR
    }

    // Métodos getter e setter de data

    get data()   {
        return this._data;
    }

    set data (novaData)   {
        this._data= novaData
    }

    // Métodos getter e setter de dataCheckin (data de Check-in)

    get dataCheckin()   {
        return this._dataCheckin;
    }

    set dataCheckin (novaDataCheckin)   {
        this._dataCheckin = novaDataCheckin
    }

    // Métodos getter e setter de dataCheckin (data de Check-out)

    get dataCheckout()   {
        return this._dataCheckout;
    }

    set dataCheckout (novaDataCheckout)   {
        this._dataCheckout = novaDataCheckout

    }

}

class Sistema   {
    // (descrever classe)

}

const prompt = require("prompt-sync")({sigint: false});

const r0 = prompt("Bem-vindo(a) ao sistema da Pousada Eclipse!\nDigite o número referente a ação que você gostaria de realizar:\n\n1. Fazer Login\n2. Fazer Cadastro\n3. Sair do Programa\n\nResposta: ")   

const numero = parseInt(r0);

if (numero === 1) {
  console.log("\n\nÁrea de Cadastro\n")
  const prompt = require("prompt-sync")({sigint: false});
  const nomeUR = prompt("Nome de usuário: ");
  const nomeR = prompt("Nome: ");
  const contatoR = prompt("Telefone de contato: ")
  const senhaR = prompt("Senha: ")
  
} else if (numero === 2) {
    console.log("\n\nÁrea de Login\n")
    const prompt = require("prompt-sync")({sigint: false});
    const nomeUR2 = prompt("Nome de usuário: ")
    const senhaR2 = prompt("Senha: ")
  
} else if (numero === 3) {
    console.log(3);
} else {
    console.log("Opção inválida");
}


