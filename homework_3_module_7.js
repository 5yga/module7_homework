function createEmptyObject(newObj){
    return newObj = Object.create(null);
}

let a = 12;

const b = createEmptyObject(a);

console.log(b);

b.mark = 'Honda';
b.yearIssue = '1992';

console.log(b);