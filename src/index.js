module.exports = function toReadable (n) {
        const numbersToTwentyArr = ' one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen'.split(' ') //
        const dozensArr = 'null null twenty thirty forty fifty sixty seventy eighty ninety'.split(' ')
        return (n=== 0)? 'zero':
               (n < 20) ?
               numbersToTwentyArr[n].trim() :
               (n < 100) ?
               `${dozensArr[('' + n)[0]]} ${numbersToTwentyArr[('' + n)[1]]}`.trim():
               (n < 1000 && +('' + n).slice(1) < 20) ?
               `${numbersToTwentyArr[('' + n)[0]]} hundred ${numbersToTwentyArr[+('' + n).slice(1)]}`.trim():
               `${numbersToTwentyArr[('' + n)[0]]} hundred ${dozensArr[('' + n)[1]]} ${numbersToTwentyArr[('' + n)[2]]}`.trim()
}
