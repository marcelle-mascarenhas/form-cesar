
document.getElementById("subimit").addEventListener('click', function () {
    window.dataLayer.push({
        'event': 'totalTime',
        'timingValue': seconds
    });

    submitForm()
    endTime = new Date();
    var timeDiff = endTime - startTime; //in ms
    // strip the ms
    timeDiff /= 1000;

    // get seconds 
    var seconds = Math.round(timeDiff);
})

