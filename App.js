let raceNumber = Math.floor(Math.random() * 1000);

const registeredEarly = true;
const age = 18;

if (age > 18 && registeredEarly) { 
   raceNumber += 1000;
}

if (age > 18 && registeredEarly) { 
   console.log(`Runner will race at 9:30 am and 
Number will be ${raceNumber} `);
} else if (age > 18 && !registeredEarly) {
  console.log(`Runner will race at 11:30 am and 
Number will be ${raceNumber} `);
} else if (age < 18 ) {
  console.log(`Runner will race at 12:30 am and 
Number will be ${raceNumber} `);
} else {
  console.log('Runner should see the registration desk');
}