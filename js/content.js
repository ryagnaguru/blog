var base_link = "D:/YagnaGuru/blog/"
var topics = [
    {
        heading: "Overriding Hash Code method - @override hashCode()",
        intro: "There are some contracts that has to be followed while overriding hashcode",
        link: "./java/override_hash.html",
        image: "https://ablfnto6n.cloudimg.io/width/300/x/https://cdn.pixabay.com/photo/2017/12/05/08/32/analytics-2998837_960_720.jpg",
        timeDesc: "August 2018",
        dateTime: "2018-08"
    },
    {
        heading: "Overriding Equals method - @override equals()",
        intro: "Sometimes we may need to know if two objects of a value class contains same value, predominantly this could...",
        link: "./java/override_equals.html",
        image: "https://ablfnto6n.cloudimg.io/width/200/x/https://cdn.pixabay.com/photo/2017/06/14/18/40/weight-scale-2402966_960_720.png",
        timeDesc: "July 2018",
        dateTime: "2018-07"
    },

    {
        heading: "Type Erasure and Synthetic Bridge methods in Generics",
        intro: "Generics in Java helps programer to write a code in a generic way and it also ensure to have tighter type checks during compile time",
        link: "./java/type_erasure.html",
        image: "https://ablfnto6n.cloudimg.io/width/200/x/https://cdn.pixabay.com/photo/2015/12/09/14/51/letter-1084827_960_720.png",
        timeDesc: "July 2018",
        dateTime: "2018-07"
    },
    

];

var recentPost = [
    {
        desc: "Overriding Hash Code method - @override hashCode()",
        tag: "java",
        page: "override_hash.html"
    },
    {
        desc: "Overriding Equals method - @override equals()",
        tag: "java",
        page: "override_equals.html"
    },
    {
        desc: "Type Erasure and Synthetic Bridge methods in Generics",
        tag: "java",
        page: "type_erasure.html"
    },
    ];

$(function () {
    for (const { heading, intro, link, image, timeDesc, dateTime } of topics) {
        var content = "<p class='col-sm-8 text-justify'><a href='" + link + "'>" + heading + "</a><br/><small class = 'text-info'>" + intro + "</small></p>";
        var time = "<p class='col-sm-4 post-date text-center'><i class='far fa-clock'></i><time datetime='" + dateTime + "'>" + timeDesc + "</time>"
        content = content + time;
        var innerRow = $("<div class='row'>").html(content);
        var innerCont = $("<div class= 'col-sm-10 content'>").append(innerRow);
        var img = "<img src='" + image + "' class='contentimage img-thumbnail'>";
        var imgDiv = $("<div class=' d-none d-sm-block d-md-block col-sm-2'>").html(img);
        var imgRow = $($("<div  class='row'>").append(imgDiv).append(innerCont));
        var contentSec = $("<div  class='col-sm-12 content-sec'>").html(imgRow);
        $("#scrollIndex").append(contentSec);
    }

    var title = "<h5 class='card-title'><strong>Recent Post</strong></h5>";
    $("#recentPost").html(title);
    var self = $("#selfNavigate").val() == "1";

    let rc = '';
    for (const { desc, tag, page } of recentPost) {
        const link = self ? "../" + tag + "/" + page : "./" + tag + "/" + page;
        rc += "<p class='card-text'><a href='" + link + "'>" + desc + ".</a></p>";
    }
    $("#recentPost").html(rc);


});