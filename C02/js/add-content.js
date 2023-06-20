function calculateTotal() {
    var mathScore = parseFloat(document.getElementById("math").value);
    var literatureCcore = parseFloat(document.getElementById("literature").value);
    var englishScore = parseFloat(document.getElementById("english").value);
    mathScore *= 2;
    literatureCcore *=2;
    var totalScore = mathScore + literatureCcore + englishScore;
    var result = "";
    if (totalScore > 42.5) {
        result = " Đỗ cả Kim Liên và Chu Văn An"
    } else if (totalScore >= 40) {
        result = " Đỗ Kim Liên"
    } else {
        result = " Không đỗ"
    }
    document.getElementById("result").innerHTML = "Kết quả: " + result;
}