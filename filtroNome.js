const fs = require('fs');

// Ler o arquivo JSON
fs.readFile('data.json', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const jsonData = JSON.parse(data);

  // Filtrar objetos com name_japanese contendo a palavra "Carta"
  const filteredData = jsonData.filter(item => item.name_japanese && item.name_japanese.includes("Carta"));
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
