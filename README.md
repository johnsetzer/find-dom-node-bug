# This project demonstrates a "findDOMNode is deprecated in StrictMode" warning that react-bootstrap generates.

## Root cause:
As far as I can tell, there isn't a way to pass in refs such that this line of code doesn't get called:
https://github.com/react-bootstrap/react-bootstrap/blob/master/src/safeFindDOMNode.ts#L7

## To reproduce bug:
1. Clone this repo.
2. `cd find-dom-node-bug`
3. As of 12-13-2021, create-react-app doesn't work with node version 17. If `node --version` doesn't return node version 16 in your current directory, use nvm or some other tool to install node version 16.
4. `yarn install`
5. `yarn start`
6. Open `http://localhost:3000/` in your browser if the previous command doesn't do it for you.
7. Hover over the div on the page.
8. Check your browser console for `Warning: findDOMNode is deprecated in StrictMode. findDOMNode was passed an instance of Transition which is inside StrictMode.`
