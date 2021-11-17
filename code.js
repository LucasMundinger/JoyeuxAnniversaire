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
    
    function b64DecodeUnicode(str) {
        // Going backwards: from bytestream, to percent-encoding, to original string.
        return decodeURIComponent(atob(str).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
    }

    const countDown = new Date("Nov 18, 2021 18:15:00").getTime(),
        x = setInterval(function() {    
  
          const now = new Date().getTime(),
                distance = countDown - now;
            document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
            document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
            document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
  
          //do something later when date is reached
          if (distance < 0) {
            document.getElementById("countdown").style.display = "none";
            document.getElementById("firstline").style.display = "none";
            clearInterval(x);
          }
          else if (distance < 25200000){
            document.getElementById("countdown").style.display = "block";
            document.getElementById("firstline").style.display = "block"; 
          }

          if (distance < 3600000) {
            document.getElementById("data").style.display = "block";
            document.getElementById("datatxt").innerText =b64DecodeUnicode("cmVqb2lucyBtb2kgaWNpIMOgIGxhIGZpbiBkdSB0aW1lciA6IDQ4LjkxODY4Nk4sIDIuMzYyMjgzRQ==")
          }
          else if (distance < 10800000) {
            document.getElementById("data").style.display = "block";
            document.getElementById("datatxt").innerText =b64DecodeUnicode("IjQ4LjkxODY4Nk4sIDIuMzYyMjgzRSI=")
          }
          else if (distance < 18000000) {
            document.getElementById("data").style.display = "block";
            document.getElementById("datatxt").innerText =b64DecodeUnicode("SMOidGUgZCfDqnRyZSDDoCBjZSBzb2ly")
          }
          else if (distance < 25200000) {
            document.getElementById("data").style.display = "block";
            document.getElementById("datatxt").innerText = b64DecodeUnicode("Qm9ubmUgam91cm7DqWU=")
          }
          
          
          
          //seconds
        }, 0)
    }());