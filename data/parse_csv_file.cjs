const fs = require('fs');
const csv = require('csv-parser');

const results = [];

fs.createReadStream('data/datasource.csv')
  .pipe(csv())
  .on('data', (data) => {
    const transformedData = {
      Country: data.Country,
      Code: data['Código'],
      Category: data.Category,
      SubCategory: data["Sub Category"], 
      Name: data.Name,
      ShortDesc: `${data.SubCategory} / ${data.Name}`,
      Description: data.Description,
      Source: data.Source,
      Frequency: data.Frequency,
      Decimal: parseInt(data.Decimal),
      License: data.License,
      Interfaces: data['Interfaces'].split(',').map(item => item.trim()),
    };
    results.push(transformedData);
  })
  .on('end', () => {
    fs.writeFileSync('src/data/output.json', JSON.stringify(results, null, 2));
    console.log('Arquivo JSON gerado com sucesso: output.json');
  });