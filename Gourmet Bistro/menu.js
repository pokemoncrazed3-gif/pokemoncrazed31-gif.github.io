const menuItems = ["Truffle Risotto", "Miso Short Ribs", "Chocolate Torte", "Mocktail Flight"];
for (let i = 0; i < menuItems.length; i++) {
  console.log(menuItems[i]);
}
let prices = [25, 30, 10, 15];
function calculateMealTotal(mealPrice, taxRate) {
  const taxAmount = mealPrice * taxRate;
  const total = mealPrice + taxAmount;
  return total;
}
const taxRate = 0.08;
function checkReservationAvailability(day)
if (day === "Friday" || day === "Saturday") {
    console.log("Limited Availability");
} 
otherwise (
    console.log("Reservations Available")
);
function displayFeaturedItem(itemName) {
  console.log(`Today's featured item is: ${itemName}`);
};
displayFeaturedItem("Lobster Bisque");
if (customerspends > 100) {
    console.log("You qualify for a free dessert!");
} else {
    console.log("Spend $100 or more to qualify for a free dessert.");
}