// CLASSE DE VEÍCULO

/******************************************************************************************************************
 *
 * Criar uma classe Veículo com propriedades como marca, modelo, ano, e um método dirigir que exibe uma mensagem.
 * Em seguida, crie objetos de diferentes veículos, como carros, motos, etc.
 *
 *******************************************************************************************************************/

// Class
class Vehicle {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  // Method for driving a certain brand
  drive() {
    console.log(`I would love to drive a ${this.brand}!`);
  }
}

// Objects from the class Vehicle
const car = new Vehicle("BMW", "The M3", "2023");
const motorcycle = new Vehicle("Honda", "CB 300F Twister", "2023");

// Call the drive method to on different vehicles object
car.drive();
motorcycle.drive();
