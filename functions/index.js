const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();
const db = admin.database();

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

exports.newMessage = functions.https.onRequest( async (req, res) => {
  const { nome, mensagem, time } = req.body;
  //const newUser = db.ref().child('mensagem').push().key;

  const usuario = db.ref('root').child('usuarios').child('mensagens');
  await usuario.push({nome, mensagem, time});

  res.json({resultado: 'sucesso ao salvar dados!'});
})