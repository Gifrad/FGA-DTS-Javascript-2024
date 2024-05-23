const range1 = function(x1){
    return x1;
    }
    
    const range2 = function(x2){
        return x2
    }
    
    const ganjil3dan5 = function(x1,x2){
        const rangeOne = range1(x1);
        const rangeTwo = range2(x2);
        for (let i = rangeOne; i < rangeTwo; i++) {
            if (i % 3 === 0 && i % 5 === 0) {
                console.log(i);
            }
            
        }
    }
    
    ganjil3dan5(1,100);
    
    // Gilang
    