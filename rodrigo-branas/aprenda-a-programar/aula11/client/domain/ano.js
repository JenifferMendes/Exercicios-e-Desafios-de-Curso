class Ano {

    constructor () {
        this.meses = [];
    }

    adicionarMes (mes) {
        this.meses.push(mes);
    }

    adicionarLancamento (nomeDoMes, lancamento) {
        for (const mes of this.meses) {
            if(mes.nome.toUpperCase() === nomeDoMes.toUpperCase()) {
                mes.adicionarLancamentos(lancamento);
                return;
            } 
        }
    }

    deletarLancamento(mes, lancamento) {
        const pos = mes.lancamentos.indexOf(lancamento);
        mes.lancamentos.splice(pos, 1);
    }
    
    calcularSaldo() {
        let saldoInicial = 0
        for(const mes of this.meses) {
            mes.saldoInicial = saldoInicial;
            mes.calcularSaldo();
            saldoInicial = mes.totalMensal.saldo;
        }
    }
}