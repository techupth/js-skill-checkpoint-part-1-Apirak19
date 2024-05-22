// Question #3
let userPassword = "";
// เริ่มเขียนโค้ดตรงนี้

function checkPasswordStrength(password) {
  let result;
  if (password.length < 6) {
    result = "Weak";
  } else if (password.length >= 6 && password.length < 10) {
    result = "Medium";
  } else if (password.length >= 10) {
    result = "Strong";
  }
  return result;
}
// ถ้า userPassword มีค่าเป็น "swnalWadqQ" ฟังก์ชันจะ Return ค่า "Strong"
userPassword = "swnalWadqQ";
console.log(checkPasswordStrength(userPassword));

// ถ้า userPassword มีค่าเป็น "TechUp" ฟังก์ชันจะ Return ค่า "Medium"
userPassword = "TechUp";
console.log(checkPasswordStrength(userPassword));

// ถ้า userPassword มีค่าเป็น "abcde" ฟังก์ชันจะ Return ค่า "Weak"
userPassword = "abcde";
console.log(checkPasswordStrength(userPassword));
