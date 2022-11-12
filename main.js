//2.	Determinar la hipotenusa de un triángulo rectángulo conocidas las longitudes de sus dos catetos. Desarrolle el algoritmo correspondiente. Formula: (HIP = √CATa + √CATb)

CatA= prompt ('Ingrese el numero del lado A del triángulo');
CatB= prompt ('Ingrese el numero del lado B del triángulo');
let R = Math.hypot(CatA,CatB);
alert ('La hipotenusa del triángulo es :'+ R);
console.log ('La hipotenusa del triángulo es :'+R);