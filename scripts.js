console.log('working');

$(function() {
    $.ajax({
        type: "GET",
        url: "https://api.flickr.com/services/rest/?method=flickr.interestingness.getList&api_key=21b8dfca2fb6f130f45f45f53dae714a&format",
        dataType: "json"
        success: function (json) {
					// 1. console.log json object (did that, removed it)

					// 2. iterate through the image objects
					// 2a. find the image objects from json
					var photos = json.photos.photo;
					$.each(photos, function(key, photo) {
						// 3. add images to the body
						// 3b. figure out real image source
						var farmID = photo.farm;
						var serverID = photo.server;
						var id = photo.id;
						var secret = photo.secret;
						var imageURL = 'https://farm' +
							farmID + '.staticflickr.com/' +
							serverID + '/' +
							id + '_' +
							secret + '.jpg';

						$('<img>') // 3a. create an image
							.attr('src', imageURL)
							.attr('alt', 'Image')
							.appendTo('body'); // 3c. add to body
					});
        },
        error: function(xhr, status, error) {
        	console.log(xhr);
        	console.log(status);
        	console.log(error);
        }
    });
});
