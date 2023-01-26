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

// function to swap

function swap(heights, first_Index, second_Index) {
    var temp = heights[first_Index];
    heights[first_Index] = heights[second_Index];
    heights[second_Index] = temp;
}

// Insertion Sort

async function insertionSort(heights) {
    var i, len = heights.length,
        el, j;

    for (i = 1; i < len; ++i) {
        el = heights[i];
        j = i;

        while (j > 0 && heights[j - 1] > el) {
            if (ahead == false)
                return;
            heights[j] = heights[j - 1];
            $(bars[j]).height(heights[j]);
            await timer(1);
            --j;
        }

        heights[j] = el;
        $(bars[j]).height(heights[j]);
        await timer(1);
    }

    return heights;
}

// SELECTION SORT

async function selectionSort(heights) {
    var minIdx, temp, len = heights.length;

    for (var i = 0; i < len; ++i) {
        minIdx = i;
        for (var j = i + 1; j < len; ++j) {
            if (ahead == false)
                return;
            if (heights[j] < heights[minIdx])
                minIdx = j;
        }

        temp = heights[i];
        heights[i] = heights[minIdx];
        heights[minIdx] = temp;
        $(bars[i]).height(heights[i]);
        $(bars[minIdx]).height(heights[minIdx]);
        await timer(50);
    }

    return heights;
}


var ahead = false;

$("#init").click(function(e) {
    e.preventDefault();

    if (sorted)
        return;

    sorted = true;
    ahead = true;

    var option = $("#list").val();

    if (option == "insertion")
        insertionSort(heights);
    else if (option == "selection")
        selectionSort(heights, 0, heights.length - 1);

});

$("#shuffle").click(function(e) {
    e.preventDefault();
    ahead = false;
    setRandomBars();
    sorted = false;
});