function chainedFunctions(arr) {
  return x => {
    arr.forEach(func => {
      x = func(x);
    });
    return x;
  };
}
