export default {
  componentWillUnmount: function () {
    window.removeEventListener('scoll', this.handleScroll);
  }
};
