
//selecting all required elements
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");
const time_line = document.querySelector("header .time_line");
// const timeText = document.querySelector(".timer .time_left_txt");
// const timeCount = document.querySelector(".timer .timer_sec");
var quesCount;
var inputcheck = 0;
// if startQuiz button clicked
start_btn.onclick = () => {
    info_box.classList.add("activeInfo"); //show info box
}

// if exitQuiz button clicked
exit_btn.onclick = () => {
    info_box.classList.remove("activeInfo"); //hide info box
}

// if continueQuiz button clicked
continue_btn.onclick = () => {
    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.add("activeQuiz"); //show quiz box
    showQuetions(0); //calling showQestions function
    queCounter(1); //passing 1 parameter to queCounter
    // startTimer(15); //calling startTimer function
    // startTimerLine(0); //calling startTimerLine function
}

let timeValue = 15;
let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;

const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");

// if restartQuiz button clicked
restart_quiz.onclick = () => {
    quiz_box.classList.add("activeQuiz"); //show quiz box
    result_box.classList.remove("activeResult"); //hide result box
    timeValue = 15;
    que_count = 0;
    que_numb = 1;
    userScore = 0;
    widthValue = 0;
    showQuetions(que_count); //calling showQestions function
    queCounter(que_numb); //passing que_numb value to queCounter
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
    // startTimer(timeValue); //calling startTimer function
    // startTimerLine(widthValue); //calling startTimerLine function
    timeText.textContent = "Time Left"; //change the text of timeText to Time Left
    next_btn.classList.remove("show"); //hide the next button
}

// if quitQuiz button clicked
quit_quiz.onclick = () => {
    window.location.reload(); //reload the current window
}

const next_btn = document.querySelector("footer .next_btn");
const bottom_ques_counter = document.querySelector("footer .total_que");

// if Next Que button clicked
next_btn.onclick = () => {
    if (que_count < questions.length - 1) { //if question count is less than total question length
        que_count++; //increment the que_count value
        que_numb++; //increment the que_numb value
        showQuetions(que_count); //calling showQestions function
        queCounter(que_numb); //passing que_numb value to queCounter
        clearInterval(counter); //clear counter
        clearInterval(counterLine); //clear counterLine
        // startTimer(timeValue); //calling startTimer function
        // startTimerLine(widthValue); //calling startTimerLine function
        timeText.textContent = "Time Left"; //change the timeText to Time Left
        next_btn.classList.remove("show"); //hide the next button
    } else {
        clearInterval(counter); //clear counter
        clearInterval(counterLine); //clear counterLine
        showResult(); //calling showResult function
    }
}
// Function for Single choice questions
function Single(index) {
    let que_tag = '<span>' + questions[index].numb + ". " + questions[index].question + '</span>';
    let option_tag;
    option_tag = '<div class="option"><span>' + questions[index].options[0] + '</span></div>'
        + '<div class="option"><span>' + questions[index].options[1] + '</span></div>'
        + '<div class="option"><span>' + questions[index].options[2] + '</span></div>'
        + '<div class="option"><span>' + questions[index].options[3] + '</span></div>';
    showNewQuetions(que_tag, option_tag);
}

// Function for Input text Questions
function inputText(index) {
    let que_tag = '<span>' + questions[index].numb + ". " + questions[index].question + '</span>';
    option_tag = `<input type="text" id="name" style = "width:100%; padding: 12px 20px; margin: 8px 0;border:2px solid #0066cc;box-sizing: border-box;"><button type="submit" style = "background-color:#008CBA;color:white;border-radius:4px;font-size:12px;padding:8px 20px;cursor:pointer;" onclick="inputTextCheck(${index})">Submit</button>`;
    showNewQuetions(que_tag, option_tag);
}

