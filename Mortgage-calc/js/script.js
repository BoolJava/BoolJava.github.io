function calc() {
    var prp = Number(document.getElementById("principal").value);
    var inr = Number(document.getElementById("interest rate").value);
    var nmy = Number(document.getElementById("num of years").value);
    var mnp = Number(document.getElementById("monthly pay").value);
    var n = 12
    var top = mnp * [(1 + (inr/n)) ** (n * nmy) -1]
    var bot = irn/n
    var res = prp * (1 + (inr/n)) ** (n * nmy)
    var B = res - (top/bot)

    var p = document.getElementById("out");
    p.innerHTML = "";
    p.innerHTML += "Remaining loan balance: " + B.toFixed(2) + "<br/>";
}