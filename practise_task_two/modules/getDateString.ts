function getDateString(): string {
    let date = new Date();

    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let year = date.getFullYear() % 100;

    let hours: number | string = date.getHours();
    let minutes: number | string = date.getMinutes();

    if (hours < 10) {
        hours = `0${hours}`;
    }

    if (minutes < 10) {
        minutes = `0${minutes}`;
    }

    let stringified_date = `${hours}:${minutes} | ${date.getDate()}.${months[date.getMonth()]}.${year}`;

    return stringified_date;
}

export default getDateString;