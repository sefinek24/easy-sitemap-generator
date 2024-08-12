# 🗺️ Easy Sitemap.xml generator without any limits
Finally! A free and easy-to-use `sitemap.xml` generator with no restrictions for your website.
Improve your search engine rankings effortlessly! All you need is Node.js installed and this module. Good luck!


## 🤔 How to use it?
### CLI (recommenced)
```bash
npm install easy-sitemap-generator -g
sitemap --domain=example.com
```
#### Aliases
| sitemap-gen | sitemap-generator | generate-sitemap |
|-------------|-------------------|------------------|

### Script
```js
const sitemap = require('easy-sitemap-generator');

(async () => {
   const content = await sitemap.generate('https://example.com');
   console.log(content);
})();
```


## 👀 Why do I need this?
Indexing bots, such as Google, often check the sitemap.xml file by making a `GET /sitemap.xml` request to find subpages of your website.
This can improve your site’s visibility in search engine results. Sitemap files are a standard feature and can be found on every web server.

## 📘 License
Licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.