window.onload = function () {
  /*   alert("Olá javascript");
   console.log("Olá Javascript");*/
  const txtpeso = document.getElementById("txtpeso");
  const txtaltura = document.getElementById("txtaltura");
  const bt = document.querySelector("#bt");
  const tv = document.getElementById("tv");
  tv.innerHTML = `Bem Vindo ao IMC : ${new Date().toLocaleDateString("pt-PT")}`;
  bt.addEventListener("click", (evt) => {
    evt.preventDefault();
    try {
      let altura = Number(txtaltura.value);
      console.log(altura);

      let peso = Number(txtpeso.value);
      console.log(peso);

      let tx = (peso / altura ** 2).toFixed(2);
      tv.innerHTML = `A sua taxa de IMC = ${tx}`;
    } catch (error) {
      tv.innerHTML = `Erro = ${error.message}`;
      console.log(error);
    }
  });
};
