window.onload = () => {
  populaEstados();
};

const estadosBrasil = ['AC','AL','AP','AM','BA','CE','DF','ES','GO','MA','MT','MS','MG','PA','PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC','SP','SE','TO'];
const estado = document.querySelector('#estado');

const populaEstados = () => {
  for (let sigla of estadosBrasil) {
    const novaOpção = document.createElement('option');
    novaOpção.innerText = sigla;
    novaOpção.value = sigla;
    estado.appendChild(novaOpção);
  }
};
