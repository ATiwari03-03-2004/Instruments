let isKeyAssistOn = false;
let isRecordClicked = false;
let isRecording = false;
let permitRecording = false;

let soundType = "sine";

let keyFrequencyMap = {
  1: 65.406,
  "!": 69.296,
  2: 73.416,
  "@": 77.782,
  3: 82.407,
  4: 87.307,
  $: 92.499,
  5: 97.999,
  "%": 103.826,
  6: 110.0,
  "^": 116.541,
  7: 123.471,
  8: 130.813,
  "*": 138.591,
  9: 146.832,
  "(": 155.563,
  0: 164.814,
  q: 174.614,
  Q: 184.997,
  w: 195.998,
  W: 207.652,
  e: 220.0,
  E: 233.082,
  r: 246.942,
  t: 261.626,
  T: 277.183,
  y: 293.665,
  Y: 311.127,
  u: 329.628,
  i: 349.228,
  I: 369.994,
  o: 391.995,
  O: 415.305,
  p: 440.0,
  P: 466.164,
  a: 493.883,
  s: 523.251,
  S: 554.365,
  d: 587.33,
  D: 622.254,
  f: 659.255,
  g: 698.456,
  G: 739.989,
  h: 783.991,
  H: 830.609,
  j: 880.0,
  J: 932.328,
  k: 987.767,
  l: 1046.502,
  L: 1108.731,
  z: 1174.659,
  Z: 1244.508,
  x: 1318.51,
  c: 1396.913,
  C: 1479.978,
  v: 1567.982,
  V: 1661.219,
  b: 1760.0,
  B: 1864.655,
  n: 1975.533,
  m: 2093.005,
};

let noteCode = {
  C2: { keyBoardCode: "1", freq: 65.406 },
  "C#2/Db2": { keyBoardCode: "!", freq: 69.296 },
  D2: { keyBoardCode: "2", freq: 73.416 },
  "D#2/Eb2": { keyBoardCode: "@", freq: 77.782 },
  E2: { keyBoardCode: "3", freq: 82.407 },
  F2: { keyBoardCode: "4", freq: 87.307 },
  "F#2/Gb2": { keyBoardCode: "$", freq: 92.499 },
  G2: { keyBoardCode: "5", freq: 97.999 },
  "G#2/Ab2": { keyBoardCode: "%", freq: 103.826 },
  A2: { keyBoardCode: "6", freq: 110.0 },
  "A#2/Bb2": { keyBoardCode: "^", freq: 116.541 },
  B2: { keyBoardCode: "7", freq: 123.471 },
  C3: { keyBoardCode: "8", freq: 130.813 },
  "C#3/Db3": { keyBoardCode: "*", freq: 138.591 },
  D3: { keyBoardCode: "9", freq: 146.832 },
  "D#3/Eb3": { keyBoardCode: "(", freq: 155.563 },
  E3: { keyBoardCode: "0", freq: 164.814 },
  F3: { keyBoardCode: "q", freq: 174.614 },
  "F#3/Gb3": { keyBoardCode: "Q", freq: 184.997 },
  G3: { keyBoardCode: "w", freq: 195.998 },
  "G#3/Ab3": { keyBoardCode: "W", freq: 207.652 },
  A3: { keyBoardCode: "e", freq: 220.0 },
  "A#3/Bb3": { keyBoardCode: "E", freq: 233.082 },
  B3: { keyBoardCode: "r", freq: 246.942 },
  C4: { keyBoardCode: "t", freq: 261.626 },
  "C#4/Db4": { keyBoardCode: "T", freq: 277.183 },
  D4: { keyBoardCode: "y", freq: 293.665 },
  "D#4/Eb4": { keyBoardCode: "Y", freq: 311.127 },
  E4: { keyBoardCode: "u", freq: 329.628 },
  F4: { keyBoardCode: "i", freq: 349.228 },
  "F#4/Gb4": { keyBoardCode: "I", freq: 369.994 },
  G4: { keyBoardCode: "o", freq: 391.995 },
  "G#4/Ab4": { keyBoardCode: "O", freq: 415.305 },
  A4: { keyBoardCode: "p", freq: 440.0 },
  "A#4/Bb4": { keyBoardCode: "P", freq: 466.164 },
  B4: { keyBoardCode: "a", freq: 493.883 },
  C5: { keyBoardCode: "s", freq: 523.251 },
  "C#5/Db5": { keyBoardCode: "S", freq: 554.365 },
  D5: { keyBoardCode: "d", freq: 587.33 },
  "D#5/Eb5": { keyBoardCode: "D", freq: 622.254 },
  E5: { keyBoardCode: "f", freq: 659.255 },
  F5: { keyBoardCode: "g", freq: 698.456 },
  "F#5/Gb5": { keyBoardCode: "G", freq: 739.989 },
  G5: { keyBoardCode: "h", freq: 783.991 },
  "G#5/Ab5": { keyBoardCode: "H", freq: 830.609 },
  A5: { keyBoardCode: "j", freq: 880.0 },
  "A#5/Bb5": { keyBoardCode: "J", freq: 932.328 },
  B5: { keyBoardCode: "k", freq: 987.767 },
  C6: { keyBoardCode: "l", freq: 1046.502 },
  "C#6/Db6": { keyBoardCode: "L", freq: 1108.731 },
  D6: { keyBoardCode: "z", freq: 1174.659 },
  "D#6/Eb6": { keyBoardCode: "Z", freq: 1244.508 },
  E6: { keyBoardCode: "x", freq: 1318.51 },
  F6: { keyBoardCode: "c", freq: 1396.913 },
  "F#6/Gb6": { keyBoardCode: "C", freq: 1479.978 },
  G6: { keyBoardCode: "v", freq: 1567.982 },
  "G#6/Ab6": { keyBoardCode: "V", freq: 1661.219 },
  A6: { keyBoardCode: "b", freq: 1760.0 },
  "A#6/Bb6": { keyBoardCode: "B", freq: 1864.655 },
  B6: { keyBoardCode: "n", freq: 1975.533 },
  C7: { keyBoardCode: "m", freq: 2093.005 },
};

