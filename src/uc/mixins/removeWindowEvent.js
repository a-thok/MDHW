export default {
  componentWillUnmount: function () {
    window.removeEventListener('scroll', this.handleScroll);
  }
};
