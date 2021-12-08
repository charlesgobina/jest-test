const rString = (string) => {
    string = Array.from(string)
      return string.reverse().join('').toString()
}

module.exports = rString