let angulo1 = Math.floor(Math.random() * 179);
let angulo2 = Math.floor(Math.random() * 179);
let angulo3 = Math.floor(Math.random() * 179);

const verificaTriangulo = (angulo1,angulo2,angulo3) => {
    if (angulo1 > 0 && angulo2 > 0 && angulo3 > 0) {
        if (angulo1 + angulo2 + angulo3 == 180) {
            return "É triângulo";
        } else {
            return "Não é triângulo";
        }; 
    } else {
        return "Ângulo inválido";
    };
};

console.log(`Ângulos: ${angulo1}, ${angulo2}, ${angulo3}`);
console.log(verificaTriangulo(angulo1,angulo2,angulo3));