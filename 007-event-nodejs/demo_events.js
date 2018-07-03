// Every action on a computer is an event. Like when a connection is made or a file is opened.
// Objects in Node.js can fire events (eg: readStream obj fires events when opening and closing a file)

const fs = require('fs');
// fs.writeFile('demofile.txt', 'create demofile.txt',  function(err) { if (err) throw err; });
const readStream = fs.createReadStream('./demofile.txt');
readStream.on('open', function () {
  console.log('The file is open');
});


// Node.js has a built-in module, called "Events", where you can create-, fire-, and listen for- your own events.
const events = require('events');

// In addition, all event properties and methods are an instance of an EventEmitter object.
// To be able to access these properties and methods, create an EventEmitter object:
const eventEmitter = new events.EventEmitter();

// Create an event handler (~ a function that will be executed when some event is fired)
const myEventHandler = function () {
  console.log('I hear ice cream truck coming!');
}

// Assign the event handler to an event with the EventEmitter object, the event is 'sing'
eventEmitter.on('sing', myEventHandler);
// Fire the 'sing' event with the emit() method
eventEmitter.emit('sing');
