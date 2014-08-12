$(document).ready(function() {
  // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
    $.ajax({
      url: '/contacts',
      method: 'GET',
    }).done(function (data) {
      data.forEach(function (d) {
        $('#contacts-index').append("<p>" + d.first_name + " " + d.last_name + " " + d.email + " " + d.phone_number + "</p>");
      });
    });
});
