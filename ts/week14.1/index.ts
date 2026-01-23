function delay(fn: () => void) {
    setTimeout(fn, 3000);
}

delay(() => {
    console.log("hello there after 3 seconds")
})
