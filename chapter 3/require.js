console.log('require가 가장 위에 오지 않아도 됩니다')
module.exports = "cranberry!!!"

require('./helloworld.js')
require('./filename')

console.log('require cache입니다')
console.log(require.cache)
console.log('require main입니다')
console.log(require.main === module)
console.log("require main file 이름 입니다")
console.log(require.main.filename)