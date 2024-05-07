// Code your solution here
function findMatching(array, attribute) {
  const newArr = array.filter(
    (name) =>
      name === attribute || name.toUpperCase() === attribute.toUpperCase()
  );
  return newArr;
}

function fuzzyMatch(array, attribute) {
  const newArr = array.filter(
    (name) => name.slice(0, attribute.length) === attribute
  );
  return newArr;
}

function matchName(array, attribute) {
  return array.filter((element) => element.name === attribute);
}

// const drivers = ["Bobby", "Sammy", "Sally", "Annette", "Sarah", "bobby"];
