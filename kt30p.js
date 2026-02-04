// câu 1
let fullName="Quý,Nam,Lan,Hùng,Nam";
let students=fullName.split("-");
for(let i=0;i<students.length;i++){
console.log("chuỗi sau khi  chuyển đổi: ",students[students.length-1]);

}
console.log("mảng sau khi đảo ngược: ",students.reverse());
const n=students.includes(Lan);
if(n===true){
    console.log("Tên Lan tồn tại tỏng mảng");
    
}else{
    console.log("Tên Lan không tồn tại trong mảng");
    
}
const m=students.indexOf(Nam);
for(let i=0;i<students.length;i++){
    if(m!==-1){
        console.log("vị trí của nam trong mảng:",m[0]);
        
    }

}
