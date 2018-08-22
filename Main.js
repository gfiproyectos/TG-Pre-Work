let myPlaces = ['Bahamas', 'Cancun', 'Greece'];

let friendPlaces  = ['Italy', 'Antigua', 'Greece'];

for (let myPlacesIndex  = 0; myPlacesIndex  < myPlaces.length; myPlacesIndex ++) {

   for (let friendPlacesIndex  = 0; friendPlacesIndex  < friendPlaces.length; friendPlacesIndex++) {
   
     if (myPlaces[myPlacesIndex] === friendPlaces[friendPlacesIndex]) {
         
           console.log(friendPlaces[friendPlacesIndex]);  
       
         } 
      
  }
  
  
 }
