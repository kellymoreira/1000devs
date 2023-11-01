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

  // Method
  drive() {
    console.log(`I would love to have a ${this.brand}!`);
  }
}

// Objects from the class Vehicle
const car = new Vehicle("BMW", "The M3", "2023");
const motorcycle = new Vehicle("Honda", "CB 300F Twister", "2023");

// Call the drive Method to different vehicles
car.drive();
motorcycle.drive();
