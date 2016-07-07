// Here is the array we will store results in
var multiples = [];

function multiplesOf(base, i) {
  if (i < 0) {
	  return multiples;
  }
  else {
    multiples[i - 1] = base * i;
	multiplesOf(base, i - 1);
  }
}

multiplesOf(10, 5);
