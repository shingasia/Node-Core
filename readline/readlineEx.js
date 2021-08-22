const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (input) => {
    console.log(`줄바꿈이나 캐리지리턴을 입력하였습니다. ${input}`);
    
    rl.question('가장 좋아한는 음식은 무엇인가요??  ', (answer) => {

        console.log(`당신이 가장 좋으하는 음식은 ${answer} 이군요! `);
        rl.close();
    });



});



