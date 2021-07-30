function $(id) {
    return document.getElementById(id);
}

function init() {

}

function compress() {
    // var table = $('input').value.split('\n');
    // console.log(table);
    // for (var i=0; i<4; i++) {
    //     for (var j=0; j<7; j++) {
    //         console.log(table[i][j]);
    //     }
    // }
    // var i = 
    var table = $('input').value;
    $('output').innerHTML = table.replaceAll('\n', '');
}

function calcTotals() {
    var acc = Array(7*4).fill(0) 
    // var values = $('input').value.split('\n');
    var values = $('input').value.split('\n');
    console.log(values);
    values.forEach(row => {
        for (var i=0; i<7*4; i++) {
            if (row[i] == '#') { acc[i]++; }
            // if (values[i] == '.')
    }
    });
    return acc;
}

function pprint(totals) {
    var acc = '';
    for (var i = 0; i < totals.length; i++) {
        acc+=String(totals[i])+'-';
        if (i%7 == 6) { acc+='\n'; }
    }
    return acc;
    
}

function display() {
    var totals = calcTotals();
    $('output').innerHTML = pprint(totals);

}