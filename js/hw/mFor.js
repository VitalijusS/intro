const B = [
    'the quick brown fox',
    'jumps over the lazy dog',
    'a bird in the hand',
    'is worth two in the bush',
    'an apple a day',
    'keeps the doctor away',
    'actions speak louder than words',
    'all good things must come to an end',
    'beauty is in the eye of the beholder',
    'better late than never',
    'birds of a feather flock together',
    'cleanliness is next to godliness',
    'dont bite the hand that feeds you',
    'dont count your chickens before they hatch',
    'dont put all your eggs in 1 basket',
    'every cloud has a silver lining',
    'every dog has its day',
    'every rose has its thorn',
    'fortune favors the bold',
    'good things come to those who wait',
    'a watched pot never boils',
    'haste makes waste',
    'history repeats itself',
    'cat got your tongue',
    'home is where the heart is',
    'if the shoe fits, wear it',
    'ignorance is bliss',
    'it takes two to tango',
    'arabs have 100 words for sand',
    'kill two birds with one stone',
    'laughter is the best medicine',
    'love is blind',
    'money doesnt grow on trees',
    'no pain no gain',
    'nothing ventured nothing gained',
    'once bitten twice shy',
    'practice makes perfect',
    'the early bird catches the worm',
    'the grass is always greener on the other side',
    'the pen is mightier than 10 swords',
    'theres no smoke without fire',
    'time heals all wounds',
    '5 second rule',
    'every dog has its day',
    'to err is human to forgive divine',
    '2 wrongs dont make a right',
    'when in Rome do as the Romans do',
    'where theres smoke, theres fire',
    'you cant judge a book by its cover',
    'you cant make an omelette without breaking eggs',
    'you reap what you sow',
    'youre never too old to learn'
];





//Surasti ilgiausią stringą;
function long(arr) {
    let longest = ''
    for (i = 0; i < arr.length; i++) {
        if (arr[i].length > longest.length) {
            longest = arr[i]
        }
    }
    return longest
}
console.log(long(B))
console.log('-------------')

// Surasti trumpiausią stringą;
function short(arr) {
    let ans = arr[0]
    for (i = 0; i < arr.length; i++) {
        if (arr[i].length < ans.length) {
            ans = arr[i]
        }
    }
    return ans
}
console.log(short(B))
console.log('-------------')

// Surasti stringą, kuris prasideda “a” raide;
function findA(arr) {
    for (i = 0; i < arr.length; i++) {
        if (arr[i][0] === 'a') {
            return arr[i];
        }
    }
}
console.log(findA(B))
console.log('-------------')

// Surasti stringą su daugiausia žodžių;
function mostWords(arr) {
    let ans = arr[0]
    for (i = 0; i < arr.length; i++) {
        if (arr[i].split(' ').length > ans.split(' ').length) {
            ans = arr[i]
        }
    }
    return ans
}
console.log(mostWords(B))
console.log('-------------')

// Surasti stringą su mažiausiai žodžių;
function leastWords(arr) {
    let ans = arr[0]
    for (i = 0; i < arr.length; i++) {
        if (arr[i].split(' ').length < ans.split(' ').length) {
            ans = arr[i]
        }
    }
    return ans
}
console.log(leastWords(B))
console.log('-------------')


// Suskaičiuoti kiek stringų turi daugiau nei 4 žodžius;
function moreThan4(arr) {
    let ans = 0
    for (i = 0; i < arr.length; i++) {
        if (arr[i].split(' ').length > 4) {
            ans++
        }
    }
    return ans
}
console.log(moreThan4(B))
console.log('-------------')

// Suskaičiuoti kiek masyve yra žodžių;
function countWords(arr) {
    let ans = 0
    for (i = 0; i < arr.length; i++) {
        ans += arr[i].split(' ').length
    }
    return ans
}
console.log(countWords(B))
console.log('-------------')

// Suskaičiuoti visas ‘s’ raides;
function countS(arr) {
    let ans = 0
    for (i = 0; i < arr.length; i++) {
        for (let index = 0; index < arr[i].length; index++) {
            if (arr[i][index] === 's') {
                ans++;
            }

        }
    }
    return ans
}
console.log(countS(B))
console.log('-------------')


// Suskaičiuoti kiek masyve yra raidžių (tarpų tarp žodžių neskaičiuoti!);
function countLetters(arr) {
    let ans = 0
    for (i = 0; i < arr.length; i++) {
        for (let index = 0; index < arr[i].length; index++) {
            if (arr[i][index] !== ' ') {
                ans++;
            }

        }
    }
    return ans
}
console.log(countLetters(B))
console.log('-------------')

function countLetters2(arr) {
    let ans = 0
    for (i = 0; i < arr.length; i++) {
        for (let index = 0; index < arr[i].length; index++) {
            let regex = /^[a-zA-Z]+$/;
            if (regex.test(arr[i][index])) {
                ans++;
            }

        }
    }
    return ans
}
console.log(countLetters2(B))
console.log('-------------')


// Surasti ilgiausią žodį (ne stringą, o atskirą stringo žodį!);
function longestWord(arr) {
    let ans = ''
    for (i = 0; i < arr.length; i++) {
        const list = arr[i].split(' ')
        for (let index = 0; index < list.length; index++) {
            if (list[index].length > ans.length) {
                ans = list[index];
            }

        }
    }
    return ans
}
console.log(longestWord(B))
console.log('-------------')
