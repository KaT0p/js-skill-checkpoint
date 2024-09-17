// Question #6: Calculating Total Price in User's Cart

function filterInStockProducts(products) {
  // ใช้ฟังก์ชัน filter เพื่อเลือกสินค้าที่มี quantity มากกว่า 0
  return products.filter(product => product.quantity > 0); // ตรวจสอบว่า product.quantity ของสินค้ามากกว่า 0 หรือไม่
} // สร้าง Array ใหม่ที่มีเฉพาะสินค้าที่ผ่านเงื่อนไข

// ตัวอย่างการใช้งาน
const products = [
  { name: "apple", quantity: 2 },
  { name: "banana", quantity: 0 },
  { name: "orange", quantity: 5 },
];

console.log(filterInStockProducts(products));
// ผลลัพธ์ที่ได้จากการ Execute Function คือ
// [{ name: "apple", quantity: 2 }, { name: "orange", quantity: 5 }]
