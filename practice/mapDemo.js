const arrayLike = {
    0: 2,
    1: 3,
    2: 4,
    3: 5, // ignored by map() since length is 3
  };
  console.log(Array.prototype.map.call(arrayLike, (x) => x ** 2));
  // [ 4, 9, 16 ]
  