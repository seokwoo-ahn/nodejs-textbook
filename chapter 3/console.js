const string = 'abc'
const number = 1;
const boolean = true;
const obj = {
    outside: {
        inside:{
            key: 'value'
        }
    }
}

console.time('실행 시간')
console.log('로그입니다')
console.log(string, number, boolean)
console.error('에러')

console.table([{ name:'carnberry',birth: 1992 }, {name: 'sir', birth: 1995}])

console.dir(obj, {colors: false, depth: 2})
console.dir(obj, {colors: true, depth: 1})

function b() {
    console.trace('에러 위치 추적')
}
function a() {
    b()
}
a()

console.timeEnd('실행 시간')