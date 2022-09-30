class Account {

  constructor(username) {
    this.username = username;
    this.transactions = [];
  }

  get balance() {
    // calculate balance using transacton objects
    let total = 0;
    this.transactions.forEach((trans) => total += trans.value);
    return total;
  }

  addTransaction(transaction) {
    this.transactions.push(transaction);
  };
}

class Transaction {
  constructor(amount, account) {
    this.amount = amount;
    this.account = account;

    console.log(this.account.balance);
  }

  isAllowed() {
    if (-1 * this.value > this.account.balance) {
      return false;
    }

    return true;
  }

  commit() {
    this.time = new Date();
    if(!this.isAllowed()) {
      console.log("Insufficient funds in your account");
      return;
    }

    this.account.addTransaction(this);

  }
}
class Withdrawal extends Transaction {

  get value() {
    return -this.amount;
  }

}

class Deposit extends Transaction {

  get value() {
    return this.amount;
  }

}



const myAccount = new Account('snow-patrol');

// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected

const t1 = new Withdrawal(9.99, myAccount);
t1.commit();
console.log('Transaction 1:', t1);

const t2 = new Deposit(120.00, myAccount);
t2.commit();
console.log('Transaction 2:', t2);

const t3 = new Withdrawal(50.25, myAccount);
t3.commit();
console.log('Transaction 3:', t3);



console.log('Ending Balance:', myAccount.balance);
