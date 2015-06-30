MOD.itemsRepo = {
    getItemsCount: function(){
        return MOD.items.length;
    },
    getIterator:function(startIdx, maxSequenceSize){
        var currIdx,endIdx;
        function init() {
            if(startIdx<0 || maxSequenceSize<=0) {
                throw {
                    message: "startId = " + startIdx + "sequenceSize = " + maxSequenceSize +
                    ". They must both be positive"
                }
            }
            currIdx = startIdx;
            endIdx = startIdx + maxSequenceSize - 1;
            if(endIdx>=MOD.items.length-1){
                endIdx = MOD.items.length-1;
            }
        }

        function hasNext(){
            return currIdx<=endIdx;
        }
        function next(){
            if(!hasNext()){
                throw{
                    message: "iterator passed last"
                }
            }
            return MOD.items[currIdx++];
        }
        init();
        return{
            hasNext: hasNext,
            next: next
        }
    }
};