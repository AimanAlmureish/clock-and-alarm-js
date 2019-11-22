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
tempList.innerHTML = "Your time will appear here"
list.appendChild(tempList)

let tempList2 = document.createElement("li");
tempList2.innerHTML = "Your time will appear here"
alarmList.appendChild(tempList2)




let buttonClick = document.querySelector("#clickMe").addEventListener("click", function() {

    let listChild = document.createElement("li");
    listChild.innerHTML = timeLabel.innerHTML;
    list.appendChild(listChild);
    tempList.style.display = "none"
});


let buttonAlarm = document.querySelector("#addAlarm").addEventListener("click", addAlarmFunc);

let listChildAlarm = ""

function addAlarmFunc() {

    listChildAlarm = document.createElement("li");
    listChildAlarm.innerHTML = hours.value + " : " + minutes.value + " : " + seconds.value;
    alarmList.appendChild(listChildAlarm);
    tempList2.style.display = "none"
    if (hours.value.length == 0 && minutes.value.length == 0 && seconds.value.length == 0) {
        tempList2.innerHTML = "Please specify time"
    } else {
        listChildAlarm = document.createElement("li");
        listChildAlarm.innerHTML = hours.value + " : " + minutes.value + " : " + seconds.value;
        alarmList.appendChild(listChildAlarm);
        tempList2.style.display = "none"
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
    console.log(arr);
    console.log(timeLabel.innerHTML);
    var refreshArray = setInterval(function() {
            arr = [];
        },
        1000);
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        if (element === listChildAlarm.innerHTML) {
            alert(audio.play());
            audio.pause();
            audio.currentTime = 0;
            arr = []
        } else {
            console.log(false);
        }

    }


}, 1000);