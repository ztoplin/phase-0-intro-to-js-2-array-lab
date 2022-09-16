const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
    cats.push(name);
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat(name) {
   const appendedCats = [...cats, name];
   return appendedCats
}

function prependCat(name) {
    const prependedCats = [name, ...cats];
    return prependedCats
}

function removeLastCat() {
    const catsWithLastRemoved = cats.slice(0, 2);
    return catsWithLastRemoved
}

function removeFirstCat() {
    const catsWithFirstRemoved = cats.slice(1);
    return catsWithFirstRemoved
}