let printableNote = document.querySelector(".printable .notes text");

let noteCodeTable = document.querySelector(".printable .notesCode table");
let noteCodeArray = Object.keys(noteCode).map((key) => {
  return [key, noteCode[key].keyBoardCode];
});
noteCodeArray.forEach((note) => {
  let tr = document.createElement("tr");
  let tdCode = document.createElement("td");
  tdCode.innerText = note[0];
  let tdNote = document.createElement("td");
  tdNote.innerText = note[1];
  tr.appendChild(tdCode);
  tr.appendChild(tdNote);
  noteCodeTable.appendChild(tr);
});

let download = document.querySelector(
  ".main .keyboard .keyboard-panel-control .controls-tools .download-notes"
);
download.addEventListener("click", () => {
  printableNote.innerText = notesPlayedDiv.innerText;
  print();
});

let editableNotesDIV = document.querySelector(".notes-editor");
let textNotes = document.querySelector(".notes-editor .notes textarea");
let save = document.querySelector(".notes-editor .save-btn .save");
let editCrossIcon = document.querySelector(".notes-editor .cross i");
let keysDiv = document.querySelector(".main .keyboard .keys");
let keys = document.querySelectorAll(".main .keyboard .keys div");
let isMouseClicked = false;
let notePlayedDiv = document.querySelector(
  ".main .keyboard .keyboard-panel-control .note-played .note"
);
let noteCodePlayedDiv = document.querySelector(
  ".main .keyboard .keyboard-panel-control .note-played .noteCode"
);
let notesPlayed = document.querySelector(
  ".main .keyboard .keyboard-panel-control .notes-played"
);
let notesPlayedDiv = document.querySelector(
  ".main .keyboard .keyboard-panel-control .notes-played .notes"
);
let editIcon = document.querySelector(
  ".main .keyboard .keyboard-panel-control .controls-tools .edit-notes"
);

