function onChange(id) {
  return validation(document.getElementById(id));
}

document.getElementById('form1').addEventListener('submit', (e) => {
  e.preventDefault()

  for (var i = 0; i < e.target.length; ++i) {
    var input = e.target[i];

    if (input.type != "submit")
      isValid = validation(input);
  }

  return isValid;
})

function validation(input) {
  var errorMessage = input.nextElementSibling;

  var regex = new RegExp(`^${input.getAttribute("custom-pattern")}$`);
  isValid = regex.test(input.value);

  setStyles(isValid, input, errorMessage);

  return isValid
}

function setStyles(isValid, input, errorMessage) {
  if (isValid) {
    input.style.border = '1px solid'
    errorMessage.textContent = 'Correct'
  }
  else {
    input.style.border = '2px solid #ff0048'
    errorMessage.style.color = 'red'
    errorMessage.textContent = !input.value ? `Please, enter your ${input.name}!` : `Incorrect ${input.name}!`;
  }
}

function getNode() {
  const parent = document.createElement('div')
  parent.id = 'header'

  const firstDiv = setNode('div', 'Привіт!')
  parent.append(firstDiv)

  const secondDiv = setNode(
    'div',
    'Базовий приклад SPA без використання сторонніх бібліотек.'
  )
  parent.append(secondDiv)

  const firstLink = setNode('a', 'Перейти на привітання', '#')
  parent.append(firstLink)

  const secondLink = setNode('a', 'Перейти назад', '#')
  parent.append(secondLink)

  return parent
}

function setNode(tagName, textContent, href) {
  const childEl = document.createElement(tagName)
  if (href) {
    childEl.href = href
  }
  childEl.textContent = textContent
  return childEl
}
document.body.append(getNode())