const { mergeMultiple } = require("../merge");

const user = {
  name: "Abdullah",
  email: "w2.alharbi.me@gmail.com"
};
console.log("old object: ", user);

const updatedUser = {
  name: undefined,
  email: "alharbi@gmail.com"
};
console.log("updated object: ", updatedUser);

const objects = [user, updatedUser];

const newUserData = mergeMultiple(objects);

console.log("user object after merge: ", newUserData);
