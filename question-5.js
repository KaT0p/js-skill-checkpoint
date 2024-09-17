// Question 5: Calculating Total Price in User's Cart

function calculateTotalPrice(cart) {
  let totalPrice = 0;
  // กำหนดค่า totalPrice เท่ากับ 0 รอเก็บข้อมูลการคำนวณ

  // ใช้ loop เพื่อเข้าถึงแต่ละ item ใน cart
  for (let item of cart) {
    // เก็บค่าการคำนวณไว้ใน totalPrice // คำนวณราคารวมของสินค้ารายการนี้
    totalPrice += item.price * item.quantity;
  }

  return totalPrice; // จะคืนค่า totalPrice
}

// ตัวอย่างการใช้งาน
const cart = [
  { name: "apple", price: 10, quantity: 2 },
  { name: "banana", price: 15, quantity: 1 },
  { name: "orange", price: 5, quantity: 3 },
];

console.log(calculateTotalPrice(cart)); // ผลลัพธ์จากการ Execute ตัว Function จะต้องได้: 50