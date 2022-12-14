
import { initializeApp, cert } from "firebase-admin/app";
import{ getFirestore } from 'firebase-admin/firestore';

// import out credentials (serviceAccount)
import serviceAccount from './serviceAccount.js';

// connect to our firebase project using those credentials
initializeApp ({
    credential: cert(serviceAccount)
})

// connect to firestore database
const db = getFirestore();


// define a new video game
const newGame = {
    title: 'Frogger',
    rated: 'E',
    genre: 'Arcade',
    released: 1981,
}

// create a doc inside a collection (line says go to database, 
// then games collection, then add this doc to new doc)
db.collection('games').add(newGame)

    // if ok, console log the doc id
    .then(doc => console.log('Game created: ', doc.id))
    // if not, console the error
    .catch(console.error)


// get all games
    db.collection('games').get()
    //reshape the collection
    .then(collection => {
        collection.docs.forEach(doc => {
            console.log(doc.id, doc.data())
        })
    })
    .catch(console.error)