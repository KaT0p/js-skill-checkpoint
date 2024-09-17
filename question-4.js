// Question 4: Shipping Cost Calculator

// รับค่า orderTotal เข้ามาแล้วเทียบว่าตัวเลขที่ใส่ไปอยู่ในตรงไหน
function calculateShippingCost(orderTotal) {
  if (orderTotal >= 4000) { // ถ้า orderTotal ที่รับมามีค่า 4000 ขึ้นไป
    return "Shipping is free."; // คืนค่าคำว่า Shipping is free. 
  } else if (orderTotal >= 2000) { // ถ้า orderTotal ที่รับมามีค่า 2000 ขึ้นไป
    return "Shipping cost is 250 Baht."; // คืนค่าคำว่า Shipping cost is 250 Baht. 
  } else { // ถ้า orderTotal ไม่ตรงกับค่าใดใดเลย 
    return "Shipping cost is 500 Baht."; // จะคืนค่าคำว่า Shipping cost is 500 Baht.
  }
}

// ตัวอย่างการใช้งาน
const orderTotal1 = 6000;
const orderTotal2 = 3000;
const orderTotal3 = 150;

console.log(calculateShippingCost(orderTotal1)); // "Shipping is free."
console.log(calculateShippingCost(orderTotal2)); // "Shipping cost is 250 Baht."
console.log(calculateShippingCost(orderTotal3)); // "Shipping cost is 500 Baht."