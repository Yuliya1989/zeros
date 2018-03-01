module.exports = function getZerosCount(number) {
  // your implementation
var z=0;

for (var i=5; i<number; i=i*5) {
z=z+Math.floor(number/i);
}

return z;
}
