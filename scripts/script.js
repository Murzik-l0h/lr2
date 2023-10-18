    function moveElements() {
        document.getElementById("cell7").innerHTML = document.getElementById("firstParagraph").innerHTML;
        document.getElementById("cell8").innerHTML = document.getElementById("secondParagraph").innerHTML;
        document.getElementById("cell9").innerHTML = document.getElementById("thirdParagraph").innerHTML;
        document.getElementById("cell1").innerHTML = document.getElementById("firstTitle").innerHTML;
        document.getElementById("cell2").innerHTML = document.getElementById("secondTitle").innerHTML;
        document.getElementById("cell3").innerHTML = document.getElementById("thirdTitle").innerHTML;
        document.getElementById("contentPage").innerHTML=" ";

        document.getElementById("cell4").remove();
        document.getElementById("cell5").remove();
        document.getElementById("cell6").remove();
    }