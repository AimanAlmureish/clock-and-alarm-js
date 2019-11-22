audio = new Audio();
audio.src = "./audio/HappyTreeFriends.mp3";
audio.loop = true;


let timeLabel = document.querySelector("label");
let list = document.querySelector(".list ul");
let alarmList = document.querySelector(".alarm ul");
let hours = document.querySelector("#hours");
let minutes = document.querySelector("#minutes");
let seconds = document.querySelector("#seconds");

let tempList = document.createElement("li");
tempList.innerHTML = "Your stop watch time!"
list.appendChild(tempList)

let tempList2 = document.createElement("li");
tempList2.innerHTML = "Your alarms here!"
alarmList.appendChild(tempList2)


let warning = document.createElement("li")
warning.innerHTML = "You have to specify time!"
alarmList.appendChild(warning)
warning.style.display = "none"

warning.style.color = "rgb(218, 96, 75)";
tempList2.style.color = "rgb(218, 96, 75)";
tempList.style.color = "rgb(218, 96, 75)";





let buttonClick = document.querySelector("#clickMe").addEventListener("click", function() {

    let listChild = document.createElement("li");
    listChild.innerHTML = timeLabel.innerHTML;
    list.appendChild(listChild);
    tempList.style.display = "none"
});


let buttonAlarm = document.querySelector("#addAlarm").addEventListener("click", addAlarmFunc);

let listChildAlarm = ""

function addAlarmFunc() {


    if (hours.value.length == 0 && minutes.value.length == 0 && seconds.value.length == 0) {

        warning.style.display = "block"

    } else {
        listChildAlarm = document.createElement("li");
        listChildAlarm.innerHTML = hours.value + " : " + minutes.value + " : " + seconds.value;
        alarmList.appendChild(listChildAlarm);
        tempList2.style.display = "none"
        warning.style.display = "none"
    }

};
console.log(listChildAlarm);
let arr = [];

var refresh = setInterval(function() {
    var date = new Date();
    timeLabel.innerHTML = date.getHours();
    // timeLabel.innerHTML = "a";
    timeLabel.innerHTML += (" : " + date.getMinutes());
    timeLabel.innerHTML += (" : " + date.getSeconds());
    // arr.push(date.toTimeString());
    arr.push(timeLabel.innerHTML);

    var refreshArray = setInterval(function() {
            arr = [];
        },
        1000);
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        if (element === listChildAlarm.innerHTML) {
            confirm(audio.play());
            audio.pause();
            audio.currentTime = 0;
            arr = []
        } else {}

    }


}, 1000);