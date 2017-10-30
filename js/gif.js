$(document).ready(function() {
        $(".gifHover1").hover(
            function() {
                $(this).attr("src", "/pics/nikkeiGif.gif");
            },
            function() {
                $(this).attr("src", "/pics/nikkei.png");
            }                         
        );                  
    });

$(document).ready(function() {
        $(".gifHover2").hover(
            function() {
                $(this).attr("src", "/pics/testGif2.gif");
            },
            function() {
                $(this).attr("src", "/pics/precise.png");
            }                         
        );                  
    });

