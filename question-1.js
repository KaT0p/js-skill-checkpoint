// Question #1: Inventory Management

const inventory = {
  apple: { price: 35, quantity: 100 },
  banana: { price: 10, quantity: 50 },
};

// 1. แก้ไข Quantity ของ Apple จาก 100 เป็น 200
inventory.apple.quantity = 200;

// 2. เพิ่มสินค้าที่ชื่อ "orange" ที่มีราคา 20 บาท และมีจำนวน 300 ชิ้นในสต็อก
//เป็นแค่ Object เลยไม่มี push
inventory.orange = { price: 20, quantity: 300 };

// 3. คำนวณมูลค่ารวมของจำนวนสินค้าทั้งหมดในสต็อกด้วยการใช้ Loop
// กำหนดค่า totalValue เท่ากับ 0 รอเก็บข้อมูลการคำนวณ
let totalValue = 0;

for (let item in inventory) {
  totalValue += inventory[item].price * inventory[item].quantity;
  // เก็บค่าผลการ คูณ ไว้ใน totalValue และ  return เข้าไปเก็บในตรงข้อที่ 3 // inventory ของ price คูณกับ inventory ของ quantity
}

// 4. Log มูลค่ารวมของจำนวนสินค้าทั้งหมดในสต็อกแสดงออกมาทางหน้าจอ Console
console.log(`Total inventory value: ${totalValue} baht`);