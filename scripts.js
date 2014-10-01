$.ajax({
    url: "file.json",
    dataType : "json",
    success: function( json ) {
    	console.log(json);
      $( "<h1/>" ).text( json.glossary.title ).appendTo( "body" );
    }
});
