function add(num) {
  let delimiter = ",";

  if (num === "") {
    return 0;
  } else if (num.slice(0, 2) === "//") {
    delimiter = num[2];
    console.log("New delimiter:", delimiter);
    num = num.slice(4);
  }

  const regexStr = new RegExp(delimiter + "|\n");
  const numArr = num.split(regexStr);

  let sum = 0;
  for (let i = 0; i < numArr.length; i++) {
    if (parseInt(numArr[i]) < 0) {
      throw "Negatives aren't allowed!";
    }
    sum += parseInt(numArr[i]);
  }
  return sum;
}

module.exports = add;
