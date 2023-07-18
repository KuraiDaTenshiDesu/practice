function closePopups(event) {
    let videos = document.querySelectorAll('.cases_video');
    let target = event.target;
    let popup = document.querySelector('.popup');
    if (target.classList.contains('cases_video')) {
        videos.forEach((video) => {
            video.classList.add('cases_video__hidden');
        });
    }
    if (target.classList.contains('popup')) {
        if (popup !== null) {
            popup.classList.add('popup__hidden');
        }
    }
}
export default closePopups;
