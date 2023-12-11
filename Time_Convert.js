//Time Convert

// A string minutes is given. Return a string with the converted time in the format hh:mm.

// Example:

// 1,000 => 16:40

function timeConvert(minutes) {
    let quotient = Math.floor(minutes / 60);
    if (quotient < 10) {
        quotient = `0${quotient}`
    }
    let remainder = minutes % 60;
    if (remainder < 10) {
        remainder = `0${remainder}`;
    }
    return `${quotient}:${remainder}`;

    // return `${Math.floor(minutes / 60)}:${minutes % 60}`;
}