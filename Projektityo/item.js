// Otetaan mongoose käyttöön
const mongoose = require('mongoose');
// Luodaan skeema
const Schema = mongoose.Schema;
// Luodaan item-skeema
let item = new Schema ( {
    items: {
        type: Array
    }
},
    { collection: 'items'}
);
// Tarjoa pääsy tähän
module.exports = mongoose.model('items', item);