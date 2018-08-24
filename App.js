const menu = {

    _courses : {
      appetizers: [],
      mains: [],
      desserts: []
    },
    get courses() {
        return {appetizers: this._courses.appetizers,
                mains: this._courses.mains,
                desserts: this._courses.desserts}
      },
    
    set appetizers(appetizerIn) {
  
      },
    get appetizers() {
  
      },
    set mains(mainIn) {
  
      },
    get mains() {
  
      },
    set desserts(dessertIn) {
  
      },
    get desserts () {
  
      },
    
      addDishToCourse (courseName, dishName, dishPrice)  {
              
        let dish = {
          name: dishName,
          price: dishPrice
        }
        
        if (courseName === 'appetizers') {
            this._courses.appetizers.push(dish);
        }  else if (courseName === 'mains') {
            this._courses.mains.push(dish);
        } else if (courseName === 'desserts'){
            this._courses.desserts.push(dish);           
        };
        
      },
    
      getRandomDishFromCourse (courseName) {
        const dishes = this._courses[courseName];
        const randomIndex = Math.floor(Math.random() * dishes.length);
  
        return dishes[randomIndex]
        },
      
      generateRandomMeal: function() {
      const appetizer = this.getRandomDishFromCourse('appetizers');
      const mains = this.getRandomDishFromCourse('mains');
      const desserts  = this.getRandomDishFromCourse('desserts');
        
      const totalPrice = appetizer.price + mains.price + desserts.price 
  
      return `Your meal is ${appetizer.name}, ${mains.name}, ${desserts.name} The price is $${totalPrice}.`;
    }
    
  }
  
  menu.addDishToCourse('appetizers', 'Caesar Salad', 4.25);
  menu.addDishToCourse('appetizers', 'Mozzarella Stix', 5.25);
  menu.addDishToCourse('appetizers', 'Onion Soup', 6.25);
  menu.addDishToCourse('mains', 'Chicken', 9.25);
  menu.addDishToCourse('mains', 'Steak', 15.25);
  menu.addDishToCourse('mains', 'Filet Mignon', 16.25);
  menu.addDishToCourse('desserts', 'Churros', 4.25);
  menu.addDishToCourse('desserts', 'Cinnamon Stix', 5.25);
  menu.addDishToCourse('desserts', 'Cheese Cake', 6.25);
  
  
  let meal = menu.generateRandomMeal();
  console.log(meal);
  