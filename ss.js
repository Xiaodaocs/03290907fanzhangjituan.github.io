document.addEventListener('mousemove', function(e) {
    var follower = document.getElementById('cursor-follower');
    follower.style.left = e.clientX + 'px';
    follower.style.top = e.clientY + 'px';

    // 可选: 添加鼠标悬停时改变颜色的交互效果
    follower.style.backgroundColor = '#db4437'; // 改变颜色，比如变为Google红色
});

// 当鼠标移出窗口时恢复颜色
window.addEventListener('mouseout', function() {
    var follower = document.getElementById('cursor-follower');
    follower.style.backgroundColor = '#4285F4'; // 恢复原来的颜色
});