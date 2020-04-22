function missingNum(arr, l, r) {
  while(l<=r) {
      let mid = Math.floor((l+r)/2);
     
        if ((arr[mid] - arr[l]) != (mid - l)) {
          
          if ((mid - l) == 1 && (arr[mid] - arr[l] > 1)) {
              return (arr[mid] - 1);
          }
          return missingNum(arr, l, mid)
          // missingNum(arr, mid+1, r)

        } else if ((arr[r] - arr[mid]) != (r - mid)) {
           
          
          // missingNum(arr, l, mid)
          if ((r - mid) == 1 && (arr[r] - arr[mid] > 1)) {
              return (arr[mid] + 1);
          }
          return missingNum(arr, mid+1, r)
        } else {
            return -1;
        }
    }
    return -1;
}
let items = [4, 5, 7,8, 9, 10]
let missing = missingNum(items, 0, items.length-1)
console.log(missing)