let whiteKeys = document.querySelectorAll(".main .keyboard .keys .key");
let blackKeys = document.querySelectorAll(".main .keyboard .keys .black-key");
let keyAssist = document.querySelector(
  ".main .keyboard .extra-features .key-assist"
);
keyAssist.addEventListener("mouseover", () => {
  if (!isKeyAssistOn) {
    keyAssist.children[0].style.opacity = "1";
    keyAssist.children[1].style.color = "white";
  }
});
keyAssist.addEventListener("mouseleave", () => {
  if (!isKeyAssistOn) {
    keyAssist.children[0].style.opacity = "0";
    keyAssist.children[1].style.color = "gray";
  }
});
keyAssist.addEventListener("click", () => {
  if (isKeyAssistOn) isKeyAssistOn = false;
  else isKeyAssistOn = true;
  if (isKeyAssistOn) {
    keyAssist.children[0].style.opacity = "1";
    keyAssist.children[0].style.color = "white";
    keyAssist.children[1].style.color = "white";
    console.dir(keyAssist.children[1]);
    for (whiteKey of whiteKeys) {
      whiteKey.style.display = "flex";
      whiteKey.style.justifyContent = "center";
      whiteKey.style.alignItems = "end";
      whiteKey.innerHTML = `<span><b>${
        noteCode[whiteKey.getAttribute("id")].keyBoardCode
      }</b></span>`;
    }
    for (blackKey of blackKeys) {
      blackKey.style.display = "flex";
      blackKey.style.justifyContent = "center";
      blackKey.style.alignItems = "end";
      blackKey.style.color = "white";
      let ID = blackKey.getAttribute("id");
      ID = `${ID[0]}#${ID[ID.length - 1]}/${ID[ID.length - 3]}b${
        ID[ID.length - 1]
      }`;
      blackKey.innerHTML = `<span><b>${noteCode[ID].keyBoardCode}</b></span>`;
    }
  } else {
    keyAssist.children[0].style.opacity = "0";
    keyAssist.children[1].style.color = "gray";
    for (whiteKey of whiteKeys) {
      whiteKey.innerHTML = "";
    }
    for (blackKey of blackKeys) {
      blackKey.innerHTML = "";
    }
  }
});

let sounds = document.querySelector(".main .keyboard .extra-features .sounds");
let soundPanel = document.querySelector(".sound-panel");
let soundPanelClose = document.querySelector(".sound-panel .close i");
let soundPanelSine = document.querySelector(".sound-panel form .SINE input");
let Sine = document.querySelector(".sound-panel form .SINE");
let soundPanelSquare = document.querySelector(
  ".sound-panel form .SQUARE input"
);
let Square = document.querySelector(".sound-panel form .SQUARE");
let soundPanelSawtooth = document.querySelector(
  ".sound-panel form .SAWTOOTH input"
);
let Sawtooth = document.querySelector(".sound-panel form .SAWTOOTH");
sounds.addEventListener("mouseover", () => {
  sounds.children[0].style.opacity = "1";
  sounds.children[1].style.color = "white";
});
sounds.addEventListener("mouseleave", () => {
  sounds.children[0].style.opacity = "0";
  sounds.children[1].style.color = "gray";
});
sounds.addEventListener("click", () => {
  soundPanel.style.display = "block";
});

Sine.addEventListener("click", () => {
  soundType = "sine";
});

Square.addEventListener("click", () => {
  soundType = "square";
});

Sawtooth.addEventListener("click", () => {
  soundType = "sawtooth";
});

soundPanelClose.addEventListener("click", () => {
  soundPanel.style.display = "none";
});

let learn = document.querySelector(".main .keyboard .extra-features .learn");
let learnSection = document.querySelector(".learned");
let returnIcon = document.querySelector(".learned .head .return");
learn.addEventListener("mouseover", () => {
  learn.children[0].style.opacity = "1";
  learn.children[1].style.color = "white";
});
learn.addEventListener("mouseleave", () => {
  learn.children[0].style.opacity = "0";
  learn.children[1].style.color = "gray";
});
learn.addEventListener('click', () => {
  learnSection.style.display = "block";
});
returnIcon.addEventListener("click", () => {
  learnSection.style.display = "none";
});

