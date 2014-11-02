console.log('working');



$.ajax({
		url: "https://api.flickr.com/services/rest/?method=flickr.interestingness.getList&api_key=21b8dfca2fb6f130f45f45f53dae714a&per_page=100&format=json",
    type: "GET",
    dataType: "json",
    status: 'OK',
		success: 'success'
});

success = function (json) {


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

					 $(thisIsIt).appendTo('body');

				// $.post('<img>') // 3a. create an image
				// 	.attr('src', imageURL)
				// 	.attr('alt', 'Image')
				// 	alert( "Load was performed." )
			// 		.appendTo('body'); // 3c. add to body
			// }
    },
    error = function(xhr, status, error) {
    	console.log(xhr);
    	console.log(status);
    	console.log(error);
   }
 }





