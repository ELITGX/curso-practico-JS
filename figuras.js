// código del cuadrado
console.group("Cuadrados")
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perímetro del cuadrado es: " + perimetroCuadrado) + "cm";

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El área del cuadrado es: " + areaCuadrado + "cm^2");
console.groupEnd();

// código del triángulo
console.group("Triangulos")
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;

console.log(
    "Los lados del triangulo miden: " 
    + ladoTriangulo1 
    + "cm, "
    + ladoTriangulo2 
    + "cm, "
    + baseTriangulo
    + "cm"
);

console.log("La altura del triangulo miede: " + alturaTriangulo + "cm");

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perímetro del triangulo es: " + perimetroTriangulo) + "cm";

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("El área del triangulo es: " + areaTriangulo + "cm^2");
console.groupEnd();

// código del circulo
console.group("Circulos")

//Radio
const radioCirculo = 4;
console.log("El radio del circulo miede: " + radioCirculo + "cm");

//Diámetro
const diametroCirculo = radioCirculo * 2;
console.log("El diametro del circulo miede: " + diametroCirculo + "cm");

// PI
const PI = Math.PI;
console.log("PI es: " + PI);

// Circunferencia
const permiteroCirculo = diametroCirculo * PI;
console.log("El perimetro del circulo miede: " + permiteroCirculo + "cm");

// Área
const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log("El área del circulo miede: " + areaCirculo + "cm");

console.groupEnd();