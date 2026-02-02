function delay(fn: () => void)
//function delay(fn: any ) --> this will also workout but will lose out the whole idea of TS
// its better to mention particular types rather than any type 
{
    setTimeout(fn, 3000);

}

delay(
    () => {
        console.log("after 3 seconds")
    }
)