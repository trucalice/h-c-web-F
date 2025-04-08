const toggleBtn = document.getElementById('toggleButton');
  
        toggleBtn.addEventListener('click', function() {
            if (document.body.style.backgroundColor === 'black') {
                document.body.style.backgroundColor = 'white';
                document.body.style.color = 'black';
            } else {
                document.body.style.backgroundColor = 'black';
                document.body.style.color = 'white';
            }
        });

        toggleBtn.addEventListener('click', function() {
        if (document.body.style.backgroundColor === 'black') {
            toggleBtn.style.backgroundColor = 'white';
            toggleBtn.style.color = 'black'; 
        } else {
            toggleBtn.style.backgroundColor = 'black'; 
            toggleBtn.style.color = 'white';
        }
    });