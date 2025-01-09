const {SitemapStream, streamToPromise} = require('sitemap');
const { Readable } = require( 'stream' )

const hostname = 'https://www.galaxygamestudio.io';
const fs = require('fs');

(async () => {
  const links = [
    {url: '/', changefreq: 'monthly', priority: 1},
    {url: '/#home', changefreq: 'monthly', priority: 0.8},
    {url: '/#games', changefreq: 'monthly', priority: 0.8},
    {url: '/#token', changefreq: 'monthly', priority: 0.8},
    {url: '/#roadmap', changefreq: 'monthly', priority: 0.8},
    {url: '/privacypolicy', changefreq: 'monthly', priority: 0.5},
    {url: '/termsandconditions', changefreq: 'monthly', priority: 0.5},
  ];

  // Generate sitemap
  const sitemap = new SitemapStream({hostname});
  const xml = await streamToPromise(Readable.from(links).pipe(sitemap)).then((data) => {
      return data.toString()
    }
  )
  fs.writeFileSync('./public/sitemap.xml', xml.toString());

  console.log('Sitemap successfully created!');

})();
