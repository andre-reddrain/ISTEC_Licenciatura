function Jogo(jogador, montante) {
  this.Jogador = jogador;
  this.Montante = montante;
  this.ver = function () {
    console.log(`${this.Jogador} Montante:${this.Montante}`);
  };
}

function JogoDados(jogador, montante) {
  Jogo.call(this, jogador, montante);
  this.Dados = [2, 3];
  this.jogar = function (aposta) {
    if (this.Montante >= aposta) this.Montante -= aposta;
    else if (this.Montante > 0) {
      aposta = this.Montante;
      this.Montante = 0;
    } else aposta = 0;
    if (aposta > 0) {
      this.Dados[0] = Math.floor(Math.random() * 6) + 1;
      this.Dados[1] = Math.floor(Math.random() * 6) + 1;
      if (this.Dados[0] == this.Dados[1]) this.oniguais(this, aposta);
      console.log(
        `O ${this.Jogador} rolou os dados [ ${this.Dados[0]} |${this.Dados[1]} ]   Montante:${this.Montante}`,
      );
    }
  };

  this.oniguais = function (Sender, Aposta) {
    var meuevento = new CustomEvent("oniguais", {
      detail: { sender: Sender, aposta: Aposta },
      bubbles: true,
      cancelable: true,
    });
    document.dispatchEvent(meuevento);
  };
} //JogoDados
JogoDados.prototype = new Jogo();
JogoDados.prototype.constructor = JogoDados;
//-------------------------------------------------- Cliente
document.addEventListener("oniguais", (evt) => {
  let premio = evt.detail.sender.Dados[0] * 2 * evt.detail.aposta;
  evt.detail.sender.Montante += premio;
  console.log(`PArabéns ${evt.detail.sender.Jogador} ganhou ${premio}`);
});
const ze = new JogoDados("Zé da Batota", 3000);
console.log(ze);
ze.ver();

for (i = 1; i <= 5; i++) ze.jogar(200);

//for (const [k, v] of Object.entries(ze)) console.log(`${k}->${v}`);

// const ze = {
//   num: 1,
//   nome: "Zé Caroica",
//   ver: function (str) {
//     console.log(`${str} ${this.num} ${this.nome} ${this.turma}`);
//   },
// };
// console.log(ze);
// ze.ver("Boa Tarde sou o");
// //descontruir
// const { num: a, nome: b } = ze;
// console.log(`a=${a} b=${b}`);
// const maria = { num: 2, nome: "Maria", turma: "A" };
// console.log(maria);

// ze.ver.call(maria, "Bom dia sou a ");
// ze.ver.apply(maria, ["Bom dia sou a "]);
