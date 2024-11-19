const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Escreva seu nome: ', (name) => {
    const nome = name;

    rl.question('Escreva seu xp: ', (exp) => {
        let nivel;
        const xp = parseInt(exp, 10);

        if (xp <= 1000) {
            nivel = "Ferro";
        } else if (xp <= 2000) {
            nivel = "Bronze";
        } else if (xp <= 5000) {
            nivel = "Prata";
        } else if (xp <= 7000) {
            nivel = "Ouro";
        } else if (xp <= 8000) {
            nivel = "Platina";
        } else if (xp <= 9000) {
            nivel = "Ascendente";
        } else if (xp <= 10000) {
            nivel = "Imortal";
        } else if (xp <= 12000) {
            nivel = "Radiante";
        } else {
            nivel = "Nível desconhecido";
        }

        console.log(`O Herói de nome: ${nome} está no nível: ${nivel}`);
        rl.close();
    });
});