// Function for Multiple Correct Questions
function Multiple(index) {
    let que_tag = '<span>' + questions[index].numb + ". " + questions[index].question + '</span>';
    option_tag = '<div class="option"><span>' + '<input class="check" value=' + questions[index].options[0] + ' type="checkbox"/>&nbsp;' + questions[index].options[0] + '</span></div>'
        + '<div class="option"><span>' + '<input class="check" value=' + questions[index].options[1] + ' type="checkbox"/>&nbsp;' + questions[index].options[1] + '</span></div>'
        + '<div class="option"><span>' + '<input class="check" value=' + questions[index].options[2] + ' type="checkbox"/>&nbsp;' + questions[index].options[2] + '</span></div>'
        + '<div class="option"><span>' + '<input class="check" value=' + questions[index].options[3] + ' type="checkbox"/>&nbsp;' + questions[index].options[3] + '</span></div><button type="submit" style = "background-color:#008CBA;color:white;border-radius:4px;font-size:12px;padding:8px 20px;cursor:pointer;" onclick="onclickMulti()">Submit<button/>';
    quesCount = index;
    showMultipleQuetions(que_tag, option_tag);
}
function showMultipleQuetions(que_tag, option_tag) {

    const que_text = document.querySelector(".que_text");
    que_text.innerHTML = que_tag; //adding new span tag inside que_tag
    option_list.innerHTML = option_tag; //adding new div tag inside option_tag
    const option = option_list.querySelectorAll(".option");
}
function onclickMulti() {
    // alert("Your Record has been submitted successfully.");
    // swal("Thanks!", "Your Record has been submitted successfully", "success");
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    Toast.fire({
        icon: 'success',
        title: 'Your Response has been submitted successfully!'
    })
    let correctAnsCount = 0;
    let ansList = questions[quesCount].answer;
    let checkboxs = document.getElementsByClassName("check");

    for (let i = 0; i < 4; i++) { // loop all the checkbox item
        if (checkboxs[i].checked) {  //if the check box is checked
            console.log(i);
            let data = checkboxs[i].value;
            console.log("data ", data);
            ansList.forEach(ans => {
                if (ans == data) {
                    correctAnsCount += 1;
                    console.log(correctAnsCount)
                }
            })
        }
    }
    if (ansList.length == correctAnsCount) {
        userScore += 1;
        console.log(userScore);
    }
    next_btn.classList.add("show");
}

function multiOptionSelected(answer) {
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
    let userAns = answer.textContent; //getting user selected option
    let correcAns = questions[que_count].answer; //getting correct answer from array
    const allOptions = option_list.children.length; //getting all option items

    if (userAns == correcAns) { //if user selected option is equal to array's correct answer
        userScore += 1; //upgrading score value with 1
        answer.style.background = "#66b3ff";
        // answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        console.log("Correct Answer");
        console.log("Your correct answers = " + userScore);
    } else {
        // answer.classList.add("incorrect"); //adding red color to correct selected option
        //answer.insertAdjacentHTML("beforeend", crossIconTag); //adding cross icon to correct selected option
        answer.style.background = "#66b3ff";
        console.log("Wrong Answer");
    }
    for (i = 0; i < allOptions; i++) {
        option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
    }
    next_btn.classList.add("show"); //show the next button if user selected any option
}


function showQuetions(index) {
    if (typeof questions[index].answer == 'object') {
        Multiple(index);
    }
    else {
        try {
            questions[index].options[0];
            Single(index);
        }
        catch (e) {
            inputText(index);
            console.log(e)
        }
    }
}

function inputTextCheck(index) {
    // alert("Your Record has been submitted successfully.");
    // swal("Thanks!", "Your Record has been submitted successfully", "success");
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'success',
        title: 'Your Response has been submitted successfully!'
      })
    let cor = questions[index].correctAnswer;
    let ans = document.getElementById("name").value;
    if (ans == cor) {
        console.log(userScore);
        userScore += 1;
        console.log(userScore);
    }
    next_btn.classList.add("show");
}


