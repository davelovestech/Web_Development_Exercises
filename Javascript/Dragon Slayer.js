/*
This program allows the user to fight a simulated dragon by using random number generation. 
The slaying variable will run the program while it returns a true value. A check for hitting
the dragon is done by using Math.random, which generates a random floating point # in the range
of 0-1; multiplying that by 5 and then adding 1 allows for a max of 5 damage and at least 1 damage
IF a hit occurs, which I'll shortly describe. Math.random is surrounded by Math.floor to round 
the Math.random # down to the nearest whole number & totalDamage done by the dragon starts out 
at 0. Checking for hitting the dragon, variable youHit is done with another Math.floor(Math.random))
# call, but the max for that is 2, so there's a 2/3 chance of hitting this dragon. totalDamage done
to the dragon is += added each round from the damageThisRound variable.  IF you don't hit the dragon,
then you die.
*/
var slaying = true;

var youHit = Math.floor(Math.random() * 2);
var damageThisRound = Math.floor(Math.random() * 5 + 1);
var totalDamage = 0;

while (slaying) 
{
    if (youHit)
    {
        console.log("You hit the dragon!");
        totalDamage += damageThisRound;
        if (totalDamage >= 4)
        {
         console.log("You beat the dragon!");
         slaying = false;
        }
        else
        {
         youHit = Math.floor(Math.random() *2);   
        }
        
    }
    else
    {
        console.log("The dragon burninates you!");
    }
    slaying = false;
}
