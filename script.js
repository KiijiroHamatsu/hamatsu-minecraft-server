function start_web(){
    // let op = confirm("Are you want to show some random picture?")
    let x = Math.floor((Math.random()*7)+1);
    let a = "idk/" + x.toString() + ".png";
    // alert(a);
    var edit_save = document.getElementById("idk");
    // if (op){
    //    edit_save.src = a;
    // }
    edit_save.src = a;
}

function RandomPicture() {
    var remember = document.getElementById("RandomPicture");
    if (remember.checked == true) {
      document.getElementById("idk").src = "idk/0.png"
      document.getElementById("title_of_next_function").innerHTML = "Turn on below picture: "
    } else {
        document.getElementById("title_of_next_function").innerHTML = "Turn off below picture: "
        start_web()
    }
}

start_web()