// getting questions and options from array
function showNewQuetions(que_tag, option_tag) {
    let selected = -1;
    let prev = 0;
    const que_text = document.querySelector(".que_text");
    que_text.innerHTML = que_tag; //adding new span tag inside que_tag
    option_list.innerHTML = option_tag; //adding new div tag inside option_tag

    const option = option_list.querySelectorAll(".option");

    document.addEventListener('keydown', (e) => {

        if (e.defaultPrevented) {
            return; // Should do nothing if the default action has been cancelled
        }

        let op = document.getElementsByClassName("option");
        let n = op.length;
        if (e.key === 'ArrowUp') { // up
            // select(option[selected - 1]);
            prev = selected;
            console.log("up");
            selected -= 1;
            if (selected == -1 | selected == -2) {
                selected = n - 1;
            }
        }
        else if (e.key === 'ArrowDown') { // down
            //select(option[selected + 1]);
            prev = selected;
            console.log("down");
            selected += 1;
            selected = selected % n;
        }

        if (prev == -1) {
            prev = 0;
        }
        op[prev].style.background = "aliceblue";
        op[selected].style.background = "#cce6ff";

        if (e.key === 'Enter') {

            optionSelected(op[selected]);
            prev = 0;
            selected = -1;
        }
        else { }

        e.preventDefault();
    });
    // set onclick attribute to all available options
    for (i = 0; i < option.length; i++) {
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}
// creating the new div tags which for icons
let tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';

//if user clicked on option
function optionSelected(answer) {
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
    let userAns = answer.textContent; //getting user selected option
    let correcAns = questions[que_count].answer; //getting correct answer from array
    const allOptions = option_list.children.length; //getting all option items


    if (userAns == correcAns) { //if user selected option is equal to array's correct answer
        userScore += 1; //upgrading score value with 1
        // answer.classList.add("correct"); //adding green color to correct selected option
        // answer.classList.add("aliceblue"); //adding green color to correct selected option
        answer.style.background = "#66b3ff";
        // answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        console.log("Correct Answer");
        console.log("Your correct answers = " + userScore);
    } else {
        // answer.classList.add("incorrect"); //adding red color to correct selected option
        //answer.insertAdjacentHTML("beforeend", crossIconTag); //adding cross icon to correct selected option
        answer.style.background = "#66b3ff";
        console.log("Wrong Answer");
    }
    for (i = 0; i < allOptions; i++) {
        option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
    }
    next_btn.classList.add("show"); //show the next button if user selected any option
}

function showResult() {
    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.remove("activeQuiz"); //hide quiz box
    result_box.classList.add("activeResult"); //show result box
    const scoreText = result_box.querySelector(".score_text");
    if (userScore > 3) { // if user scored more than 3
        //creating a new span tag and passing the user score number and total question number
        let scoreTag = '<span>and congrats! 🎉, You got <p>' + userScore + '</p> out of <p>' + questions.length + '</p></span>';
        scoreText.innerHTML = scoreTag;  //adding new span tag inside score_Text
    }
    else if (userScore > 1) { // if user scored more than 1
        let scoreTag = '<span>and nice 😎, You got <p>' + userScore + '</p> out of <p>' + questions.length + '</p></span>';
        scoreText.innerHTML = scoreTag;
    }
    else { // if user scored less than 1
        let scoreTag = '<span>and sorry 😐, You got only <p>' + userScore + '</p> out of <p>' + questions.length + '</p></span>';
        scoreText.innerHTML = scoreTag;
    }
}

function startTimer(time) {
    counter = setInterval(timer, 1000);
    function timer() {
        timeCount.textContent = time; //changing the value of timeCount with time value
        time--; //decrement the time value
        if (time < 9) { //if timer is less than 9
            let addZero = timeCount.textContent;
            timeCount.textContent = "0" + addZero; //add a 0 before time value
        }
        if (time < 0) { //if timer is less than 0
            clearInterval(counter); //clear counter
            timeText.textContent = "Time Off"; //change the time text to time off
            const allOptions = option_list.children.length; //getting all option items
            let correcAns = questions[que_count].answer; //getting correct answer from array
            for (i = 0; i < allOptions; i++) {
                if (option_list.children[i].textContent == correcAns) { //if there is an option which is matched to an array answer
                    option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
                    // option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
                    console.log("Time Off: Auto selected correct answer.");
                }
            }
            for (i = 0; i < allOptions; i++) {
                option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
            }
            next_btn.classList.add("show"); //show the next button if user selected any option
        }
    }
}

function startTimerLine(time) {
    counterLine = setInterval(timer, 29);
    function timer() {
        time += 1; //upgrading time value with 1
        time_line.style.width = time + "px"; //increasing width of time_line with px by time value
        if (time > 549) { //if time value is greater than 549
            clearInterval(counterLine); //clear counterLine
        }
    }
}

function queCounter(index) {
    //creating a new span tag and passing the question number and total question
    let totalQueCounTag = '<span><p>' + index + '</p> of <p>' + questions.length + '</p> Questions</span>';
    bottom_ques_counter.innerHTML = totalQueCounTag;  //adding new span tag inside bottom_ques_counter
}