/**
 * Replace comma with a dot on numbers.
 * 
 * Returns the number of the String passed, even if the initial parameter uses a comma.
 * 
 * @param {String} number  Required. String of the desired number
 * @param {Function} [functionToExecute] Optional. Function to execute with the new value
 * 
 * @link https://github.com/MigW03/numbers-allow-comma
 */


module.exports.fixNumber = function fixNumber(number, functionToExecute) { // Function to replace comma with dot
    let initialStr = number.toString()

    let newStr = initialStr.replace(',', '.')
    formatedNum = Number(newStr)
    
    if (functionToExecute){
        return (
            functionToExecute(formatedNum),
            formatedNum
        )
    }
    return formatedNum
}