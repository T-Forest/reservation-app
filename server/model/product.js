
const mongoose = require('mongoose')
const Schema = mongoose.Schema
//const ObjectId = Schema.ObjectId;

const ProductsSchema = new Schema({
  //author: ObjectId,
  coverImage: String,
  name: {type: String, required: true, max:[60, '最大60文字までです']},
  price: Number,
  description: String,
  heading1: {
      head: String,
      desc: String
  },
  heading2: {
    head: String,
    desc: String
},
  heading3: {
    head: String,
    desc: String
}
})

module.exports = mongoose.model('Product', ProductsSchema)

// coverImage: './assets/img/phone-cover.jpg',
// name: 'Phone XL',
// price: 799,
// description: 'A large phone with one of the best screens',
// heading1: {head: 'head1',desc: 'This is heading1 description'},
// heading2: {head: 'head2',desc: 'This is heading2 description'},
// heading3: {head: 'head3',desc: 'This is heading3 description'}
