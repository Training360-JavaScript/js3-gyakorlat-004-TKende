function checkVisa(text) {
    const pattern = /^4\d{15}$/;
    return text.match(pattern) ? true : false;
}

export default checkVisa;