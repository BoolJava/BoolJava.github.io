function calc() {
    var prp = Number(document.getElementById("principal").value);
    var r = Number(document.getElementById("interest rate").value);
    var nmy = Number(document.getElementById("num of years").value);
    var mnp = Number(document.getElementById("monthly pay").value);
    var inr = r / 100
    var n = 12
    var top = mnp * [(1 + (inr/n)) ** (n * nmy) -1]
    var bot = inr/n
    var res = prp * (1 + (inr/n)) ** (n * nmy)
    var B = res - (top/bot)

    var p = document.getElementById("out");
    p.innerHTML = "";
    p.innerHTML += "Remaining loan balance: " + B.toFixed(2) + "<br/>";
}

function reset() {
    document.getElementById("principal").value = "";
    document.getElementById("interest rate").value = "";
    document.getElementById("num of years").value = "";
    document.getElementById("monthly pay").value = "";
    document.getElementById("out").innerHTML = "";
}