class Question{
    constructor(){
this.title = createElement("h1");
this.input = createInput("Enter Correct Option Here");
this.button = createButton("Submit");
this.question = createElement("h1");
this.option1 = createElement("h2");
this.option2 = createElement("h2");
this.option3 = createElement("h2");
this.option4 = createElement("h2");

    }

    display(){
        this.title.html("Quiz:1");
        this.title.position(710,10);
        this.question.html("Question 1: What comes after the letter A?");
        this.question.position(500,150)
        this.option1.html("E");
        this.option1.position(550,300);
        this.option2.html("C");
        this.option2.position(550,400);
        this.option3.html("B");
        this.option3.position(1000,300);
        this.option4.html("G");
        this.option4.position(1000,400);

this.button.mousePressed(()=>{
    this.title.hide()
    this.input.hide()
    this.option1.hide()
    this.option2.hide()
    this.option3.hide()
    this.option4.hide()

})

    }
}