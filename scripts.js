console.log('working');


$(function() {
    $.ajax({
        type: "GET",
        url: "https://api.flickr.com/services/rest/?method=flickr.interestingness.getList&api_key=b944cc8b49d1fefb91be5009980232c0&format=json&nojsoncallback=1&auth_token=72157647854321898-cf20a8088a540415&api_sig=20332eae5cb39101438ea4d92c4b5323",
        dataType: "json",
        success: function (json) {
        	console.log(json);
            // alert(xml.Data[0].City);
            // result = xml.Code;
            // document.myform.result1.value = result;
        },
        error: function(xhr, status, error) {
        	console.log(xhr);
        	console.log(status);
        	console.log(error);
        }
    });
});


// https://api.flickr.com/services/rest/?method=flickr.test.echo&name=value




// $(function(){
// 	jQuery('#a-link').remove();
	
// 	jQuery('<img alt="" />').attr('id', 'loader').attr('src', 'ajax-loader.gif').appendTo('#image-container');
	
// 	//assign your api key equal to a variable
// 	var apiKey = 'b7170fdd9bc2eb9c9d55e5b38b0eca48';
	
// 	//the initial json request to flickr
// 	//to get your latest public photos, use this request: http://api.flickr.com/services/rest/?&amp;method=flickr.people.getPublicPhotos&amp;api_key=' + apiKey + '&amp;user_id=29096781@N02&amp;per_page=15&amp;page=2&amp;format=json&amp;jsoncallback=?
// 	$.getJSON('http://api.flickr.com/services/rest/?&amp;method=flickr.photosets.getPhotos&amp;api_key=' + apiKey + '&amp;photoset_id=72157619415192530&amp;format=json&amp;jsoncallback=?',











// $.ajax({
//     GET url: "https://api.flickr.com/services/rest/?method=flickr.test.echo&name=value", //this is where we are going to request the jsonp info
//     dataType : "json",
//     success: function( json ) {
//     	console.log(jsonp);
//       $( "<h1/>" ).text( json.glossary.title ).appendTo( "body" );
//     }
// });
