$(document).foundation();

$(document.body).on("open.fndtn.clearing", function(event) {
  console.info("About to open thumbnail with src ", $('img', event.target).attr('src'));
});