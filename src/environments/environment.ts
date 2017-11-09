// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyADCgc5AZRDMPE6G7rMmVUwm_gFmFGYz_o",
    authDomain: "stories-around.firebaseapp.com",
    databaseURL: "https://stories-around.firebaseio.com",
    projectId: "stories-around",
    storageBucket: "stories-around.appspot.com",
    messagingSenderId: "932616060519"
  }
};
