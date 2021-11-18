const { credential } = require("firebase-admin");
const fs = require("firebase-admin");
const utf8 = require("utf8")

const serviceAccount = require('./mibolsilloappstaging-befd9c02353b.json');


fs.initializeApp({ credential: fs.credential.cert(serviceAccount) });
fs.firestore().collection("users")
    .where("email", "==", "toreto_peq25@hotmail.com")
    .get()
    .then((snapshot) => {
        const user = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));

        var name = user[0].name;

        var parsedName = utf8.decode(name)
            .replace("\\u00f3", 'ó')
            .replace("\\u00ed", 'í')
            .replace("\\u00e1", 'á')
            .replace("\\u00e9", 'é')
            .replace("\\u00fa", 'ú')
            .replace("\\u00c1", 'Á')
            .replace("\\u00c9", 'É')
            .replace("\\u00cd", 'Í')
            .replace("\\u00d3", 'Ó')
            .replace("\\u00da", 'Ú')
            .replace("\\u00f1", 'ñ')
            .replace("\\u00d1", 'Ñ')

        console.log(name);
        console.log(parsedName);
    });