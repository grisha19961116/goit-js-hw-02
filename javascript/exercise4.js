// Exercise 4
// Write function formatString(string) which accepts string and formats her if necessary.
// If longest not more than 40 characters , than  function will be return here in previous shape.
// If longest more than 40 characters, than function will be reduce longest of string to 40 characters
// and add in the end three dots '...' , after that return version has cut.

const formatString = function (string) {
  if (string.length < 40) {
    return string;
  } else {
    const border = `${string.slice(0, 41)} ...`;
    return border;
  }
};
console.log(formatString("Curabitur ligula sapien, tincidunt non."));
console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
console.log(formatString("Curabitur ligula sapien."));
console.log(formatString("This sentence for check how it will be work."));
