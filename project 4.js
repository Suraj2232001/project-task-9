var registeredEarly = true;
var notRegistered = false;
var runnersAge =19;
let raceNumber = Math.floor(Math.random() * 1000);
if(runnersAge > 18 && registeredEarly)
{ 
    raceNumber+=1000;
}
else {
    raceNumber = raceNumber;
}
if(runnersAge > 18 && registeredEarly)
{console.log (' u will race at 9:30 am.');
console.log(`your raceNumber is ${raceNumber}`);
}
else if (runnersAge > 18 && notRegistered)
{console.log(' u will race at 11:00 am.');
console.log(`your raceNumber is ${raceNumber}`);
}
else if(runnersAge < 18)
{console.log(' u will race at 12:30 pm.');
console.log(`your raceNumber is ${raceNumber}`);
}
else
{console.log(' go to the registration desk.');
}