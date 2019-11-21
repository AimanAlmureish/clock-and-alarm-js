audio = new Audio();
audio.src = "./audio/HappyTreeFriends.mp3";
audio.loop = true;


let timeLabel = document.querySelector("label");
let list = document.querySelector(".list ul");
let alarmList = document.querySelector(".alarm ul");
let hours = document.querySelector("#hours");
let minutes = document.querySelector("#minutes");
let seconds = document.querySelector("#seconds");


let buttonClick = document.querySelector("#clickMe").addEventListener("click", function() {

    let listChild = document.createElement("li");
    listChild.innerHTML = timeLabel.innerHTML;
    list.appendChild(listChild);
});


let buttonAlarm = document.querySelector("#addAlarm").addEventListener("click", addAlarmFunc);

let listChildAlarm = ""

function addAlarmFunc() {

    listChildAlarm = document.createElement("li");
    listChildAlarm.innerHTML = hours.value + " : " + minutes.value + " : " + seconds.value;
    alarmList.appendChild(listChildAlarm);
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