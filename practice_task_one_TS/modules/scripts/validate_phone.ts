function validatePhone() {
    let matrix = "+7(___) ___-__-__";
    let elem = document.getElementById('phone');

    let val = (elem as HTMLInputElement)!.value.replace(/\D/g, "");
    let def = matrix.replace(/\D/g, "");

    let i = 0;

    if (def.length >= val.length) val = def;

    function checkValid (a: string): string {
        if (/[_\d]/.test(a) && i < val.length) {
            return val.charAt(i++);
        } else if (i >= val.length) {
            return '';
        } else {
            return a;
        }
    }

    (elem as HTMLInputElement)!.value = matrix.replace(/./g, checkValid);
}

export default validatePhone;