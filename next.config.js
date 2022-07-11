module.exports = {
  images: {
    domains: ['github.com'],
  },
  async redirects() {
    paths = [];

    paths.push(
      {
        source: '/',
        destination: '/ignite-lab',
        permanent: false,
      }
    );
    paths = [
      ...paths,
      {
        source: `/ignite-lab/lesson/:slug*`,
        destination: `/ignite-lab`,
        permanent: false,

      }
    ];
    return paths
  }
}