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
