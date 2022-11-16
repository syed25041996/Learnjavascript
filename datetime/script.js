// const setTimeForDate = () => {
//     myTime = setTimeout(setDate, 1000)
//  }

const setDate = () => {
    let date = new Date();
    
    document.querySelector('.current-date').innerHTML =  date;
    document.querySelector('.america-date').innerHTML =  date.toLocaleString('en-US', { timeZone: 'America/New_York' });
    setTimeout(setDate, 1000);
}

setDate();



