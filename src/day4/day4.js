function neverDecrease(number) {
  var l = 0;
  var r = 1;
  var n = number.toString();
  for (var i = 1; i < n.length; i++) {
    l = n.charAt(i - 1)
    r = n.charAt(i)
    if (r < l) {
      return false;
    }
  }
  return true;
}

function adjascentDigits(number) {
  var counts = letterCount(number.toString())
  return counts.map(t => t[1]).includes(2);
}

function letterCount(str) {
  var s = str.match(/([a-zA-Z0-9])\1*/g) || [];
  return s.map(function (itm) {
    return [itm.charAt(0), itm.length];
  });
}

function checkRules(number) {
  return neverDecrease(number) && adjascentDigits(number)
}

module.exports = {
  neverDecrease,
  adjascentDigits,
  checkRules
};