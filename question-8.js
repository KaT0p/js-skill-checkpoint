// Question #8: Fetching User List from Server

// Fetch ข้อมูลจาก Server
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json()) // แปลงข้อมูลจาก JSON เป็น Javascript Object ด้วย .json
  .then(data => {
        const newUsers = data.map(user => user.name); // data.map - loop เข้าในแต่ละ Array สร้าง Array ใหม่ // ไปเอาค่าของ Name ของแต่ละ Object มาเก็บไว้ใน newUsers
    // จากโจทย์ให้แสดงผลลัพธ์ออกมาเป็นชื่อ เลยต้องดึง Name ออกมาแสดง

    console.log(newUsers);
  })