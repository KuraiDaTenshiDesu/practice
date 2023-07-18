function closePopups(event) {
    let videos = document.querySelectorAll('.cases_video');
    if (event.target.classList.contains('cases_video')) {
        videos.forEach((video) => {
            video.classList.add('cases_video__hidden');
        });
    }
    if (event.target.classList.contains('popup')) {
        document.querySelector('.popup').classList.add('popup__hidden');
    }
}
export default closePopups;
