/*var questions = {
  "english":{
    "before":[
      {
        "question": "How active do you feel?",
        "answer_type": "s2"
      },
      {
        "question": "How well do you know your partner?",
        "answer_type": "s1"
      },
      {
        "question": "Would you like to get to know them more?",
        "answer_type": "s1"
      }
    ],
    "after":[
      {
        "question": "How active do you feel now?",
        "answer_type": "s2"
      },
      {
        "question": "Do you remember a time when you talked/discovered something with your partner?",
        "answer_type": ""
      },
      {
        "question": "When your partner ________________, how active did you feel?",
        "answer_type": "s2"
      },
      {
        "question": "When your partner ________________, did you like it or not?",
        "answer_type": "s3"
      },
      {
        "question": "What was your favorite creature in the game?",
        "answer_type": "points_creatures"
      },
      {
        "question": "When the _____________ creature appeared, how active did you feel?",
        "answer_type": "s2"
      },
      {
        "question": "When the _____________ creature appeared, did you like it or not?",
        "answer_type": "s3"
      },
      {
        "question": "How well do you know your partner now?",
        "answer_type": "s1"
      },
      {
        "question": "Would you like to get to know them more?",
        "answer_type": "s1"
      },
      {
        "question": "Would you like to play the game again?",
        "answer_type": "s1"
      },
      {
        "question": "What was your favorite thing to do in the game?",
        "answer_type": "points_activities"
      },
      {
        "question": "What were some parts of the game that you liked (sensory clues: see, hear, touch)?",
        "answer_type": ""
      },
      {
        "question": "What were some parts of the game that you didn’t like (sensory clues: see, hear, touch)?",
        "answer_type": ""
      },
      {
        "question": "Compared to playing in the playground at school, how much did you like playing with your partner in the game?",
        "answer_type": "points_compare"
      },
      {
        "question": "What do you think this experience was about?",
        "answer_type": ""
      }
    ]
  },
  "catalan":{
    "before":[
      {
        "question": "Com d’”actiu” et sents ara mateix?",
        "answer_type": "s2"
      },
      {
        "question": "Com de bé coneixes al teu company?",
        "answer_type": "s1"
      },
      {
        "question": "T’agradaria conèixer-lo millor?",
        "answer_type": "s1"
      }
    ],
    "after":[
      {
        "question": "Com d’”actiu” et sents ara mateix?",
        "answer_type": "s2"
      },
      {
        "question": "Recordes cap moment en el que hagis parlat o descobert quelcom amb el teu company?",
        "answer_type": ""
      },
      {
        "question": "Com d’”actiu” t’has sentit quan el teu company _________?",
        "answer_type": "s2"
      },
      {
        "question": "T’ha agradat que el teu company __________, o no?",
        "answer_type": "s3"
      },
      {
        "question": "Quina és la teva criatura preferida del joc?",
        "answer_type": "points_creatures"
      },
      {
        "question": "Com t’has sentit quan la criatura _________ ha aparegut?",
        "answer_type": "s2"
      },
      {
        "question": "T’ha agradat quan la criatura ________ ha aparegut, o no?",
        "answer_type": "s3"
      },
      {
        "question": "Com de bé coneixes al teu company ara?",
        "answer_type": "s1"
      },
      {
        "question": "T’agradaria conèixer-lo millor?",
        "answer_type": "s1"
      },
      {
        "question": "T’agradaria tornar a jugar alguna altra vegada?",
        "answer_type": "s1"
      },
      {
        "question": "Què ha estat el que més t’ha agradat fer al joc? ",
        "answer_type": "points_activities"
      },
      {
        "question": "Quines altres coses del joc t’han agradat? ",
        "answer_type": ""
      },
      {
        "question": "Quines coses són les que no t’han agradat? ",
        "answer_type": ""
      },
      {
        "question": "En comparació amb el pati de l’escola, t’ha agradat jugar amb el company al joc?",
        "answer_type": "points_compare"
      },
      {
        "question": "De què creus que anava aquesta experiència?",
        "answer_type": ""
      }
    ]
  },
  "spanish":{
    "before":[
      {
        "question": "¿Cómo de “activo” te sientes ahora mismo?",
        "answer_type": "s2"
      },
      {
        "question": "¿Cómo de bien conoces a tu compañero?",
        "answer_type": "s1"
      },
      {
        "question": "¿Te gustaría conocerlo mejor?",
        "answer_type": "s1"
      }
    ],
    "after":[
      {
        "question": "¿Cómo de “activo” te sientes ahora mismo?",
        "answer_type": "s2"
      },
      {
        "question": "¿Recuerdas algun momento en el que hayas hablado o descubierto algo con tu compañero?",
        "answer_type": ""
      },
      {
        "question": "¿Cómo de “activo” te has sentido cuando tu compañero ________?",
        "answer_type": "s2"
      },
      {
        "question": "¿Te ha gustado que tu compañero ___________, o no?",
        "answer_type": "s3"
      },
      {
        "question": "¿Cuál es tu criatura favorita del juego?",
        "answer_type": "points_creatures"
      },
      {
        "question": "¿Cómo te has sentido cuando la criatura ________ ha aparecido?",
        "answer_type": "s2"
      },
      {
        "question": "¿Te ha gustado cuando ha aparecido la criatura _______, o no?",
        "answer_type": "s3"
      },
      {
        "question": "¿Cómo de bien conoces a tu compañero ahora?",
        "answer_type": "s1"
      },
      {
        "question": "¿Te gustaría conocerlo mejor?",
        "answer_type": "s1"
      },
      {
        "question": "¿Te gustaría volver a jugar alguna otra vez?",
        "answer_type": "s1"
      },
      {
        "question": "¿Qué ha sido lo que más te ha gustado hacer en el juego?",
        "answer_type": "points_activities"
      },
      {
        "question": "¿Qué otras cosas del juego te han gustado?",
        "answer_type": ""
      },
      {
        "question": "¿Qué cosas son las que no te han gustado?",
        "answer_type": ""
      },
      {
        "question": "En comparación con el patio del colegio, ¿te ha gustado jugar con tu compañero a este juego?",
        "answer_type": "points_compare"
      },
      {
        "question": "¿De qué crees que iba esta experiencia?",
        "answer_type": ""
      }
    ]
  }
}
*/
