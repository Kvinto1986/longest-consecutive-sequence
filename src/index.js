module.exports = function longestConsecutiveLength(array) {
    let result = 0;
    let best = 1;
    let min = 0;
    array.sort = (a, b) =>
        a - b;

    for (let i = 0; i < array.length; i++) {
        min = array[i]


        if (array.length < 1) {
            break
        }
        if (array.length === 1) {
            result = 1
            break
        }
        if (array[i + 1] === min + 1) {
            best++

        }

        else if (array[i + 1] > min + 1) {
            best = 1;

        }
        if (best > result) {
            result = best
        }

    }
    return result
}








