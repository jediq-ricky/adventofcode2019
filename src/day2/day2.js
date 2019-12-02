function process(arr) {
  var pointer = 0;

  //console.log('swtiching:' + arr[pointer])

  var running = true;
  do {
    switch (arr[pointer]) {
      case 1:
        arr[arr[pointer + 3]] = arr[arr[pointer + 1]] + arr[arr[pointer + 2]];
        pointer += 4;
        break;
      case 2:
        arr[arr[pointer + 3]] = arr[arr[pointer + 1]] * arr[arr[pointer + 2]];
        pointer += 4;
        break;
      case 99:
        running = false;
        break;
      default:
        pointer++;

    }
  } while (running);
  return arr;
}

function replacement(arr, required) {
  for (var noun = 0; noun < 10; noun++) {
    for (var verb = 0; verb < 10; verb++) {
      arr[1] = noun;
      arr[2] = verb;
      if (process([...arr])[0] == required) {
        return {
          noun,
          verb
        }
      }
    }
  }
  return {
    noun: 0,
    verb: 0
  }
}


module.exports = {
  process,
  replacement
};