const fs = require('fs');

// Ler o arquivo JSON
fs.readFile('data.json', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const jsonData = JSON.parse(data);

  // Filtrar objetos com name_japanese contendo a palavra "Carta" OU refine igual a true
  //const filteredData = jsonData.filter(item => (item.name_japanese && item.name_japanese.includes("Grevar")) || item.refine === "7");

   // Filtrar objetos com name_japanese contendo a palavra "Carta" com refine igual a true
   const filteredData = jsonData.filter(item => (item.name_japanese && item.name_japanese.includes("Vembrassa")) && item.refine === "7");

  // Ordenar pelo menor preço
  filteredData.sort((a, b) => a.price - b.price);

  // Extrair os campos desejados dos 3 menores preços
  const extractedFields = filteredData
    .slice(0, 3) // Pegar apenas os 3 primeiros elementos
    .map(item => {
      return {
        id: item.id,
        price: item.price,
        name_japanese: item.name_japanese,
        vendor_name: item.vendor_name,
        refine: item.refine
      };
    });

  console.log(extractedFields);
});
