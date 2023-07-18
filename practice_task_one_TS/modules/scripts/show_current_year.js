function showCurrentYear() {
    let year = new Date().getFullYear();
    document.getElementById("year").innerHTML += year;
}
export default showCurrentYear;
