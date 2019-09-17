const randomName = require('random-name');

const fs = require('fs');

const a = (ArrayLength) => {
  const data = [];
  const categories = ['Mandatory', 'Discretionary'];
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < ArrayLength; i++) {
    const raduis = Math.floor(Math.random() * 1000) + 1;
    const diffRate = Math.floor(-100 + Math.random() * 300) + 1;
    const name = `${randomName.first()} ${randomName.last()}`;
    const category = categories[i % 2];

    data.push({
      raduis,
      diffRate,
      name,
      category,
      key: i,
      // x: Math.random() * 800,
      // y: Math.random() * 400,
    });
  }

  return data;
};

// export default a;

fs.writeFile('data.json', JSON.stringify(a(50)), (err, res) => {
  console.log(err);
});
