export const prepare = (array, size) => {
  let subarray = []; //массив в который будет выведен результат.
  for (let i = 0; i < Math.ceil(array.length / size); i++) {
    subarray[i] = array.slice(i * size, i * size + size);
  }
  return subarray;
};
