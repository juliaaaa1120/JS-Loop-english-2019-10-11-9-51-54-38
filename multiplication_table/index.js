for (var i = 1; i < 10; i++) {
    var table = []
    for (var j = 1; j <= i; j++) {
        table.push(i + "*" + j + "=" + (i*j))
    }
    console.log(table.join(" "))
}