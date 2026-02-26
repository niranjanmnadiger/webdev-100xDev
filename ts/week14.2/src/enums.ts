enum Direction {
    Up,
    Down,
    Left,
    Right
}

function doSomething(keypressed: Direction) {
    return "You pressed " + Direction[keypressed];
}

console.log(doSomething(Direction.Up));
