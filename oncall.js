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
    localStorage.setItem("price",JSON.stringify(pricesdict));
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
