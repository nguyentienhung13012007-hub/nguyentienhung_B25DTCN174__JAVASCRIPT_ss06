// Câu 1
let fullName = "Quý,Nam,Lan,Hùng,Nam";

// 1. Chuyển chuỗi thành mảng
let students = fullName.split(",");
console.log("Mảng sau khi chuyển đổi:", students);

// 2. In từng phần tử
for (let i = 0; i < students.length; i++) {
    console.log("Phần tử:", students[i]);
}

// 3. Đảo ngược mảng
console.log("Mảng sau khi đảo ngược:", students.reverse());

// 4. Kiểm tra Lan có tồn tại không
if (students.includes("Lan")) {
    console.log("Tên Lan tồn tại trong mảng");
} else {
    console.log("Tên Lan không tồn tại trong mảng");
}

// 5. Tìm vị trí của Nam
let indexNam = students.indexOf("Nam");
if (indexNam !== -1) {
    console.log("Vị trí của Nam trong mảng:", indexNam);
} else {
    console.log("Không tìm thấy Nam trong mảng");
}
