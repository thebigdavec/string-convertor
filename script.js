import {
  toCamelCase,
  toKebabCase,
  toSnakeCase,
  toTitleCase
} from './modules/case-conversion.js'

const input = document.getElementById('example')
const option = document.getElementById('case-change')
const result = document.getElementById('result')
result.textContent = input.value
console.log(option.selectedIndex)
input.addEventListener('input', handleInput)
option.addEventListener('input', handleInput)

function updateResult() {
  result.textContent = convert(input.value)
}
function handleInput() {
  updateResult()
}
function convert(str) {
  switch (option.selectedIndex) {
    case 1:
      return toCamelCase(str)
    case 2:
      return toKebabCase(str)
    case 3:
      return toSnakeCase(str)
    case 4:
      return toTitleCase(str)
    case 5:
      return toTitleCase(str, true)
    default:
      return str
  }
}
