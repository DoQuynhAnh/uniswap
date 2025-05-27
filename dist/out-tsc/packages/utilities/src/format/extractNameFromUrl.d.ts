/**
 * Extracts the main domain name from a URL by removing the scheme ( http:// or https:// ), shorter subdomains, and TLD.
 * Ports are left in if adjacent to the computed name.
 *
 * For example:
 * - "https://app.example.com", "https://example.co.uk" and "https://app.example.com:8000" all return "example"
 * - "http://localhost:3000" returns "localhost:3000"
 * - "ipfs://invalid-url" returns "invalid-url"
 *
 * @param {string} [url] The URL from which to extract the main domain name.
 * @returns {string} The longest part of the domain name (optimistically, the name of the site)
 */
export declare function extractNameFromUrl(url?: string): string;
//# sourceMappingURL=extractNameFromUrl.d.ts.map