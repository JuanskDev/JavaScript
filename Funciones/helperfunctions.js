//1  PSEUDO

function addLikeToPerson(people, nameToMatch, topic) {
  // Find the person to add the like to (`findPerson()`)
  // Add the like to that person (`addLike()`)
}

// 2   PSEUDO

function findPerson(people, nameToMatch) {
  // Loop through the collection of people
  // If the current person's `name` matches the `nameToMatch`,
  // return the person
}

//3  PSEUDO

function addLike(person, topic) {
  // Add the topic to their likes
}

// 2 CODE

function findPerson(people, nameToMatch) {
  for (let i = 0; i < people.length; i++) {
    let person = people[i];
    if (person.name === nameToMatch) {
      return person;
    }
  }
}

// 3 CODE

function addLike(person, topic) {
  let likes = person["likes"];
  likes.push(topic);
}

// HELPER A LO QUE HAY QUE LLEGAR!

function addLikeToPerson(people, nameToMatch, topic) {
  let person = findPerson(people, nameToMatch);
  addLike(person, topic);
}
