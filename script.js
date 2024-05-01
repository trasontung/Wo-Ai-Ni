// Bấm nút sẽ hiển thị phần container
var lyric1 = document.querySelector(".dad");
document.getElementById("showButton").addEventListener("click", function () {
    var mainContainer = document.querySelector('.container')
    var audio = document.getElementById('myAudio');
    mainContainer.style.display = "block";
    this.style.display = "none"
    audio.play()
    typing()
    setInterval(letter, 6000)
    setTimeout(() => {
        lyric1.style.display = "block"
    }, 12000)
})



// Load lại web là nhạc tự động bật
window.addEventListener('load', function () {
    var audio = document.getElementById('myAudio');
    audio.play();
});


// text typing 
var textmessage_1 = document.getElementById("text-message_1")
var textmessage_2 = document.getElementById("text-message_2")
var message_string = "Được làm bằng trọn cả tấm lòng của Tùn";
var message_string_2 = "Đặc biệt gửi đến Embe dợ của chồng  ";

let messLength = 0;
let messIndex = 0;
let charIndex = 0;

function typing() {
    var typingInterval = setInterval(function () {
        if (charIndex < message_string.length) {
            let currentChar = message_string.substring(0, charIndex + 1);
            textmessage_1.textContent = currentChar;
            console.log(currentChar)
            charIndex++;
        } else {
            charIndex = 0;
            clearInterval(typingInterval)

            var typingInterval2 = setInterval(function () {
                if (charIndex < message_string_2.length) {
                    let currentChar2 = message_string_2.substring(0, charIndex + 1);
                    textmessage_2.textContent = currentChar2;
                    charIndex++;
                } else {
                    clearInterval(typingInterval2)
                }

            }, 100)
        }
    }, 100)
}

// mưa trái tim
function heart() {
    const container = document.querySelector('.container')

    const create = document.createElement('div');
    create.classList.add('heart')

    create.innerHTML = '❤';
    container.appendChild(create)
    create.style.left = Math.random() * 100 + 'vw';
    create.style.cursor = "pointer";
    create.style.animationDuration = 6 + 's';
    setTimeout(() => {
        create.remove()
    }, 5000)
}
heart()
setInterval(heart, 1500)


var indexMsg = 0

const message = [
    "Cảm ơn em vì đã đến với anh",
    "Em đợi một lát để lấy lá thư mới",
    "Cảm ơn em vì đã đợi tới đây",
    "Anh muốn nói là",
    "Chiều thứ 6 em rảnh không đi chơi với anh ?",
    "Đồng ý thì nhắn tin cho anh",
    "Yêu em",
]


var animationPause = true

const create = document.querySelector('.letter')
create.style.display = "none"
const content = document.querySelector('.content-letter')


create.addEventListener("click", function () {
    if (document.querySelector('.letter').classList.contains('letter--open')) {
        console.log("close");
        document.querySelector('.letter').classList.remove('letter--open');
        document.querySelector('.letter').classList.add('letter--close');
    } else {
        content.innerHTML = `${message[indexMsg].toString()}`
        document.querySelector('.letter').classList.remove('letter--close');
        document.querySelector('.letter').classList.add('letter--open');
    }


    if (animationPause) {
        create.style.animationPlayState = "paused";
        animationPause = false
    } else {
        create.style.animationPlayState = "running";
        animationPause = true
    }
})

function letter() {

    create.style.display = "block"

    var random = Math.random()

    create.style.top = `${random * 90 < 35 ? 35 : random * 90}` + 'vh';
    create.style.left = Math.random() * 90 + 'vw';
    create.style.cursor = "pointer";

    create.style.animationDuration = 6 + 's';


    setTimeout(() => {
        if (indexMsg >= 6) {

        } else {
            ++indexMsg;
        }
        create.style.animationPlayState = "running";
        animationPause = true
        document.querySelector('.letter').classList.remove('letter--open');
        document.querySelector('.letter').classList.add('letter--close');
    }, 5300);




}






