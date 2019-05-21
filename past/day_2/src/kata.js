const add = (string) => {
  let delimiter = ",";
  if (string.slice(0, 2) === "//") {
    delimiter = string[2];
    string = string.slice(4, string.length);
  }
  string = string.replace(/(\n)/, delimiter);

  if (string === "") {
    return 0;
  } else {
    let intArr = string.split(delimiter);
    let sum = 0;
    for (let i = 0; i < intArr.length; i++) {
      if (parseInt(intArr[i]) < 0) {
        console.log(intArr[i]);
        throw "negatives not allowed";
      }
      sum += parseInt(intArr[i]);
    }
    return sum;
  }
};

module.exports = add;
