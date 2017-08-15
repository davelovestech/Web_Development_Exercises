/*jshint multistr:true */
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
