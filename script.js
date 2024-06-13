// let op = confirm("Are you want to show some random picture?")
let x = Math.floor((Math.random()*8));
let a = "idk/" + x.toString() + ".png";
// alert(a);
var edit_save = document.getElementById("idk");
// if (op){
//    edit_save.src = a;
// }
edit_save.src = a;