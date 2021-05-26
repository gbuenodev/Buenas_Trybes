const acordar = () => 'Acordando!!';
const tomarCafe = () => 'Bora tomar café!!';
const dormir = () => 'Partiu dormir!!';

const doingThings = (callback) => {
  callback();
};

const dailyRoutine = () => {
  console.log(acordar());
  console.log(tomarCafe());
  console.log(dormir());
}

doingThings(dailyRoutine);