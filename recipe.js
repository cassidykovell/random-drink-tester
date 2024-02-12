var drinkContainer = document.getElementById('drink-container');
var mealContainer = document.getElementById('meal-container');

function displayDrink() {
    var drinkVariable = localStorage.getItem('DrinkRecipeData');
    var drinkData = JSON.parse(drinkVariable);
    drinkContainer.innerHTML = `
        <h2>${drinkData.drink.name}</h2>
        <img src="${drinkData.drink.photo}" alt="photo" />
        <p>${drinkData.drink.recipe}</p>
    `;
}

function displayMeal() {
    var mealVariable = localStorage.getItem('MealRecipeData');
    var mealData = JSON.parse(mealVariable);
    mealContainer.innerHTML = `
        <h2>${mealData.meal.name}</h2>
        <img src="${mealData.meal.photo}" alt="photo" />
        <p>${mealData.meal.recipe}</p>
    `;
}

displayDrink();
displayMeal();