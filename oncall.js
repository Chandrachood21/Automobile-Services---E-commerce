var pricesdict = {
    "JKTyre":5000,
    "MRFTyre":5400,
    "ScorpionTyre":6000,
    "YokohomaTyre":6500,
    "AlloyWheel":10000,
    "HeavyWheel":12000,
    "PedaWheel":13000,
    "RacingWheel":16000,
    "HardSuspension":16000,
    "SoftSuspension":17000,
    "MediumSuspension":20000,
    "Race_Car_Suspension":25000,
    "XenonHeadlight":14000,
    "ProjectorHeadlight":9000,
    "HalogenHeadlight":7000,
    "LEDHeadlight":10000,
    "FlatBottom":9000,
    "3Spoke":6000,
    "4Spoke":5000,
    "RaceingSteering":12000,
    "ORVM":6000,
    "IRVM":3000,
    "VerticalORVM":4000,
    "ORVM-Indicators":8000,
    "DiskBrakes":14000,
    "DoublediskBrakes":20000,
    "DrumBrakes":10000,
    "ABS":24000,
    "SparkPlug":4000,
    "AirFilter":2000,
    "EngineOil":5000,
    "Coolant":3000
}

var totalsum = 0;
var finalstack = [];

function oncalls(iden){
    var temparray = [];
    var v = document.getElementById(iden).getElementsByTagName("input");
    for(var i=0; i<v.length; i++){
        if(v[i].checked){
            finalstack.push(v[i].name);
        }
    }
    //finalstack.push(temparray);
}

function sends(){
    localStorage.setItem("final",JSON.stringify(finalstack));
    document.write(JSON.stringify(finalstack));
}


function displaycart(){
    for(var x=0; x<finalstack.length; x++){
            document.write(finalstack[x]);
    }
}

function dispsum(){
    for(var x=0; x<finalstack.length; x++){
        for (var y=0; y<finalstack[x].length; y++){
            totalsum = totalsum + pricesdict[finalstack[x][y].id];
    
        }
    }
    document.write(totalsum);
}
