console.log('working');

// promises

$.ajax("https://api.flickr.com/services/rest/?method=flickr.interestingness.getList&api_key=21b8dfca2fb6f130f45f45f53dae714a&per_page=1&format=json", {
    type: "GET",
    dataType: "json"
}).then(function(data, status, xhr) {}, function(xhr, status, error) {});


var success = function (json) {

	var photos = json.photos.photo;
		$.each(photos), function(key, photo) {
			var farmID = photo.farm;
			var serverID = photo.server;
			var id = photo.id;
			var secret = photo.secret;
			var img = document.createElement('img');
			var imageURL = 'https://farm' +
				farmID + '.staticflickr.com/' +
				serverID + '/' +
				id + '_' +
				secret + '.jpg';

			var thisIsIt = $(img).attr({'src': imageUrl,
	  	'class': 'col-lg-12'});

		$.post('<img>') // 3a. create an image
			.attr('src', thisIsIt)
			.attr('alt', 'Image')
			alert( "Load was performed." )
			.appendTo('body'); // 3c. add to body
	}
},
error = function(xhr, status, error) {
	console.log(xhr);
	console.log(status);
	console.log(error);
}






