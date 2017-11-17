/*jshint multistr:true */
/*
This program checks a hard-coded variable called "text" for the presence of a hard-coded variable called
"myName." myName is my name. It's supposed to represent a simple search through text program. It cycles
through the entire text length with a for loop. IF it finds an upper case "D", it will push each individual
character to the "hits" variable, the location for storing hits. So, if there are examples of the myName 
variable in the text variable, then each character of the found myName variable will be pushed to the 
hits variable. If there are hits, it will look like 'D' new line 'a' new line 'v' new line etc.,
If not hits are found, then a console.log is used to print the entire string of hits. 

This program could be improved to simply count the # of times that the myName variable is found in the
text. That could be accomplished by, removing the check for upper-case "D" and then, adding a second inner
for loop to cycle through the characters of the myName variable. IF the i of the text loop matches all of the
js of the myName loop, then a +=1 counter for hit could happen. 
*/
var text = "this is all the junk that will be searched\
ohh I wonder David what's in a wonder ball David \
David David Walrus fast forward over all the rain David\
Yup, I feel like I've written enough lines now ... David";

var myName = "David";
var hits = [];

for (var i = 0; i < text.length; i++)
    {
      if (text[i] === "D")  
      {
          for (var j = i; j < (myName.length + i); j++)
          {
              hits.push(text[j]);
          }
      }
      
    }
if (hits.length === 0)
    {
     console.log("Your name wasn't found!")   
    }
else
    {
     console.log(hits);   
    }
