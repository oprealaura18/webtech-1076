/*const sampleString = 'the quick brown fox jumps over the lazy dog'

const getCounts = (input) => {
  const result = {}
  const words = input.split(' ')
  for (const word of words) {
    if (word in result) {
      result[word]++
    } else {
      result[word] = 1
    }
  }
  return result
}

console.log(getCounts(sampleString))  */

//sa obtinem frecvente relative Cat rep din totalul aparitiilor 
//se imparte valoarea la nr total de cuvinte

const sampleString = 'the quick brown fox jumps over the lazy dog'

const getFrequecies = (input) => {
  const result = {}
  const words = input.split(' ')
  for (const word of words) {
    if (word in result) {
      result[word]++
    } else {
      result[word] = 1
    }
  }

  for (const word in result) {
    result[word] /= words.length
  }
  
  return result
}

console.log(getFrequecies(sampleString))