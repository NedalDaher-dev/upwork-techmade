export default {
    async redirects() {
      return [
        {
          source: '/',
          destination: '/about-us',
          permanent: true, // set to false if the redirect is temporary
        },
      ];
    },
  };
  