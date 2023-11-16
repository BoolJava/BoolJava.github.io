function calc() {
    var prp = Number(document.getElementById("principal").value);
    var inr = Number(document.getElementById("interest rate").value);
    var nmy = Number(document.getElementById("num of years").value);
    var mnp = Number(document.getElementById("monthly pay").value);
    var n = 12
    var top = mnp * [(1 + (inr/n)) ** (n * nmy) -1]
}