let number = 0;

do {
    if (number === 0) {
        console.log(`${number} - це нуль`);
    } else if (number % 2 === 0) {
        console.log(`${number} - це парне число`);
    } else {
        console.log(`${number} - це непарне число`);
    }
    number++;
} while (number <= 10);
