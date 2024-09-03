function lunchBuyerGame() {
  alert("Who is buying Food today?");
  const lunchPayer = ["Manqoba", "kamogelo", "sanele"];
  const hotDogPerPs = 3;
  const drinksPerPs = 3;
  const drinkCostPrice = 10;
  const hotDogCostPrice = 13;

  //* Calculate total hotdog and drink costs

  const totalHotDogs = hotDogPerPs * hotDogCostPrice;
  const totalDrinks = drinksPerPs * drinkCostPrice;
  const addedFoodCost = totalHotDogs + totalDrinks;

  let lunchPayerName = prompt("Enter the amount you have");
  let randomPerson = Math.floor(Math.random() * lunchPayer.length);

  //* Calculate the remaining money after the purchase

  const remainingMoney = lunchPayerName - addedFoodCost;

  let pickedPerson = lunchPayer[randomPerson];
  document.querySelector("h2").innerHTML =
    pickedPerson + " is buying lunch mate! &#128523;";

  if (lunchPayerName <= 0 || addedFoodCost > lunchPayerName) {
    alert("Hey " + pickedPerson + ", you don’t have enough funds.");
  } else {
    document.querySelector("p").innerHTML =
      "Hey " +
      pickedPerson +
      ", you will be left with R" +
      remainingMoney +
      " after buying the food.";
  }
}
lunchBuyerGame();
