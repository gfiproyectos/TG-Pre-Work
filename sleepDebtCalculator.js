const getSleepHours = day => {
  
  switch (day) {
      
    case 'monday':
      return 7;
      
    case 'tuesday':
      return 8;
      
    case 'wednesday':
      return 7;
      
    case 'thursday':
      return 6;
      
    case 'friday':
      return 8;
      
    case 'saturday':
      return 7;
      
    case 'sunday':
      return 7;     
      
  }
  
};

const getActualSleepHours = () => {
   return getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
};

const getIdealSleepHours  = () => {
  
  let idealHours  = 7;
  
  return idealHours * 7;
  
};

const calculateSleepDebt   = () => {
  
  let actualSleepHours   = getActualSleepHours();
  
  let idealSleepHours   = getIdealSleepHours();

  if (actualSleepHours === idealSleepHours) {
    console.log('User got the perfect amount of Sleep!!!');
  } else if (actualSleepHours > idealSleepHours){
    console.log(`You got ${actualSleepHours - idealSleepHours} hour(s) more sleep than you needed this week.`);
  } else {
    console.log(`You got ${idealSleepHours - actualSleepHours} hour(s) less sleep than you needed this week. Get some rest.`);
  }
  
};

calculateSleepDebt();