$(document).ready(function () {
   
  $("#click").click(function (e ){
      e.preventDefault();
    $.get("http://localhost:3007/api/chirps", function (data) {
        console.log(data)
      const username=$('#username');
      const message=$('#message');
      console.log({username, message})
      $('#username').val('');
      $('#message').val('');

      $.ajaxSetup({
        headers: {
          Accept: "application/jason, text plain, */*",
          "Content-Type": "application/json",
        },
      });
      $.ajax({
          type:'POST',
          url:'http://localhost:3007/api/chirps',
          data: JSON.stringify({ username: username.val(), message: message.val()}),
          success:200
      });
    });
  });
    $.put("http://localhost:3007/api/chirps", function (data) {});
});
$("document").reload();
