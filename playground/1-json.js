const fs = require('fs');

// const book = {
//     title: 'Ona tili',
//     author: 'Eshonqul Eshimmatov'
// };

// const bookJSON = JSON.stringify(book);
// fs.writeFileSync('1-json.json', bookJSON);

// const data = fs.readFileSync('./1-json.json');
// console.log(data.toString());

/////////////////////////////////Chellange
const troma = fs.readFileSync('./1-json.json');
const roma = JSON.parse(troma.toString());

roma.name = 'Raxmatjon';
roma.age = 19;

const userJSON = JSON.stringify(roma);
fs.writeFileSync('./1-json.json', userJSON);