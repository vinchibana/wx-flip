const chars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

const random = function generateMixed(n) {
  let res = "";
  for (let i = 0; i < n; i++) {
    const id = Math.ceil(Math.random() * 35);
    res += chars[id];
  }
  return res;
}

function breakSection(text) {
}

module.exports = {
  random: random,
  breakSection: breakSection
}
