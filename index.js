var Twit = require('twit');
var Sentiment = require('sentiment');
var sentiment = new Sentiment();

var T = new Twit({
  consumer_key:         '95Q5aLlMvelRUc8QVzE07gile',
  consumer_secret:      'hidden',
  access_token:         '1042504659837964288-0TRm4g3oOacoYE39Y9s4WMdZB1bhOm',
  access_token_secret:  'hidden',
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
  strictSSL:            true,     // optional - requires SSL certificates to be valid.
})

T.get('statuses/user_timeline', { screen_name: 'realDonaldTrump', count: 200 }, function(err, data, response) {
  data.forEach(element => {
	  console.log(sentiment.analyze(element.text.score));
  });
})
