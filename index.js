// ! Dont change this code
const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

// @ Try to check and change the filterOddNumber function
// Ex: given param = [1, 2, 3, 4, 5], then return must [2, 4] not "1,3,5"
const filterOddNumber = (arr) => {
  return arr.filter((num) => num % 2 === 0);
};
/**
 * Write your description here, why the function is not working?
 * Fungsi filterOddNumber dirancang untuk menyaring angka genap dari array input dan mengembalikan array hasil dari angka ganjil tersebut. 
 * Namun, implementasi saat ini mengonversi array yang telah difilter menjadi string menggunakan toString(),
 * yang menyebabkan fungsi mengembalikan representasi string alih-alih array.Ini menyebabkan perilaku yang tidak benar, 
 * terutama saat membandingkan hasil dalam kasus pengujian menggunakan matcher toEqual.
 * Untuk memperbaiki masalah ini, metode toString() harus dihapus, dan fungsi seharusnya langsung mengembalikan array dari angka ganjil.
 */

// ! Dont change this code
const epochDateToUTC = (epochDate) => {
  const d = new Date(0);
  d.setUTCSeconds(epochDate);
  return d.toUTCString();
};

// ! Dont change this code
module.exports = {
  capitalize,
  filterOddNumber,
  epochDateToUTC,
};
