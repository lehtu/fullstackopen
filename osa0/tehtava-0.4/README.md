# osa0 tehtava 0.4

The task: [0.4](https://fullstackopen.github.io/teht%C3%A4v%C3%A4t/#04-uusi-muistiinpano)

## Link to source

Open in [WebSequenceDiagram editor](https://www.websequencediagrams.com/?lz=dXNlci0-YnJvd3NlcjoKbm90ZSBsZWZ0IG9mIAAPBwogIHVzZXIgd3JpdGVzIG5ldyAAIgVpbiB0aGUgaW5wdXQgYW5kIGNsaWNrcyBzdWJtaXQgYnV0dG9uCmVuZAAqBQoKAF4HLT5zZXJ2ZXI6IFBPU1QgZnVsbHN0YWNrLWV4YW1wbGVhcHAuaGVyb2t1YXBwLmNvbS9ub3RlcwCBDQ4APQYKIAACByBnZXRzIGZvcm0gZGF0YSwgc2F2ZXMgaXQAgR0IYXJyYXkAgSAFcmVkaXJlY3RzAIFQBQogIGJhY2sgdG8AgUcFAGUGIHBhZ2UAgS8KAIEpBgCCGwogc3RhdHVzIDIwMCwgSFRNTC1jb2RlIGZvcgCCCwUAOAUAgVsSR0UAgUclbWFpbi5jc3MAWB5yZXR1cm5zIAAlCQAyPmoAQyxqAIJ8DwCEHQlhbGwAhAwFcmVxdWVzdHMgYXJlIGRvbmUgYmFzZWQgbwCEKgZIVE1MIGZpbGUsCiBub3cAhF4IIHJlbmRlcnMAGgpjb2QAgnsLAIUEFgA0CXVucyBqYXZhc2NyaXB0ADcFIGZyb20AgSsJAIRtGwCCdCdkYXRhLmpzb24AhHQXAIQBBWluAIIeCACBfgpkYXRhAIEHBgCFMAcAhDUmAINdCABhFwCHFQkAaAhhZGRzIGVsZW1lbnRzIGluIERPTQCCbQ4AgTgKAIJ1BXRoZXJlIGkAgm0GAIdNCnRlbSBhcyB3ZWxsAIc1CQ&s=roundgreen)

## Code
```
user->browser:
note left of browser
  user writes new note in the input and clicks submit button
end note

browser->server: POST fullstack-exampleapp.herokuapp.com/notes
note left of server
  server gets form data, saves it in the array and redirects user
  back to the /notes page
end note
server->browser: status 200, HTML-code for the page

browser->server: GET fullstack-exampleapp.herokuapp.com/main.css
server->browser: status 200, returns main.css

browser->server: GET fullstack-exampleapp.herokuapp.com/main.js
server->browser: status 200, returns main.js
note left of browser
 all the requests are done based on the HTML file,
 now browser renders the HTML code
end note
note left of browser
 browser runs javascript code from main.js
end note

browser->server: GET fullstack-exampleapp.herokuapp.com/data.json
note left of server
  code in main.js requests data from server
end note
server->browser: status 200, returns data.json
note left of browser
 main.js adds elements in DOM based on the data.json
 now there is the new note item as well
end note
```

## Chart
![](chart.png)
