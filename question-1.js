// Question #1
const myTodo = [
  { id: 1, todo: "Buy groceries" },
  { id: 2, todo: "Finish homework" },
  { id: 3, todo: "Call mom" },
  { id: 4, todo: "Wash dishes" },
];
// เริ่มเขียนโค้ดตรงนี้
// 1. เพิ่ม To-do ใหม่ชื่อว่า "Walk the dog"
myTodo.push({
  id: 5,
  todo: "Walk the dog",
});

// 2. ให้แก้ไขชื่อ Todo ที่มี id เป็น 4 จาก "Wash dishes" เป็น "Go to the gym"
myTodo[3].todo = "Go to the gym";

// 3. ลบ To-do สุดท้ายที่อยู่ใน Array ออก
myTodo.pop();

// 4. ให้แสดงข้อความของ To-do ตัวสุดท้ายที่อยู่ในรายการออกมาบนหน้าจอ Console
console.log(`To-do id: ${myTodo[myTodo.length-1].id}, ${myTodo[myTodo.length-1].todo}`);
