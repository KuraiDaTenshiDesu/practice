function showVideo(event: MouseEvent): void {
    let target = <HTMLElement> event.target;
    
    if (target.classList.contains('cases_case_preview')) {
        let videos: NodeListOf<HTMLElement> = document.querySelectorAll('.cases_video');
    
        if (target.dataset.video !== undefined) {
            let video_index: number = parseInt(target.dataset.video);
            videos[video_index].classList.remove('cases_video__hidden');
        }
    }

}

export default showVideo;