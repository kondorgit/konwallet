/*
Template Name: Velzon - Admin & Dashboard Template
Author: Themesbrand
Website: https://Themesbrand.com/
Contact: Themesbrand@gmail.com
File: Ecommerce Dashboard init js
*/

// get colors array from the string
function getChartColorsArray(chartId) {
    if (document.getElementById(chartId) !== null) {
        var colors = document.getElementById(chartId).getAttribute("data-colors");
        if (colors) {
            colors = JSON.parse(colors);
            return colors.map(function (value) {
                var newValue = value.replace(" ", "");
                if (newValue.indexOf(",") === -1) {
                    var color = getComputedStyle(document.documentElement).getPropertyValue(
                        newValue
                    );
                    if (color) return color;
                    else return newValue;
                } else {
                    var val = value.split(",");
                    if (val.length == 2) {
                        var rgbaColor = getComputedStyle(
                            document.documentElement
                        ).getPropertyValue(val[0]);
                        rgbaColor = "rgba(" + rgbaColor + "," + val[1] + ")";
                        return rgbaColor;
                    } else {
                        return newValue;
                    }
                }
            });
        } else {
            console.warn('data-colors atributes not found on', chartId);
        }
    }
}

var linechartcustomerColors = getChartColorsArray("customer_impression_charts");
if (linechartcustomerColors) {
    var options = {
        series: [{
                name: "Orders",
                type: "area",
                data: [34, 65, 46, 68, 49, 61, 42, 44, 78, 52, 63, 67],
            },
            {
                name: "Earnings",
                type: "bar",
                data: [
                    89.25, 98.58, 68.74, 108.87, 77.54, 84.03, 51.24, 28.57, 92.57, 42.36,
                    88.51, 36.57,
                ],
            },
            {
                name: "Refunds",
                type: "line",
                data: [8, 12, 7, 17, 21, 11, 5, 9, 7, 29, 12, 35],
            },
        ],
        chart: {
            height: 370,
            type: "line",
            toolbar: {
                show: false,
            },
        },
        stroke: {
            curve: "straight",
            dashArray: [0, 0, 8],
            width: [2, 0, 2.2],
        },
        fill: {
            opacity: [0.1, 0.9, 1],
        },
        markers: {
            size: [0, 0, 0],
            strokeWidth: 2,
            hover: {
                size: 4,
            },
        },
        xaxis: {
            categories: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
            ],
            axisTicks: {
                show: false,
            },
            axisBorder: {
                show: false,
            },
        },
        grid: {
            show: true,
            xaxis: {
                lines: {
                    show: true,
                },
            },
            yaxis: {
                lines: {
                    show: false,
                },
            },
            padding: {
                top: 0,
                right: -2,
                bottom: 15,
                left: 10,
            },
        },
        legend: {
            show: true,
            horizontalAlign: "center",
            offsetX: 0,
            offsetY: -5,
            markers: {
                width: 9,
                height: 9,
                radius: 6,
            },
            itemMargin: {
                horizontal: 10,
                vertical: 0,
            },
        },
        plotOptions: {
            bar: {
                columnWidth: "30%",
                barHeight: "70%",
            },
        },
        colors: linechartcustomerColors,
        tooltip: {
            shared: true,
            y: [{
                    formatter: function (y) {
                        if (typeof y !== "undefined") {
                            return y.toFixed(0);
                        }
                        return y;
                    },
                },
                {
                    formatter: function (y) {
                        if (typeof y !== "undefined") {
                            return "$" + y.toFixed(2) + "k";
                        }
                        return y;
                    },
                },
                {
                    formatter: function (y) {
                        if (typeof y !== "undefined") {
                            return y.toFixed(0) + " Sales";
                        }
                        return y;
                    },
                },
            ],
        },
    };
    var chart = new ApexCharts(
        document.querySelector("#customer_impression_charts"),
        options
    );
    chart.render();
}

// Simple Donut Charts
var chartDonutBasicColors = getChartColorsArray("store-visits-source");
if (chartDonutBasicColors) {
    var options = {
        series: [44, 55, 41, 17, 15],
        labels: ["Direct", "Social", "Email", "Other", "Referrals"],
        chart: {
            height: 333,
            type: "donut",
        },
        legend: {
            position: "bottom",
        },
        stroke: {
            show: false
        },
        dataLabels: {
            dropShadow: {
                enabled: false,
            },
        },
        colors: chartDonutBasicColors,
    };

    var chart = new ApexCharts(
        document.querySelector("#store-visits-source"),
        options
    );
    chart.render();
}

