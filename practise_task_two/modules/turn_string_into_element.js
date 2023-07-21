function turnStringIntoElement(string) {
    let container = document.createElement('div');
    container.innerHTML = string;
    return container.firstElementChild;
}
export default turnStringIntoElement;
