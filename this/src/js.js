var eightBall = {
    index: 2,
    advise: ['yes', 'no', 'maybe', 'not a chance'],
    shake: function () {
        this.index = eightBall.index + 1;
        if (this.index >= this.advise.length){
            this.index = 0;
        };
    },
    look:function(){
            return this.advise[this.index];
        }
};
eightBall.shake();
console.log(eightBall.look());