export default {
  name: 'fourohfour',

  mounted() {
    const projects = document.querySelector('.fourohfour');

    // Smoothly fade in content
    projects.classList.add('fourohfour--ready');
  },
};
