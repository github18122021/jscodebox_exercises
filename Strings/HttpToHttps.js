// A string url is given. It contains a URL with the HTTP protocol. Return this URL with the HTTPS protocol.

// Example:

// http://jscodebox.com/ => https://jscodebox.com/

function http2https(url) {
  url = "https" + url.slice(4);
  return url;
}