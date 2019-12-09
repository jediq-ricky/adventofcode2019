function process(port, wires) {
  for (var wireCount = 0; wireCount < wires.length; wireCount++) {
    var wire = wires[wireCount]
    wire.positions.push({
      x: port.x,
      y: port.y
    })
    var instructions = wire.instructions.split(',')
    for (instruction of instructions) {
      var direction = instruction.substring(0, 1);
      var distance = +instruction.substring(1);

      if (direction == 'U') {
        moveUp(wire, distance)
      }
      if (direction == 'D') {
        moveDown(wire, distance);
      }
      if (direction == 'L') {
        moveLeft(wire, distance)
      }
      if (direction == 'R') {
        moveRight(wire, distance)
      }
    }
  }
}

function moveRight(wire, distance) {
  var current = wire.positions[wire.positions.length - 1];
  for (var i = 0; i < distance; i++) {
    wire.positions.push({
      x: current.x + i + 1,
      y: current.y
    });
  }
}

function moveLeft(wire, distance) {
  var current = wire.positions[wire.positions.length - 1];
  for (var i = 0; i < distance; i++) {
    wire.positions.push({
      x: current.x - i - 1,
      y: current.y
    });
  }
}

function moveUp(wire, distance) {
  var current = wire.positions[wire.positions.length - 1];
  for (var i = 0; i < distance; i++) {
    wire.positions.push({
      x: current.x,
      y: current.y - i - 1
    });
  }
}

function moveDown(wire, distance) {
  var current = wire.positions[wire.positions.length - 1];
  for (var i = 0; i < distance; i++) {
    wire.positions.push({
      x: current.x,
      y: current.y + i + 1
    });
  }
}

function findIntersects(origin, wires) {
  var intersects = [];
  for (var a = 0; a < wires.length; a++) {
    for (var b = a; b < wires.length; b++) {
      if (wires[a] != wires[b]) {
        for (position of wires[b].positions) {
          if (containsPosition(wires[a].positions, position) && position != origin) {
            if (!containsPosition(intersects, position)) {
              intersects.push(position);
            }
          }
        }
      }
    }
  }
  return intersects;
}

function findDistances(from, positions) {
  var distances = []
  for (position of positions) {
    var x = Math.abs(from.x - position.x);
    var y = Math.abs(from.y - position.y);
    distances.push(x + y)
  }
  return distances;
}

function findShortestSteps(wires, intersects) {
  var steps = []
  for (intersect of intersects) {
    var count = 0;
    for (wire of wires) {
      count += countToPoint(wire, intersect);
    }
    steps.push(count);
  }
  return steps;
}

function countToPoint(wire, endPoint) {
  var count = 0;
  for (position of wire.positions) {
    count++;
    //console.log(`c:${count} px:${position.x} == ex:${endPoint.x} : py:${position.y} == ey:${endPoint.y}`)
    if (position.x == endPoint.x && position.y == endPoint.y) {
      return count - 1; // remove the origin
    }
  }
  return 0;
}

function containsPosition(array, position) {
  return array.filter(data => data.x == position.x && data.y == position.y).length != 0;
}

module.exports = {
  process,
  findIntersects,
  findDistances,
  findShortestSteps
}