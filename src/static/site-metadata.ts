interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const data: ISiteMetadataResult = {
  siteTitle: 'Running Page',
  siteUrl: 'https://run.morlight.top',
  logo: 'https://www.morlight.top/_next/image?url=https%3A%2F%2Fwww.notion.so%2Fimage%2Fhttps%253A%252F%252Fs3-us-west-2.amazonaws.com%252Fsecure.notion-static.com%252Fcdd6f98e-1b29-48cc-a945-6c40a5af5cd2%252FFC4FBDCC-EF7E-46BA-8DA2-070425A9CFF2.jpeg%3Ftable%3Dblock%26id%3D512c9d3b-2e49-4726-994d-beb12913e850%26cache%3Dv2&w=3840&q=75',
  description: 'Personal site and blog',
  navLinks: [
    {
      name: 'Blog',
      url: 'https://morlight.top/',
    },
    {
      name: 'About',
      url: 'https://morlight.top/',
    },
  ],
};

export default data;
