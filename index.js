/* eslint-disable no-undef */
function divide(a, b) {
    if(b === 0) {
        throw new Error( 'cannot divide by 0');
    }
    return a / b ;
}





module.exports = divide;