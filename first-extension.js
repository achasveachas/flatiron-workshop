// intrval is in milliseconds, so 1000 is a second, times 6 is a minute, and times 10 for 10 minutes
const interval = 10 * 60 * 1000

function reminder() {
    alert("Get off Twitter!")
}

setInterval(reminder, interval)