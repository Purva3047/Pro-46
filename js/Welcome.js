class Welcome {
  constructor() {
    this.logoImage =
      "https://raw.githubusercontent.com/IronMan-1000/AVENGERS-GAME-IMAGE/main/logo.png";
    this.logo = createImg(this.logoImage);
    this.logo.position(1000, 1000)

    this.teacherButton = createButton("CREATE A GAME");
    this.studentButton = createButton("JOIN A GAME");
    this.instructionButton = createButton("INSTRUCTIONS");
  }

  hideElements() {
    this.teacherButton.hide();
    this.studentButton.hide();
  }

  setElementPosition() {
    this.logo.position(width / 18, -210);
    this.teacherButton.position(width / 2.3, height / 2 - 100);
    this.studentButton.position(width / 2.3, height / 2);
    this.instructionButton.position(width / 1.095, height/ 1.25, 10, 10);
  }

  setElementStyle() {
    this.teacherButton.class("customButton");
    this.studentButton.class("customButton");
    this.instructionButton.class("transparent_btn");
  }

  handleOnpress() {
    this.teacherButton.mousePressed(() => {
      this.hideElements();
      teacher.display();
    });

    this.studentButton.mousePressed(() => {
      this.hideElements();
      student.display();
    });
    this.instructionButton.mousePressed(() => {
      swal({
        title: "INSTRUCTIONS",
        text: "USE THE UP ARROW KEY TO MOVE AHEAD AND LEFT AND RIGHT ARROW KEY TO MOVE LEFT & RIGHT. PRESS THE SPACEBAR TO INCREASE THE SPEED. DON'T TOUCH THE OBSTACLES AND THE BARRIERS BY THE SIDE. COLLECT THE AVENGERS STAR TO INCREASE YOUR SCORE. ALL THE BEST!!", 
        imageUrl:
       "https://raw.githubusercontent.com/IronMan-1000/ALIEN-GAME-IMAGES/main/instruction.png",
        imageSize: "100x100",          
        confirmButtonText: "Ok"
      });
    });
  }

  display() {
    this.setElementStyle();
    this.setElementPosition();
    this.handleOnpress();
  }
}
