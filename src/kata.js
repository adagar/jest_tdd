const add = (string) => {
  let separator = ",";
  let sum = 0;
  let negs = [];

  if (string.length === 0) {
    return sum;
  } else if (string.slice(0, 2) === "//") {
    separator = `${string[2]}`;
    string = string.slice(4);
  }

  const separatorRegExp = new RegExp(`[\n${separator}]`);
  const numList = string.split(separatorRegExp);

  for (let i = 0; i < numList.length; i++) {
    let intVal = parseInt(numList[i]);
    if (intVal < 0) {
      negs.push(intVal);
    } else {
      sum += intVal;
    }
  }
  if (negs.length > 0) {
    throw `negatives not allowed: ${negs}`;
  }
  return sum;
};

module.exports = add;
