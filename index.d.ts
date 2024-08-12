declare module 'easy-sitemap-generator' {
    /**
     * Generates a sitemap for the specified webpage and saves it to the given destination.
     *
     * @param url - The URL of the webpage for which the sitemap is to be generated.
     * @param destination - Optional. The path to the file where the generated sitemap will be saved.
     * If not specified, the sitemap will be saved in the same folder where the script is run (default: './sitemap.xml').
     * @returns A promise that resolves to a string containing the contents of the generated sitemap.xml file.
     */
    export function generate(url: string, destination?: string): Promise<string>;

    /**
     * The current version of the `easy-sitemap-generator` module.
     */
    export const version: string;
}
