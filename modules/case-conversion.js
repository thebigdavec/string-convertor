function toCamelCase(str) {
  if (typeof str != 'string') return Null
  const words = str.split(/-|_|\s/)
  let newStr = words.shift().toLowerCase()
  for (const index in words) {
    newStr += words[index][0].toUpperCase()
    newStr += words[index].substring(1, words[index].length).toLowerCase()
  }
  return newStr
}

function toKebabCase(str) {
  if (typeof str != 'string') return Null
  const words = str.toLowerCase().split(/-|_|\s/)
  return words.join('-')
}

function toSnakeCase(str) {
  if (typeof str != 'string') return Null
  const words = str.toLowerCase().split(/-|_|\s/)
  return words.join('_')
}

function toTitleCase(str, strict = false) {
  if (typeof str != 'string') return Null
  const sentences = []
  if (str.includes('. ')) {
    sentences.push(...str.split('. '))
    sentences.forEach((sentence, index) => {
      if (index < sentences.length - 1) {
        sentences[index] += '.'
      }
    })
  } else {
    sentences[0] = str
  }
  const exemptions = [
    'a',
    'an',
    'the',
    'for',
    'and',
    'nor',
    'but',
    'or',
    'yet',
    'so',
    'at',
    'around',
    'by',
    'after',
    'along',
    'for',
    'from',
    'of',
    'on',
    'to',
    'with',
    'without'
  ]
  let newStr = ''
  for (let sentence of sentences) {
    const words = sentence.toLowerCase().trim(' ').split(' ')
    let newSentence =
      words[0][0].toUpperCase() +
      words[0].substring(1, words[0].length).toLowerCase() +
      ' '
    words.shift()
    for (const word of words) {
      if (strict === true && exemptions.includes(word)) {
        newSentence += word.toLowerCase() + ' '
      } else {
        newSentence +=
          word[0].toUpperCase() +
          word.substring(1, word.length).toLowerCase() +
          ' '
      }
    }
    newStr += newSentence.trim() + ' '
  }
  return newStr.trim(' ')
}

export { toCamelCase, toKebabCase, toSnakeCase, toTitleCase }
