// about.js
document.addEventListener('DOMContentLoaded', function() {
    const welcomeMessage = document.getElementById('welcomeMessage');
    const userName = '访客'; // 这里可以尝试从cookie、localStorage或用户输入获取名字，以实现更个性化的欢迎
    welcomeMessage.textContent = `欢迎来到关于页面，${userName}！`;
});