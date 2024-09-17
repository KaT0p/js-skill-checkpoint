// Question #2: User Task List

const userTaskList = [
  { id: 1, task: "Buy groceries" },
  { id: 2, task: "Finish homework" },
  { id: 3, task: "Call mom" },
  { id: 4, task: "Wash dishes" },
];

// 1) เพิ่ม Task ใหม่ชื่อว่า "Walk the dog" ไปที่ส่วนท้ายของ userTaskList ซึ่ง Task นี้จะมี id เป็น 5
userTaskList.push({ id: 5, task: "Walk the dog" });

// 2) แก้ไขชื่อ Task ที่มี id เป็น 4 จาก "Wash dishes" เป็น "Go to the gym"
userTaskList[3].task = "Go to the gym";
// ใน [] ที่เป็น 3 เพราะ index ของ task ที่มี id 4 ใน array คือ 3 (array เริ่มนับจาก 0)

// 3) ลบ Task สุดท้ายที่อยู่ใน Array ออก
userTaskList.pop();

// 4) Log ข้อความของ Task ตัวสุดท้ายที่อยู่ในรายการออกมาบนหน้าจอ Console
const lastTask = userTaskList[userTaskList.length - 1];
// ดึงข้อมูลตัวสุดท้ายใน Array userTaskList มาเก็บไว้ใน lastTask // userTaskList.length - 1 เพื่อเข้าถึง item ตัวสุดท้ายใน array

console.log(`Task id: ${lastTask.id}, ${lastTask.task}`);
//ดึง lastTask.id และ lastTask.task ที่เก็บไว้จาก lastTask มาแสดง