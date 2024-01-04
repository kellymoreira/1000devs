// AGENDA DE CONTATOS

/*********************************************************************************************************
 *
 * Criar uma classe Contato que inclui informações como nome, sobrenome e número de telefone.
 * Em seguida, podem criar um objeto Agenda que permite adicionar, editar e excluir contatos.
 *
 **********************************************************************************************************/

// Class
class Contact {
  constructor(nameContact, surnameContact, phoneNumberContact) {
    this.nameContact = nameContact;
    this.surnameContact = surnameContact;
    this.phoneNumberContact = phoneNumberContact;
  }

  // Method for contact name
  name() {
    console.log(`${this.nameContact}`);
  }

  // Method for contact surname
  surname() {
    console.log(`${this.surnameContact}`);
  }

  // Method for phone number contact
  phoneNumber() {
    console.log(`${this.phoneNumberContact}`);
  }
}

console.log("Add New Contact");

// Objects from the class Contact
const agenda = new Contact("Kelly", "Moreira", "(00) 99999-9999");

// Call the name, surname, and phoneNumber methods on the agenda object
agenda.name();
agenda.surname();
agenda.phoneNumber();
