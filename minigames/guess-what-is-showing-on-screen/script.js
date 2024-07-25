function choose_lenght(){
    var len = prompt("Lenght?")
    if(len == ""){
        len = 4;
    }
    random_(len)
    lenght_of_random_text = len
    // return len;
}
function random_color(){
    let r = -1
    let g = -1
    let b = -1
    let r_or_g_or_b = Math.floor((Math.random()*3)+1)
    if(r_or_g_or_b == 1){
         r = (Math.floor((Math.random()*4)+245))
        r = String(r)
        g = "255"
        b = "255"
    }
    if(r_or_g_or_b == 2){
        g = (Math.floor((Math.random()*4)+245))
        g = String(g)
        r = "255"
        b = "255"
    }
    if(r_or_g_or_b == 3){
        b = (Math.floor((Math.random()*4)+245))
        b = String(b)
        g = "255"
        r = "255"
    }
    rgb = "rgb("+r+","+g+","+b+")";
    return rgb;
}
lenght_of_random_text = 4
function random_(lenght_of_random_text){
    var a = document.getElementById("random_")
    var b = ""
    for(var i = 0; i < lenght_of_random_text; i++){
        let x = Math.floor((Math.random() * 26) + 65);
        // alert(x)
        b += String.fromCharCode(x) + " ";
    }
    // alert(b)
    a.innerHTML = b;
    y = random_color()
    console.log(typeof(y))
    // y = "rgb(0,0,0)"
    a.style.color = y;
    answer = b;
    return b;
}
var answer = random_(lenght_of_random_text)
// alert(answer)
function submit(){
    var a = confirm("Are you sure?")
    // var a = true
    if(a){
        var b = document.getElementById("answer").value.toUpperCase()
        var c = ""
        for(var i = 0; i < answer.length; i++){
            if(answer[i] != " "){
                c += answer[i];
            }
        }
        // alert(c)
        if(c==b){
            alert("YOU WINN!😊\nAnswer: " + c + "\nYour Answer: " + b)
            // location.reload();
            document.getElementById("answer").value = ""
            var rop = document.getElementById("score")
            var top = parseInt(rop.innerHTML)
            console.log(top)
            top += parseInt(lenght_of_random_text)
            console.log(top)
            rop.innerHTML = top
            reload_()
        }
        else{
            alert("Wrong😁.\nAnswer: " + c +"\nYou Lose 😭.\nYour answer: " + b)
            // location.reload();
            document.getElementById("answer").value = ""
            var rop = document.getElementById("score")
            var top = parseInt(rop.innerHTML)
            top -= parseInt(lenght_of_random_text)
            rop.innerHTML = top
            reload_()
        }
    }
}
function cheated(){
    // alert("You cheated! 😠")
    // location.reload()
}
function reload_(){
    // lenght_of_random_text = choose_lenght()
    // var a = confirm("Are you sure? !!Reload!!")
    // if(a){
    //     random_(lenght_of_random_text)
    // }
    random_(lenght_of_random_text)
}
var password = ""
function view_answer(){
    if(password == ""){
        password = prompt("New Password:")
        return 0;
    }
    if(password != ""){
        check_password = prompt("Password:")
        if(check_password == password){
            var c = ""
            for(var i = 0; i < answer.length; i++){
                if(answer[i] != " "){
                    c += answer[i];
                }
            }
            alert(c);
        }
        else{
            alert("Wrong passowrd")
        }
    }
    // var c = ""
    // for(var i = 0; i < answer.length; i++){
    //     if(answer[i] != " "){
    //         c += answer[i];
    //     }
    // }
    // alert(c);
    // reload_()
}

// function c(){
//     var d = document.getElementById("fname")
//     var a = d.value
//     alert(a)
// }