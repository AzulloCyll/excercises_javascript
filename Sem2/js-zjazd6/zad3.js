// Write a function that rotates a list by k elements. For example [1,2,3,4,5,6]
// rotated by two becomes [3, 4, 5, 6, 1, 2]. Try solving this without creating a copy of the list.

let list = [1, 2, 3, 4, 5, 6];
let k = 2;

rotateList = (k) => {
  for (let i = 0; i < k; i++) {
    let el = list.shift();
    list.push(el);
  }
  return list;
};

console.log(rotateList(k));