// world map with markers
var vectorMapWorldMarkersColors = getChartColorsArray("sales-by-locations");
if (vectorMapWorldMarkersColors) {
    var worldemapmarkers = new jsVectorMap({
        map: "world_merc",
        selector: "#sales-by-locations",
        zoomOnScroll: false,
        zoomButtons: false,
        selectedMarkers: [0, 5],
        regionStyle: {
            initial: {
                stroke: "#9599ad",
                strokeWidth: 0.25,
                fill: vectorMapWorldMarkersColors[0],
                fillOpacity: 1,
            },
        },
        markersSelectable: true,
        markers: [{
                name: "Palestine",
                coords: [31.9474, 35.2272],
            },
            {
                name: "Russia",
                coords: [61.524, 105.3188],
            },
            {
                name: "Canada",
                coords: [56.1304, -106.3468],
            },
            {
                name: "Greenland",
                coords: [71.7069, -42.6043],
            },
        ],
        markerStyle: {
            initial: {
                fill: vectorMapWorldMarkersColors[1],
            },
            selected: {
                fill: vectorMapWorldMarkersColors[2],
            },
        },
        labels: {
            markers: {
                render: function (marker) {
                    return marker.name;
                },
            },
        },
    });
}

// Vertical Swiper
var swiper = new Swiper(".vertical-swiper", {
    slidesPerView: 2,
    spaceBetween: 10,
    mousewheel: true,
    loop: true,
    direction: "vertical",
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});

var layoutRightSideBtn = document.querySelector('.layout-rightside-btn');
if (layoutRightSideBtn) {
    Array.from(document.querySelectorAll(".layout-rightside-btn")).forEach(function (item) {
        var userProfileSidebar = document.querySelector(".layout-rightside-col");
        item.addEventListener("click", function () {
            if (userProfileSidebar.classList.contains("d-block")) {
                userProfileSidebar.classList.remove("d-block");
                userProfileSidebar.classList.add("d-none");
            } else {
                userProfileSidebar.classList.remove("d-none");
                userProfileSidebar.classList.add("d-block");
            }
        });
    });
    window.addEventListener("resize", function () {
        var userProfileSidebar = document.querySelector(".layout-rightside-col");
        if (userProfileSidebar) {
            Array.from(document.querySelectorAll(".layout-rightside-btn")).forEach(function () {
                if (window.outerWidth < 1699 || window.outerWidth > 3440) {
                    userProfileSidebar.classList.remove("d-block");
                } else if (window.outerWidth > 1699) {
                    userProfileSidebar.classList.add("d-block");
                }
            });
        }

        var htmlAttr = document.documentElement;
        if(htmlAttr.getAttribute("data-layout") == "semibox"){
            userProfileSidebar.classList.remove("d-block");
            userProfileSidebar.classList.add("d-none");
        }
    });
    var overlay = document.querySelector('.overlay');
    if (overlay) {
        document.querySelector(".overlay").addEventListener("click", function () {
            if (document.querySelector(".layout-rightside-col").classList.contains('d-block') == true) {
                document.querySelector(".layout-rightside-col").classList.remove("d-block");
            }
        });
    }
}

window.addEventListener("load", function () {
    var userProfileSidebar = document.querySelector(".layout-rightside-col");
    if (userProfileSidebar) {
        Array.from(document.querySelectorAll(".layout-rightside-btn")).forEach(function () {
            if (window.outerWidth < 1699 || window.outerWidth > 3440) {
                userProfileSidebar.classList.remove("d-block");
            } else if (window.outerWidth > 1699) {
                userProfileSidebar.classList.add("d-block");
            }
        });
    }

    var htmlAttr = document.documentElement

    if(htmlAttr.getAttribute("data-layout") == "semibox"){
        if (window.outerWidth > 1699) {
            userProfileSidebar.classList.remove("d-block");
            userProfileSidebar.classList.add("d-none");
        }
    }

    getCount();
    getMediaLists();
    getNewsLists();
    getPartnerLists();
    getTeamsLists();
    getAdvisorLists();
    getManagerLists();
});

