/**
 * Measures execution time of a method
 *
 * @param target - the class instance reference
 * @param name - the name of the method
 * @param descriptor - object descriptor of the method
 */
function time(target, name, descriptor) {
  const originalFunc = descriptor.value;
  descriptor.value = function() {
    const start = performance.now();
    originalFunc.apply(this, arguments);
    const end = performance.now();
    console.log(`${name} took ${end - start} milliseconds`);
  }
  return descriptor;
}

export {
  time
};
