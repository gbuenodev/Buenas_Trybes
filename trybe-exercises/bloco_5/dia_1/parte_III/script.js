let header = document.getElementById('header-container');
header.style.color = 'white';
header.style.backgroundColor = 'green';

const trocaCor = (node, cor) => {
  for (let index = 0; index < node.length; index += 1) {
    node[index].style.backgroundColor = cor;
  }
};

let section1 = document.getElementsByClassName('emergency-tasks');
section1[0].style.backgroundColor = 'orange';

let section2 = document.getElementsByClassName('no-emergency-tasks');
section2[0].style.backgroundColor = 'yellow';

let section1Title = document.querySelectorAll('.emergency-tasks div h3');
trocaCor(section1Title, 'purple');

let section2Title = document.querySelectorAll('.no-emergency-tasks div h3');
trocaCor(section2Title, 'black');

let footer = document.getElementById('footer-container');
footer.style.backgroundColor = 'darkgreen';
footer.style.marginTop = '5vh';
