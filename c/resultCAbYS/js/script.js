// 获取菜单按钮和侧边栏
const menuButton = document.getElementById('menuButton');
const sidebar = document.getElementById('sidebar');

// 点击菜单按钮切换侧边栏显示/隐藏
menuButton.addEventListener('click', () => {
    sidebar.classList.toggle('visible');
});

// 添加展开/折叠功能
const navTitles = document.querySelectorAll('.nav-title');

navTitles.forEach((title) => {
    title.addEventListener('click', () => {
        const submenu = title.nextElementSibling;

        if (submenu.style.display === 'block') {
            submenu.style.display = 'none';
        } else {
            submenu.style.display = 'block';
        }
    });
});