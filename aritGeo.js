function ArithGeo(arr) { 
    var arit = [];
    var geo = [];

    if(arr.length < 1){
        console.log("empty arry entered");
        return 0;
    }

    for (i=0; i<arr.length-1; i++){
        arit.push(arr[i+1]-arr[i]);
        geo.push(arr[i+1]/arr[i]);
    }
     
    aritFlag = true;
    geoFlag = true;
    for (i=0; i<arit.length-1; i++){
        if(arit[i+1] !== arit[i]){
            aritFlag = false;
        }
    if(geo[i+1] !== geo[i]){
        geoFlag = false;
        }
    }
 
    if(aritFlag) {
        return 'Arithmetic'
    } else if (geoFlag) {
        return 'Geometric'
    } else {
      return '-1'
    }
}

module.exports = ArithGeo;

console.log(ArithGeo([]));