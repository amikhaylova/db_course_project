export const normalizeDob = (val, prevVal) => {
    // Prevent non-digit characters being entered
    if (isNaN(parseInt(val[val.length - 1], 10))) {
        return val.slice(0, -1);
    }

    // When user is deleting, this prevents immediate re-addition of '/' when it's deleted
    if (prevVal && (prevVal.length >= val.length)) {
        return val;
    }

    // Add / at appropriate sections of the input
    if (val.length === 2 || val.length === 5) {
        val += '.';
    }

    // Prevent characters being entered after Dob is full
    if (val.length >= 10) {
        return val.slice(0, 10);
    }

    return val;
}