function rangeSlider(value) {
    document.getElementById('rangeVal').innerHTML = value;
}

function show() {
    var n = document.getElementById('rangeVal').innerHTML;
    var res = '';

    for (let i = 0; i < n; i++) {
        res += '<li>' + draw().join(' ') + '</li>';
    }
    
    document.getElementById('results-ol').innerHTML = res;
    document.getElementById('results').style.transform = "scale(1)";
}

function closeResults() {
    document.getElementById('results').style.transform = "scale(0)";
}

function draw() {
    var nums = [];

    while (nums.length < 6) {
        var num = Math.floor(Math.random() * 49) + 1;
        if (nums.indexOf(num) === -1) nums.push(num);
    }

    nums.sort(function (a, b) { return a - b });
    return nums;
}

function browserDetect(){
    var userAgent = navigator.userAgent;
    var element = document.getElementById('vol');

    if(userAgent.match(/chrome|chromium|crios/i)){
        element.classList.add('chrome')
    }
}