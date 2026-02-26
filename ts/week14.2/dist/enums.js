"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Direction;
(function (Direction) {
    Direction["Up"] = "Up";
    Direction["Down"] = "down";
    Direction["Right"] = "right";
    Direction["Left"] = "left";
})(Direction || (Direction = {}));
function move(keypressed) {
    if (keypressed == Direction.Up)
        return `pressed ${Direction.Up}`;
}
console.log(move(Direction.Up));
console.log(move(Direction.Down));
console.log(move(Direction.Left));
console.log(move(Direction.Right));
//# sourceMappingURL=enums.js.map