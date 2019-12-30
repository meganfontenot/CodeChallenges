function chainedFunctions(arr) {
  return x => {
    arr.forEach(func => {
      x = func(x);
    });
    return x;
  };
}

function a(x) {
  return x + '!';
}
function b(x) {
  return x + '?';
}
function c(x) {
  return 'Hello ' + x;
}
function d(x) {
  return x + ' ¯\\_(ツ)_/¯';
}

console.log(chainedFunctions([c, a, a, d, b])('Bonn'));

//  SOLUTION  //
function chainedFunctions(arr) {
  return x => {
    arr.forEach(func => {
      x = func(x);
    });
    return x;
  };
}
