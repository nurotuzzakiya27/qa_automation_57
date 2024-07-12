/* Membuat function akar pangkat */

function getSquareRoot(number){
  if(number < 0) console.log("Tidak bisa input bilangan negatif")
  else if(number % 2 === 1) console.log("Tidak bisa input bilangan ganjil")
  else console.log(Math.sqrt(number, 2))
}

getSquareRoot(-2) // Expected result: Tidak bisa input bilangan negatif
getSquareRoot(3) // Expected result: Tidak bisa input bilangan ganjil
getSquareRoot(4) // Expected result: 2
getSquareRoot(100) // Expected result: 10