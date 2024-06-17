// script.js
function deductSalary(event) {
    event.preventDefault(); // 阻止表单默认提交行为
    const initialSalary = document.getElementById('initialSalary').value;
    const deductionAmount = document.getElementById('deductionAmount').value;
    const remainingSalary = parseFloat(initialSalary) - parseFloat(deductionAmount);
    document.getElementById('result').innerText = `剩余的一点点: ${remainingSalary.toFixed(2)}`;
}
document.getElementById("myButton").addEventListener("click", function() {
    alert("叮~工资＋1");
});