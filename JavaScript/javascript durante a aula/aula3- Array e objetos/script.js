// O que são vetores ou arrays

// como declarar

/* let array = ['string',1,true]
console.log(array) */


//pode guardar vários tipos de dados
  let array =['string',1,true,['array1'],['array2'],['array3'],['array4']]
console.log(array[5])  

//manipulação array

//foreach
array.forEach(function(item,index){console.log(item,index)})


array.push('novo item')//add  item no final do array
console.log(array)

array.pop()//remove item do final do array
console.log(array)

array.shift() //remove item o início do array
console.log(array)

array.unshift('novo item no inicio')//add no inicio
console.log(array)


console.log(array.indexOf(true))// retorno o índice de um valor

array.splice(0,3)//remove ou substitui um item pelo índice
console.log(array)

let novoArray = array.slice(0,3)//retorna uma parte de um array existente
console.log(novoArray)

/* Objetos */

let object ={string:'string',number:1, boolean:true,array:['array'],} 
console.log(object)
console.log(object.boolean)

//desestruturação do objeto

var string = object.string
console.log(string)

var arrayInterno = object.array
console.log(arrayInterno)

var{string,boolean}=object
console.log(string,boolean)