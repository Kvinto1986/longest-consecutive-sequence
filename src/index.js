module.exports = function longestConsecutiveLength(array) {
    var result=0;
        var best=1;
        var min=0;
        array.sort(function(a, b) {
            return a - b;
        })

            for(var j=0;j<array.length;j++){
                min=array[j]


                if(array.length<1){
                    break
                }
                if(array.length==1){
                    result=1
                    break
                }
                if (array[j+1]==min+1) {
                    best++

                }

                else if(array[j+1]>min+1){
                    best=1;

                }
                if (best>result){
                    result=best
                }

            }
            return result
        }