editIcon.addEventListener("click", () => {
  editableNotesDIV.style.display = "block";
});

editCrossIcon.addEventListener("click", () => {
  editableNotesDIV.style.display = "none";
});

save.addEventListener("click", () => {
  let editedNotes = [...textNotes.value].map((note) => {
    return "<span>" + note + " </span>";
  });
  notesPlayedDiv.innerHTML = editedNotes.join("");
  editableNotesDIV.style.display = "none";
  printableNote.innerText = notesPlayedDiv.innerText;
});

keysDiv.addEventListener("mousedown", (e) => {
  isMouseClicked = true;
});

keysDiv.addEventListener("mouseup", () => {
  setTimeout(() => {
    isMouseClicked = false;
  }, 100);
});

let replay = document.querySelector(
  ".main .keyboard .keyboard-panel-control .controls-tools .play-note"
);
replay.addEventListener("click", () => {
  let play = document.querySelector(
    ".main .keyboard .keyboard-panel-control .controls-tools .play-note i.fa-play"
  );
  let pause = document.querySelector(
    ".main .keyboard .keyboard-panel-control .controls-tools .play-note i.fa-pause"
  );
  play.style.display = "none";
  pause.style.display = "block";
  let IDs = [...textNotes.value];
  let spans = document.querySelectorAll(
    ".main .keyboard .keyboard-panel-control .notes-played .notes span"
  );
  for (let i = 0; i < spans.length; i++) {
    setTimeout(() => {
      spans[i].style.color = "rgba(30, 215, 96, 0.7)";
      spans[i].style.backgroundColor = "rgba(0, 0, 255, 0.3)";
      if (permitRecording) soundAndRecording(keyFrequencyMap[IDs[i]], "record");
      else soundAndRecording(keyFrequencyMap[IDs[i]]);
      setTimeout(() => {
        spans[i].style.backgroundColor = "transparent";
      }, 500);
    }, 1000 * (i + 1));
  }
  setTimeout(() => {
    pause.style.display = "none";
    play.style.display = "block";
    spans.forEach((span) => {
      span.style.color = "white";
    });
  }, spans.length * 1100);
});

let reload = document.querySelector(
  ".main .keyboard .keyboard-panel-control .controls-tools .reset"
);
reload.addEventListener("click", () => {
  notePlayedDiv.innerText = "Note";
  noteCodePlayedDiv.innerText = "Key Code";
  notesPlayedDiv.innerHTML = "";
  textNotes.value = "";
  printableNote.innerHTML = "Notes";
});

function displayNote(ID) {
  if (ID[1] === "S") {
    notePlayedDiv.innerText = `${ID[0]}#${ID[ID.length - 1]}/${
      ID[ID.length - 3]
    }b${ID[ID.length - 1]}`;
    notePlayedDiv.style.fontSize = "1.78rem";
  } else {
    notePlayedDiv.innerText = ID;
    notePlayedDiv.style.fontSize = "2.8rem";
  }
  let code = noteCode[notePlayedDiv.innerText].keyBoardCode;
  let frequency = noteCode[notePlayedDiv.innerText].freq;
  noteCodePlayedDiv.innerText = code;
  notesPlayed.scrollTop = notesPlayed.scrollHeight;
  notesPlayedDiv.innerHTML = `${notesPlayedDiv.innerHTML}<span>${code} </span>`; // span
  textNotes.value = `${textNotes.value}${code}`;
  printableNote.innerHTML = `${notesPlayedDiv.innerHTML}${code} `;
  if (permitRecording) soundAndRecording(frequency, "record");
  else soundAndRecording(frequency);
}

function blinkEffect(note) {
  if (isMouseClicked) {
    note.classList.toggle("effect");
    const ID = note.getAttribute("id");
    const keyBlinker = document.querySelector(
      `.main .keyboard .key-click-indicator .${ID}`
    );
    keyBlinker.style.display = "block";
    displayNote(ID);
    setTimeout(() => {
      note.classList.toggle("effect");
      keyBlinker.style.display = "none";
    }, 300);
  }
}

