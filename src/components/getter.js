const questions = [
  "Describe a surprising mistake you made recently.",
  "Describe one of your happiest childhood memories.",
  "Describe a guilt you still carry on.",
  "Describe the last time a tiny thing irritated you.",
  "What made you suprisingly happy recently?",
  "What's your favourite memory with them?",
  "What's something you two did that makes you laugh?",
  "What's an activity/adventure you want to try with them?",
  "What's something exciting you learned recently?",
  "Are there any problems you're struggling with right now?",
  "What takes up most of your time these days?",
  "What's a tiny activity you enjoy that they don't know?",
  "Have you been cooking, reading, watching anything new?",
  "What's something amazing about them they don't realise?",
  "What about them do you admire?",
  "What's been taking up most of your time these days?",
  "What's a time they really helped you?",
  "Is there anything useful you'd like to teach them?",
  "Did you make a mistake with them you'd like to apologise for?",
  "What encouraging words would you give them to remember for life?",
  "Would you like to ask them for advice on anything?",
];

const greetings = [
  "What's cooking, good looking?",
  "Hi, Sunshine! You're lighting up my day!",
  "Howdy-dowdy, pardner!",
  "Ahoy, matey! I think I see my treasure!",
  "Yooooooodeeelhiiiihooooooooooooo!!!!",
  "Hi, honey! Are you still so sweeeet?", 
  "Hey, Einstein! Sorry to interrupt your theories.",
  "Sup' hoooooooooomie! How you doooooooing?",
  "I dost bid thee good morning, mine friend. *posh accent*",
  "Greetings, fellow traveller!",
  "Peek-a-boo! I seeeeee you!",
  "Ello' guv'na! *British accent*",
  "Top of the morning to ya, laddy! *Irish accent*", 
  "Hi... I'm batman... *evil voice*",
  "Toodles, honeyboo!",
  "Que pasa, amigo?",
  "Hey! Did I just land in heaven? Because I see an angel!", 
  "Hi bunny! How's it hopping?",
  "Salutations, my dear fellow! *posh accent*",
  "Que pasa, amigo?", 
  "What’s kicking, little chicken?",
  "Helloooooooooooo... I come in PEACE!", 
  "Human! At last... we meet again! *evil laughter*",
  "Hello hi, cutiepie",
  "Hidey-ho, buffalo!",
  "Hakuna matata, my pretty pinata!",
];

const outros = [
  "Blow them a kiss",
  "Show them a dance move",
  "Hug yourself/a pillow to send a virtual hug",
  "Jump up excitedly with your arms in the air",
  "Do a special spin just for them",
  "Do a bad joke / pun",
  "Sing a song just for them",
  "Do a funny selfie pose",
  "Poke the webcam playfully",
  "Wiggle your fingers at the webcam as if tickling them",
  "Do an evil laugh",
  "Do an angry face / pout playfully",
  "Draw a smiley face and hold it up to the webcam",
  "Write something cute on paper and hold it up to the webcam",
  "Do a mini-exercise and ask them to repeat",
  "Make them a funny/sweet 'roses are red...' poem",
  "Crouch down out of the camera's view",
  "Jump left/right out of the camera's view",
  "Do an overly-excited wave with both hands",
  "Eskimo kiss (poke the webcam with your nose)"
];

export default function getData(type) {
  if (type === "question") {
    let num = Math.floor(Math.random() * questions.length);
    return questions[num];
  } else if (type === "intro") {
    let num = Math.floor(Math.random() * greetings.length);
    return greetings[num];
  } if (type === "outro") {
    let num = Math.floor(Math.random() * outros.length);
    return outros[num];
  }
}