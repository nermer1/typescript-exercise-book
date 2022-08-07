var ot_data = [
    {
        "TEST": 10,
        "WRBTR": 0
    },
    {
        "TEST": 50,
        "WRBTR": 0
    },
    {
        "TEST": 40,
        "WRBTR": 0
    }
]

console.log(test(ot_data));
console.log(ot_data);
function test(ot_data) {
    return ot_data.reduce(function(a, b, c) {
        ot_data[c]['WRBTR'] = Math.floor(10000.95 * b['TEST'] / 100);
        a['total1'] += Number(((10000.95 * b['TEST'] / 100) % 1).toFixed(3));
        return a;
    }, {total1: 0, total2: 0});
}