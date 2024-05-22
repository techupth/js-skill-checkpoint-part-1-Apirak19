// Question #5
const products = [
  {
    name: "เสื้อยืด",
    price: 10,
    quantity: 2,
  },
  {
    name: "กางเกงยีนส์",
    price: 5,
    quantity: 3,
  },
  {
    name: "เสื้อเชิ้ต",
    price: 10,
    quantity: 5,
  },
];

let promotionCode = "";

// เริ่มเขียนโค้ดตรงนี้
function calculateTotalPrice(product, code) {
  let totalPrice = product.reduce((acc, cur) => {
    return acc + cur.price * cur.quantity;
  }, 0);
  if (code === "SALE20") {
    return totalPrice - totalPrice * 0.2;
  } else if (code === "SALE50") {
    return totalPrice - totalPrice * 0.5;
  } else {
    return totalPrice;
  }
}

// ถ้า promotionCode มีค่าเป็น "" ฟังก์ชันจะ Return ค่า 85
console.log(calculateTotalPrice(products, promotionCode));

// ถ้า promotionCode มีค่าเป็น "SALE20" ฟังก์ชันจะ Return ค่า 68
promotionCode = "SALE20";
console.log(calculateTotalPrice(products, promotionCode));

// ถ้า promotionCode มีค่าเป็น "SALE50" ฟังก์ชันจะ Return ค่า 42.5
promotionCode = "SALE50";
console.log(calculateTotalPrice(products, promotionCode));
