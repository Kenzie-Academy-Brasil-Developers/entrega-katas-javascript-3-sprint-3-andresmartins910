const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

// function - show results
function showResults(x) {
    const getList = document.getElementById('katas') // select element 'katas'
    getList.appendChild(x) // append item to getList
}
// end



// function - title
function showTitle(titleText) {
    const title = document.createElement('h2')
    title.innerText = titleText
    
    const section = document.getElementById('katas')
    section.appendChild(title)
}
// end



// 1 to 25
function kata1() {
    let numArray = []
    for (let i = 1; i <= 25; i++) {
        numArray.push(i)
    }

    const kata1 = document.createElement('p')
    kata1.innerText = numArray

    showResults(kata1)

    return numArray
}

showTitle('Kata 1')
kata1()
// 1 to 25 end



// 25 to 1
function kata2() {
    let numArray = []
    for (let i = 25; i >= 1; i--) {
        numArray.push(i)
    }

    const kata2 = document.createElement('p')
    kata2.innerText = numArray

    showResults(kata2)

    return numArray
}

showTitle('Kata 2')
kata2()
// 25 to 1 end



// -1 to -25
function kata3() {
    let numArray = []
    for (let i = -1; i >= -25; i--) {
        numArray.push(i)
    }

    const kata3 = document.createElement('p')
    kata3.innerText = numArray
    
    showResults(kata3)

    return numArray
}

showTitle('Kata 3')
kata3()
//  -1 to -25 end



// -25 to -1
function kata4() {
    let numArray = []
    for (let i = -25; i <= -1; i++) {
        numArray.push(i)
    }

    const kata4 = document.createElement('p')
    kata4.innerText = numArray

    showResults(kata4)

    return numArray
}

showTitle('Kata 4')
kata4()
// -25 to -1 end



// 25 to -25 odd numbers
function kata5() {
    let numArray = []
    for (let i = 25; i >= -25; i--) {
        if (i % 2 !== 0) {
            numArray.push(i) 
        }
    }

    const kata5 = document.createElement('p')
    kata5.innerText = numArray

    showResults(kata5)

    return numArray
}

showTitle('Kata 5')
kata5()
// 25 to -25 odd numbers end



// divisible by 3
function kata6() {
    let numArray = []
    for (let i = 3; i <= 100; i++) {
        if (i % 3 === 0) {
            numArray.push(i) 
        }
    }

    const kata6 = document.createElement('p')
    kata6.innerText = numArray

    showResults(kata6)

    return numArray
}

showTitle('Kata 6')
kata6()
// divisible by 3 end



// divisible by 7
function kata7() {
    let numArray = []
    for (let i = 7; i <= 100; i++) {
        if (i % 7 === 0) {
            numArray.push(i) 
        }
    }

    const kata7 = document.createElement('p')
    kata7.innerText = numArray

    showResults(kata7)

    return numArray
}

showTitle('Kata 7')
kata7()
// divisible by 7 end



// divisible by 3 and 7 regressively 
function kata8() {
    let numArray = []
    for (let i = 100; i >= 3; i--) {
        if (i % 3 === 0 || i % 7 === 0) {
            numArray.push(i)
        }
    }

    const kata8 = document.createElement('p')
    kata8.innerText = numArray

    showResults(kata8)

    return numArray
}

showTitle('Kata 8')
kata8()
// divisible by 3 and 7 regressively end 



// odd numbers divisible by 5
function kata9() {
    let numArray = []
    for (let i = 5; i <= 100; i++) {
        if (i % 5 === 0 && i % 2 !== 0) {
            numArray.push(i)
        }
    }

    const kata9 = document.createElement('p')
    kata9.innerText = numArray

    showResults(kata9)

    return numArray
}

showTitle('Kata 9')
kata9()
// odd numbers divisible by 5 end



// show sampleArray elements
function kata10() {
    const sampleArrayDupe = sampleArray
    
    const kata10 = document.createElement('p')
    kata10.innerText = sampleArrayDupe

    showResults(kata10)

    return sampleArrayDupe
}

showTitle('Kata 10')
kata10()
// show sampleArray elements end



// show even sampleArray elements
function kata11() {
    const sampleArrayDupe = sampleArray
    const sampleArrayEven = []

    for (let i = 0; i < sampleArrayDupe.length; i++) {
        if (sampleArrayDupe[i] % 2 === 0) {
            sampleArrayEven.push(sampleArrayDupe[i])
        }
    }

    const kata11 = document.createElement('p')
    kata11.innerText = sampleArrayEven

    showResults(kata11)

    return sampleArrayEven
}

