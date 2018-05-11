// required modules
    var fs = require('fs');
    var http = require('http');

// Reading Files
    var data = fs.readFileSync('Testfile.txt', 'utf8');
    console.log(data);    

//Writing files
    fs.writeFile('test.txt', 'Hello World!', function (err) { 
        if (err)
            console.log(err);
        else
            console.log('Write operation complete.');
    });    

//Updating existing files
fs.appendFile('test.txt', 'Hello World! How are you!', function (err) { 
    if (err)
        console.log(err);
    else
        console.log('Append operation complete.');
});

//Create new files
fs.open('newfile.txt', 'w', function (err, file) {
    if (err) throw err;
    console.log('Saved!');
  });

//Delete existing file
fs.unlink('newFile.txt', function () {

    console.log('write operation complete.');

});

//Rename existing file
fs.rename('test.txt', 'myrenamedfile.txt', function (err) {
    if (err) throw err;
    console.log('File Renamed!');
  });


  // TASK 3 HTTP  comment out this part if you're running a different task


//Create a server object:
http.createServer(function (req, res) {
    res.write('Hello World!'); //write a response to the client
    res.end(); //end the response
  }).listen(8080); // server listens at port 8080

//Specify Content-Type Header
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('Hello World!');
    res.end();
  }).listen(8080);  

// Query string
var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(req.url);
    res.end();
}).listen(8080);


//  ASYNC/AWAIT comment out this part if you're running a different task

//Promise that gets a single user from an array of users:
function getFirstUser() {
    return getUsers().then(function(users) {
        return users[0].name; // define users[] to test
    }).catch(function(err) {
        return {
          name: 'default user'
        };
    });
}

//gets a single user from an array of users with async/await:
async function getFirstUser() {
    try {
        let users = await getUsers();
        return users[0].name;
    } catch (err) {
        return {
            name: 'default user'
        };
    }
}