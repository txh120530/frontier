function isAnagram(stringA, stringB) {
        stringA = stringA.replace(/[^\w]/g, '').toLowerCase()
        stringB = stringB.replace(/[^\w]/g, '').toLowerCase()

        return sortString(stringA) === sortString(stringB)
    }

    function sortString(string) {
        return string.split('').sort().join('');
    }

console.log("isAnagram(\"State\", \"Taste\");")
console.log(isAnagram("State", "Taste"));
console.log("isAnagram(\"Fold\", \"Bold\"))")
console.log(isAnagram("Fold", "Bold"));


const array = [
 { name: 'Jon', age: 31 },
 { name: 'Ned', age: 53 },
 { name: 'Brandon', age: 25 },
 { name: 'Arya', age: 27 },
 { name: 'Sansa', age: 30 },
 { name: 'Robb', age: 32 }
];

const filterArray = (arr) => {
	const result = arr.filter(x => x.age > 30);
	return result;
}

console.log("filterArray(array);");
console.log(filterArray(array));

const calcHypotenuse = (a, b) => {
  // const c = Math.hypot(a, b);
  const c = Math.sqrt(a*a + b*b);
  return c;
}


console.log("calcHypotenuse(3,4);")
console.log(calcHypotenuse(3,4));
console.log("calcHypotenuse(10,24);")
console.log(calcHypotenuse(10,24));