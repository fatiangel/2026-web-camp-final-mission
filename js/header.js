// 1. 抓取 HTML 中的漢堡按鈕與導覽選單
const menuBtn = document.querySelector('.btn-menu');
const navList = document.querySelector('.nav-list');

// 2. 監聽按鈕的「點擊(click)」事件
menuBtn.addEventListener('click', function() {
  
  // 3. 切換選單的 active 狀態
  // toggle 的意思是：如果沒有 active 就加上去，如果已經有 active 就拿掉
  navList.classList.toggle('active');
  
  // (選擇性) 因為你的 CSS 有寫到 body.menu-open 來控制遮罩與鎖定捲軸
  // 所以這裡也可以一併切換 body 的狀態
  document.body.classList.toggle('menu-open');
});