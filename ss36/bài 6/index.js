document.addEventListener('DOMContentLoaded', function () {
    const stars = document.querySelectorAll('.stars');
    const selectedRating = document.getElementById('selected-rating');
    const commentInput = document.getElementById('comment-input');
    const commentList = document.getElementById('comment-list');
  
    let currentRating = 0;
  
    // Xử lý khi bấm vào sao
    stars.forEach(star => {
      star.addEventListener('click', function () {
        currentRating = parseInt(this.getAttribute('data-value'));
        updateStarDisplay(currentRating);
        selectedRating.textContent = `Bạn đã chọn ${currentRating} sao`;
      });
    });
  
    // Hàm cập nhật giao diện sao
    function updateStarDisplay(rating) {
      stars.forEach(star => {
        const starValue = parseInt(star.getAttribute('data-value'));
        star.classList.toggle('active', starValue <= rating);
      });
    }
  
    // Hàm gửi đánh giá
    window.submitReview = function () {
      const commentText = commentInput.value.trim();
  
      if (currentRating === 0 || commentText === '') {
        alert('Vui lòng chọn số sao và nhập bình luận.');
        return;
      }
  
      const li = document.createElement('li');
      li.innerHTML = `
        <span>${'★'.repeat(currentRating)}</span>
        <b>${commentText}</b>
      `;
      commentList.appendChild(li);
  
      // Reset lại
      commentInput.value = '';
      currentRating = 0;
      updateStarDisplay(0);
      selectedRating.textContent = 'Bạn chưa đánh giá.';
    };
  });
  