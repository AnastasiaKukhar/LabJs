let num = 2;

while (num <= 100) {
    let Proste = true;
    let dilnuk = 2;

    while (dilnuk <= num) { 
        if (num !== dilnuk && num % dilnuk === 0) {  //дві умови, не дорівнює нум і ділиться без остачі
            Proste = false; 
            break;
        }
        dilnuk++; // Збільшуємо дільник і перевіряємо
    }

    if (Proste) {
        console.log(num);
    }

    num++;
}
