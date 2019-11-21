function play(id) {
  const ImagesUrl = "./Bignumbers/";
  const PCImagesUrl = "./Bignumbers/pc/";
  const ImgType = ".png";

  let zugOperedBtn = document.getElementById("zugOpered");
  let UserChoice;
  let UserFinger;

  if (zugOperedBtn.checked) {
    UserChoice = 2;
    console.log("השחקן הוא זוג");
  } else {
    UserChoice = 1;
    console.log("השחקן הוא פרד");
  }

  UserFinger = parseInt(id);

  let PcFinger = Math.floor(Math.random() * 5) + 1;

  pcImgNumber = PcFinger;
  UserImgNumber = UserFinger;

  document.getElementById("userBox").style.backgroundImage =
    "url(" + ImagesUrl + UserImgNumber + ImgType + ")";

  document.getElementById("pcBox").style.backgroundImage =
    "url(" + PCImagesUrl + pcImgNumber + ImgType + ")";

  console.log(
    "אצבעות המשתמש " +
      " " +
      UserFinger +
      " " +
      "אצבעות המחשב" +
      " " +
      " " +
      PcFinger
  );
  sum = UserFinger + PcFinger;
  if (sum % 2 === 0) {
    if (UserChoice === 2) {
      console.log("נצחון");
    } else {
      console.log("הפסד");
    }
  } else {
    if (UserChoice === 2) {
      console.log("הפסד");
    } else {
      console.log("ניצחון");
    }
  }
}

function replaceText(checkbox) {
  if (checkbox.checked) {
    document.getElementById("zug").innerHTML = "(odds)";
    document.getElementById("pered").innerHTML = "(evens)";
  } else {
    document.getElementById("zug").innerHTML = "(evens)";
    document.getElementById("pered").innerHTML = "(odds)";
  }
}

function ShowP2(val) {
  if (val === "two") {
    document.getElementById("P2Name").style.display = "block";
  } else {
    document.getElementById("P2Name").style.display = "none";
  }
}

function ShowMainDiv() {
  const player1Name = document.getElementById("P1Name").value;
  const player2Name = document.getElementById("P2Name").value;

  if (player1Name != "") {
    document.getElementById("PlayerName").innerHTML = player1Name;
  }

  if (player1Name != "") {
    document.getElementById("PlayerName").innerHTML = player1Name;
  }
  let Boxes = document.getElementsByClassName("boxes");
  Boxes[0].style.display = "flex";

  let Fingers = document.getElementsByClassName("FingerBtns");
  Fingers[0].style.display = "flex";

  let SwitchToZug = document.getElementsByClassName("SwitchToZug");
  SwitchToZug[0].style.display = "flex";

  document.getElementById("MainFormDiv").style.display = "none";
  document.getElementById("HideButtons").style.display = "none";
}

function ShowInstructions() {
  document.getElementById("InstructionsDiv").style.display = "block";
}

function closeInstructions() {
  document.getElementById("InstructionsDiv").style.display = "none";
}
