
// var changelangugua = document.getElementById("langugua");
// var changelangugeng = document.getElementById("langugeng");

// var changeshapkaua = document.getElementById("langugua");
// var changeshapkaeng = document.getElementById("langugeng");



// changelangugeng.addEventListener("click", function() {

//     changelangugua.classList.toggle("hide");
//     changelangugeng.classList.toggle("hide");

// });

// changelangugua.addEventListener("click", function() {

//     changelangugua.classList.toggle("hide");
//     changelangugeng.classList.toggle("hide");

// });



// var changetemalightua = document.getElementById("lightua")
// var changetemalighteng = document.getElementById("lighteng")
// var changetemadarkua = document.getElementById("darkua")
// var changetemadarkeng = document.getElementById("darkeng")



// changetemalightua.addEventListener("click", function() {
//     changetemalightua.classList.toggle("hide");
//     changetemadarkua.classList.toggle("hide");
//     changetemalighteng.classList.toggle("hide");
//     changetemadarkeng.classList.toggle("hide");
// });

// changetemadarkua.addEventListener("click", function() {
//     changetemalighteng.classList.toggle("hide");
//     changetemadarkeng.classList.toggle("hide");
//     changetemalighteng.classList.toggle("hide");
//     changetemadarkeng.classList.toggle("hide");
// });


// changetemalighteng.addEventListener("click", function() {
//     changetemalighteng.classList.toggle("hide");
//     changetemadarkeng.classList.toggle("hide");
//     changetemalightua.classList.toggle("hide");
//     changetemadarkua.classList.toggle("hide");
// });

// changetemadarkeng.addEventListener("click", function() {
//     changetemalighteng.classList.toggle("hide");
//     changetemadarkeng.classList.toggle("hide");
//     changetemalightua.classList.toggle("hide");
//     changetemadarkua.classList.toggle("hide");
// });


































document.addEventListener("DOMContentLoaded", function() {
    console.log("fff")
    const changelangugua = document.getElementsByClassName("langugua");
    const changelangugeng = document.getElementsByClassName("langugeng");
    const changeshapkaua = document.getElementsByClassName("shapkaua");
    const changeshapkaeng = document.getElementsByClassName("shapkaeng");

    changelangugua.addEventListener("clik", function(){
        changeshapkaua.classList.toggle("hide");
        changeshapkaeng.classList.toggle("hide");

        localStorage.setItem("changeshapkauacganed", changeshapkaua.classList.contains("hide"));
        localStorage.setItem("changeshapkaengcganed", changeshapkaeng.classList.contains("hide"));

       
    });


changelangugeng.addEventListener("click", function() {
    changeshapkaua.classList.toggle("hide");
    changeshapkaeng.classList.toggle("hide");

    localStorage.setItem("changeshapkauacganed", changeshapkaua.classList.contains("hide"));
    localStorage.setItem("changeshapkaengcganed", changeshapkaeng.classList.contains("hide"));
});

    if (localStorage.getItem("changeshapkauacganed") === "true") {
        changeshapkaua.classList.add("hide");
        changeshapkaeng.classList.remove("hide");
        console.log("changeshapkauacganed")
    }

    if (localStorage.getItem("changeshapkaengcganed") === "true") {
        changeshapkaua.classList.add("hide");
        changeshapkaeng.classList.remove("hide");
        console.log("changeshapkaengcganed")
    }
});
