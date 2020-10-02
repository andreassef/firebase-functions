const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();
const db = admin.database();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

// Singela aplicação simuladora de um algoritmo que substitui palavrões ao serem inseridos no 
// realtime database. Feita com ajuda do firebase e cloud functions

// adiciona um novo objeto no realtime database com nome, mensagem e time (clube de futebol, não tempo).
exports.newMessage = functions.https.onRequest( async (req, res) => {
  const { nome, mensagem, time } = req.body;
  
  //insere os dados no caminho especificado 
  const usuario = db.ref('root').child('usuarios').child('mensagens');
  await usuario.push({nome, mensagem, time});
  
  res.json({resultado: 'sucesso ao salvar dados!'});
})

// Gatilho do realtime database, toda vez que uma nova mensagem for inserida no path
// a funcao verifyAwfulWord é chamada e procura a palavra perjorativa "porra" que ao ser encontrada é substituida
// por caracteres aleatorios
exports.searchAwfulWords = functions.database.
ref('/root/{usuarios}/mensagens/{mensagemId}')
.onCreate((snapshot, context) => {
  const dadosMensagem = snapshot.val();
  const text = verifyAwfulWord(dadosMensagem.mensagem); //string
  return snapshot.ref.update({mensagem: text});
})

// função  verifica um palavrao e por meio da Regex substitui por um caractere aleatorio.
function verifyAwfulWord(text) {
  return text.replace(/\bporra\b/g, '*#@!!**');
}


