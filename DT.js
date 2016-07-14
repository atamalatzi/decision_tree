console.clear();

var bored = prompt('You are super bored on a Saturday night and not sure what to do? Do you have enough cash to go out or are you stuck watching Netflix? Answer with: $$$ for a lot of money, $$ not so much of money, $ little to no money');

switch (bored) {
	case '$$$':
		// question
		var hasDate = prompt('Do you have a date? Answer with: yes for you do a date, no if you do not');
		
		// switch statement that matches the possible answers
		switch (hasDate){
			case 'yes':
				// question
				var movie = prompt('Have you been to the movies lately? Yes or No');
				// switch statement
				switch (movie) {
					case 'no':
					open("http://www.yelp.com/search?find_desc=movies&find_loc=McAllen%2C+TX&ns=1");
						break;
					case 'yes':
					var dinner = prompt('Why not take your date to dinner! Just reply okay!');
						open("http://www.yelp.com/search?find_desc=fancy+restaurant&find_loc=McAllen,+TX&start=0&attrs=RestaurantsPriceRange2.4");
						break;
				}
			case 'no':
				var dance = prompt('Do you feel like dancing? Yes or No');
			
				switch(dance) {
				case 'yes':
					open("http://www.yelp.com/search?find_desc=fancy+nightclub&find_loc=McAllen,+TX");
					break;	
			}
			case 'no':
			var bar = prompt('Then why not go to the bar! Type in YAY!!! to be redirected!');
				open("http://www.yelp.com/search?find_desc=sports+bar+and+grill&find_loc=McAllen,+TX");
				break;
		}
	case '$$':
		var friends = prompt("So you're not such a big baller? That's fine! You have other options! Do you have any friends? Yes or No");
		// question
			switch (friends) {
				case 'yes':
					var drivein = prompt('Have you ever been to a drive in movie? Yes or No');

					switch (drivein){
						case 'no':
							prompt('Awesome! There is only ONE place out here to go! Respond however you feel and press continue to be redirected!');		
							open("http://www.wesmerdrivein.com/");
							break;
						case 'yes':
							prompt('Then you can figure something else out with them...feel free to respond however you feel and browse this page for some decent ideas!');
							open("http://thoughtcatalog.com/cehudspeth/2013/02/25-awesome-things-to-do-with-your-group-of-friends/");
					}
					break;
				case 'no':
					var alone= prompt('Aww! So you really have no one to hang out with? Well here are some places to meet new people...good luck! Respond and press enter!');
					open("http://www.meetup.com/cities/us/tx/mcallen/");
					break;
			}
					break;
				case '$':
		var Netflix = prompt("So....you're broke and no idea what to do....well damn do you have Netflix? Yes or No");
		switch(Netflix) {
				case 'yes':
					prompt('Awesome! There is at least something to do in your life! I suggest something funny to offset the depression due to the lack of funds you have, respond for a list of funny Netflix movies and may I suggest checking your kitchen for snacks?');
					open("http://www.complex.com/pop-culture/the-25-best-comedy-movies-streaming-on-netflix-right-now/");
					break;
				case 'no':
					prompt('Dear lord, what can you do? Working out is always fun.....no? Okay, then be productive and learn something!');
					open("https://www.codecademy.com/learn/javascript");
				
		}		
					break;
 		default:
    			prompt("What's wrong with you? Pay attention to directions! Respond with SORRY and try again... -_-");
}