function getCount() {

    $.ajax({
        type: "POST",
        url: "/DashBoard/GetTotalCount",
        processData: false,
        contentType: "Application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {

            var items = data;

            $("#media-value").attr("data-target", items[0].mediaCnt);
            $("#news-value").attr("data-target", items[0].newsCnt);
            $("#partners-value").attr("data-target", items[0].partnersCnt);
            $("#teams-value").attr("data-target", items[0].teamsCnt);
            $("#advisor-value").attr("data-target", items[0].advisorCnt);
            $("#manager-value").attr("data-target", items[0].managerCnt);

            counter();
        },
        error: function (request, status, error) {
            //alert("code:" + request.status + "\n\nmessage: " + request.responseText + "\n\nerror:" + error);
        }
    });

}

function getMediaLists() {

    $.ajax({
        type: "POST",
        url: "/DashBoard/GetMediaLists",
        processData: false,
        contentType: "Application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {

            var items = data;
            var html = "";

            $.each(items, function (index, val) {
                html += '<tr>';
                html += '<td>';
                html += '<div class="d-flex align-items-center">';
                html += '<div class="avatar-sm2 bg-light rounded p-1 me-2">';
                html += '<img src="https://img.youtube.com/vi/' + val.mediaId + '/mqdefault.jpg" alt = "" class="img-fluid d-block" /> ';
                html += '</div>';
                html += '<div>';
                html += '</td>';

                html += '<td>';
                html += '<h5 class="fs-14 my-1">';
                html += 'https://youtu.be/' + val.mediaId;
                html += '</h5>';
                html += '</td>';
                html += '</tr>';
            });

            $("#mediaLists").html(html);

            $(".elmLoader").fadeOut(0);

        },
        error: function (request, status, error) {
            //alert("code:" + request.status + "\n\nmessage: " + request.responseText + "\n\nerror:" + error);
        }
    });

}

function getNewsLists() {

    $.ajax({
        type: "POST",
        url: "/DashBoard/GetNewsLists",
        processData: false,
        contentType: "Application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {

            var items = data;
            var html = "";

            $.each(items, function (index, val) {
                html += '<tr>';
                html += '<td>';

                html += '<div class="d-flex align-items-center">';
                html += '<div class="avatar-sm2 bg-light rounded p-1 me-2">';
                html += '<img src="' + val.thumbnail + '" alt = "" class="img-fluid d-block" /> ';
                html += '</div>';
                html += '<div>';
                html += '<h5 class="fs-14 my-1">';
                html += val.newsTitle;
                html += '</h5>';
                html += '</div>';
                html += '</div>';
                html += '</td>';

                html += '<td>';
                html += '<h5 class="fs-14 my-1">';
                html += val.newsPublishDate;
                html += '</h5>';

                html += '</td>';
                html += '</tr>';
            });

            $("#newsLists").html(html);

            $(".elmLoader2").fadeOut(0);

        },
        error: function (request, status, error) {
            //alert("code:" + request.status + "\n\nmessage: " + request.responseText + "\n\nerror:" + error);
        }
    });

}

function getPartnerLists() {

    $.ajax({
        type: "POST",
        url: "/DashBoard/GetPartnersLists",
        processData: false,
        contentType: "Application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {

            var items = data;
            var html = "";

            $.each(items, function (index, val) {
                html += '<tr>';
                html += '<td>';

                html += '<div class="d-flex align-items-center">';
                html += '<div class="avatar-sm2 bg-light rounded p-1 me-2">';
                html += '<img src="' + val.partnerImage + '" alt = "" class="img-fluid d-block" /> ';
                html += '</div>';
                html += '<div>';
                html += '<h5 class="fs-14 my-1">';
                html += val.partnerTitle;
                html += '</h5>';
                html += '</div>';
                html += '</div>';
                html += '</td>';

                html += '<td>';
                html += '<h5 class="fs-14 my-1">';
                html += val.partnerText;
                html += '</h5>';

                html += '</td>';
                html += '</tr>';
            });

            $("#partnerLists").html(html);

            $(".elmLoader3").fadeOut(0);

        },
        error: function (request, status, error) {
            //alert("code:" + request.status + "\n\nmessage: " + request.responseText + "\n\nerror:" + error);
        }
    });

}


