var mongoose = require('mongoose');
var db = mongoose.createConnection('mongodb://localhost/tasks');

var Schema = mongoose.Schema;
var Tasks = new Schema({
    project:String,
    description:String
});
mongoose.model('Task', Tasks);

// this is dosen't work.
var Task = mongoose.model('Task');
var task = new Task();
task.project = 'Bikeshed';
task.description = 'Paint the bikeshed red.';
task.save(function(err) {
    if(err) throw err;
    console.log('Task saved.');
});

// this is dosen't work.
var Task = mongoose.model("Task");
console.log("find project...");
Task.find({"project":"Bikeshed"}, function(err, tasks) {
    for(var i = 0; i < tasks.length; i++){
        console.log('ID:', tasks[i]._id);
        console.log(tasks[i].description);
    }
});

mongoose.disconnect();