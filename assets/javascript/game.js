//do this when it loads

window.onload = function() {
//initialize the variables
var diamondNum = Math.floor(Math.random() * 12) + 1;
var emeraldNum = Math.floor(Math.random() * 12) + 1;
var purpleNum = Math.floor(Math.random() * 12) + 1;
var rubyNum = Math.floor(Math.random() * 12) + 1;

//reset function
function reset(){
    randNum = Math.floor(Math.random() * 102) + 19;
    $("#randomNum").html("<h3>"+ randNum +"</h3>");
    $("#score").html("<h3>0</h3>");
    diamondNum = Math.floor(Math.random() * 12) + 1;
    emeraldNum = Math.floor(Math.random() * 12) + 1;
    purpleNum = Math.floor(Math.random() * 12) + 1;
    rubyNum = Math.floor(Math.random() * 12) + 1;
    score=0;
}

reset();
 //declaring variables
    var score = 0;
    var wins=0;
    var losses= 0;

//click functions
    $("#diamond").on("click", function numRand(){
        //Do this when the score is 0
        if (score ===0){
            score = diamondNum;
            $("#score").html("<h3>"+score+"</h3>");
        }
        //Otherwise do this
        else {
            score += diamondNum;
            $("#score").html("<h3>"+score+"</h3>");  
            //if score is not zero, add until the random number is equal to 0.
            if(score === randNum){
                wins++;
                $("#winLose").html("You win!<br>Wins:" + wins+"<br>Losses:"+losses);
                reset();
            }
            //if score is not 0, add until the random number is greater than 0
            if(score > randNum){
                losses++;
                $("#winLose").html("You lose!<br>Wins:" + wins+"<br>Losses:"+losses);
                reset();
            }
        }
        
    });
    $("#emerald").on("click", function numRand(){
        if(score ===0){
            score = emeraldNum;
            $("#score").html("<h3>"+score+"</h3>");
        }
        else {
            score += emeraldNum;
            $("#score").html("<h3>"+score+"</h3>");   

            if(score === randNum){
                wins++;
                $("#winLose").html("You win!<br>Wins:" + wins+"<br>Losses:"+losses);
                reset();
            }
            if(score > randNum){
                losses++;
                $("#winLose").html("You lose!<br>Wins:" + wins+"<br>Losses:"+losses);
                reset();
            }
        }
    });
    $("#purple").on("click", function numRand(){
        if(score ===0){
            score = purpleNum;
            $("#score").html("<h3>"+score+"</h3>");
        }
        else {
            score += purpleNum;
            $("#score").html("<h3>"+score+"</h3>");   

            if(score === randNum){
                wins++;
                $("#winLose").html("You win!<br>Wins:" + wins+"<br>Losses:"+losses);
                reset();
            }
            if(score > randNum){
                losses++;
                $("#winLose").html("You lose!<br>Wins:" + wins+"<br>Losses:"+losses);
                reset();
            }
        }
    });
    $("#ruby").on("click", function numRand(){
        if(score ===0){
            score = rubyNum
            $("#score").html("<h3>"+score+"</h3>");
        }
        else {
            score += rubyNum;
            $("#score").html("<h3>"+score+"</h3>");  

            if(score === randNum){
                wins++;
                $("#winLose").html("You win!<br>Wins:" + wins+"<br>Losses:"+losses);
                reset();
            }
            if(score > randNum){
                losses++;
                $("#winLose").html("You lose!<br>Wins:" + wins+"<br>Losses:"+losses);
                reset();
            }
        }
    });

};




