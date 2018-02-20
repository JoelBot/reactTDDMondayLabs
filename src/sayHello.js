exports.greet = function greet(name) {
 if (name == null) {
  return 'Hello, friend';
 } else {
  return 'Hello, ' + name;
 }
};

exports.salutation = function salutation(time) {
 if (time < 12) {
  return 'Good morning!';
 } 
 if (time >= 12 && time <= 18) {
  return 'Good afternoon!';
 }
 else {
   return 'Good evening!'
  }
 };
