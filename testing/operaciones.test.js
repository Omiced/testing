//importando las funciones sobre las que vamos a hacer testing
//{nombre de lo importado} =  requiere("ruta del archivo sin extension")
const {add,substract,multiply,divide,residuo} = require("../operaciones");

//1. describir que es lo que va a hacer el test
describe(" probando la funcion add", () => {
  //test()
  test("probando que en la funcion add 2 + 2 = 4", () => {
    //ejecutamos la funcion y pasamos el resultado esperado
    expect(add(2,2)).toBe(4);
  })

   test("probando que en la funcion add 3 + 2 = 5", () => {
    //ejecutamos la funcion y pasamos el resultado esperado
    expect(add(3,2)).toBe(5);
  })

  test("Probando que retorne undefined si ingresamos un string", () => {
    //toBeUndefined evalua que la salida de la funcion sea undefined
    expect(add("4", 2)).toBeUndefined();
  })

  test("Probando que retorne un valor falsy", () => {
    //toBeFalse evalua que la salida de la funcion sea un valor falsy(null, undefined, 0,"")
    expect(add(true, 4)).toBeFalsy();
  })
});

//funcion resta
describe("Pruebas sobre la funcion substract", () => {
  test("Probando que una resta de numeros positivos sea mayor que 0", () => {
    expect(substract(10,5)).toBeGreaterThan(0)
  })
})