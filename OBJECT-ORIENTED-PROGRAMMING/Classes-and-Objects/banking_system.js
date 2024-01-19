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
  constructor(depositAmount, withdrawalAmount, checkBalanceAmount) {
    this.depositAmount = depositAmount;
    this.withdrawalAmount = withdrawalAmount;
    this.checkBalanceAmount = checkBalanceAmount;
  }

  // Method for making a deposit
  deposit() {
    console.log(`I will deposit ${this.depositAmount} on your bank account!`);
  }

  // Method for making a withdrawal
  withdraw() {
    console.log(`I will withdraw ${this.withdrawalAmount} from your account.`);
  }

  // Method for checking the balance
  checkBalance() {
    console.log(
      `Could you check my bank balance if I have ${this.checkBalanceAmount}?`
    );
  }
}

// Objects from the class BankingSystem
const client = new BankingSystem("$50", "$20", "$100");

// Call the deposit, withdraw, and checkBalance methods on the client object
client.deposit();
client.withdraw();
client.checkBalance();

