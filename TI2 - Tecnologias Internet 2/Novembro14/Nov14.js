window.onload = function () {
  const tv = document.getElementById("tv");
  const txtinput = document.querySelector("#txtinput");
  const btdobro = document.getElementById("btdobro");
  const btsoma = document.getElementById("btsoma");
  const btclosure = document.getElementById("btclosure");
  const btpromise = document.getElementById("btpromise");
  const btasync = document.getElementById("btasync");

  // TPC
  const btex1 = document.getElementById("btex1");
  const btex2 = document.getElementById("btex2");
  const btex3 = document.getElementById("btex3");
  const btex4 = document.getElementById("btex4");

  btex1.addEventListener('click', (event) => {
    event.preventDefault();
    console.log(txtinput.value);

    let num = Number(txtinput.value);
    tv.innerHTML = `O dobro de ${num} = ${fnDobro(num)}`;
  });

  btex2.addEventListener('click', (event) => {
    event.preventDefault();

    let num = Number(txtinput.value);
    if (num % 2 == 0) {
      tv.innerHTML = `${num} é Par`;
    } else {
      tv.innerHTML = `${num} é Impar`;
    }
  });

  btex3.addEventListener('click', (event) => {
    event.preventDefault();

    let num = Number(txtinput.value);
    let soma = 0;

    while(num > 0) {
        soma += num;
        num--;
    }

    tv.innerHTML = `A soma dos ${Number(txtinput.value)} nºs inteiros é de ${soma}`
  })

  btex4.addEventListener('click', (event) => {
    event.preventDefault();

    let res = clearMultipleInputs(txtinput.value);

    let end = res.filter(v => v == '-1');

    if (end.length !== 1) tv.innerHTML = "Erro! Tem que haver só um -1";
    else if (res[res.length - 1] !== '-1') tv.innerHTML = "Erro! -1 tem que estar no fim";
    else {
      res = res.reduce((acc, curr) => acc + Number(curr), 0) + 1;

      tv.innerHTML = `Soma: ${res}`;
    }
  })

  btasync.addEventListener('click',(evt)=>{
    evt.preventDefault();
    myAsync(Number(txtinput.value));
  });

  btpromise.addEventListener('click',(evt)=>{
    evt.preventDefault();
    tv.innerHTML= `${myPromise(Number(txtinput.value))
    .then((z)=>{
      tv.innerHTML=`Execute o Resolve ${z}`;
      return 2* z;
    })
    .then((z)=>{
      tv.innerHTML += `<br>Execute o Resolve pela segunda vez ${z}`;
    })
    .catch((z)=>{
      tv.innerHTML = `Execute o Reject ${z}`;
    })}`;
  }); 

  const fn = outerFunction(0);
  btclosure.addEventListener('click',(evt)=>{
    evt.preventDefault();
    tv.innerHTML= `Novo valor =${fn(Number(txtinput.value))}`;
  });

  btsoma.onclick = (evt) => {
    evt.preventDefault();
    const valores = txtinput.value.split(",").map((e) => Number(e));
    console.log(valores);
    tv.innerHTML = `<h3>Soma de ${valores.join("+")}= ${valores.reduce((ac, e) => ac + e, 0)} </h3>`;
    const h3s = document.querySelectorAll('h3');
    h3s.forEach(e=>e.classList.add("xpto"));
  };

  btdobro.addEventListener("click", (evt) => {
    evt.preventDefault();
    console.log(txtinput.value);

    let num = Number(txtinput.value);
    txtinput.style.color = "red";
    setTimeout(() => {
      txtinput.style.color = "black";
    }, 2000);
    tv.innerHTML = `O dobro de ${num} = ${fnDobro(num)}`;
  });
}; //window onload

async function myAsync(num){
   let x = await myPromise(num).then(z=>2*z).then(z=>z+2).catch(z=>-z);

   let y = await myPromise(num).then(z=>z).catch(z=>-z);
   
   let u = x + y;
 
   tv.innerHTML = `Valor final =${u} x:${x} y:${y}`;
}

function myPromise(num){
  return new Promise((resolve, reject)=>{
   setTimeout(()=>{
     if(num%2==0)resolve(num);
    else reject(num);

   },1000);

  });
}

function outerFunction(inicial){
  let x =(typeof inicial === 'undefined')?0:inicial;
  function inc(delta){
     x +=delta;
      return x;
  }
  return inc;

}

function triplo(x) {
  return 3 * x;
}

const fnDobro = (x) => 2 * x;

function clearMultipleInputs(str) {
    // Separa os inputs com ; e filtra strings vazias
    return str.split(';').filter(v => v !== '');
}