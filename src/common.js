export const addComma = function (num) {
  const regexp = /\B(?=(\d{3})+(?!\d))/g;
  return num.toString().replace(regexp, ',');
}

export const purifyNum= function(string) {
   return ~~string.replace(/[^0-9]/g,'');
}