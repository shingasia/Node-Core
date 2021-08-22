const path = require("path");

console.log(path.basename('C:/temp/myfile.txt'));
// path.basename() 함수는 POSIX와 Windows에서 결과가 다르다.
// 'myfile.txt' (Windows) , 'C:/temp/myfile.txt' (POSIX)

console.log(path.win32.basename('C:\\Users\\shing\\myfile.html')); //myfile.html
console.log(path.posix.basename('/dev/sdb1')); //sdb1

console.log(path.delimiter); // ; (Windows), : (POSIX)
console.log(path.posix.sep, path.win32.sep);// '\' (Windows), '/' (POSIX)

console.log(process.env.PATH.split(path.delimiter));

console.log(path.dirname('/etc/mydir/temp/assignment.txt'));
// '/etc/mydir/temp'
console.log(path.extname('/etc/rc.d')); // '.d'
console.log(path.extname('/etc/xinetd.d')); // '.d'
console.log(path.extname('/boot/grub/grub.cfg')); // '.cfg'


// path.parse()와 반대의 역할을 하는 함수
console.log(path.format({ 
    root: '/ignored',
    dir: '/home/user/dir',
    base: 'file.txt'
})); // '/home/user/dir\file.txt'
// path.format(객체) 객체로 부터 경로 문자열을 반환 (객체는 dir, root, base, name, ext 속성을 가진다)
// dir 속성이 있으면 root 속성은 무시된다. 그리고 base 속성이 있으면 ext 속성과 name 속성은 무시된다

const pathdata = [ path.isAbsolute('//server'),
                   path.isAbsolute('\\\\server'),
                   path.isAbsolute('C:/foo/..'),
                   path.isAbsolute('C:\\foo\\..'),
                   path.isAbsolute('bar\\baz'),
                   path.isAbsolute('bar/baz') ];
console.log(pathdata); // [ true, true, true, true, false, false ]




