// 1) Sum Zero
let sum = false
function sumZero(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++){
            if ((arr[i] + arr[j]) === 0){
                sum = true
                return sum
            }
        }
    }
}

sumZero([1, 2, 3, 5, -1])
console.log(sum)
// The time complexity for this function is O(n^2), or Quadradic time

// 2) Unique Characters
let unique = true
function uniqueChars(word) {
    for (let i = 0; i < word.length; i++) {
        for (let j = 0; j < word.length; j++){
            if (word[i] === word[j] && i !== j){
                unique = false
                return unique
            }
        }
    }
}

uniqueChars('moonday')
console.log(unique)
// The time complexity for this function is O(n^2), or Quadradic time

// 3) Panagram Sentance
let pangram = false
function isPangram(string) {
    string = string.toLowerCase()
    if (string.includes('a') && 
    string.includes('b') && 
    string.includes('c') && 
    string.includes('d') && 
    string.includes('e') && 
    string.includes('f') && 
    string.includes('g') && 
    string.includes('h') && 
    string.includes('i') && 
    string.includes('j') && 
    string.includes('k') && 
    string.includes('l') && 
    string.includes('m') &&
    string.includes('n') && 
    string.includes('o') && 
    string.includes('p') && 
    string.includes('q') && 
    string.includes('r') && 
    string.includes('s') && 
    string.includes('t') && 
    string.includes('u') && 
    string.includes('v') && 
    string.includes('w') && 
    string.includes('x') && 
    string.includes('y') && 
    string.includes('z')){
        pangram = true
        return pangram
    }
}

isPangram('I like cats, but not mice')
console.log(pangram)
// the time complexity is O(n), or Linear Time

// 4) Longest Word
let longestLength = 0
function longestWord(arr) {
    for (let i = 0; i < arr.length; i++){
        arr[i] = arr[i].length
    }
    for (let i = 0; i < arr.length; i++){
        for (let j = 0; j < arr.length; j++){
            if(arr[i] < arr[j]){
                console.log(arr)
                arr.splice(i, 1)
                console.log(i, arr.length)
                i--
            }
        }
    }
    longestLength = arr[0]
    return longestLength
}

longestWord(['paraskavedekatriaphobia', 'Hey', 'paraskavedekatriaphobia', 'What up', 'hello'])
console.log(longestLength)

// The time complexity is O(n^2), or Quadradic Time