
$("#grab-location").click(function(){
    navigator.geolocation.getCurrentPosition(function(position) {
      console.log(position.coords.latitude, position.coords.longitude);
    });

    $.post("/location",
    {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
    }
  });
