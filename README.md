# Easy Sitemap.xml generator without any limits
Finally, a free and easy `sitemap.xml` file generator without any restrictions for your website. Improve your search engine rankings!
All you need is Node.js installed and this repository cloned.

## How to use it?
1. Clone this repository.
    ```bash
    git clone https://github.com/sefinek24/free-sitemap-generator
    ```
2. Open a terminal and navigate to the location of the cloned repository by typing `cd <path>`.
3. Run the command `npm install` to install the dependencies.
4. Execute the command `node index.js --domain=<DOMAIN>` (or `node . --domain=<DOMAIN>`) to start crawling the website. Example:
    ```bash
   node index.js --domain=sefinek.net
   ```

## Why do I need this?
Indexing bots, such as Google, often check the sitemap.xml file by making a `GET /sitemap.xml` request to find subpages of your website.
This can improve your site’s visibility in search engine results. Sitemap files are a standard feature and can be found on every web server.

## License
Licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.