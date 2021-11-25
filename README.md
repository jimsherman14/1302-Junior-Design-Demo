<img src="https://img.shields.io/github/workflow/status/jimsherman14/1302-Junior-Design-Demo/Build%20Android%20and%20iOS">

# Simian

Simian is a mobile application designed to help those new to stock trading gain a stronger understanding of the what, how, and why to trading

<center>
    <img src="./assets/login.png" width="200" height="400"/>
</center>

## Install

Clone the repository and install the dependencies with npm:

```bash
git clone git@github.com:jimsherman14/1302-Junior-Design-Demo.git
cd 1302-Junior-Design-Demo
npm install
```

Change the directory into the `ios` folder and run the following command to install the SDK pod with [CocoaPods](https://cocoapods.org/):

```bash
cd ios
pod install
```

You should see the `A0Auth0` pod being installed and linked to the sample app.

## Run The App

Run your app on an emulator, simulator, or your own connected device.

- To run the app on iOS run `npm run ios`.
- To run the app on Android run `npm run android`.

The first run may take a while to fully launch. Keep an eye out for confirmation windows and watch the terminal for output and results.

**Note:** If you get an error about "No bundle URL present" try clicking reload in the app or running `npm run ios` again. 
