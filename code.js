(function () {
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;
  
    //I'm adding this section so I don't have to keep updating this pen every year :-)
    //remove this if you don't need it
    let today = new Date(),
        dd = String(today.getDate()).padStart(2, "0"),
        mm = String(today.getMonth() + 1).padStart(2, "0"),
        yyyy = today.getFullYear(),
        nextYear = yyyy + 1,
        dayMonth = "09/30/",
        birthday = dayMonth + yyyy;
    
    today = mm + "/" + dd + "/" + yyyy;
    if (today > birthday) {
      birthday = dayMonth + nextYear;
    }
    //end
    

    const countDown = new Date("Nov 18, 2021 18:15:00").getTime(),
        x = setInterval(function() {    
  
          const now = new Date().getTime(),
                distance = countDown - now;
            document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
            document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
            document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
  
          //do something later when date is reached
          if (distance < 0) {
            document.getElementById("headline").innerText = "It's my birthday!";
            document.getElementById("countdown").style.display = "none";
            document.getElementById("content").style.display = "block";
            clearInterval(x);
          }
          if (distance < 25200000) {
            document.getElementById("data").style.display = "block";
            document.getElementById("datatxt").innerText ="Bonne journée"
          }
          if (distance < 18000000) {
            document.getElementById("data").style.display = "block";
            document.getElementById("datatxt").innerText ="Hâte d'être à ce soir"
          }
          if (distance < 10800000) {
            document.getElementById("data").style.display = "block";
            document.getElementById("datatxt").innerText ="48.918686N, 2.362283E"
          }
          if (distance < 3600000) {
            document.getElementById("data").style.display = "block";
            document.getElementById("datatxt").innerText ="rejoins moi ici à la fin du timer : 48.918686N, 2.362283E"
          }
          //seconds
        }, 0)
    }());