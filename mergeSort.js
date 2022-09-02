let input = [43,32,1,4,1,65,75,100,32];

function mergeSort(n) {
  if (n.length < 2) {
    return n;
  }

  //sort left haves
  let lh = mergeSort(n.slice(n.length / 2));
  //sort right haves
  let rh = mergeSort(n.slice(0, n.length / 2));
  //merge
  return merge(lh, rh);
}

function merge(arr1, arr2) {
  let res = [];
  while (arr1.length && arr2.length) {
    if (arr1[0] < arr2[0]) {
      res.push(arr1.shift());
    } else {
      res.push(arr2.shift());
    }
  }
  if (arr1.length) {
    return res.concat(arr1);
  } else {
    return res.concat(arr2);
  }
}

console.log(mergeSort(input));
