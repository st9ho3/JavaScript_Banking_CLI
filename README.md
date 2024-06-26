## Bank Account Management System

This JavaScript program simulates a basic bank account management system via a text-based (command-line) interface. It allows users to create new accounts, deposit and withdraw funds, check balances, and delete accounts. Account data is stored in the browser's local storage for persistence.

### Function Descriptions

#### `displayMenu()`

- **Purpose:** Presents the user with a menu of options for interacting with the banking system.
- **Input:** None.
- **Output:** Returns the user's choice (1-6) as a string.

#### `getName()`

- **Purpose:** Prompts the user to enter their name for account creation.
- **Input:** None.
- **Output:** Returns the entered name as a string.

#### `getBalance()`

- **Purpose:** Prompts the user to enter the initial deposit amount for a new account.
- **Input:** None.
- **Output:** Returns the entered amount as a string.

#### `accountNumberCreation()`

- **Purpose:** Generates a random 10-digit account number.
- **Input:** None.
- **Output:** Returns the generated account number as a string.

#### `pinCreation()`

- **Purpose:** Generates a random 4-digit PIN.
- **Input:** None.
- **Output:** Returns the generated PIN as a string.

#### `accountCreation()`

- **Purpose:** Creates a new bank account object, adds it to the `accounts` array, and stores the updated data in local storage.
- **Input:** None (it calls other functions to get necessary data).
- **Output:** None (it alerts the user with the new account details).

#### `bankAccountFactory(ownerName, balance, acc, pin)`

- **Purpose:** A factory function that creates a bank account object with the provided details and methods for deposit, withdrawal, and getting account information.
- **Input:**
    - `ownerName` (string): Account owner's name.
    - `balance` (number): Initial account balance.
    - `acc` (string): Account number.
    - `pin` (string): Account PIN.
- **Output:** Returns a bank account object with methods to get the owner, balance, account number, PIN, deposit funds, and withdraw funds.

#### `compare(pinAsked)`

- **Purpose:** Searches for an account with a matching PIN in the local storage data.
- **Input:** `pinAsked` (string): The PIN entered by the user.
- **Output:** Returns the index of the matching account in the `accounts` array, or -1 if no match is found.

#### `deposit(accId)` & `mainDeposit()`

- **Purpose:** Handles the deposit process by getting the deposit amount, updating the account balance, and storing the changes in local storage.
- **Input:** `accId` (number): The index of the account to deposit into.
- **Output:** None (it alerts the user with the new balance).

#### `withdraw(accId)` & `mainWithdraw()`

- **Purpose:** Handles the withdrawal process by getting the withdrawal amount, updating the account balance, and storing the changes in local storage.
- **Input:** `accId` (number): The index of the account to withdraw from.
- **Output:** None (it alerts the user with the new balance or an error message if there are insufficient funds).


#### `balanceCheck(accId)` & `mainCheck()`

- **Purpose:** Retrieves and displays the balance of a specific account based on the provided account ID and PIN.
- **Input:** `accId` (number): The index of the account to check.
- **Output:** None (it alerts the user with their balance or an error message if the account ID is invalid).

#### `removal(accId)` & `mainRemoval()`

- **Purpose:** Handles the removal of an account from the local storage.
- **Input:** `accId` (number): The index of the account to be removed.
- **Output:** None (it alerts the user with a confirmation message).
