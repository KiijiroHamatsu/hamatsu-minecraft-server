setTimeout(() => {
    location.reload()
}, 1000);
function readTextFile() {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", "status.txt", true);
    rawFile.onreadystatechange = function() {
      if (rawFile.readyState === 4) {
        var allText = rawFile.responseText;
        document.getElementById("status").innerHTML = allText;
      }
    }
    rawFile.send();
  }
readTextFile()
/* var rawFile = new XMLHttpRequest();
rawFile.open("GET", "status.txt", true);
rawFile.onreadystatechange = function() {
  if (rawFile.readyState === 4) {
    var allText = rawFile.responseText;
    document.getElementById("status").innerHTML = allText;
  }
}*/