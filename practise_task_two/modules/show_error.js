function showError(message) {
    let error = document.querySelector('.error');
    if (error) {
        error.innerHTML = message;
        error.classList.add('error__active');
        setInterval(() => {
            if (error)
                error.classList.remove('error__active');
        }, 5000);
    }
}
export default showError;
