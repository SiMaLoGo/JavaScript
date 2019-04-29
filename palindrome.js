
var result = getPalindrome(1000, 9999);
alert(
  "Наибольший палиндром" +
    result[0] +
    "\n" +
    "сомножители: " +
    result[1] +
    " " +
    result[2]
);

function getPalindrome(min, max) {
  var simpleNumbers = [];
  var palindrome = 0,
    first,
    second;

  for (var n = min; n <= max; n++) {
    if (isSimple(n)) {
      simpleNumbers.push(n);
    }
  }

  for (var m = 0; m < simpleNumbers.length; m++) {
    for (var k = 0; k < simpleNumbers.length; k++) {
      var amplify = simpleNumbers[m] * simpleNumbers[k];

      if (isPalindrome(amplify)) {
        if (amplify > palindrome) {
          palindrome = amplify;
          first = simpleNumbers[m];
          second = simpleNumbers[k];
        }
      }
    }
  }

  return [palindrome, first, second];
}

function isSimple(n) {
  for (let b = 2; b < n; b++) {
    if (n % b == 0) {
      return false;
    }
  }

  return true;
}

function isPalindrome(value) {
  var valueString = value + "";
  var digits = [];

  for (var q = 0; q < valueString.length; q++) {
    digits[q] = +valueString[q];
  }

  for (var e = 0; e < digits.length / 2; e++) {
    if (digits[e] != digits[digits.length - e - 1]) {
      return false;
    }
  }
  
  return true;
}
