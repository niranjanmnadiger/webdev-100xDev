/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

let transactions = [
  { id: 1, timestamp: 1656076800000, price: 10, category: 'Food', itemName: 'Pizza' },
  { id: 2, timestamp: 1656163200000, price: 20, category: 'Food', itemName: 'Burger' },
  { id: 3, timestamp: 1656249600000, price: 5, category: 'Entertainment', itemName: 'Movie Ticket' }
]
function calculateTotalSpentByCategory(transactions) {
  let categories = {}; // Create an empty object

  transactions.forEach((transaction) =>{

    if(!categories[transaction.category]){
      categories[transaction.category] = 0;
    }
    categories[transaction.category] += transaction.price;
    

  });
  return Object.keys(categories).map((category) => ({
  category,
  totalSpent: categories[category],
  }));
}

const result = calculateTotalSpentByCategory(transactions);

// Fetching and logging the output
console.log(result); // This will output the total spent by category
module.exports = calculateTotalSpentByCategory;
