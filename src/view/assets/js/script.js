
const body = document.body;
const themeInput = document.getElementById("themeInput");
const darkTheme = localStorage.getItem("darkTheme");

// change theme on load
if(darkTheme==="true"){
    body.classList.add("dark");
    themeInput.checked=true;
}else{
    body.classList.remove("dark");
    themeInput.checked=false;
}

// change theme on click
function themeSwitcher(e){
    if(themeInput.checked){
        body.classList.add("dark");
        localStorage.setItem("darkTheme", true);
    }else{
        body.classList.remove("dark");
        localStorage.setItem("darkTheme", false);
    }
    console.log(darkTheme);
}

const progressBar = document.getElementById("progress-bar");
const counter = document.getElementById("counter");

let time = 60;

// time counter
setInterval(()=>{
    if(time <= 0){
        time=60;
    }
    time-=1;
    counter.innerText = time;
    progressBar.style.background = `conic-gradient(#3dc6c1 ${time/60*100}%, #ddd ${100 - time/60*100}%)`;
},[1000])

