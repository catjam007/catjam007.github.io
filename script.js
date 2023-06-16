document.addEventListener('DOMContentLoaded', function() {
  const topicButtons = document.querySelectorAll('.topic-button');
  const topics = document.querySelectorAll('.topic');

  topicButtons.forEach(button => {
    button.addEventListener('click', () => {
      const topicId = button.getAttribute('data-topic');
      topics.forEach(topic => {
        topic.style.display = 'none';
      });
      document.getElementById(topicId).style.display = 'block';
    });
  });
});
