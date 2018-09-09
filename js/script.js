const profiles = ['DEVELOPER', 'DESIGNER',"NANDU K S"];
let timer = setInterval(myTimer, 1000);
let counter=0;
function myTimer() {
    var randomValue = profiles[counter];
    document.getElementById("profile").innerHTML = randomValue;
    counter++;
    if(counter==profiles.length)
        counter=0;
}
