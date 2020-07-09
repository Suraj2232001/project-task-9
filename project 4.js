var registeredEarly = false;
if(registeredEarly)
    {
        console.log (' registered early');
}
 else {
     console.log (' not registered');
}
var runnersAge = 52; 
let raceNumber = Math.floor(Math.random() * 1000);
if(runnersAge > 18 && n==3)
{ 
    raceNumber+=1000;
}
else {
    raceNumber = raceNumber;
}
if(runnersAge > 18 && n==3)
{console.log (' u will race at 9:30 am.');
console.log(`your raceNumber is ${raceNumber}`);
}
else if (runnersAge > 18 && n!=3)
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