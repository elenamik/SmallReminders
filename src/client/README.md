# Client 
The client is built with React, webpack, babel, and sass (mostly to make it easy to change the color scheme).

`npm run-script dev-client` - runs the client development server on its own (without the database / backend connectivity)

`npm run-script build-client` - generates a production build (all code bundled into one js file and an index.html file)

## Specs:
### User logged in:
1. show list of current principles
1. edit / add / delete principles
1. ability to configure text messages

### No user logged in:
1. show description
1. show example of how this looks / works without persisting the data
1. show some kind of SVG with a phone getting a message
