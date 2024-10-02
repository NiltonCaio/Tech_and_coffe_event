AOS.init();

const dateEvent = new Date("Dec 12, 2024 19:00:00");
const timeStampOfEvent = dateEvent.getTime();

const countTheHours = setInterval(function() {
    const now = new Date();
    const timeStampCurrent = now.getTime();

    const distanceToEvent = timeStampOfEvent - timeStampCurrent;

    const DaysInMs = 1000 * 60 * 60 * 24;
    const hoursInMs = 1000 * 60 * 60;
    const minutesInMs = 1000 * 60;

    const daysToEvent = Math.floor(distanceToEvent / DaysInMs);
    const hoursToEvent = Math.floor((distanceToEvent % DaysInMs) / hoursInMs);
    const minutesToEvent = Math.floor((distanceToEvent % hoursInMs) / minutesInMs);
    const secondsToEvent = Math.floor((distanceToEvent % minutesInMs) / 1000);

    document.getElementById('counter').innerHTML = `${daysToEvent}d ${hoursToEvent}h ${minutesToEvent}m ${secondsToEvent}s`;

    if (distanceToEvent < 0) {
        clearInterval(countTheHours);
        document.getElementById('counter').innerHTML = 'Expired!'
    }
}, 1000);