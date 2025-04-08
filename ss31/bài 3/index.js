const xanh = document.getElementById('xanh');
        const red = document.getElementById('do');
        const tim = document.getElementById('tim');
  
        xanh.addEventListener('click', function() {
            document.body.style.backgroundColor = 'green';
        });

        red.addEventListener('click', function() {
            document.body.style.backgroundColor = 'red';
        });

        tim.addEventListener('click', function() {
            document.body.style.backgroundColor = 'purple';
        });