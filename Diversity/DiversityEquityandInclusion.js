var myContext1 = document.getElementById(
    "stackedChartID1").getContext('2d');
var myContext2 = document.getElementById(
        "stackedChartID2").getContext('2d');
var myChart = new Chart(myContext1, {
    type: 'bar',
    data: {
        labels: ["Associate", "Lead", "Director/VP", "Executive"],
        datasets: [{
            label: 'worst',
            backgroundColor: "#253859 ",
            data: [12.5, 0, 33.3, 50],
        }, {
            label: 'Okay',
            backgroundColor: "#28bebb",
            data: [6.25, 0, 0, 0],
        }, {
            label: 'bad',
            backgroundColor: "#8387BA",
            data: [81.25, 100, 66.67, 50],
            }],
        
    },
    options: {
        indexAxis: 'y',
        scales: {
            x: {
                stacked: true,
            },
            y: {
                stacked: true
            }
        },
        responsive: true,
        // width: "50%",
        // height: 400
    }
});
var myChart = new Chart(myContext2, {
    type: 'bar',
    data: {
        labels: ["Associate", "Lead", "Director/VP", "Executive"],
        datasets: [{
            label: 'worst',
            backgroundColor: "#d2d2d2",
            data: [43.75, 0, 33.3, 0],
        },
          {
            label: 'bad',
            backgroundColor: "#253859 ",
            data: [56.25, 100, 66.67, 100],
        }],
    },
    options: {
        indexAxis: 'y',
        scales: {
            x: {
                stacked: true,
            },
            y: {
                stacked: true
            }
        },
        responsive: true
    }
});


$(window).on('scroll', () => {
    $('left_and_right').each(() => {
        if (isElementInViewport(this)) {
            $(this).addClass('visible');
        }
    })
})

function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

