const diena = 0;
if (diena === 1) {
    console.log('pirmadienis');
} else if (diena === 2) {
    console.log('antradienis')
}

switch (diena) {
    case 1: {
        console.log('pirmadienis');
        break;
    }
    case 2: {
        console.log('antradienis');
        break;
    }
    case 3: {
        console.log('treciadienis');
        break;
    }
    case 4: {
        console.log('hetvirtadienis');
        break;
    }
    case 5: {
        console.log('penktadienis');
        break;
    }
    case 6: {
        console.log('sestadienis');
        break;
    }
    case 7: {
        console.log('sekmadienis');
        break;
    }
    default:
        console.log('ERROR')
        break;
}

const stop = 'Lvovo2';
switch (stop) {
    case 'N. Vilnia1':
        console.log('N. Vilnia');

    case 'Tremtiniu1':
        console.log('Tremtiniu');

    case 'Rudens1':
        console.log('Rudens');

    case 'K. Mindaugo1':
        console.log('K. Mindaugo');

    case 'Z. Tiltas1':
        console.log('Z. Tiltas');
        break;

    case 'Lvovo2':
        console.log('Lvovo');

    case 'K. Mindaugo2':
        console.log('K. Mindaugo');

    case 'Rudens2':
        console.log('Rudens');

    case 'Tremtiniu2':
        console.log('Tremtiniu');

    case 'N. Vilnia2':
        console.log('N. Vilnia');
}