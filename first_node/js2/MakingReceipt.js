const dishs = require('./MenuInfo');

const calculateAll = (icecream, hamburger) => {
    let result=0;
    for(let i=0; i<icecream.length;i++){
        
        let {size: {싱글레귤러:price}} = icecream[i];
        result += price;
    }
    for(let i=0; i<hamburger.length;i++){
        let {price} = hamburger[i];
        result += price;
    }
    console.log(result);
};

calculateAll(dishs.베스킨라빈스, dishs.맥도날드);
