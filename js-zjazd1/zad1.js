//From years in array check for leap years [1974, 1900, 1985, 2000]

let arr = [1974, 1900, 1985, 2000];

for (let i = 0; i < arr.length; i++) {
  let value = arr[i];
  if ((value % 4 === 0 || value % 100 === 0) && value % 400 !== 0)
    console.log(arr[i]);
}
