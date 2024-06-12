let op = confirm("Are you want to show some random picture?")
let x = Math.floor((Math.random()*6)+1);
let a = "idk/" + x.toString() + ".jpg";
// alert(a);
var edit_save = document.getElementById("idk");
if (op){
   edit_save.src = a;
}