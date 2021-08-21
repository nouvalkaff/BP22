/**
 * Read file with Synchronous or Asynchronous, you can choose one method
 * Create new data to file dummyData.js
 * Don't replace existing data, only added the new data
 * new data ['mango','avocado','durian','guava']
 */
 var fs = require('fs');
 const read = fs.readFileSync('dummyData.js', 'utf8');

 var input = read.replace('];', '');

 const kotakBuah = "'mango', 'avocado', 'durian', 'guava'";
 
 const write = () => {
 try{
 fs.writeFileSync('dummyData.js', input + `,${kotakBuah}]`)
 console.log('Berhasil ditambah!');
 } catch (err) {
     console.log('Error: gagal!');}
 }
 write();