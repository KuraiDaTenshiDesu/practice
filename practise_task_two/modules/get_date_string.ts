function getDateString(): string {
    let date = new Date()

    let minutes: string | number = date.getMinutes();
    let hours: string | number = date.getHours();
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let year = `${date.getFullYear() % 100}`;

    if (minutes < 10) {
        minutes = `0${minutes}`
    }
    
    if (hours < 10) {
        hours = `0${hours}`
    }

    return `${hours}:${minutes} | ${date.getDate()}.${months[date.getMonth()]}.${year}`;
}

export default getDateString;