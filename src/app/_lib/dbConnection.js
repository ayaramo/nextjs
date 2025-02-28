const { default: mongoose } = require("mongoose");

export function dbConnect() {
    mongoose.connect(
        "mongodb+srv://esed5000:jJpRIPgs9iJq9V2T@cluster1.us7e5.mongodb.net/users?retryWrites=true&w=majority&appName=Cluster1"
    ).then(
        () => {
            console.log('Connect succeeded');

        }
    ).catch(
        (err) => {
            console.log('Connection failed', err);
        }
    );
}