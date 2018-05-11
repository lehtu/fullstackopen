# osa0 tehtava 0.5

The task: [0.5](https://fullstackopen.github.io/teht%C3%A4v%C3%A4t/#05-single-page-app)

## Link to source

Open in [WebSequenceDiagram editor](https://www.websequencediagrams.com/?lz=dXNlci0-YnJvd3NlcjoKbm90ZSBsZWZ0IG9mIAAPBwogIHVzZXIgd3JpdGVzIGZ1bGxzdGFjay1leGFtcGxlYXBwLmhlcm9rdWFwcC5jb20vc3BhIGluIHRoZQA7CWVuZCBub3RlCgoAZQctPnNlcnZlcjogR0VUAC4nAIERDgA6BgogAAIHIGNyZWF0ZXMgSFRNTCByZXNwb25zZQBvCgBpBgCBYgogc3RhdHVzIDIwMCwALwUtY29kZSBmb3IAgTQFcGFnAHI7bWFpbi5jc3MAWB5yZXR1cm5zIAAlCQCBYTwuagBHJwAlBwCDVRZhbGwAgzMFcmVxdWVzdHMgYXJlIGRvbmUgYmFzZWQgbwCDUQYAgl8FZmlsZSwKIG5vdwCEIwggcmVuZGVycwAaCmNvZACCeQsAhEkWADQJdW5zIGphdmFzY3JpcHQANwUgZnJvbQCBKwgAhANCZGF0YS5qc29uAIQ0FwCDfgVpbgCCHQcAgXwKZGF0YQCBBAcAhHAGAIQxJgCDWQgAYBcAhlgJAGgHYWRkcyBlbGVtZW50cyBpbiBET00AgmoOAIE2CgCGSQg&s=roundgreen)

## Code
```
user->browser:
note left of browser
  user writes fullstack-exampleapp.herokuapp.com/spa in the browser
end note

browser->server: GET fullstack-exampleapp.herokuapp.com/spa
note left of server
  server creates HTML response
end note
server->browser: status 200, HTML-code for the page

browser->server: GET fullstack-exampleapp.herokuapp.com/main.css
server->browser: status 200, returns main.css

browser->server: GET fullstack-exampleapp.herokuapp.com/spa.js
server->browser: status 200, returns spa.js
note left of browser
 all the requests are done based on the HTML file,
 now browser renders the HTML code
end note
note left of browser
 browser runs javascript code from spa.js
end note

browser->server: GET fullstack-exampleapp.herokuapp.com/data.json
note left of server
  code in spa.js requests data from server
end note
server->browser: status 200, returns data.json
note left of browser
 spa.js adds elements in DOM based on the data.json
end note
```

## Chart
![](chart.png)
