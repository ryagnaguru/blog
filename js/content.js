var base_link = "D:/YagnaGuru/blog/"
var topics = [{
    heading : "Type Erasure and Synthetic Bridge methods in Generics",
    intro: "Generics in Java helps programer to write a code in a generic way and it also ensure to have tighter type checks during compile time",
    link: "./java/type_erasure.html",
    image: "https://cdn.pixabay.com/photo/2015/12/09/14/51/letter-1084827_960_720.png",
    timeDesc:"July 2018",
    dateTime: "2018-07"
}];

var recentPost = [{
    desc: "Type Erasure and Synthetic Bridge methods in Generics",
    tag: "java",
    page:"type_erasure.html"
}];

$(function(){

    //$("#brandNameLink").attr("href", "../index.html");
    //$("#javaLink").attr("href", "../index.html");

    var i = 0;
    for( var i =0; i< topics.length; i++ ){
        var ele  = topics[0];
        var content = "<p class='col-sm-8 text-justify'><a href='"+ele.link+"'>"+ele.heading+"</a><br/><small class = 'text-info'>"+ele.intro+"</small></p>";
        var time = "<p class='col-sm-4 post-date text-center'><i class='far fa-clock'></i><time datetime='"+ele.dateTime+"'>"+ele.timeDesc+"</time>"
        content = content+time;
        var innerRow = $("<div class='row'>").html(content);
        var innerCont = $("<div class= 'col-sm-10 content'>").append(innerRow);
        var image = "<img src='"+ele.image+"' class='contentimage img-thumbnail'>";
        var imgDiv = $("<div class=' d-none d-sm-block d-md-block col-sm-2'>").html(image);
        var imgRow = $($("<div  class='row'>").append(imgDiv).append(innerCont));
        var contentSec = $("<div  class='col-sm-12 content-sec'>").html(imgRow);
        $("#scrollIndex").append(contentSec);   
    }

    var title = "<h5 class='card-title'><strong>Recent Post</strong></h5>";
    $("#recentPost").html(title);
    var self = $("#selfNavigate").val() == "1";
    
    for( var i =0; i<recentPost.length; i++ ){
        var ele = recentPost[i];
        var link = self? "../"+ele.tag+"/"+ele.page : "./"+ele.tag+"/"+ele.page;
        var con ="<p class='card-text'><a href='"+link+"'>"+ele.desc+".</a></p>";
        $("#recentPost").html(con);
    }


});