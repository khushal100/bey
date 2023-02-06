<!DOCTYPE html>
<html>
<head>
  <title>Beyblade Game</title>
  <style>
    #game-container {
      width: 500px;
      height: 500px;
      background-color: blue;
      position: relative;
    }
    .beyblade {
      position: absolute;
      width: 50px;
      height: 50px;
      background-image: url(beyblade1.png);
      background-size: cover;
    }
  </style>
</head>
<body>
  <div id="game-container">
    <div id="beyblade1" class="beyblade"></div>
    <div id="beyblade2" class="beyblade"></div>
  </div>

  <script>
    const beyblade1 = document.getElementById("beyblade1");
    const beyblade2 = document.getElementById("beyblade2");
    
    document.addEventListener("keydown", function(event) {
      switch (event.keyCode) {
        case 37: // Left arrow
          beyblade1.style.left = (beyblade1.offsetLeft - 10) + "px";
          break;
        case 39: // Right arrow
          beyblade1.style.left = (beyblade1.offsetLeft + 10) + "px";
          break;
        case 38: // Up arrow
          beyblade1.style.top = (beyblade1.offsetTop - 10) + "px";
          break;
        case 40: // Down arrow
          beyblade1.style.top = (beyblade1.offsetTop + 10) + "px";
          break;
      }
    });
  </script>
</body>
</html>
