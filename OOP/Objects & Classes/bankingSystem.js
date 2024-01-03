// SISTEMA BANCÁRIO

/****************************************************************************************************************
 *
 * Criar classes para um sistema bancário simples.
 * Por exemplo, podem criar uma classe ContaBancaria com métodos para depositar, sacar e verificar o saldo.
 * Em seguida, podem criar objetos representando contas de diferentes clientes.
 *
 *****************************************************************************************************************/

// Class
class BankingSystem {
  constructor(depositAmount, withdrawAmount, checkBalanceAmount) {
    this.depositAmount = depositAmount;
    this.withdrawAmount = withdrawAmount;
    this.checkBalanceAmount = checkBalanceAmount;
  }

  // Methods
  deposit() {
    console.log(`I will deposit ${this.depositAmount} on your bank account!`);
  }

  withdraw() {
    console.log(
      `Yesterday I withdrew ${this.withdrawAmount} from my investments account.`
    );
  }

  checkBalance() {
    console.log(
      `Could you check my bank balance if I have ${this.checkBalanceAmount}?`
    );
  }
}

// Objects from the class BankingSystem
const client = new BankingSystem("$50", "$20", "$100");

// Call the deposit, withdraw and checkBalance Method to a client
client.deposit();
client.withdraw();
client.checkBalance();
