document.getElementById("contact").addEventListener("submit", function(thong_bao) {
    thong_bao.preventDefault();

var name = document.getElementById("name").value;
var email = document.getElementById("email").value;
var phone = document.getElementById("phone").value;

if (name && email && phone) {
    document.getElementById("thong_bao").innerHTML += "Chúc mừng bạn " + name +  " đã đăng ký thành công và là tân sinh viên năm 2099 của FPT Aptech";
    document.getElementById("thong_bao").innerHTML += "Chúng tôi sẽ gửi đầy đủ thông tin cho bạn tại email " + email;
    document.getElementById("thong_bao").innerHTML += "Mọi thông tin bổ sung chúng tôi sẽ liên lạc cho bạn tại số điện thoại " + phone; 
    document.getElementById("contact").reset();
}
});
function checkten(){
    var elMsg = document.getElementById('feedback');
    var elname = document.getElementById('name');
    if(elname.value.length >50)
    {
        elMsg.textContent = 'Ten qua dai';
    }
    else{
        elMsg.textContent = '';
    }
}