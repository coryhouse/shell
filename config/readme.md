# Nginx Configuration

This is a sample Nginx configuration that can be used as a starting point for serving a web application.

## Configuration Details

- **Server**: The Nginx server listens on port 8080.
- **Root**: The web application files are served from the `/opt/app` directory.
- **Index Files**: The server will look for `index.html` or `index.htm` files in the specified root directory.
- **Expires**: The `expires` directive is set to `-1`, indicating that the server will not provide any caching information to clients by default.
- **Error Pages**: The `error_page` directive is used to define the error pages for HTTP status codes 500, 502, 503, and 504. The error pages are served from the `/opt/app` directory.
- **Location Configuration**:
  - `/50x.html`: The server returns the `/50x.html` file when handling the specific URL path.
  - `/`: The server uses the `try_files` directive to check if the requested URI matches any existing file or directory. If not found, it falls back to serving `index.html`.
  - `/remoteEntry.js`: The server adds the `Cache-Control` header to enable caching of the `remoteEntry.js` file. It uses the `try_files` directive to serve the `remoteEntry.js` file directly if it exists; otherwise, it returns a 404 error.

## Usage

To use this Nginx configuration:

1. Replace the placeholder values (`/opt/app`, `index.html`, etc.) with the appropriate paths and filenames for your web application.
2. Save the configuration file as `nginx.conf`.
3. Copy the `nginx.conf` file to the Nginx configuration directory (`/etc/nginx` or another location depending on your setup).
4. Restart or reload the Nginx service to apply the new configuration.

