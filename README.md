# NewMomentNg

The goal of this project is to make a more angular friendly version of [moment.js](https://momentjs.com/) that will be injectable and not pollute the global namespace. There will also be pipes that will leverage the power of moment.js.

The package will also come with interfaces defined so you will have auto-complete as well as intellisense guidance.

## How to use

In your project run the command `npm install new-moment-ng --save`. Then you just need to import the `MomentModule` and you're ready to inject `MomentService` in whichever components you will be using. If your project is using any of the [supported plugins](TODO link to wiki page with list) for moment.js then `MomentService` will automatically detect and run with the added functionality of the plugins, the only dependency that this package has is moment.js itself, everything else is optional and up to you to download.

TODO pipes module

## More instructions in the wiki

## Development Setup

## Development deploying