function getTeamsLists() {

    $.ajax({
        type: "POST",
        url: "/DashBoard/GetTeamsLists",
        processData: false,
        contentType: "Application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {

            var items = data;
            var html = "";

            $.each(items, function (index, val) {
                html += '<tr>';
                html += '<td>';

                html += '<div class="d-flex align-items-center">';
                html += '<div class="avatar-sm2 bg-light rounded p-1 me-2">';
                html += '<img src="' + val.img + '" alt = "" class="img-fluid d-block" /> ';
                html += '</div>';
                html += '<div>';
                html += '<h5 class="fs-14 my-1">';
                html += val.name;
                html += '</h5>';
                html += '</div>';
                html += '</div>';
                html += '</td>';

                html += '<td>';
                html += '<h5 class="fs-14 my-1">';
                html += val.text;
                html += '</h5>';

                html += '</td>';
                html += '</tr>';
            });

            $("#teamsLists").html(html);

            $(".elmLoader4").fadeOut(0);

        },
        error: function (request, status, error) {
            //alert("code:" + request.status + "\n\nmessage: " + request.responseText + "\n\nerror:" + error);
        }
    });

}

function getAdvisorLists() {

    $.ajax({
        type: "POST",
        url: "/DashBoard/GetAdvisorLists",
        processData: false,
        contentType: "Application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {

            var items = data;
            var html = "";

            $.each(items, function (index, val) {
                html += '<tr>';
                html += '<td>';

                html += '<div class="d-flex align-items-center">';
                html += '<div class="avatar-sm2 bg-light rounded p-1 me-2">';
                html += '<img src="' + val.img + '" alt = "" class="img-fluid d-block" /> ';
                html += '</div>';
                html += '<div>';
                html += '<h5 class="fs-14 my-1">';
                html += val.name;
                html += '</h5>';
                html += '</div>';
                html += '</div>';
                html += '</td>';

                html += '<td>';
                html += '<h5 class="fs-14 my-1">';
                html += val.text;
                html += '</h5>';

                html += '</td>';
                html += '</tr>';
            });

            $("#advisorLists").html(html);

            $(".elmLoader5").fadeOut(0);

        },
        error: function (request, status, error) {
            //alert("code:" + request.status + "\n\nmessage: " + request.responseText + "\n\nerror:" + error);
        }
    });

}


function getManagerLists() {

    $.ajax({
        type: "POST",
        url: "/DashBoard/getManagerLists",
        processData: false,
        contentType: "Application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {

            var items = data;
            var html = "";

            $.each(items, function (index, val) {
                html += '<tr>';
                html += '<td>';

                html += '<td>';
                html += '<h5 class="fs-14 my-1">';
                html += val.userId;
                html += '</h5>';
                html += '</td>';

                html += '<td>';
                html += '<h5 class="fs-14 my-1">';
                html += val.userName;
                html += '</h5>';
                html += '</td>';

                html += '<td>';
                switch (val.isFirst) {
                    case true:
                        html += '<span class="badge badge-soft-success">신규</span>';
                        break;
                    case false:
                        html += '<span class="badge badge-soft-info">정상</span>';
                        break;
                }
                html += '</td>';

                html += '</tr>';
            });

            $("#managerLists").html(html);

            $(".elmLoader6").fadeOut(0);

        },
        error: function (request, status, error) {
            //alert("code:" + request.status + "\n\nmessage: " + request.responseText + "\n\nerror:" + error);
        }
    });

}

function counter() {
    var counter = document.querySelectorAll(".counter-value");
    var speed = 3000;
    counter &&
        Array.from(counter).forEach(function (counter_value) {
            function updateCount() {
                var target = +counter_value.getAttribute("data-target");
                var count = +counter_value.innerText;
                var inc = target / speed;
                if (inc < 1) {
                    inc = 1;
                }
                // Check if target is reached
                if (count < target) {
                    // Add inc to count and output in counter_value
                    counter_value.innerText = (count + inc).toFixed(0);
                    // Call function every ms
                    setTimeout(updateCount, 1);
                } else {
                    counter_value.innerText = numberWithCommas(target);
                }
                numberWithCommas(counter_value.innerText);
            }
            updateCount();
        });

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
}