/* 
visos galimas laikrodzio kombinacijos valandos tikslumu
nuo 1 iki 12
formatas: 1:00, 2;00
*/

// for (i = 1; i <= 12; i++) {
//     console.log(i + ":00")
// }


for (h = 0; h <= 23; h++) {
    for (m = 0; m <= 59; m += 1) {
        for (s = 0; s <= 59; s += 1) {
            if (s < 10 && m < 10) {
                console.log(h + ":0" + m + ':0' + s);
            } else if (s < 10) {
                console.log(h + ":" + m + ':0' + s);
            } else if (m < 10) {
                console.log(h + ":0" + m + ':' + s);
            } else {
                console.log(h + ":" + m + ':' + s);
            }
        }
    }
}