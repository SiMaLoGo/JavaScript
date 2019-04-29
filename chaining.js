'use strict';

/**
 * @GloryTo God
 */
// variant 1
const distinct = str => {
  let words = [].concat(str);

  return {
    divide(separator) {
      let temp = [];

      words.forEach(element => {
        temp = temp.concat(element.split(separator));
      });

      words = temp.splice(0, temp.length);
      return this;
    },

    valueOf() {
      return words;
    }
  };
};

function splitify(str) {
  return distinct(str)
    .divide(' ')
    .divide('-')
    .divide(',')
    .divide('.')
    .valueOf();
}
console.log(splitify('Hello World,I-am code'));
console.log(splitify('Earth-is-our home'));
console.log(splitify('This.is.a-sentence'));

// variant 2
String.prototype.div = function(separator) {
  let words = this.split(separator);

  function chain(sep) {
    let temp = [];

    words.forEach(element => {
      temp = temp.concat(element.split(sep));
    });

    words = temp.splice(0, temp.length);
    return chain;
  }
  chain.valueOf = () => words;

  return chain;
};

function splitify2(str) {
  return str
    .div(' ')('-')(',')('.')
    .valueOf();
}

console.log(splitify2('Hello World,I-am code'));
console.log(splitify2('Earth-is-our home'));
console.log(splitify2('This.is.a-sentence'));
