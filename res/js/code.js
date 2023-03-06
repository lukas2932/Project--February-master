const main = document.getElementById("main");

const boxOne = document.getElementById("boxOne");
const boxTwo = document.getElementById("boxTwo");
const boxThree = document.getElementById("boxThree");
const boxFour = document.getElementById("boxFour");
const boxFive = document.getElementById("boxFive");
const boxSix = document.getElementById("boxSix");
const boxSeven = document.getElementById("boxSeven");
const boxEight = document.getElementById("boxEight");
const boxNine = document.getElementById("boxNine");

const ImageOne = document.getElementById("ImageOne");
const ImageTwo = document.getElementById("ImageTwo");
const ImageThree = document.getElementById("ImageThree");
const ImageFour = document.getElementById("ImageFour");
const ImageFive = document.getElementById("ImageFive");
const ImageSix = document.getElementById("ImageSix");
const ImageSeven = document.getElementById("ImageSeven");
const ImageEight = document.getElementById("ImageEight");
const ImageNine = document.getElementById("ImageNine");

const counter = document.getElementById("counter");
const Timer = document.getElementById("Timer");
const Score = document.getElementById("Score");
const Avarage = document.getElementById("Avarage");

const Play = document.getElementById("Play");
const PlayButton = document.getElementById("PlayButton");

const DefeatLabel = document.getElementById("DefeatLabel");
const TryAgainButton = document.getElementById("TryAgainButton");
const Timerplus = document.getElementById("Timerplus");

let counterPro = 0;
let timerPro = 60;
let TimerPlusPro = 1;

function TimerInterval(){
    let TimerIntervalInterval = setInterval(() => {
        timerPro--;
        Timer.innerHTML = "Timer: " + timerPro + "s";

        if(timerPro <= 0){
            clearInterval(TimerIntervalInterval);
        }
    }, 1000)
}


function MainInterval(){
    ImageOne.style.animation =  "PictureAppearAnimation 0.3s forwards";
    ImageTwo.style.animation =  "PictureAppearAnimation 0.3s forwards";
    ImageThree.style.animation =  "PictureAppearAnimation 0.3s forwards";
    ImageFour.style.animation =  "PictureAppearAnimation 0.3s forwards";
    ImageFive.style.animation =  "PictureAppearAnimation 0.3s forwards";
    ImageSix.style.animation =  "PictureAppearAnimation 0.3s forwards";
    ImageSeven.style.animation =  "PictureAppearAnimation 0.3s forwards";
    ImageEight.style.animation =  "PictureAppearAnimation 0.3s forwards";
    ImageNine.style.animation =  "PictureAppearAnimation 0.3s forwards";


    let MainIntervalInterval = setInterval(() => {
        let randomNum = Math.floor(Math.random() * (9 - 1+ 1) + 1);

        if(randomNum == 1){
            ImageOne.style.display = "block";
        }else if(randomNum != 1){
            ImageOne.style.display = "none";
        }

        if(randomNum == 2){
            ImageTwo.style.display = "block";
        }else if(randomNum != 2){
            ImageTwo.style.display = "none";
        }

        if(randomNum == 3){
            ImageThree.style.display = "block";
        }else if(randomNum != 3){
            ImageThree.style.display = "none";
        }

        if(randomNum == 4){
            ImageFour.style.display = "block";
        }else if(randomNum != 4){
            ImageFour.style.display = "none";
        }

        if(randomNum == 5){
            ImageFive.style.display = "block";
        }else if(randomNum != 5){
            ImageFive.style.display = "none";
        }

        if(randomNum == 6){
            ImageSix.style.display = "block";
        }else if(randomNum != 6){
            ImageSix.style.display = "none";
        }

        if(randomNum == 7){
            ImageSeven.style.display = "block";
        }else if(randomNum != 7){
            ImageSeven.style.display = "none";
        }

        if(randomNum == 8){
            ImageEight.style.display = "block";
        }else if(randomNum != 8){
            ImageEight.style.display = "none";
        }

        if(randomNum == 9){
            ImageNine.style.display = "block";
        }else if(randomNum != 9){
            ImageNine.style.display = "none";
        }

        if(timerPro <= 0){
            clearInterval(MainIntervalInterval);
            Play.style.display = "flex";
            DefeatLabel.style.display = "flex";
            PlayButton.style.fontSize = "50px";
            PlayButton.innerHTML = "";
            ImageOne.style.display = "none";
            ImageTwo.style.display = "none";
            ImageThree.style.display = "none";
            ImageFour.style.display = "none";
            ImageFive.style.display = "none";
            ImageSix.style.display = "none";
            ImageSeven.style.display = "none";
            ImageEight.style.display = "none";
            ImageNine.style.display = "none";
            DefeatLabel.innerHTML = "You ran out of time."
            TryAgainButton.style.display = "flex";
        }

        console.log(randomNum);
    },415)
}

function TimeIncrease(){
    timerPro++;
    Timer.innerHTML = "Time: " + timerPro + "s";
}


PlayButton.onclick = () => {
    Play.style.display = "none";
    MainInterval();
    TimerInterval();
}

ImageOne.onclick = () => {
    ImageOne.style.display = "none";
    counterPro++;
    Score.innerHTML = "Score: " + counterPro;
    TimeIncrease();
    PlusDissapear();
}

ImageTwo.onclick = () => {
    ImageTwo.style.display = "none";
    counterPro++;
    Score.innerHTML = "Score: " + counterPro;
    TimeIncrease();
    PlusDissapear();

}

ImageThree.onclick = () => {
    ImageThree.style.display = "none";
    counterPro++;
    Score.innerHTML = "Score: " + counterPro;
    TimeIncrease();
    PlusDissapear();

}

ImageFour.onclick = () => {
    ImageFour.style.display = "none";
    counterPro++;
    Score.innerHTML = "Score: " + counterPro;
    TimeIncrease();
    PlusDissapear();
}

ImageFive.onclick = () => {
    ImageFive.style.display = "none";
    counterPro++;
    Score.innerHTML = "Score: " + counterPro;
    TimeIncrease();
    PlusDissapear();

}

ImageSix.onclick = () => {
    ImageSix.style.display = "none";
    counterPro++;
    Score.innerHTML = "Score: " + counterPro;
    TimeIncrease();
    PlusDissapear();

}

ImageSeven.onclick = () => {
    ImageSeven.style.display = "none";
    counterPro++;
    Score.innerHTML = "Score: " + counterPro;
    TimeIncrease();
    PlusDissapear();

}

ImageEight.onclick = () => {
    ImageEight.style.display = "none";
    counterPro++;
    Score.innerHTML = "Score: " + counterPro;
    TimeIncrease();
    PlusDissapear();

}

ImageNine.onclick = () => {
    ImageNine.style.display = "none";
    counterPro++;
    Score.innerHTML = "Score: " + counterPro;
    TimeIncrease();
    PlusDissapear();

}



TryAgainButton.onclick = () => {
    Play.style.display = "none";
    MainInterval();
    TimerInterval();
    timerPro += 60;
    Timer.innerHTML = "Time: " + timerPro + "s"

}
