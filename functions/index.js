const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

 exports.helloWorld = functions.https.onRequest((request, response) => {
   functions.logger.info("Hello logs!", {structuredData: true});
   response.send("Primeiro codigo com google functions!");
});

exports.addMessage = functions.https.onRequest( async (req, res) =>{

    const textParam = req.query.text;

    // 
    const writeResult = await admin.firestore().collection('messages').add({original: textParam});

    res.json({result: `Message with ID: ${writeResult.id} added.`});
})
