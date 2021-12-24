var myInterval;
var numIteration;
var counter;
var div_counter;
var content = [
    "Miniature Nasa Rocket","Umbrella", "Extra Work from Bambang", "Free Sushi", 
    "One Shoe (not a pair)", "Scooter", "Out of Luck", "Travel Package",
    "Extra Work from Bambang", "Teddy Bear",  "Money Jackpot", "Out of Luck",
    "Laptop", "Extra Work from Bambang", "Ghost pet", "Free Burger" 
];


var emojis = 
[
    "&#x1F680","&#x1F302","&#x1F631", "&#x1F363",
    "&#x1F45F", "&#x1F6F4","&#x2620","&#x1F6EB",
    "&#x1F631", "&#x1F9F8","&#x1F4B5", "&#128128",
    "&#x1f4bb","&#x1f631", "&#x1F47B","&#x1F354"
];

function runGo(){
    var target = document.getElementById("button");
    let text = "Running";

    numIteration = Math.ceil(Math.random() * 20);
    numIteration +=10;

    counter = 0;
    div_counter =  0;    
    myInterval = setInterval(changeColor, 250);

    target.value = text;
    result = changeColor();
    console.log(result);
}

function changeColor(){
    if(counter >= numIteration){
        clearInterval(myInterval);
        document.getElementById("button").disabled = false;
        document.getElementById("button").value = "Play Again?";
        document.getElementById("output").innerText = result;
    }

    else{
        document.getElementById("output").innerText = ""; 
        let divs = document.querySelectorAll("div[id^='div_']");
        let color_active = "lightsalmon";
        let color_inactive = "powderblue";       

        for (let i = 0; i<divs.length; i++) {
             divs[i].innerHTML = emojis[i];
             document.getElementById("button").disabled = true;
       
            if(i==div_counter){
                divs[i].style.backgroundColor = color_active;
                result = "You got..." + content[i];    
            }
                
            else
                divs[i].style.backgroundColor = color_inactive;
        }

        counter++;
        div_counter++;

        if(div_counter>=divs.length){
            div_counter = 0;
        }
         
    }
   
}