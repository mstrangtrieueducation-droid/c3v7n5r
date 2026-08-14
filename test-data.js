const IMG = "assets/test3-images/";
const TOTAL_POINTS = 60;

const choice = (id, prompt, options, answer, explanation, image = "") => ({ id, type: "choice", prompt, options, answers: [answer], explanation, image, points: 1 });
const input = (id, prompt, answers, explanation, image = "") => ({ id, type: "input", prompt, answers, explanation, image, points: 1 });
const paired = (id, prompt, parts) => ({ id, type: "paired", prompt, points: parts.length, parts });

const sections = [
  { key: "A", label: "A", title: "Listen and circle the correct answer.", note: "Listen carefully and choose True or False.", points: 4, audio: "assets/audio-a.mp3", questions: [
    choice("A1", "1.", ["T", "F"], "F", "Statement 1 is false according to the recording."),
    choice("A2", "2.", ["T", "F"], "T", "Statement 2 is true according to the recording."),
    choice("A3", "3.", ["T", "F"], "T", "Statement 3 is true according to the recording."),
    choice("A4", "4.", ["T", "F"], "F", "Statement 4 is false according to the recording.")
  ]},
  { key: "B", label: "B", title: "Look and complete the sentences.", note: "Study each original picture and complete the sentence with the correct word.", points: 4, questions: [
    input("B1", "1. I like putting ___ on my toast.", ["butter"], "Butter is commonly spread on toast.", IMG + "butter.png"),
    input("B2", "2. I have all the ___ to make cookies.", ["ingredients"], "Ingredients are the foods and materials needed to make a dish.", IMG + "ingredients.png"),
    input("B3", "3. A ___ is a fast, dangerous animal.", ["cheetah", "leopard"], "The picture shows a fast wild cat. The official key accepts leopard or cheetah.", IMG + "cheetah.png"),
    input("B4", "4. The farmer grows ___ on his farm.", ["wheat"], "The picture shows stalks of wheat.", IMG + "wheat.png")
  ]},
  { key: "C", label: "C", title: "Unscramble and match.", note: "Unscramble each word, then choose its correct definition.", points: 12, questions: [
    paired("C1", "1. o t a n n p l a t i", [
      { key: "word", label: "Unscrambled word", type: "input", answers: ["plantation"], explanation: "The letters form plantation." },
      { key: "match", label: "Definition", type: "choice", options: ["a. Something sweet comes from this", "b. To bring together from different places", "c. A place where they grow lots of vegetables", "d. To tell someone your name", "e. The outside of a tree", "f. This carries people or things on water"], answers: ["c. A place where they grow lots of vegetables"], explanation: "A plantation is a large area where crops are grown, so the closest definition is c." }
    ]),
    paired("C2", "2. e n t i c r u d o", [
      { key: "word", label: "Unscrambled word", type: "input", answers: ["introduce"], explanation: "The letters form introduce." },
      { key: "match", label: "Definition", type: "choice", options: ["a. Something sweet comes from this", "b. To bring together from different places", "c. A place where they grow lots of vegetables", "d. To tell someone your name", "e. The outside of a tree", "f. This carries people or things on water"], answers: ["d. To tell someone your name"], explanation: "Introduce means tell someone who you are, so it matches d." }
    ]),
    paired("C3", "3. p a s s m t i e h", [
      { key: "word", label: "Unscrambled word", type: "input", answers: ["steamship"], explanation: "The letters form steamship." },
      { key: "match", label: "Definition", type: "choice", options: ["a. Something sweet comes from this", "b. To bring together from different places", "c. A place where they grow lots of vegetables", "d. To tell someone your name", "e. The outside of a tree", "f. This carries people or things on water"], answers: ["f. This carries people or things on water"], explanation: "A steamship carries people or cargo on water, so it matches f." }
    ]),
    paired("C4", "4. k a b r", [
      { key: "word", label: "Unscrambled word", type: "input", answers: ["bark"], explanation: "The letters form bark." },
      { key: "match", label: "Definition", type: "choice", options: ["a. Something sweet comes from this", "b. To bring together from different places", "c. A place where they grow lots of vegetables", "d. To tell someone your name", "e. The outside of a tree", "f. This carries people or things on water"], answers: ["e. The outside of a tree"], explanation: "Bark is the protective outside layer of a tree, so it matches e." }
    ]),
    paired("C5", "5. h a g e t r", [
      { key: "word", label: "Unscrambled word", type: "input", answers: ["gather"], explanation: "The letters form gather." },
      { key: "match", label: "Definition", type: "choice", options: ["a. Something sweet comes from this", "b. To bring together from different places", "c. A place where they grow lots of vegetables", "d. To tell someone your name", "e. The outside of a tree", "f. This carries people or things on water"], answers: ["b. To bring together from different places"], explanation: "Gather means bring people or things together, so it matches b." }
    ]),
    paired("C6", "6. a u g s r a c n e", [
      { key: "word", label: "Unscrambled word", type: "input", answers: ["sugarcane", "sugar cane"], explanation: "The letters form sugarcane." },
      { key: "match", label: "Definition", type: "choice", options: ["a. Something sweet comes from this", "b. To bring together from different places", "c. A place where they grow lots of vegetables", "d. To tell someone your name", "e. The outside of a tree", "f. This carries people or things on water"], answers: ["a. Something sweet comes from this"], explanation: "Sugar is produced from sugarcane, so it matches a." }
    ])
  ]},
  { key: "D", label: "D", title: "Write the words in the correct order to make sentences.", note: "Use every word once and write a complete sentence.", points: 6, questions: [
    input("D1", "1. next / taking / We / a / are / trip / week", ["We are taking a trip next week", "We are taking a trip next week."], "The present continuous can describe a fixed future arrangement: We are taking a trip next week."),
    input("D2", "2. dinner / my / making / am / for / tonight / I / family", ["I am making dinner for my family tonight", "I am making dinner for my family tonight."], "Use subject + am + verb-ing for a planned arrangement: I am making dinner for my family tonight."),
    input("D3", "3. to / tomorrow / She / is not / school / going", ["She is not going to school tomorrow", "She is not going to school tomorrow.", "She isn't going to school tomorrow", "She isn't going to school tomorrow."], "The negative present continuous is is not + verb-ing: She is not going to school tomorrow."),
    input("D4", "4. baking / later / mother / My / cookies / is", ["My mother is baking cookies later", "My mother is baking cookies later."], "The arranged action uses is baking: My mother is baking cookies later."),
    input("D5", "5. Friday / My / class / visiting / on / is / museum / the", ["My class is visiting the museum on Friday", "My class is visiting the museum on Friday."], "Put the place before the time expression: My class is visiting the museum on Friday."),
    input("D6", "6. learning / week / dinosaurs / next / We / week / are / about", ["We are learning about dinosaurs next week", "We are learning about dinosaurs next week."], "The source repeats week by mistake. The complete sentence uses it once: We are learning about dinosaurs next week.")
  ]},
  { key: "E", label: "E", title: "Look and write sentences. Use the present continuous.", note: "Use each picture and cue to write the planned action.", points: 4, questions: [
    input("E1", "1. He / drive / to the supermarket to get butter later", ["He is going to drive to the supermarket to get butter later", "He is going to drive to the supermarket to get butter later.", "He is driving to the supermarket to get butter later", "He is driving to the supermarket to get butter later."], "The official key uses is going to drive. The present continuous form He is driving ... is also natural for this planned action.", IMG + "supermarket.png"),
    input("E2", "2. We / eat / pasta for dinner tonight", ["We are going to eat pasta for dinner tonight", "We are going to eat pasta for dinner tonight.", "We are eating pasta for dinner tonight", "We are eating pasta for dinner tonight."], "The official key uses are going to eat. We are eating ... also expresses the planned meal naturally.", IMG + "pasta.png"),
    input("E3", "3. She / put / the cookies in the oven at 3:00 this afternoon", ["She is putting the cookies in the oven at 3:00 this afternoon", "She is putting the cookies in the oven at 3:00 this afternoon."], "Use is putting for the planned action. Put doubles the final consonant before -ing.", IMG + "cookies.png"),
    input("E4", "4. He / not go / to cooking class next week", ["He is not going to cooking class next week", "He is not going to cooking class next week.", "He isn't going to cooking class next week", "He isn't going to cooking class next week.", "He is not going to go to cooking class next week", "He is not going to go to cooking class next week."], "The official key uses He is not going to cooking class next week. The expanded going to go version is also accepted.", IMG + "cooking-class.png")
  ]},
  { key: "F", label: "F", title: "Circle the correct answer.", note: "Choose True or False for each statement.", points: 5, questions: [
    choice("F1", "1. All chemicals are dangerous.", ["T", "F"], "F", "False. Some chemicals are dangerous, but not all chemicals are dangerous."),
    choice("F2", "2. A century is fifty years.", ["T", "F"], "F", "False. A century is one hundred years."),
    choice("F3", "3. Something local is close by.", ["T", "F"], "T", "True. Local means connected with or near a particular place."),
    choice("F4", "4. A corporate farm has many workers and big machines.", ["T", "F"], "T", "True. A corporate farm is a large business farm and commonly uses many workers and large machines."),
    choice("F5", "5. A farmer's market doesn't sell fruit and vegetables.", ["T", "F"], "F", "False. Farmers' markets commonly sell fresh fruit and vegetables.")
  ]},
  { key: "G", label: "G", title: "Unscramble the words.", note: "Write the correctly spelled word.", points: 5, questions: [
    input("G1", "1. k p c a e g a", ["package"], "The letters form package."),
    input("G2", "2. o s r s e p c", ["process"], "The letters form process."),
    input("G3", "3. c d u r e e", ["reduce"], "The letters form reduce."),
    input("G4", "4. r l g i r c t a e u u", ["agriculture"], "The letters form agriculture."),
    input("G5", "5. t n n e o c v n e i", ["convenient"], "The letters form convenient.")
  ]},
  { key: "H", label: "H", title: "Look and complete the sentences. Then match them to the pictures.", note: "Write the missing word, then choose picture a, b, c, or d.", points: 8, sectionImage: IMG + "h-picture-strip.png", questions: [
    paired("H1", "1. You can look up the meaning of a word you don't know in a ___.", [
      { key: "word", label: "Missing word", type: "input", answers: ["dictionary"], explanation: "A dictionary gives word meanings." },
      { key: "match", label: "Picture label", type: "choice", options: ["a", "b", "c", "d"], answers: ["b"], explanation: "Picture b shows a dictionary." }
    ]),
    paired("H2", "2. I love to take pictures. I want to be a ___.", [
      { key: "word", label: "Missing word", type: "input", answers: ["photographer"], explanation: "A photographer takes pictures." },
      { key: "match", label: "Picture label", type: "choice", options: ["a", "b", "c", "d"], answers: ["d"], explanation: "Picture d shows a camera, which represents a photographer." }
    ]),
    paired("H3", "3. Many countries ___ fruit to other countries.", [
      { key: "word", label: "Missing word", type: "input", answers: ["export"], explanation: "Export means send goods to another country for sale." },
      { key: "match", label: "Picture label", type: "choice", options: ["a", "b", "c", "d"], answers: ["a"], explanation: "Picture a shows a cargo ship carrying exported goods." }
    ]),
    paired("H4", "4. My family likes to have a ___ at dinner every night.", [
      { key: "word", label: "Missing word", type: "input", answers: ["conversation"], explanation: "A conversation is a talk between people." },
      { key: "match", label: "Picture label", type: "choice", options: ["a", "b", "c", "d"], answers: ["c"], explanation: "Picture c shows people talking at dinner." }
    ])
  ]},
  { key: "I", label: "I", title: "Circle the correct words.", note: "Choose a or to to complete each invitation correctly.", points: 4, questions: [
    choice("I1", "1. Would you like ___ help me make a cake?", ["a", "to"], "to", "Use Would you like to + verb for an invitation to do something."),
    choice("I2", "2. Would you like ___ piece of cake?", ["a", "to"], "a", "Use a before the singular countable noun piece."),
    choice("I3", "3. Would you like ___ delicious orange?", ["a", "to"], "a", "Use a before the singular countable noun orange when it is described as delicious."),
    choice("I4", "4. Would you like ___ go to the movies with me?", ["a", "to"], "to", "Use Would you like to + base verb: to go.")
  ]},
  { key: "J", label: "J", title: "Complete the sentences. Add to, some, or a.", note: "Use each original picture to complete the invitation.", points: 4, questions: [
    input("J1", "1. Would you like ___?", ["a cookie with milk", "a cookie with milk?"], "Use a before the singular countable noun cookie.", IMG + "cookie-milk.png"),
    input("J2", "2. Would you like ___?", ["to try some kiwi", "to try some kiwi?"], "Use to + verb for an invitation to do something, and some before the uncountable fruit word kiwi.", IMG + "kiwi.png"),
    input("J3", "3. Would you like ___?", ["to go to the beach", "to go to the beach?"], "Use to go for an invitation to do an activity.", IMG + "beach.png"),
    input("J4", "4. Would you like ___?", ["some ice cream with your cake", "some ice cream with your cake?"], "Use some before the uncountable noun ice cream.", IMG + "cake.png")
  ]},
  { key: "K", label: "K", title: "Write the words in the correct order to make questions. Then listen and write the answers.", note: "Write both the complete question and the answer from the recording.", points: 4, audio: "assets/audio-k.mp3", questions: [
    paired("K1", "1. like / apple / Would / an / you / ?", [
      { key: "question", label: "Question", type: "input", answers: ["Would you like an apple", "Would you like an apple?"], explanation: "The correct question order is: Would you like an apple?" },
      { key: "answer", label: "Listening answer", type: "input", answers: ["Yes, thank you", "Yes, thank you."], explanation: "The recording answer is: Yes, thank you." }
    ]),
    paired("K2", "2. come / with / to / me / Would / like / you / ?", [
      { key: "question", label: "Question", type: "input", answers: ["Would you like to come with me", "Would you like to come with me?"], explanation: "The correct question order is: Would you like to come with me?" },
      { key: "answer", label: "Listening answer", type: "input", answers: ["No, thank you", "No, thank you."], explanation: "The recording answer is: No, thank you." }
    ])
  ]}
];
