import React, { useState } from "react";
import "./food.css";

const FoodComponent = () => {
  const [selectedDay, setSelectedDay] = useState("monday"); // Default selected day is Monday

  const handleDayChange = (event) => {
    setSelectedDay(event.target.value);
  };

  const [selectedMeal, setSelectedMeal] = useState("breakfast");
  const [selectedRiceOption, setSelectedRiceOption] = useState(null);

  const getMealDescription = () => {
    const mealDescriptions = {
      monday: {
        breakfast: {
          meals: [
            {
              name: "Boiled Eggs & Omelette",
            },
            {
              name: "Bread/Jam/Butter",
            },
           
            {
              name: "Tea/Coffee/Milk",
            },
          
            // breakfast options...
            {
              name: "Breakfast Varieties",
             
              options: [
                {
                  name: "Idly/Wada ",
                },
                {
                  name: "Mysoor Boonda",
                },
                {
                  name: "Bagara Rice",
                },
                {
                  name: "Upma",
                },
                {
                  name: "Uthpam",
                },
                {
                  name: "Puri/Poha",
                },
                {
                  name: "Dosa",
                },
                {
                  name: "Aloo Paratha",
                },
                {
                  name: "Sprouts/CornFlakes",
                },
              ],
            },
          ],
        },
        lunch: {
          meals: [
            {
              name: "Plain Rice",
            },
            {
              name: "Chapathi",
            },
            {
              name: "Green Salad",
            },

            {
              name: "Rice Varieties",

              options: [
                {
                  name: "Corn Pulao",
                },
                {
                  name: "Curd Rice",
                },
                {
                  name: "Bagara Rice",
                },
                {
                  name: "Sambar Rice",
                },
                {
                  name: "Lemon Rice",
                },
              ],
            },

            {
              name: "Veg Varieties",

              options: [
                {
                  name: "Moong Dal",
                },
                {
                  name: "Dal Thadka",
                },
                {
                  name: "lal Chana",
                },
                {
                  name: "Veg Biryani",
                },
              ],
            },
            {
              name: "NonVeg Varieties",

              options: [
                {
                  name: "Egg Curry",
                },
                {
                  name: "Chicken Curry",
                },
                {
                  name: "Rogani Chicken",
                },
                {
                  name: "Beerakaya Curry",
                },
              ],
            },
            {
              name: "Sides",

              options: [
                {
                  name: "Mango Pickle",
                },
                {
                  name: "Green Chatney",
                },
              ],
            },
            {
              name: "Sweet Varieties",
              options: [
                {
                  name: "Semiya kheer",
                },
                {
                  name: "Suji Ka Halwa",
                },
                {
                  name: "Fruit Custurd",
                },
                {
                  name: "Jibe Gaja",
                },
              ],
            },
            {
              name: "Drink Varieties",
              description: "Choose from various Sweet options.",
              options: [
                {
                  name: "Butter Milk",
                },
                {
                  name: "Lemon juice",
                },
                {
                  name: "Mango Juice",
                },
                {
                  name: "Rasna",
                },
                {
                  name: "Roohafza",
                },
              ],
            },
          ],
        },

        dinner: {
          meals: [
            {
              name: "Plain Rice",
            },
            {
              name: "Chapati",
            },
            {
              name: "Curd",
            },
            
            

            {
              name: "Rice Varieties",

              options: [
                {
                  name: "Masala Rice",
                },
                {
                  name: "Veg Fried Rice",
                },
                {
                  name: "Egg Fried Rice",
                },
                {
                  name: " Rice",
                },
                {
                  name: "Lemon Rice",
                },
              ],
            },

            {
              name: "Dal",

              options: [
                {
                  name: "Palak Dal",
                },
                {
                  name: "Dal Thadka",
                },
                {
                  name: "Dal Fry",
                },
                {
                  name: "Tomato Dal",
                },
                {
                  name: "Dal Lasoni",
                },
                {
                  name: "Methi Dal",
                },
                {
                  name: "Massor Dal",
                },
              ],
            },
            {
              name: "NonVeg Varieties",

              options: [
                {
                  name: "Egg Curry",
                },
                {
                  name: "Chicken Curry",
                },
                {
                  name: "Egg Bhurji",
                },
               
              ],
            },
            {
              name: "Sides",

              options: [
                {
                  name: "Mango Pickle",
                },
                {
                  name: "Green Chatney",
                },
              ],
            },
            {
              name: "Sweet Varieties",
              options: [
                {
                  name: "Semiya kheer",
                },
                {
                  name: "Suji Ka Halwa",
                },
                {
                  name: "Fruit Custurd",
                },
                {
                  name: "Jibe Gaja",
                },
              ],
            },
            {
              name: "Drink Varieties",
              description: "Choose from various Sweet options.",
              options: [
                {
                  name: "Butter Milk",
                },
                {
                  name: "Veg Soup",
                },
                {
                  name: "Mango Juice",
                },
                {
                  name: "Milk",
                },
                
              ],
            },
            {
              name: "Vegetable Varieties",
              description: "Choose from various Vegetable options.",
              options: [
                {
                  name: "Veg Kofta",
                },
                {
                  name: "Cabbage Porial",
                },
                {
                  name: "Beans Tomato",
                },
                {
                  name: "Crispy Veg",
                },
                {
                  name: "Tomato Onion Curry",
                },
                {
                  name: "Mirchy Bhaji",
                },
                
              ],
            },
            {
              name: "Khichdi Varieties",
              description: "Choose from various Khichdi options.",
              options: [
                {
                  name: "Dal Khichdi",
                },
                {
                  name: "Khichdi Katta",
                },
                
                
              ],
            },
            {
              name: "Chinese Varieties",
              description: "Choose from various Chinese options.",
              options: [
                {
                  name: "Gobhi Manchurian Wet",
                },
                {
                  name: "Veg Noodles",
                },
                {
                  name: "Veg Noodles",
                },
                
                
              ],
            },
          ],
        },
      },
      tuesday: {
        breakfast: {
          meals: [
            {
              name: "Boiled Eggs & Omelette",
            },
            {
              name: "Bread/Jam/Butter",
            },
           
            {
              name: "Tea/Coffee/Milk",
            },
          
            // breakfast options...
            {
              name: "Breakfast Varieties",
                
              options: [
                {
                  name: "Idly/Wada ",
                },
                {
                  name: "Mysoor Boonda",
                },
                {
                  name: "Bagara Rice",
                },
                {
                  name: "Upma",
                },
                {
                  name: "Uthpam",
                },
                {
                  name: "Puri/Poha",
                },
                {
                  name: "Dosa",
                },
                {
                  name: "Aloo Paratha",
                },
                {
                  name: "Sprouts/CornFlakes",
                },
              ],
            },
          ],
        },
        lunch: {
          meals: [
            {
              name: "Plain Rice",
            },
            {
              name: "Chapathi",
            },
            {
              name: "Green Salad",
            },

            {
              name: "Rice Varieties",

              options: [
                {
                  name: "Corn Pulao",
                },
                {
                  name: "Curd Rice",
                },
                {
                  name: "Bagara Rice",
                },
                {
                  name: "Sambar Rice",
                },
                {
                  name: "Lemon Rice",
                },
              ],
            },

            {
              name: "Veg Varieties",

              options: [
                {
                  name: "Moong Dal",
                },
                {
                  name: "Dal Thadka",
                },
                {
                  name: "lal Chana",
                },
                {
                  name: "Veg Biryani",
                },
              ],
            },
            {
              name: "NonVeg Varieties",

              options: [
                {
                  name: "Egg Curry",
                },
                {
                  name: "Chicken Curry",
                },
                {
                  name: "Rogani Chicken",
                },
                {
                  name: "Beerakaya Curry",
                },
              ],
            },
            {
              name: "Sides",

              options: [
                {
                  name: "Mango Pickle",
                },
                {
                  name: "Green Chatney",
                },
              ],
            },
            {
              name: "Sweet Varieties",
              options: [
                {
                  name: "Semiya kheer",
                },
                {
                  name: "Suji Ka Halwa",
                },
                {
                  name: "Fruit Custurd",
                },
                {
                  name: "Jibe Gaja",
                },
              ],
            },
            {
              name: "Drink Varieties",
              description: "Choose from various Sweet options.",
              options: [
                {
                  name: "Butter Milk",
                },
                {
                  name: "Lemon juice",
                },
                {
                  name: "Mango Juice",
                },
                {
                  name: "Rasna",
                },
                {
                  name: "Roohafza",
                },
              ],
            },
          ],
        },

        dinner: {
          meals: [
            {
              name: "Plain Rice",
            },
            {
              name: "Chapati",
            },
            {
              name: "Curd",
            },
            
            

            {
              name: "Rice Varieties",

              options: [
                {
                  name: "Masala Rice",
                },
                {
                  name: "Veg Fried Rice",
                },
                {
                  name: "Egg Fried Rice",
                },
                {
                  name: " Rice",
                },
                {
                  name: "Lemon Rice",
                },
              ],
            },

            {
              name: "Dal",

              options: [
                {
                  name: "Palak Dal",
                },
                {
                  name: "Dal Thadka",
                },
                {
                  name: "Dal Fry",
                },
                {
                  name: "Tomato Dal",
                },
                {
                  name: "Dal Lasoni",
                },
                {
                  name: "Methi Dal",
                },
                {
                  name: "Massor Dal",
                },
              ],
            },
            {
              name: "NonVeg Varieties",

              options: [
                {
                  name: "Egg Curry",
                },
                {
                  name: "Chicken Curry",
                },
                {
                  name: "Egg Bhurji",
                },
               
              ],
            },
            {
              name: "Sides",

              options: [
                {
                  name: "Mango Pickle",
                },
                {
                  name: "Green Chatney",
                },
              ],
            },
            {
              name: "Sweet Varieties",
              options: [
                {
                  name: "Semiya kheer",
                },
                {
                  name: "Suji Ka Halwa",
                },
                {
                  name: "Fruit Custurd",
                },
                {
                  name: "Jibe Gaja",
                },
              ],
            },
            {
              name: "Drink Varieties",
              description: "Choose from various Sweet options.",
              options: [
                {
                  name: "Butter Milk",
                },
                {
                  name: "Veg Soup",
                },
                {
                  name: "Mango Juice",
                },
                {
                  name: "Milk",
                },
                
              ],
            },
            {
              name: "Vegetable Varieties",
              description: "Choose from various Vegetable options.",
              options: [
                {
                  name: "Veg Kofta",
                },
                {
                  name: "Cabbage Porial",
                },
                {
                  name: "Beans Tomato",
                },
                {
                  name: "Crispy Veg",
                },
                {
                  name: "Tomato Onion Curry",
                },
                {
                  name: "Mirchy Bhaji",
                },
                
              ],
            },
            {
              name: "Khichdi Varieties",
              description: "Choose from various Khichdi options.",
              options: [
                {
                  name: "Dal Khichdi",
                },
                {
                  name: "Khichdi Katta",
                },
                
                
              ],
            },
            {
              name: "Chinese Varieties",
              description: "Choose from various Chinese options.",
              options: [
                {
                  name: "Gobhi Manchurian Wet",
                },
                {
                  name: "Veg Noodles",
                },
                {
                  name: "Veg Noodles",
                },
                
                
              ],
            },
          ],
        },
      },
      wednesday: {
        breakfast: {
          meals: [
            {
              name: "Boiled Eggs & Omelette",
            },
            {
              name: "Bread/Jam/Butter",
            },
           
            {
              name: "Tea/Coffee/Milk",
            },
          
            // breakfast options...
            {
              name: "Breakfast Varieties",
              
              options: [
                {
                  name: "Idly/Wada ",
                },
                {
                  name: "Mysoor Boonda",
                },
                {
                  name: "Bagara Rice",
                },
                {
                  name: "Upma",
                },
                {
                  name: "Uthpam",
                },
                {
                  name: "Puri/Poha",
                },
                {
                  name: "Dosa",
                },
                {
                  name: "Aloo Paratha",
                },
                {
                  name: "Sprouts/CornFlakes",
                },
              ],
            },
          ],
        },
        lunch: {
          meals: [
            {
              name: "Plain Rice",
            },
            {
              name: "Chapathi",
            },
            {
              name: "Green Salad",
            },

            {
              name: "Rice Varieties",

              options: [
                {
                  name: "Corn Pulao",
                },
                {
                  name: "Curd Rice",
                },
                {
                  name: "Bagara Rice",
                },
                {
                  name: "Sambar Rice",
                },
                {
                  name: "Lemon Rice",
                },
              ],
            },

            {
              name: "Veg Varieties",

              options: [
                {
                  name: "Moong Dal",
                },
                {
                  name: "Dal Thadka",
                },
                {
                  name: "lal Chana",
                },
                {
                  name: "Veg Biryani",
                },
              ],
            },
            {
              name: "NonVeg Varieties",

              options: [
                {
                  name: "Egg Curry",
                },
                {
                  name: "Chicken Curry",
                },
                {
                  name: "Rogani Chicken",
                },
                {
                  name: "Beerakaya Curry",
                },
              ],
            },
            {
              name: "Sides",

              options: [
                {
                  name: "Mango Pickle",
                },
                {
                  name: "Green Chatney",
                },
              ],
            },
            {
              name: "Sweet Varieties",
              options: [
                {
                  name: "Semiya kheer",
                },
                {
                  name: "Suji Ka Halwa",
                },
                {
                  name: "Fruit Custurd",
                },
                {
                  name: "Jibe Gaja",
                },
              ],
            },
            {
              name: "Drink Varieties",
              description: "Choose from various Sweet options.",
              options: [
                {
                  name: "Butter Milk",
                },
                {
                  name: "Lemon juice",
                },
                {
                  name: "Mango Juice",
                },
                {
                  name: "Rasna",
                },
                {
                  name: "Roohafza",
                },
              ],
            },
          ],
        },

        dinner: {
          meals: [
            {
              name: "Plain Rice",
            },
            {
              name: "Chapati",
            },
            {
              name: "Curd",
            },
            
            

            {
              name: "Rice Varieties",

              options: [
                {
                  name: "Masala Rice",
                },
                {
                  name: "Veg Fried Rice",
                },
                {
                  name: "Egg Fried Rice",
                },
                {
                  name: " Rice",
                },
                {
                  name: "Lemon Rice",
                },
              ],
            },

            {
              name: "Dal",

              options: [
                {
                  name: "Palak Dal",
                },
                {
                  name: "Dal Thadka",
                },
                {
                  name: "Dal Fry",
                },
                {
                  name: "Tomato Dal",
                },
                {
                  name: "Dal Lasoni",
                },
                {
                  name: "Methi Dal",
                },
                {
                  name: "Massor Dal",
                },
              ],
            },
            {
              name: "NonVeg Varieties",

              options: [
                {
                  name: "Egg Curry",
                },
                {
                  name: "Chicken Curry",
                },
                {
                  name: "Egg Bhurji",
                },
               
              ],
            },
            {
              name: "Sides",

              options: [
                {
                  name: "Mango Pickle",
                },
                {
                  name: "Green Chatney",
                },
              ],
            },
            {
              name: "Sweet Varieties",
              options: [
                {
                  name: "Semiya kheer",
                },
                {
                  name: "Suji Ka Halwa",
                },
                {
                  name: "Fruit Custurd",
                },
                {
                  name: "Jibe Gaja",
                },
              ],
            },
            {
              name: "Drink Varieties",
              description: "Choose from various Sweet options.",
              options: [
                {
                  name: "Butter Milk",
                },
                {
                  name: "Veg Soup",
                },
                {
                  name: "Mango Juice",
                },
                {
                  name: "Milk",
                },
                
              ],
            },
            {
              name: "Vegetable Varieties",
              description: "Choose from various Vegetable options.",
              options: [
                {
                  name: "Veg Kofta",
                },
                {
                  name: "Cabbage Porial",
                },
                {
                  name: "Beans Tomato",
                },
                {
                  name: "Crispy Veg",
                },
                {
                  name: "Tomato Onion Curry",
                },
                {
                  name: "Mirchy Bhaji",
                },
                
              ],
            },
            {
              name: "Khichdi Varieties",
              description: "Choose from various Khichdi options.",
              options: [
                {
                  name: "Dal Khichdi",
                },
                {
                  name: "Khichdi Katta",
                },
                
                
              ],
            },
            {
              name: "Chinese Varieties",
              description: "Choose from various Chinese options.",
              options: [
                {
                  name: "Gobhi Manchurian Wet",
                },
                {
                  name: "Veg Noodles",
                },
                {
                  name: "Veg Noodles",
                },
                
                
              ],
            },
          ],
        },
      },
      thursday: {
        breakfast: {
          meals: [
            {
              name: "Boiled Eggs & Omelette",
            },
            {
              name: "Bread/Jam/Butter",
            },
           
            {
              name: "Tea/Coffee/Milk",
            },
          
            // breakfast options...
            {
              name: "Breakfast Varieties",
             
              options: [
                {
                  name: "Idly/Wada ",
                },
                {
                  name: "Mysoor Boonda",
                },
                {
                  name: "Bagara Rice",
                },
                {
                  name: "Upma",
                },
                {
                  name: "Uthpam",
                },
                {
                  name: "Puri/Poha",
                },
                {
                  name: "Dosa",
                },
                {
                  name: "Aloo Paratha",
                },
                {
                  name: "Sprouts/CornFlakes",
                },
              ],
            },
          ],
        },
        lunch: {
          meals: [
            {
              name: "Plain Rice",
            },
            {
              name: "Chapathi",
            },
            {
              name: "Green Salad",
            },

            {
              name: "Rice Varieties",

              options: [
                {
                  name: "Corn Pulao",
                },
                {
                  name: "Curd Rice",
                },
                {
                  name: "Bagara Rice",
                },
                {
                  name: "Sambar Rice",
                },
                {
                  name: "Lemon Rice",
                },
              ],
            },

            {
              name: "Veg Varieties",

              options: [
                {
                  name: "Moong Dal",
                },
                {
                  name: "Dal Thadka",
                },
                {
                  name: "lal Chana",
                },
                {
                  name: "Veg Biryani",
                },
              ],
            },
            {
              name: "NonVeg Varieties",

              options: [
                {
                  name: "Egg Curry",
                },
                {
                  name: "Chicken Curry",
                },
                {
                  name: "Rogani Chicken",
                },
                {
                  name: "Beerakaya Curry",
                },
              ],
            },
            {
              name: "Sides",

              options: [
                {
                  name: "Mango Pickle",
                },
                {
                  name: "Green Chatney",
                },
              ],
            },
            {
              name: "Sweet Varieties",
              options: [
                {
                  name: "Semiya kheer",
                },
                {
                  name: "Suji Ka Halwa",
                },
                {
                  name: "Fruit Custurd",
                },
                {
                  name: "Jibe Gaja",
                },
              ],
            },
            {
              name: "Drink Varieties",
              description: "Choose from various Sweet options.",
              options: [
                {
                  name: "Butter Milk",
                },
                {
                  name: "Lemon juice",
                },
                {
                  name: "Mango Juice",
                },
                {
                  name: "Rasna",
                },
                {
                  name: "Roohafza",
                },
              ],
            },
          ],
        },

        dinner: {
          meals: [
            {
              name: "Plain Rice",
            },
            {
              name: "Chapati",
            },
            {
              name: "Curd",
            },
            
            

            {
              name: "Rice Varieties",

              options: [
                {
                  name: "Masala Rice",
                },
                {
                  name: "Veg Fried Rice",
                },
                {
                  name: "Egg Fried Rice",
                },
                {
                  name: " Rice",
                },
                {
                  name: "Lemon Rice",
                },
              ],
            },

            {
              name: "Dal",

              options: [
                {
                  name: "Palak Dal",
                },
                {
                  name: "Dal Thadka",
                },
                {
                  name: "Dal Fry",
                },
                {
                  name: "Tomato Dal",
                },
                {
                  name: "Dal Lasoni",
                },
                {
                  name: "Methi Dal",
                },
                {
                  name: "Massor Dal",
                },
              ],
            },
            {
              name: "NonVeg Varieties",

              options: [
                {
                  name: "Egg Curry",
                },
                {
                  name: "Chicken Curry",
                },
                {
                  name: "Egg Bhurji",
                },
               
              ],
            },
            {
              name: "Sides",

              options: [
                {
                  name: "Mango Pickle",
                },
                {
                  name: "Green Chatney",
                },
              ],
            },
            {
              name: "Sweet Varieties",
              options: [
                {
                  name: "Semiya kheer",
                },
                {
                  name: "Suji Ka Halwa",
                },
                {
                  name: "Fruit Custurd",
                },
                {
                  name: "Jibe Gaja",
                },
              ],
            },
            {
              name: "Drink Varieties",
              description: "Choose from various Sweet options.",
              options: [
                {
                  name: "Butter Milk",
                },
                {
                  name: "Veg Soup",
                },
                {
                  name: "Mango Juice",
                },
                {
                  name: "Milk",
                },
                
              ],
            },
            {
              name: "Vegetable Varieties",
              description: "Choose from various Vegetable options.",
              options: [
                {
                  name: "Veg Kofta",
                },
                {
                  name: "Cabbage Porial",
                },
                {
                  name: "Beans Tomato",
                },
                {
                  name: "Crispy Veg",
                },
                {
                  name: "Tomato Onion Curry",
                },
                {
                  name: "Mirchy Bhaji",
                },
                
              ],
            },
            {
              name: "Khichdi Varieties",
              description: "Choose from various Khichdi options.",
              options: [
                {
                  name: "Dal Khichdi",
                },
                {
                  name: "Khichdi Katta",
                },
                
                
              ],
            },
            {
              name: "Chinese Varieties",
              description: "Choose from various Chinese options.",
              options: [
                {
                  name: "Gobhi Manchurian Wet",
                },
                {
                  name: "Veg Noodles",
                },
                {
                  name: "Veg Noodles",
                },
                
                
              ],
            },
          ],
        },
      },
      friday: {
        breakfast: {
          meals: [
            {
              name: "Boiled Eggs & Omelette",
            },
            {
              name: "Bread/Jam/Butter",
            },
           
            {
              name: "Tea/Coffee/Milk",
            },
          
            // breakfast options...
            {
              name: "Breakfast Varieties",
             
              options: [
                {
                  name: "Idly/Wada ",
                },
                {
                  name: "Mysoor Boonda",
                },
                {
                  name: "Bagara Rice",
                },
                {
                  name: "Upma",
                },
                {
                  name: "Uthpam",
                },
                {
                  name: "Puri/Poha",
                },
                {
                  name: "Dosa",
                },
                {
                  name: "Aloo Paratha",
                },
                {
                  name: "Sprouts/CornFlakes",
                },
              ],
            },
          ],
        },
        lunch: {
          meals: [
            {
              name: "Plain Rice",
            },
            {
              name: "Chapathi",
            },
            {
              name: "Green Salad",
            },

            {
              name: "Rice Varieties",

              options: [
                {
                  name: "Corn Pulao",
                },
                {
                  name: "Curd Rice",
                },
                {
                  name: "Bagara Rice",
                },
                {
                  name: "Sambar Rice",
                },
                {
                  name: "Lemon Rice",
                },
              ],
            },

            {
              name: "Veg Varieties",

              options: [
                {
                  name: "Moong Dal",
                },
                {
                  name: "Dal Thadka",
                },
                {
                  name: "lal Chana",
                },
                {
                  name: "Veg Biryani",
                },
              ],
            },
            {
              name: "NonVeg Varieties",

              options: [
                {
                  name: "Egg Curry",
                },
                {
                  name: "Chicken Curry",
                },
                {
                  name: "Rogani Chicken",
                },
                {
                  name: "Beerakaya Curry",
                },
              ],
            },
            {
              name: "Sides",

              options: [
                {
                  name: "Mango Pickle",
                },
                {
                  name: "Green Chatney",
                },
              ],
            },
            {
              name: "Sweet Varieties",
              options: [
                {
                  name: "Semiya kheer",
                },
                {
                  name: "Suji Ka Halwa",
                },
                {
                  name: "Fruit Custurd",
                },
                {
                  name: "Jibe Gaja",
                },
              ],
            },
            {
              name: "Drink Varieties",
              description: "Choose from various Sweet options.",
              options: [
                {
                  name: "Butter Milk",
                },
                {
                  name: "Lemon juice",
                },
                {
                  name: "Mango Juice",
                },
                {
                  name: "Rasna",
                },
                {
                  name: "Roohafza",
                },
              ],
            },
          ],
        },

        dinner: {
          meals: [
            {
              name: "Plain Rice",
            },
            {
              name: "Chapati",
            },
            {
              name: "Curd",
            },
            
            

            {
              name: "Rice Varieties",

              options: [
                {
                  name: "Masala Rice",
                },
                {
                  name: "Veg Fried Rice",
                },
                {
                  name: "Egg Fried Rice",
                },
                {
                  name: " Rice",
                },
                {
                  name: "Lemon Rice",
                },
              ],
            },

            {
              name: "Dal",

              options: [
                {
                  name: "Palak Dal",
                },
                {
                  name: "Dal Thadka",
                },
                {
                  name: "Dal Fry",
                },
                {
                  name: "Tomato Dal",
                },
                {
                  name: "Dal Lasoni",
                },
                {
                  name: "Methi Dal",
                },
                {
                  name: "Massor Dal",
                },
              ],
            },
            {
              name: "NonVeg Varieties",

              options: [
                {
                  name: "Egg Curry",
                },
                {
                  name: "Chicken Curry",
                },
                {
                  name: "Egg Bhurji",
                },
               
              ],
            },
            {
              name: "Sides",

              options: [
                {
                  name: "Mango Pickle",
                },
                {
                  name: "Green Chatney",
                },
              ],
            },
            {
              name: "Sweet Varieties",
              options: [
                {
                  name: "Semiya kheer",
                },
                {
                  name: "Suji Ka Halwa",
                },
                {
                  name: "Fruit Custurd",
                },
                {
                  name: "Jibe Gaja",
                },
              ],
            },
            {
              name: "Drink Varieties",
              description: "Choose from various Sweet options.",
              options: [
                {
                  name: "Butter Milk",
                },
                {
                  name: "Veg Soup",
                },
                {
                  name: "Mango Juice",
                },
                {
                  name: "Milk",
                },
                
              ],
            },
            {
              name: "Vegetable Varieties",
              description: "Choose from various Vegetable options.",
              options: [
                {
                  name: "Veg Kofta",
                },
                {
                  name: "Cabbage Porial",
                },
                {
                  name: "Beans Tomato",
                },
                {
                  name: "Crispy Veg",
                },
                {
                  name: "Tomato Onion Curry",
                },
                {
                  name: "Mirchy Bhaji",
                },
                
              ],
            },
            {
              name: "Khichdi Varieties",
              description: "Choose from various Khichdi options.",
              options: [
                {
                  name: "Dal Khichdi",
                },
                {
                  name: "Khichdi Katta",
                },
                
                
              ],
            },
            {
              name: "Chinese Varieties",
              description: "Choose from various Chinese options.",
              options: [
                {
                  name: "Gobhi Manchurian Wet",
                },
                {
                  name: "Veg Noodles",
                },
                {
                  name: "Veg Noodles",
                },
                
                
              ],
            },
          ],
        },
      },
      saturday: {
        breakfast: {
          meals: [
            {
              name: "Boiled Eggs & Omelette",
            },
            {
              name: "Bread/Jam/Butter",
            },
           
            {
              name: "Tea/Coffee/Milk",
            },
          
            // breakfast options...
            {
              name: "Breakfast Varieties",
             
              options: [
                {
                  name: "Idly/Wada ",
                },
                {
                  name: "Mysoor Boonda",
                },
                {
                  name: "Bagara Rice",
                },
                {
                  name: "Upma",
                },
                {
                  name: "Uthpam",
                },
                {
                  name: "Puri/Poha",
                },
                {
                  name: "Dosa",
                },
                {
                  name: "Aloo Paratha",
                },
                {
                  name: "Sprouts/CornFlakes",
                },
              ],
            },
          ],
        },
        lunch: {
          meals: [
            {
              name: "Plain Rice",
            },
            {
              name: "Chapathi",
            },
            {
              name: "Green Salad",
            },

            {
              name: "Rice Varieties",

              options: [
                {
                  name: "Corn Pulao",
                },
                {
                  name: "Curd Rice",
                },
                {
                  name: "Bagara Rice",
                },
                {
                  name: "Sambar Rice",
                },
                {
                  name: "Lemon Rice",
                },
              ],
            },

            {
              name: "Veg Varieties",

              options: [
                {
                  name: "Moong Dal",
                },
                {
                  name: "Dal Thadka",
                },
                {
                  name: "lal Chana",
                },
                {
                  name: "Veg Biryani",
                },
              ],
            },
            {
              name: "NonVeg Varieties",

              options: [
                {
                  name: "Egg Curry",
                },
                {
                  name: "Chicken Curry",
                },
                {
                  name: "Rogani Chicken",
                },
                {
                  name: "Beerakaya Curry",
                },
              ],
            },
            {
              name: "Sides",

              options: [
                {
                  name: "Mango Pickle",
                },
                {
                  name: "Green Chatney",
                },
              ],
            },
            {
              name: "Sweet Varieties",
              options: [
                {
                  name: "Semiya kheer",
                },
                {
                  name: "Suji Ka Halwa",
                },
                {
                  name: "Fruit Custurd",
                },
                {
                  name: "Jibe Gaja",
                },
              ],
            },
            {
              name: "Drink Varieties",
              description: "Choose from various Sweet options.",
              options: [
                {
                  name: "Butter Milk",
                },
                {
                  name: "Lemon juice",
                },
                {
                  name: "Mango Juice",
                },
                {
                  name: "Rasna",
                },
                {
                  name: "Roohafza",
                },
              ],
            },
          ],
        },

        dinner: {
          meals: [
            {
              name: "Plain Rice",
            },
            {
              name: "Chapati",
            },
            {
              name: "Curd",
            },
            
            

            {
              name: "Rice Varieties",

              options: [
                {
                  name: "Masala Rice",
                },
                {
                  name: "Veg Fried Rice",
                },
                {
                  name: "Egg Fried Rice",
                },
                {
                  name: " Rice",
                },
                {
                  name: "Lemon Rice",
                },
              ],
            },

            {
              name: "Dal",

              options: [
                {
                  name: "Palak Dal",
                },
                {
                  name: "Dal Thadka",
                },
                {
                  name: "Dal Fry",
                },
                {
                  name: "Tomato Dal",
                },
                {
                  name: "Dal Lasoni",
                },
                {
                  name: "Methi Dal",
                },
                {
                  name: "Massor Dal",
                },
              ],
            },
            {
              name: "NonVeg Varieties",

              options: [
                {
                  name: "Egg Curry",
                },
                {
                  name: "Chicken Curry",
                },
                {
                  name: "Egg Bhurji",
                },
               
              ],
            },
            {
              name: "Sides",

              options: [
                {
                  name: "Mango Pickle",
                },
                {
                  name: "Green Chatney",
                },
              ],
            },
            {
              name: "Sweet Varieties",
              options: [
                {
                  name: "Semiya kheer",
                },
                {
                  name: "Suji Ka Halwa",
                },
                {
                  name: "Fruit Custurd",
                },
                {
                  name: "Jibe Gaja",
                },
              ],
            },
            {
              name: "Drink Varieties",
              description: "Choose from various Sweet options.",
              options: [
                {
                  name: "Butter Milk",
                },
                {
                  name: "Veg Soup",
                },
                {
                  name: "Mango Juice",
                },
                {
                  name: "Milk",
                },
                
              ],
            },
            {
              name: "Vegetable Varieties",
              description: "Choose from various Vegetable options.",
              options: [
                {
                  name: "Veg Kofta",
                },
                {
                  name: "Cabbage Porial",
                },
                {
                  name: "Beans Tomato",
                },
                {
                  name: "Crispy Veg",
                },
                {
                  name: "Tomato Onion Curry",
                },
                {
                  name: "Mirchy Bhaji",
                },
                
              ],
            },
            {
              name: "Khichdi Varieties",
              description: "Choose from various Khichdi options.",
              options: [
                {
                  name: "Dal Khichdi",
                },
                {
                  name: "Khichdi Katta",
                },
                
                
              ],
            },
            {
              name: "Chinese Varieties",
              description: "Choose from various Chinese options.",
              options: [
                {
                  name: "Gobhi Manchurian Wet",
                },
                {
                  name: "Veg Noodles",
                },
                {
                  name: "Veg Noodles",
                },
                
                
              ],
            },
          ],
        },
      },
      sunday: {
        breakfast: {
          meals: [
            {
              name: "Boiled Eggs & Omelette",
            },
            {
              name: "Bread/Jam/Butter",
            },
           
            {
              name: "Tea/Coffee/Milk",
            },
          
            // breakfast options...
            {
              name: "Breakfast Varieties",
                 
              options: [
                {
                  name: "Idly/Wada ",
                },
                {
                  name: "Mysoor Boonda",
                },
                {
                  name: "Bagara Rice",
                },
                {
                  name: "Upma",
                },
                {
                  name: "Uthpam",
                },
                {
                  name: "Puri/Poha",
                },
                {
                  name: "Dosa",
                },
                {
                  name: "Aloo Paratha",
                },
                {
                  name: "Sprouts/CornFlakes",
                },
              ],
            },
          ],
        },
        lunch: {
          meals: [
            {
              name: "Plain Rice",
            },
            {
              name: "Chapathi",
            },
            {
              name: "Green Salad",
            },

            {
              name: "Rice Varieties",

              options: [
                {
                  name: "Corn Pulao",
                },
                {
                  name: "Curd Rice",
                },
                {
                  name: "Bagara Rice",
                },
                {
                  name: "Sambar Rice",
                },
                {
                  name: "Lemon Rice",
                },
              ],
            },

            {
              name: "Veg Varieties",

              options: [
                {
                  name: "Moong Dal",
                },
                {
                  name: "Dal Thadka",
                },
                {
                  name: "lal Chana",
                },
                {
                  name: "Veg Biryani",
                },
              ],
            },
            {
              name: "NonVeg Varieties",

              options: [
                {
                  name: "Egg Curry",
                },
                {
                  name: "Chicken Curry",
                },
                {
                  name: "Rogani Chicken",
                },
                {
                  name: "Beerakaya Curry",
                },
              ],
            },
            {
              name: "Sides",

              options: [
                {
                  name: "Mango Pickle",
                },
                {
                  name: "Green Chatney",
                },
              ],
            },
            {
              name: "Sweet Varieties",
              options: [
                {
                  name: "Semiya kheer",
                },
                {
                  name: "Suji Ka Halwa",
                },
                {
                  name: "Fruit Custurd",
                },
                {
                  name: "Jibe Gaja",
                },
              ],
            },
            {
              name: "Drink Varieties",
              description: "Choose from various Sweet options.",
              options: [
                {
                  name: "Butter Milk",
                },
                {
                  name: "Lemon juice",
                },
                {
                  name: "Mango Juice",
                },
                {
                  name: "Rasna",
                },
                {
                  name: "Roohafza",
                },
              ],
            },
          ],
        },

        dinner: {
          meals: [
            {
              name: "Plain Rice",
            },
            {
              name: "Chapati",
            },
            {
              name: "Curd",
            },
            
            

            {
              name: "Rice Varieties",

              options: [
                {
                  name: "Masala Rice",
                },
                {
                  name: "Veg Fried Rice",
                },
                {
                  name: "Egg Fried Rice",
                },
                {
                  name: " Rice",
                },
                {
                  name: "Lemon Rice",
                },
              ],
            },

            {
              name: "Dal",

              options: [
                {
                  name: "Palak Dal",
                },
                {
                  name: "Dal Thadka",
                },
                {
                  name: "Dal Fry",
                },
                {
                  name: "Tomato Dal",
                },
                {
                  name: "Dal Lasoni",
                },
                {
                  name: "Methi Dal",
                },
                {
                  name: "Massor Dal",
                },
              ],
            },
            {
              name: "NonVeg Varieties",

              options: [
                {
                  name: "Egg Curry",
                },
                {
                  name: "Chicken Curry",
                },
                {
                  name: "Egg Bhurji",
                },
               
              ],
            },
            {
              name: "Sides",

              options: [
                {
                  name: "Mango Pickle",
                },
                {
                  name: "Green Chatney",
                },
              ],
            },
            {
              name: "Sweet Varieties",
              options: [
                {
                  name: "Semiya kheer",
                },
                {
                  name: "Suji Ka Halwa",
                },
                {
                  name: "Fruit Custurd",
                },
                {
                  name: "Jibe Gaja",
                },
              ],
            },
            {
              name: "Drink Varieties",
              description: "Choose from various Sweet options.",
              options: [
                {
                  name: "Butter Milk",
                },
                {
                  name: "Veg Soup",
                },
                {
                  name: "Mango Juice",
                },
                {
                  name: "Milk",
                },
                
              ],
            },
            {
              name: "Vegetable Varieties",
              description: "Choose from various Vegetable options.",
              options: [
                {
                  name: "Veg Kofta",
                },
                {
                  name: "Cabbage Porial",
                },
                {
                  name: "Beans Tomato",
                },
                {
                  name: "Crispy Veg",
                },
                {
                  name: "Tomato Onion Curry",
                },
                {
                  name: "Mirchy Bhaji",
                },
                
              ],
            },
            {
              name: "Khichdi Varieties",
              description: "Choose from various Khichdi options.",
              options: [
                {
                  name: "Dal Khichdi",
                },
                {
                  name: "Khichdi Katta",
                },
                
                
              ],
            },
            {
              name: "Chinese Varieties",
              description: "Choose from various Chinese options.",
              options: [
                {
                  name: "Gobhi Manchurian Wet",
                },
                {
                  name: "Veg Noodles",
                },
                {
                  name: "Veg Noodles",
                },
                
                
              ],
            },
          ],
        },
      },

      // Add descriptions for other days...
    };
    return mealDescriptions[selectedDay][selectedMeal];
  };

  const mealDescription = getMealDescription();
  const handleRiceOptionChange = (option) => {
    setSelectedRiceOption(option);
  };

  return (
    <section id="food" className="food">
      <h2 className="head">Food Menu</h2>
      {/* Add the dropdown list */}
      <div className="day-dropdown">
        <label htmlFor="day">Select a day:</label>
        <select
          id="day"
          name="day"
          value={selectedDay}
          onChange={handleDayChange}
        >
          <option value="monday">Monday</option>
          <option value="tuesday">Tuesday</option>
          <option value="wednesday">Wednesday</option>
          <option value="thursday">Thursday</option>
          <option value="friday">Friday</option>
          <option value="saturday">Saturday</option>
          <option value="sunday">Sunday</option>
          {/* Add options for other days */}
        </select>
      </div>

      <div className="food__buttons">
        <button
          className={selectedMeal === "breakfast" ? "active" : ""}
          onClick={() => setSelectedMeal("breakfast")}
        >
          Breakfast
        </button>
        <button
          className={selectedMeal === "lunch" ? "active" : ""}
          onClick={() => setSelectedMeal("lunch")}
        >
          Lunch
        </button>
        <button
          className={selectedMeal === "dinner" ? "active" : ""}
          onClick={() => setSelectedMeal("dinner")}
        >
          Dinner
        </button>
      </div>

      {mealDescription && (
        <div className="food-description">
          <h3>
            {selectedMeal.charAt(0).toUpperCase() + selectedMeal.slice(1)} Meals
          </h3>
          <p>{mealDescription.description}</p>

          <div className="meal-cards">
            {mealDescription.meals.map((meal, index) => (
              <div
                className={`meal-card ${
                  selectedMeal === "breakfast" ? "active" : ""
                }`}
                key={index}
              >
                <div className="meal-card__info">
                  <h4>{meal.name}</h4>

                  {selectedMeal === "lunch" &&
                  (meal.name === "Rice Varieties" ||
                    meal.name === "NonVeg Varieties" ||
                    meal.name === "Veg Varieties" ||
                    meal.name === "Drink Varieties" ||
                    meal.name === "Sweet Varieties" ||
                    meal.name === "Sides") ? (
                    <div className="options-buttons">
                      <h5 style={{ color: "GrayText", marginBottom: "5px" }}>
                        Choose among them
                      </h5>
                      {meal.options.map((option, optionIndex) => (
                        <button
                          key={optionIndex}
                          className={`option-button ${
                            selectedRiceOption === option.name ? "active" : ""
                          }`}
                          onClick={() => handleRiceOptionChange(option.name)}
                        >
                          {option.name}
                        </button>
                      ))}


                      
                    </div>
                  ) : (
                    <p>{meal.description}</p>
                  )}
          

          {selectedMeal === "dinner" &&
                  (meal.name === "Rice Varieties" ||
                  meal.name === "Dal" ||
                    meal.name === "NonVeg Varieties" ||
                    meal.name === "Veg Varieties" ||
                    meal.name === "Drink Varieties" ||
                    meal.name === "Sweet Varieties" ||
                    meal.name === "Sides"||
                    meal.name === "Vegetable Varieties" ||
                    meal.name === "Khichdi Varieties" ||
                    meal.name === "Chinese Varieties"  ) ? (
                    <div className="options-buttons">
                      <h5 style={{ color: "GrayText", marginBottom: "5px" }}>
                        Choose among them
                      </h5>
                      {meal.options.map((option, optionIndex) => (
                        <button
                          key={optionIndex}
                          className={`option-button ${
                            selectedRiceOption === option.name ? "active" : ""
                          }`}
                          onClick={() => handleRiceOptionChange(option.name)}
                        >
                          {option.name}
                        </button>
                      ))}


                      
                    </div>
                  ) : (
                    <p>{meal.description}</p>
                  )}
          
                  

          {selectedMeal === "breakfast" &&
                  (meal.name === "Breakfast Varieties"
                   ) ? (
                    <div className="options-buttons">
                      <h5 style={{ color: "GrayText", marginBottom: "5px" }}>
                        Choose among them
                      </h5>
                      {meal.options.map((option, optionIndex) => (
                        <button
                          key={optionIndex}
                          className={`option-button ${
                            selectedRiceOption === option.name ? "active" : ""
                          }`}
                          onClick={() => handleRiceOptionChange(option.name)}
                        >
                          {option.name}
                        </button>
                      ))}


                      
                    </div>
                  ) : (
                    <p>{meal.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default FoodComponent;
