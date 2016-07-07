var stack = [];

function countDown(int) {
  stack.push(int);
  if (int === 1) {
    return 1;
  }
    return countDown(int - 1);
}

function multiplyEach() {
  // Remove the last value of the stack
  // and assign it to the variable int
  int = stack.pop();
  x = stack.length;
  // Base case
  if (x === 0) {
    return int;
  }
  // Recursive case
  else {
    // last item in stack = previously last item times current last item
	stack[x - 1] = int * stack[x - 1];
	return multiplyEach();
  }
}
