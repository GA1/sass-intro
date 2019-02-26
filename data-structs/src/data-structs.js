const map = new Map()
map.set(1, 'a')
map.set(2, 'b')


function f() {
    console.log(map.keys())
    console.log(map.values())
    return map.get(1)
}


module.exports = f;