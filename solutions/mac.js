function checkMac(text) {
    const pattern = /^([0-9A-Fa-f]{2}[:-]){5}[0-9A-Fa-f]{2}$/

    return text.match(pattern) ? true : false;
}

export default checkMac;