/*
This Codecademy project is called Newsworthy. It's an instruction on using 
APIs. This project uses APIs from NewsAPI.org and Twitter to fetch, and then
display, news information from three different news sources. It was my first
time signing up for developer accounts for the APIs that'll be needed. It was
very exciting to see this project post to my personal Twitter account! :D
*/
const Twitter = {};
//Here's all the important API information for Twitter. As you can see,
//it's way more complicated than the other APIs. 
const oauthConsumerKey = '8woTAssgST6YdVeH1Axso9KPt'; // Generated from apps.twitter.com
const oauthConsumerSecret = 'yZcJddiwNOsuiamDaSgHxt7O9lb2RCiQJVdR5nhTiMa5Qff95i'; // Generated from Keys and Access Tokens on apps.twitter.com
const oauthToken = '818889528-6z0YKLtdSvBPDJCFCxxW0niws2VrAPbnLcKeAb4Y'; // Generated from Keys and Access Tokens on apps.twitter.com
const oauthTokenSecret = '86ZncUp5kqZdATGgxFtynTkOK2GGFT65jskg7tvsQS2Dw'; // Generated from Keys and Access Tokens on apps.twitter.com
const oauthSignatureMethod = 'HMAC-SHA1';
const oauthVersion = '1.0';
const baseUrl = 'https://api.twitter.com/1.1/statuses/update.json';

// Post Status Function
/*
The .postStatus appears to be an established Javascript function from how
it's used here, but a short Google short didn't shed light on it. I don't
see it defined anywhere else. An async, or asynchronous function, initially
returns a promise. Once the request returns data the promise is replaced
with the desired data. the await fetch is part of the promise generation &
data return. That herokuapp call is explained in the Codecademy intro for
this exercise. Twitter is set up to get calls like this from back end 
environments & this exercise is taking place in a client browswer, so 
Codecademy made that herokuapp purely as a filter for this exercise. Thanks
Codecademy :) baseURL, defined above, is the ending required for the
web address to call properly. The encodeData part is more web address 
formatting to send to Twitter in the correct format. The 
generateAuthorizationHeader appears to be more parts of that proper
Twitter web address call. 
*/
Twitter.postStatus = async (status) => {
  let response = await fetch(`https://cors-anywhere.herokuapp.com/${baseUrl}?status=${encodeData(status)}`, {
    method: 'POST',
    headers: {
  Authorization: Twitter.generateAuthorizationHeader(status)
}	
  });
  let jsonResponse = await response.json();
  console.log(jsonResponse);
  return jsonResponse;
};
// Helper Functions
//This appears to be generating more info for the post, like status & time.
//
Twitter.generateAuthorizationHeader = (status) => {
  const oauthNonce = generateNonce();
  const oauthTimestamp = Math.floor((new Date()).getTime() / 1000);
  const oauthSignature = generatePostSignature(status, baseUrl, oauthNonce, oauthTimestamp);

  let authorizationHeader = `Oauth oauth_consumer_key="${encodeData(oauthConsumerKey)}", oauth_nonce="${encodeData(oauthNonce)}", oauth_signature="${encodeData(oauthSignature)}", oauth_signature_method="${encodeData(oauthSignatureMethod)}", oauth_timestamp="${encodeData(oauthTimestamp)}", oauth_token="${encodeData(oauthToken)}", oauth_version="${encodeData(oauthVersion)}"`;

  return authorizationHeader;
};

NONCE_CHARS = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n',
  'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B',
  'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P',
  'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3',
  '4', '5', '6', '7', '8', '9'
];

const generateNonce = () => {
  var result = [];
  var chars = NONCE_CHARS;
  var char_pos;
  var nonce_chars_length = chars.length;

  for (var i = 0; i < 32; i++) {
    char_pos = Math.floor(Math.random() * nonce_chars_length);
    result[i] = chars[char_pos];
  }
  return result.join('');
};
//Here's what appears to be more authorization generation for Twitter
const generatePostSignature = (status, url, oauthNonce, oauthTimestamp) => {
  const parameterString = `oauth_consumer_key=${encodeData(oauthConsumerKey)}&oauth_nonce=${encodeData(oauthNonce)}&oauth_signature_method=HMAC-SHA1&oauth_timestamp=${encodeData(oauthTimestamp)}&oauth_token=${encodeData(oauthToken)}&oauth_version=1.0&status=${encodeData(status)}`;
  const signatureBase = `POST&${encodeData(url)}&${encodeData(parameterString)}`;
  const signingKey = `${encodeData(oauthConsumerSecret)}&${encodeData(oauthTokenSecret)}`;

  return HMACSHA1(signingKey, signatureBase);
};
//Here's what appears to be more authorization generation for Twitter
const encodeData = (toEncode) => {
  if (toEncode == null || toEncode == "") return "";
  else {
    var result = encodeURIComponent(toEncode);
    // Fix the mismatch between OAuth's  RFC3986's and Javascript's beliefs in what is right and wrong ;)
    return result.replace(/\!/g, "%21")
      .replace(/\'/g, "%27")
      .replace(/\(/g, "%28")
      .replace(/\)/g, "%29")
      .replace(/\*/g, "%2A");
  }
};
