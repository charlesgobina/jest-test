const stringLength = (string) => {
  let count = 0;
  for (let i = 0; i < string.length; i += 1) {
    count = i
  }

  if (count >= 1 && count <= 10) {
    return true
  } else {
    return false
  }
}

  
module.exports = stringLength