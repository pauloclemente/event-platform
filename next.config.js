module.exports = {
  images: {
    domains: ['github.com'],
  },
  async redirects() {
    paths = [];

    paths = [
      ...paths,
      {
        source: `/ignite-lab/:track(.*)/:slug`,
        destination: `/ignite-lab`,
        permanent: false,

      },

    ];
    return paths
  }
}