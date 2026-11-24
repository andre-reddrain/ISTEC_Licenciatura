const alfa = [1, 2, 3, 4, 5, 5, 6, 6];
let bravo = new Array();

window.onload = function () {
  const txtalfa = document.getElementById("txtalfa");
  const txtbravo = document.getElementById("txtbravo");
  const tv = document.getElementById("tv");
  //-----------------------------------------------
  const pushpop = document.getElementById("pushpop");
  pushpop.addEventListener("click", (evt) => {
    evt.preventDefault();
    bravo.push(alfa.pop());
    ver();
  });
  //-----------------------------------------------
  const unshiftShift = document.getElementById("unshiftShift");
  unshiftShift.addEventListener("click", (evt) => {
    evt.preventDefault();
    bravo.unshift(alfa.shift());
    ver();
  });
  //-----------------------------------------------
  const slice = document.getElementById("slice");
  slice.addEventListener("click", (evt) => {
    evt.preventDefault();
    //[1, 2, 3, 4, 5, 6];
    bravo = alfa.slice(1, 5);
    ver();
  });
  //-----------------------------------------------
  const splice = document.getElementById("splice");
  splice.addEventListener("click", (evt) => {
    evt.preventDefault();
    //[1, ,2, 3, 4, 5, 6];
    bravo = alfa.splice(1, 12, 89, 67);
    ver();
  });
  //-----------------------------------------------
  const map = document.getElementById("map");
  map.addEventListener("click", (evt) => {
    evt.preventDefault();
    //[1, ,2, 3, 4, 5, 6];
    bravo = alfa.map((e) => e ** 2);
    document.getElementById("tbody").innerHTML = bravo
      .map((e) => `<tr><td>${e}</td></tr>`)
      .join("");
    ver();
  });
  //-----------------------------------------------
  const foreach = document.getElementById("foreach");
  foreach.addEventListener("click", (evt) => {
    evt.preventDefault();
    //[1, ,2, 3, 4,4, 5,4, 6];
    let soma = 0;
    alfa.forEach((e, i, a) => {
      bravo[i] = e;
      soma += e;
      a[i] = 0;
    });
    tv.innerHTML = soma;

    ver();
  });
  //-----------------------------------------------
  const reduce = document.getElementById("reduce");
  reduce.addEventListener("click", (evt) => {
    evt.preventDefault();
    //[1, ,2, 3, 4, 5, 6];
    bravo[0] = alfa.reduce((ac, e) => ac + e, 1000);
    tv.innerHTML = bravo[0];

    ver();
  });
  //-----------------------------------------------
  const spread = document.getElementById("spread");
  spread.addEventListener("click", (evt) => {
    evt.preventDefault();
    //[1, ,2, 3, 4, 5, 6];
    bravo = [...alfa, 12, 13, 14];
    //bravo=[...alfa];
    ver();
  });
  //-----------------------------------------------
  const desconstrutor = document.getElementById("desconstrutor");
  desconstrutor.addEventListener("click", (evt) => {
    evt.preventDefault();
    //[1, 2, 3, 4, 5, 6];

    [a, , , b] = alfa;
    tv.innerHTML = `a=${a} b=${b}`;
    ver();
  });
  //-----------------------------------------------
  const distinct = document.getElementById("distinct");
  distinct.addEventListener("click", (evt) => {
    evt.preventDefault();
    //[1, 2, 3, 4, 5, 6];
    bravo = [...new Set(alfa)];

    ver();
  });
  //-----------------------------------------------
  //

  //

  ver();
}; //onload::::::::::::::::::::::::::::::::::::::::::::

function ver() {
  txtalfa.value = alfa.join(" - ");
  txtbravo.value = bravo.join(" - ");
}

//  const distinct = document.getElementById("distinct");
//   distinct.addEventListener("click", (evt) => {
//     evt.preventDefault();
//     //[1, 2, 3, 4, 5, 6];
//     bravo = [...new Set(alfa)];

//     ver();
//   });