keys.forEach((note) => {
  note.addEventListener("mouseover", () => {
    blinkEffect(note);
  });
  note.addEventListener("click", () => {
    blinkEffect(note);
  });
});

const AUDIO_CONTEXT = new AudioContext();
const DESTINATION = AUDIO_CONTEXT.createMediaStreamDestination();
const MEDIA_RECORDER = new MediaRecorder(DESTINATION.stream);

function soundAndRecording(frequency, task = "sound") {
  const OSCILLATOR = AUDIO_CONTEXT.createOscillator();
  const GAIN_NODE = AUDIO_CONTEXT.createGain();
  OSCILLATOR.connect(GAIN_NODE);
  GAIN_NODE.connect(AUDIO_CONTEXT.destination);
  let now = AUDIO_CONTEXT.currentTime;
  OSCILLATOR.type = soundType;
  OSCILLATOR.frequency.value = frequency;
  GAIN_NODE.gain.setValueAtTime(0, now);
  OSCILLATOR.start();
  const attackTime = 0.1; // seconds
  const decayTime = 0.3; // seconds
  const sustainLevel = 0.5; // maintain same level of sound of 0.5 for a given time
  const releaseTime = 0.5; // seconds
  GAIN_NODE.gain.linearRampToValueAtTime(1, now + attackTime);
  GAIN_NODE.gain.linearRampToValueAtTime(
    sustainLevel,
    now + attackTime + decayTime
  );
  GAIN_NODE.gain.linearRampToValueAtTime(
    0,
    now + attackTime + decayTime + releaseTime
  );
  OSCILLATOR.stop(now + attackTime + decayTime + releaseTime + 1);
  if (task === "record" && !isRecording) {
    isRecording = true;
    GAIN_NODE.connect(DESTINATION);
    MEDIA_RECORDER.start();
    setTimeout(() => {
      if (isRecording) {
        MEDIA_RECORDER.stop();
        isRecording = false;
        resetRecordButton();
        alert("Maximum supported recording duration is 1 minute i.e. 60 seconds");
      }
    }, 60000);
  }
}

let record = document.querySelector(".main .extra-features .recording");
let recordPanel = document.querySelector(".record-panel");
let recordClose = document.querySelector(".record-panel .close")
let startRecord = document.querySelector(".record-panel .record-btn");
record.addEventListener('mouseover', () => {
  if (!isRecordClicked) {
    record.children[0].style.opacity = "1";
    record.children[1].style.color = "white";
  }
});
record.addEventListener('mouseleave', () => {
  if (!isRecordClicked) {
    record.children[0].style.opacity = "0";
    record.children[1].style.color = "gray";
  }
});
record.addEventListener("click", () => {
  if (isRecording) {
    MEDIA_RECORDER.stop();
    isRecording = false;
    resetRecordButton();
  } else {
    if (!isRecordClicked) {
      isRecordClicked = true;
      record.children[0].style.opacity = "1";
      record.children[0].style.color = "white";
      record.children[1].style.color = "white";
      recordPanel.style.display = "block";
    } else {
      isRecordClicked = false;
      record.children[0].style.opacity = "0";
      record.children[0].style.color = "gray";
      record.children[1].style.color = "gray";
      recordPanel.style.display = "none";
    }
  }
});
recordClose.addEventListener('click', () => {
  isRecordClicked = false;
  record.children[0].style.opacity = "0";
  record.children[1].style.color = "gray";
  recordPanel.style.display = "none";
});

startRecord.addEventListener('click', () => {
  record.children[0].style.border = "1px solid red";
  record.children[0].children[0].style.color = "red";
  record.children[1].style.color = "red";
  record.children[1].innerText = "Stop";
  recordPanel.style.display = "none";
  permitRecording = true;
})

function resetRecordButton() {
  record.children[0].style.border = "1px solid white";
  record.children[0].children[0].style.color = "white";
  record.children[1].style.color = "white";
  record.children[1].innerText = "Record";
  recordPanel.style.display = "block";
}

MEDIA_RECORDER.ondataavailable = function(e) {
  console.log("recording done");
  console.log(e.data);
}
