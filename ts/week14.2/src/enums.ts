enum Direction {
    Up = "Up",
    Down = "down",
    Right = "right",
    Left = "left"

}

function move(keypressed: Direction) {
    if (keypressed == Direction.Up) return `pressed ${Direction.Up}`
}

console.log(move(Direction.Up))
console.log(move(Direction.Down))
console.log(move(Direction.Left))
console.log(move(Direction.Right))
