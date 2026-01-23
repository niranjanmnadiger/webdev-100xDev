function isLegal(age: number): boolean {

    if (age < 18) {
        return false;
    } else {
        return true;
    }


}

console.log(isLegal(19));
console.log(isLegal(17));