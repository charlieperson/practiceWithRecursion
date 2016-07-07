function countSheep(number) {
  if (number === 0) {
    console.log("Zzzzzz");
  } else {
	console.log("Another sheep jumps over the fence.");
	countSheep(number - 1);
  }
}
