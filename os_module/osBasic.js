const os = require('os');

console.log("os.EOL              >>> "+os.EOL); // 운영체제별 EOL(end-of-line) 표기방법 \n(POSIX), \r\n(Windows)
console.log("os.arch()           >>> "+os.arch()); 
// Node.js 바이너리가 컴파일된 운영 체제 CPU 아키텍처를 반환합니다. (process.arch 와 동일하다)
// 가능한 값은 'arm', 'arm64', 'ia32', 'mips', 'mipsel', 'ppc', 'ppc64', 's390', 's390x', 'x32', 'x64'.

console.log("------------- os.cpus() -------------");
// cpu 코어 정보를 객체가 담긴 배열로 리턴

for(core of os.cpus()){
    console.dir(core, {depth: 2});
}

console.log(`os.freemem()        >>> ${os.freemem()}`);
// 사용 가능한 메모리(RAM)의 용량을(bytes) 보여준다.

console.log(`os.getPriority(pid) >>> ${os.getPriority(0)}`);
// os.getPriority([pid]) pid : 스케줄링 우선순위를 검색할 프로세스 ID. 기본값 : 0

console.log(`os.homedir()        >>> ${os.homedir()}`);
// 현재 사용자의 홈 디렉토리 경로를 문자열로 반환

console.log(`os.hostname()       >>> ${os.hostname()}`);
// 운영체제의 호스트 이름을 반환
console.log("------------- os.networkInterfaces() -------------");
console.dir(os.networkInterfaces(), {depth : 2});

// os.setPriority([pid, ] priority); 프로세스에 우선순위를 설정

console.log(`os.totalmem()       >>> ${os.totalmem()}`); // 시스템 메모리의 총량(바이트)을 정수로 반환
console.log(`os.type()           >>> ${os.type()}`); // 운영체제 이름

console.log(`------------- os.constants.signals -------------`);
console.log(os.constants.signals); // 시그널 번호
