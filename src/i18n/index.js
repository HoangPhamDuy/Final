const content ={
    "Pomodoro": {
        vn:'Đồng hồ'
    },
    "Calculator":{
        vn:'Máy tính'
    },
    "Chess Board":{
        vn:'Cờ vua'
    },
    "Hello World":{
        vn:'Xin chào'
    },
    "MoneyExchange":{
        vn:'Đổi tiền'
    },
    "Quotes":{
        vn:'Châm Ngôn'
    },
    "Demonstration with Ant Design":{
        vn:'Trình diễn với Ant Design'
    },
    "Settings":{
        vn:'Cài đặt'
    },
    "Light":{
        vn:'Sáng'
    },
    "Peach":{
        vn:'Hồng'
    },
    "Dark":{
        vn:'Tối'
    },
} 
function tr(text,lang){
    return (content[text] || {})[lang] || text
}
export default tr;