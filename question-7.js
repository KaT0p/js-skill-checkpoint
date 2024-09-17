// Question #7: Array Merging

const firstProductList = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Smartphone", price: 700 },
];

const secondProductList = [
  { id: 3, name: "Tablet", price: 500 },
  { id: 4, name: "Headphones", price: 150 },
];

// รวม Array ทั้งสองเข้าด้วยกัน
const newProductList = firstProductList.concat(secondProductList); //concat รวม Array สองตัวเข้าด้วยกันและคืนค่าเป็น Array ใหม่ เก็บไว้ใน newProductList

// แสดงผลลัพธ์บน Console
console.log(newProductList);