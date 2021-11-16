import checkVisa from "./visa.js";
import checkIP from "./ip.js";
import checkMac from "./mac.js";

const checker = {
    rules: {
        checkIP,
        checkVisa,
        checkMac
    },
    validate(string, type) {
        if (type === 'ip') {
            return this.rules.checkIP(string)
        }
        if (type === 'visa') {
            return this.rules.checkVisa(string)
        }
        if (type === 'mac') {
            return this.rules.checkMac(string)
        }
    }
}

export default checker;