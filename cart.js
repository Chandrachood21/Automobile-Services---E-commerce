
var pricesdict = {
    "JK Tyre":5000,
    "MRF Tyre":5400,
    "Scorpion Tyre":6000,
    "Yokohama Tyre":6500,
    "Alloy Wheel":10000,
    "Heavy Wheel":12000,
    "Peda Wheel":13000,
    "Racing Wheel":16000,
    "Hard Suspension":16000,
    "Soft Suspension":17000,
    "Medium Suspension":20000,
    "Race Car Suspension":25000,
    "Xenon Headlight":14000,
    "Projector Headlight":9000,
    "Halogen Headlight":7000,
    "LED Headlight":10000,
    "Flat Bottom":9000,
    "3-Spoke":6000,
    "4-Spoke":5000,
    "Racing Steering":12000,
    "ORVM":6000,
    "IRVM":3000,
    "Vertical-ORVM":4000,
    "ORVM-Indicators":8000,
    "Disk Brakes":14000,
    "Double Disk Brakes":20000,
    "Drum Brakes":10000,
    "ABS":24000,
    "Spark Plug":4000,
    "Air Filter":2000,
    "Engine Oil":5000,
    "Coolant":3000
}

var totalsum = 0;
var finals = JSON.parse(localStorage.getItem("final"));

window.onload = function displaycarts(){
    for(var i=0; i<finals.length; i++)
    {
        var j = i+1;
        totalsum += pricesdict[finals[i]];
        document.getElementById("demo").innerHTML += "<span class='innerleft'>"+j+". "+finals[i]+"</span><span class='innerright'>Rs."+pricesdict[finals[i]]+"</span><br>";
    }
    if(totalsum!=0){
        document.getElementById("demo").innerHTML += "<span class='innercenter'><br><br>Total Price: Rs."+totalsum+"</span>";
    }
    
}