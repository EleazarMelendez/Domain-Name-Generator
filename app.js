let pronoun = ['the','our', 'one', 'many', ];
let adj = ['great', 'big', 'old', 'rich', 'blue'];
let noun = ['jogger','racoon','boat','maserati'];

function generateDomain (a,b,c) {
    for (let i = 0; i < a.length; i++) {
        let element1 = a[i];
        return element1;}
        for (let j = 0; j < b.length; j++) {
            let element2 = b[i][j];
            return element2;
            }
            for (let k = 0; k < c.length; k++) {
                let element3 = c[i][j][k];
                return element3;
                }
        console.log(element1+element2+element3)
}

generateDomain(pronoun,adj,noun);