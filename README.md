# learnMEaRN

Following the [JavaScript Mastery](https://www.youtube.com/c/JavaScriptMastery) [Full Stack MERN Project](https://www.youtube.com/playlist?list=PL6QREj8te1P7VSwhrMf3D3Xt4V6_SRkhu) youTube series

While comparing the differences with this tutorial's database set up and the way i've set up mongo databases in the past i came to learn the difference between bringing in modules using CommonJS (requiring module exports) and ES6 (importing exported modules).
references: [ES 6 modules](https://nodejs.org/docs/latest-v13.x/api/esm.html#esm_enabling), [Strict mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode), [export](https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export).

When i got to the point where i was trying to connect the api return to the front end i continually received the error `net::ERR_NAME_NOT_RESOLVED`. The proxy in the client package.json was set to the local host port my server was running on, but my react app was not receiving the api payload. Most of the fixes i found for this error called for clearing browser history or restarting the router. Ultimately i realized that i had misspelled localhost in the url i established to make axios calls in the client side src folder.
