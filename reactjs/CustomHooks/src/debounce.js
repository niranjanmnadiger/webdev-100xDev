//understanding debounce before useDebounce hook

let clock 

function searchEngine(){
    console.log("search request sent")

}

function debounceSearchEngine(){
    clearTimeout(clock);
    clock = setTimeout(searchEngine,30);


}

debounceSearchEngine();
debounceSearchEngine();
debounceSearchEngine();
debounceSearchEngine();
debounceSearchEngine();
debounceSearchEngine();