showTitle('Kata 11')
kata11()
// show even sampleArray elements end



// show odd sampleArray elements
function kata12() {
    const sampleArrayDupe = sampleArray
    const sampleArrayOdd = []

    for (let i = 0; i < sampleArrayDupe.length; i++) {
        if (sampleArrayDupe[i] % 2 !== 0) {
            sampleArrayOdd.push(sampleArrayDupe[i])
        }
    }

    const kata12 = document.createElement('p')
    kata12.innerText = sampleArrayOdd

    showResults(kata12)

    return sampleArrayOdd
}

showTitle('Kata 12')
kata12()
// show odd sampleArray elements end



// divisible by 8
function kata13() {
    const sampleArrayDupe = sampleArray
    const sampleArrayDivisibleByEigth = []

    for (let i = 0; i < sampleArrayDupe.length; i++) {
        if (sampleArrayDupe[i] % 8 === 0) {
            sampleArrayDivisibleByEigth.push(sampleArrayDupe[i])
        }
    }

    const kata13 = document.createElement('p')
    kata13.innerText = sampleArrayDivisibleByEigth

    showResults(kata13)

    return sampleArrayDivisibleByEigth
}

showTitle('Kata 13')
kata13()
// divisible by 8 end



// sampleArray squared
function kata14() {
    const sampleArrayDupe = sampleArray
    const sampleArraySquared = []

    for (let i = 0; i < sampleArrayDupe.length; i++) {
        sampleArraySquared.push(Math.pow(sampleArrayDupe[i], 2))
    }

    const kata14 = document.createElement('p')
    kata14.innerText = sampleArraySquared

    showResults(kata14)

    return sampleArraySquared
}

showTitle('Kata 14')
kata14()
// sampleArray squared end



// 1 to 20 - sum up
function kata15() {
    let oneToTwentySum = 0
    for (let i = 1; i <= 20; i++) {
        oneToTwentySum += i
    }

    const kata15 = document.createElement('p')
    kata15.innerText = oneToTwentySum

    showResults(kata15)

    return oneToTwentySum
}

showTitle('Kata 15')
kata15()
// 1 to 20 - sum up end



// sampleArray sum up
function kata16() {
    const sampleArrayDupe = sampleArray
    let sampleArraySum = 0

    for (let i = 0; i < sampleArrayDupe.length; i++) {
        sampleArraySum += sampleArrayDupe[i]
    }

    const kata16 = document.createElement('p')
    kata16.innerText = sampleArraySum

    showResults(kata16)

    return sampleArraySum
}

showTitle('Kata 16')
kata16()
// sampleArray sum up end



// smallest number
function kata17() {
    const sampleArrayDupe = sampleArray
    let smallestNumber = sampleArrayDupe[0]

    for (let i = 0; i < sampleArrayDupe.length; i++) {
        if (sampleArrayDupe[i] < smallestNumber) {
            smallestNumber = sampleArrayDupe[i]
        }
    }

    const kata17 = document.createElement('p')
    kata17.innerText = smallestNumber

    showResults(kata17)

    return smallestNumber
}

showTitle('Kata 17')
kata17()
// smallest number end


// biggest number
function kata18() {
    const sampleArrayDupe = sampleArray
    let biggestNumber = sampleArrayDupe[0]

    for (let i = 0; i < sampleArrayDupe.length; i++) {
        if (sampleArrayDupe[i] > biggestNumber) {
            biggestNumber = sampleArrayDupe[i]
        }
    }

    const kata18 = document.createElement('p')
    kata18.innerText = biggestNumber

    showResults(kata18)

    return smallestNumber
}

showTitle('Kata 18')
kata18()
// biggest number end



/**
 * Daqui em diante são os bônus, por sua conta e risco
 */

function kataBonus1() {
    // implemente o código do kata bonus 1 aqui
}

function kataBonus2() {
    // implemente o código do kata bonus 2 aqui
}

function kataBonus3() {
    // implemente o código do kata bonus 3 aqui
}

function kataBonus4() {
    // implemente o código do kata bonus 4 aqui
}

function kataBonus5() {
    // implemente o código do kata bonus 5 aqui
}
