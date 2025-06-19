// function analyzeData(data: unknown): void {
//   if (typeof data === 'string') {
//     console.log(data.toUpperCase());
//   }
//   else if (typeof data === 'number') {
//     console.log(data * 2);
//   } else if (typeof data === 'boolean') {
//     console.log(data ? 'Si' : 'No');
//   } else {
//     console.log('Tipo non supportato');
//   }
// }


// analyzeData("hello");
// analyzeData(5);
// analyzeData(true);
// analyzeData(false);
// analyzeData({});

type Dipendente = {
  nome: string,
  cognome: string,
  annoNascita: number,
  sesso: "m" | "f",
  anniDiServizio: number[],
}

const dipendente1: Dipendente = {
  nome: "Jasdine",
  cognome: "Galdo",
  annoNascita: 1993,
  sesso: "f",
  anniDiServizio: [2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023]
}
console.log(dipendente1);
