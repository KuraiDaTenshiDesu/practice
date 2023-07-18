function showCurrentYear() {
    let year = new Date().getFullYear();
    let year_container = document.getElementById("year");
    if (year_container !== null) {
        year_container.innerHTML += year;
    }
}
export default showCurrentYear;
