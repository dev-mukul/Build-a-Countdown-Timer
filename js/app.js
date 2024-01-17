const endDate = "20 January 2024 10:00 PM"

document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input")

// const clock = () => {

// }

function clock() {
    const end = new Date(endDate)
    const now = new Date()
    const diff = (end - now) / 1000;
    if(diff < 0) return;
    //convert into days;
    inputs[0].value = Math.floor(diff / 3600 / 24);
    inputs[1].value = Math.floor(diff / 3600) % 24;
    inputs[2].value = Math.floor(diff / 60) % 60;
    inputs[3].value = Math.floor(diff)% 60
   
}

clock()

/**
 * 1 days = 24 hrs
 * 1 hrs = 60 mins
 * 60 min = 3600 sec
 */


setInterval(
    ()=> {
        clock()
    },
)