// contact-form.js
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // 阻止表单默认提交行为

    // 获取表单数据
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // 客户端验证（可根据需要扩展）
    if (!name || !email || !message) {
        alert('请确保所有字段都已填写');
        return;
    }

    // 模拟提交成功反馈
    alert(`感谢您的留言，${name}！我们会尽快通过${email}与您联系。`);
    
    // 实际应用中，这里应该使用fetch或XMLHttpRequest发送数据到服务器
});