export default {
  name: 'projects',

  mounted() {
    const projects = document.querySelector('.projects');

    // Smoothly fade in content
    projects.classList.add('projects--ready');
  },
};
