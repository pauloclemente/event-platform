module.exports = {
  images: {
    domains: ['github.com'],
  },
  async redirects() {
    paths = [];

    paths.push(
      {
        source: '/',
        destination: '/',
        permanent: false,
      }
    );
    paths = [
      ...paths,
      {
        source: `/ignite-lab`,
        destination: `/ignite-lab/lesson/abertura-do-evento-ignite-lab`,
        permanent: false,

      }
    ];
    return paths
  }
}