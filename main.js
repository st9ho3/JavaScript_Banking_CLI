// Function to display the main menu of options for the user
const displayMenu = () => {
    let choice = prompt(
      "\nBank Account Management\n" +
        "------------------------\n" +
        "1. Create Account\n" +
        "2. Check Balance\n" +
        "3. Delete Account\n" +
        "4. Deposit\n" +
        "5. Withdraw\n" +
        "6. Exit\n" +
        "Enter your choice (1-6): "
    );
    return choice;
  };
  
  // Function to get the account owner's name from user input
  const getName = () => {
    let name = prompt("Please enter the account owner's name:");
    return name;
  };
  
  // Function to get the initial account balance from user input
  const getBalance = () => {
    let startingBalance = prompt("Please enter the initial deposit amount:");
    return startingBalance;
  };
  
  // Function to generate a random 10-digit account number
  const accountNumberCreation = () => {
    let accTemp = [];
    for (i = 0; i < 10; i++) {
      let x = Math.floor(Math.random() * 10);
      accTemp.push(x);
    }
    return accTemp.join("");
  };
  
  // Function to generate a random 4-digit PIN
  const pinCreation = () => {
    let pinTemp = [];
    for (i = 0; i < 4; i++) {
      let x = Math.floor(Math.random() * 10);
      pinTemp.push(x);
    }
    return pinTemp.join("");
  };
  
  // Function to create a new bank account object and store it
  const accountCreation = () => {
    const account = bankAccountFactory(
      getName(),
      getBalance(),
      accountNumberCreation(),
      pinCreation()
    );
    alert(
      `Account created successfully!\n\nAccount Owner: ${account.getOwner()}\nBalance: $${account.getBalance()}\nAccount Number: ${account.getAccount()}\nYour PIN is: ${account.getPin()}`
    );
  
    let mySaved = JSON.parse(localStorage.getItem("MyData")) || [];
    account.accName = account.getOwner();
    account.accBalance = account.getBalance();
    account.accNumber = account.getAccount();
    account.accPin = account.getPin();
  
    mySaved.push(account);
    localStorage.setItem("MyData", JSON.stringify(mySaved));
  };
  
  // Initialize variables for account number and PIN creation
  const accountCreation_var = accountNumberCreation(); 
  const pinCreation_var = pinCreation();
  
  // Factory function to create a bank account object with methods
  function bankAccountFactory(ownerName, balance, acc, pin) {
    return {
      getOwner: () => ownerName,        // Getter for account owner name
      getBalance: () => balance,          // Getter for account balance
      getAccount: () => acc,            // Getter for account number
      getPin: () => pin,               // Getter for PIN
      deposit: (amount) => {            // Method to deposit money into the account
        if (amount > 0) {
          balance += amount;
          console.log(
            `Deposit of $${amount} successful. New balance: $${balance}`
          );
        } else {
          alert("Deposit amount must be greater than zero.");
        }
      },
      withdraw: (amount) => {            // Method to withdraw money from the account
        if (amount > 0 && amount <= balance) {
          balance -= amount;
          console.log(
            `Withdrawal of $${amount} successful. New balance: $${balance}`
          );
        } else {
          alert(
            `Insufficient funds or invalid amount. Please check your balance and try again.`
          );
        }
      },
    };
  }
  
  // Function to compare entered PIN with stored PINs
  const compare = (pinAsked) => {
    let accounts = JSON.parse(localStorage.getItem("MyData"));
    for (let i = 0; i < accounts.length; i++) {
      if (accounts[i].accPin == pinAsked) {
        return i; 
      }
    }
    return -1;
  };
  
  // Function to process a deposit transaction
  const deposit = (accId) => {
    let dAmount = parseInt(prompt("Please enter deposit amount:"));
    let accounts = JSON.parse(localStorage.getItem("MyData"));
    let accBalanceint = parseInt(accounts[accId].accBalance);
    accBalanceint += dAmount;
    accounts[accId].accBalance = accBalanceint;
  
    localStorage.setItem("MyData", JSON.stringify(accounts));
    alert(`Deposit successful! New balance: $${accounts[accId].accBalance}`);
  };
  
  // Main function to handle deposits, calls deposit if PIN is correct
  const mainDeposit = () => {
    let pinAsked = prompt("Please enter your PIN:");
    let accId = compare(pinAsked);
  
    if (accId !== -1) {
      deposit(accId);
    } else {
      alert("Incorrect PIN. Deposit not processed.");
    }
  };
  
  // Function to process a withdrawal transaction.
  const withdraw = (accId) => {
    let wAmount = parseInt(prompt("Please enter withdrawal amount:"));
    let accounts = JSON.parse(localStorage.getItem("MyData"));
    let accBalanceint = parseInt(accounts[accId].accBalance);
  
    if (accBalanceint >= wAmount) {
      accBalanceint -= wAmount;
      accounts[accId].accBalance = accBalanceint;
      localStorage.setItem("MyData", JSON.stringify(accounts));
      alert(`Withdrawal successful! New balance: $${accounts[accId].accBalance}`);
    } else {
      alert("Insufficient funds. Withdrawal not processed.");
    }
  };
  
  // Main function to handle withdrawals, calls withdraw if PIN is correct
  const mainWithdraw = () => {
    let pinAsked = prompt("Please enter your PIN:");
    let accId = compare(pinAsked);
  
    if (accId !== -1) {
      withdraw(accId);
    } else {
      alert("Incorrect PIN. Withdrawal not processed.");
    }
  };
  
  // Function to display the account balance after PIN verification
  const balanceCheck = (accId) => {
    let accounts = JSON.parse(localStorage.getItem("MyData")); 
    if (accounts[accId]) { 
      alert(`Your balance is: $${accounts[accId].accBalance}`); 
    } else {
      alert("Invalid account ID. Please try again."); 
    }
  };
  
  // Main function to check the account balance, calls balanceCheck if PIN is correct
  const mainCheck = () => {
    let pinAsked = prompt("Please enter your PIN:");
    let accId = compare(pinAsked); 
  
    if (accId !== -1) {
      balanceCheck(accId);
    } else {
      alert("Incorrect PIN. Balance check could not be processed.");
    }
  };
  
  // Function to remove a bank account by its index
  const removal = (accId) => {
    const removalAccounts = JSON.parse(localStorage.getItem("MyData"));
  
    while (true) {
      let finalAnswer = prompt(
        "You are about to delete your account. Are you sure? (Y/N)"
      ).toLowerCase();
  
      if (finalAnswer === "y") {
        removalAccounts.splice(accId, 1);
        localStorage.setItem("MyData", JSON.stringify(removalAccounts));
        alert("Your account has been successfully deleted.");
        break;
      } else if (finalAnswer === "n") {
        alert("Account removal canceled.");
        break;
      } else {
        alert("Invalid input. Please enter 'Y' for Yes or 'N' for No.");
        continue;
      }
    }
  };
  
  // Main function to handle account removal, calls removal if PIN is correct
  const mainRemoval = () => {
    let pinAsked = prompt("Please enter your PIN:");
    let accId = compare(pinAsked);
  
    if (accId !== -1) {
      removal(accId);
    } else {
      alert("Incorrect PIN. Account removal could not be processed.");
    }
  };
  
  
// Main program loop.
let exit = false;
while (!exit) { 
  let option = displayMenu();

  switch (option) {
    case "1": // Create Account
      accountCreation();
      break;
    case "2": // Check Balance
      mainCheck()
      break;
    case "3": // Delete Account
      mainRemoval()
      break;
    case "4": // Deposit
      mainDeposit();
      break;
    case "5": // Withdraw
      mainWithdraw();
      break;
    case "6": // Exit
      exit = true;
      alert("Thank you for using our services. Goodbye!");
      break;
    default:
      alert("Invalid choice. Please try again.");
  }
}