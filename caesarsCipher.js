function rot13(str) {
  let convertedWords = ''
  const mapping = {
    N:'A',
    O:'B',
    P:'C',
    Q:'D',
    R:'E',
    S:'F',
    T:'G',
    U:'H',
    V:'I',
    W:'J',
    X:'K',
    Y:'L',
    Z:'M',
    A:'N',
    B:'O',
    C:'P',
    D:'Q',
    E:'R',
    F:'S',
    G:'T',
    H:'U',
    I:'V',
    J:'W',
    K:'X',
    L:'Y',
    M:'Z'
  }

  str.split('').forEach(letter => {
      convertedWords += mapping[letter] ? mapping[letter] : letter
    })
  return convertedWords;
}

console.log(rot13("SERR PBQR PNZC"));

rot13("SERR PBQR PNZC");