/******************************************************************************
 * app.js
 * 
 * Desafío: Introducción a JavaScript - Sesión 1
 * Fecha: 2021-03-01
 * Alumno: Christian Lampl
 * 
 *****************************************************************************/

// converts the first letter of the given string to upper- and the rest to
// lowercase
function capitalize(_str) {
  return _str.charAt(0).toUpperCase() + _str.substr(1).toLowerCase();
}

// separates the given text by the given separator, removing parts that match
// the given regular expression
function separateText(_text, _separator, _regexp) {
  return _text
  .replace(_regexp, '')
  .toLowerCase()
  .split(_separator)
  .sort();
}

// counts distinct tokens in given array
function countTokens(_tokens, _ignoreRegexp) {
  let result = {}

  _tokens.forEach(token => {
    if (!_ignoreRegexp.test(token) && token != '') {
      result[token] = (result[token] || 0) + 1;
    }
  });

  return result;
}

// appends the content of the given array to the given node
function appendCollectionToNode(_node, _collection, _label) {
  _node.innerHTML += `<h2>${capitalize(_label) + 's'}</h2>`;
  for (token in _collection) {
    _node.innerHTML += `<p><strong>${_label}: ${token}</strong> <span>${_collection[token]}</span></p>`;
  }
}

// appends the content of the given array to the 'results' node
function printResults(_collection, _label) {
  const resultNode = document.getElementById('resultados');
  appendCollectionToNode(resultNode, _collection, _label)
}

/** main program **/

const text = document.getElementById('texto-entrada').textContent;
const regexpNotText = /[^A-Za-z]\s/gm
const regexpToIgnore = /\s/

// part 1: letters
const letters = separateText(text, '', regexpNotText);
printResults(countTokens(letters, regexpToIgnore), 'letter');

// part 2: words
const words = separateText(text, ' ', regexpNotText);
printResults(countTokens(words, regexpToIgnore), 'word');
