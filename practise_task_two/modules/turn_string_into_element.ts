function turnStringIntoElement(string: string): HTMLElement {
    let container = document.createElement('div');
    container.innerHTML = string;

    return <HTMLElement> container.firstElementChild;
}

export default turnStringIntoElement;