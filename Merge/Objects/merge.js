function mergeSingle(mergedObject, target) {
  const keys = Object.keys(target); // get the keys in the object as array

  for (const key in keys) {
    // loop over keys
    const property = keys[key]; // get current property name
    if (target.hasOwnProperty(property)) {
      // check if the target have the property
      const value = target[property]; // store the value of the current property
      if (value) {
        // if there's a property
        mergedObject[property] = value; // change it
      }
    }
  }
}

function mergeMultiple(objects = []) {
  let mergedObject = {};
  objects.forEach(object => mergeSingle(mergedObject, object));

  return mergedObject;
}

module.exports = {
  mergeSingle,
  mergeMultiple
};
