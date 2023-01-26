// Insertion Sort
// Selection Sort
// Bubble Sort
// Quick Sort
// Merge Sort
// Counting Sort
// Shell Sort
// Radix Sort

var barsCount = 256;
var heights = [];

var sorted = false;

function makeBars() {
    for (let i = 1; i <= barsCount / 2; ++i) {
        $("#sort-container").append("<div class = 'bar'></div>")
    }
}

makeBars();
var bars = $(".bar");
console.log(bars);

setRandomBars();

function setRandomBars() {
    heights = [];
    for (let i = 1; i <= barsCount / 2; ++i) {
        heights.push(i * 3);
    }

    // SHUFFLE THE BARS

    async function shuffle(heights) {
        var currentIndex = heights.length,
            temporaryValue, randomIndex;

        // While there remain elements to shuffle ...
        while (0 !== currentIndex) {

            // Pick a remain Element 

            randomIndex = Math.floor(Math.random() * currentIndex);

            currentIndex -= 1;

            // And swap it with the current elements
            temporaryValue = heights[currentIndex];
            heights[currentIndex] = heights[randomIndex];
            heights[randomIndex] = temporaryValue;
            $(bars[currentIndex]).height(heights[currentIndex]);
            $(bars[randomIndex]).height(heights[randomIndex]);
            await timer(1);
        }

        for (let i = 0; i < bars.length; ++i)
            $(bars[i]).height(heights[i]);
        return heights;
    }

    shuffle(heights);
}

function timer(ms) {
    return new Promise((res) => setTimeout(res, ms));
}