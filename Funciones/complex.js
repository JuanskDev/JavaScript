// function findPeopleByCity(people, cityToMatch) {
// Create an empty array for the results (the people who match).
// Loop through the collection of people.
// If the current person's `city` matches the `cityToMatch`,
// add that person to the results array.
// Return the results array.

function findPeopleByCity(people, cityToMatch) {
  // Create an empty array to hold the new people
  let results = [];
  // Loop through the collection of people
  for (let i = 0; i < people.length; i++) {
    // If the current person's `name` matches the `cityToMatch`
    if (people[i].city === cityToMatch) {
      // Add that person to the filtered person array
      results.push(people[i]);
    }
  }
  // Return the filtered person array
  return results;
}
// LOG CUANDO HAY UN OBJETO CON MUCHAS PERSONAS!



// -----     - - -- - - - - - - - - - - --  - -- - - - -- - - - - - -  //



function addLikeToPerson(people, nameToMatch, topic) {
  // Loop through the collection of people.
  // If the current person's `name` matches the `nameToMatch`,
  // add the topic to their `likes`.
}

function addLikeToPerson(people, nameToMatch, topic) {
  // Loop through the collection of people
  for (let i = 0; i < people.length; i++) {
    // If the current person's `name` matches the `nameToMatch`
    if (people[i].name === nameToMatch) {
      // Add the topic to their `likes`
      people[i].likes.push(topic);
      // Return the person
      return people[i];
    }
  }
}
