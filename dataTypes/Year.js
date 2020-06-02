function centuryFromYear(year) {
    var century = 0;
    if (year > 0 && year <= 100){
        var kek = year / 100
        var lul = Math.ceil(kek)
        return (lul )
    } else if (year > 100 && year <= 1000) {
        console.log("dois")
        var kek = year / 100
        var lul = Math.ceil(kek)
        return (lul )
    } else if (year > 1001) {
        console.log("tres")
        var kek = year / 100
        var lul = Math.ceil(kek)
        return (lul )
    }

} 
console.log (centuryFromYear(1978))