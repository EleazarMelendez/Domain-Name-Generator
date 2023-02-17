let article = ["a", "one", "the"];
let adjective = ["black", "great", "simple", "worthwile"];
let noun = ["color", "dog", "car"];
let domainSuffix = [".com", ".net", ".org", ".miami"];

function generateDomain(article, adjective, noun, domainSuffix) {
  let domains = [];
  for (let x of article) {
    for (let y of adjective) {
      for (let z of noun) {
        for (let u of domainSuffix) {
          domains.push(x + y + z + u);
        }
      }
    }
  }
  return domains;
};

console.log(generateDomain(article, adjective, noun, domainSuffix));