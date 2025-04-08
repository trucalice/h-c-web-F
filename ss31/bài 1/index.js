const hideBtn = document.getElementById('hideBtn');
        const showBtn = document.getElementById('showBtn');
        const content = document.getElementById('content');
    
        hideBtn.onclick = function() {
            content.style.display = 'none';
        };
    
        showBtn.onclick = function() {
            content.style.display = 'block';
        };