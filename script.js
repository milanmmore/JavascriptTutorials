document.getElementById('search').addEventListener('input', function () {
  const query = this.value.toLowerCase();
  document.querySelectorAll('main section ul li').forEach(li => {
    const text = li.textContent.toLowerCase();
    li.style.display = text.includes(query) ? '' : 'none';
  });
});
