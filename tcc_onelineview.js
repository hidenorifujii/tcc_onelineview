// ==UserScript==
// @name TCC One Line View 
// @description     Compact View
// @version         0.1
// @include https://taskchute.cloud/*
// ==/UserScript==

const css = document.createTextNode(`


/* Start or Active */

.container .content .TaskApp .taskList__taskRows .taskList__taskRow .taskList__end_timeVal--notStarted {
    visibility: hidden;
}

/* .wrapper .container .content .TaskApp .taskList__taskRows .taskList__taskRow.taskList__taskRow--active {
    position: fixed;
    bottom: 10px;
} */

/* Hide */

/* .wrapper .container .content .TaskApp .taskList__titleRow.taskList__titleRow--fixed, */
/* body.task .wrapper .container .content .TaskApp .taskList__titleRow, */
/* nav.shortcutNav, */
/* .wrapper .container .content .TaskApp .taskHeader, */
/* body.task header.topHeader, */
.container .content .TaskApp .shortcutKeyButton button,
footer.topFooter,
.wrapper .container .content .TaskApp .taskList__titleRow.taskList__titleRow--fixed,
.topCampaign {
    display: none;
}

/* Buttons */

body.task .wrapper .container .content .TaskApp .taskList__titleRow .taskList__detailCol {
    position: relative;
    top: -280px;
    left: -12px;
}

/* Main line */

.wrapper .container .content .TaskApp .taskList__titleRow.taskList__titleRow--fixed {
    width: 100%;
}

.taskList__mainLine {
    height: 30px;
    /* position: flex; */
}

.container .content .TaskApp .taskList__taskRows .taskList__taskRow .taskList__colorVal .taskList__colorCircle {
    position: relative;
    top: -3px;
}

.wrapper .container .content .TaskApp .taskList__taskRows .taskList__taskRow .taskList__multiCheckVal button {
    top: 5px;
}

.wrapper .container .content .TaskApp .taskList__taskRows .taskList__taskRow .taskList__mode_idVal,
.wrapper .container .content .TaskApp .taskList__taskRows .taskList__taskRow .tasklist__nameGroupVal .taskList__project_idVal,
.container .content .TaskApp .taskList__taskRows .taskList__taskRow .tasklist__nameGroupVal .taskList__procrastinationCnt {
    display: none;
}

.wrapper .container .content .TaskApp .taskList__taskRows .taskList__taskRow {
    padding: 0px 0 0px;
}

body.task .wrapper .container .content .TaskApp .taskList__taskRows .taskList__taskRow .tasklist__nameGroupVal {
    width: 42%;
}

.wrapper .container .content .TaskApp .taskList__taskRows .taskList__taskRow .tasklist__nameGroupVal .taskList__nameVal {
    position: relative;
    top: 2px;
    /* width: 400px */
    left: 69px;
}

body.task .wrapper .container .content .TaskApp .taskList__taskRows .taskList__taskRow .taskList__estimated_timeVal {
    width: 14%;
    color: #b2b0b0;
    position: relative;
    left: 50px;
}

body.task .wrapper .container .content .TaskApp .taskList__taskRows .taskList__taskRow .taskList__actual_timeVal {
    width: 12%;
    color: #b2b0b0;
    position: relative !important;
    left: -150px !important;
    /* visibility: hidden; */
}

.container .content .TaskApp .taskList__taskRows .taskList__taskRow .taskList__actual_timeVal.taskList__val--exists {
    visibility: visible;
}

body.task .wrapper .container .content .TaskApp .taskList__taskRows .taskList__taskRow .taskList__start_timeVal {
    width: 12%;
    color: #b2b0b0;
    position: relative;
    left: 12px;
}

body.task .wrapper .container .content .TaskApp .taskList__taskRows .taskList__taskRow .taskList__end_timeVal {
    width: 12%;
    color: #b2b0b0;
    position: relative;
    left: 16px;
}

/* Disable Animations */

*, ::before, ::after {
    animation-delay: -1ms !important;
    animation-duration: 1ms !important;
    animation-iteration-count: 1 !important;
    background-attachment: initial !important;
    scroll-behavior: auto !important;
    transition-delay: 0s !important;
    transition-duration: 0s !important;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* All on bottom */

body.task .wrapper .container .content .TaskApp .taskList__titleRow {
    display: none;
}

section.taskList.mainSection {
    position: relative;
    top: 45vh;
    height: 200vh;
}

.wrapper .container .content .TaskApp .taskList__taskRows .taskList__taskRow.taskList__taskRow--started {
    position: fixed;
    bottom: 80px;
    z-index: 1;
    width: 83%;
}

button.shortcutNav__hideCompleteTasks {
    position: fixed;
    left: 56px;
    bottom: 31px;
    z-index: 10;
}

.taskList__taskAdd {
    position: fixed !important;
    bottom: 10px;
    left: 60px;
    z-index: 3;
}

button.taskList__taskAddBt {
    display: none;
}

textarea.taskList__taskAddInput {
    position: relative;
    left: 40px;
}

body.task .wrapper .container .content .TaskApp .taskList__taskAdd .taskList__suggestTaskList {
    position: fixed;
    top: 231px;
    z-index: 120;
}

.taskList__breadcrumb {
    position: fixed;
    bottom: 30px;
    z-index: 5;
}

/* Confirm Button */
.ReactModal__Overlay--after-open .ReactModal__Content .appModal button {
    position: relative;
    left: -100px;
    bottom: -200px;
}

/* 3 Dot Menu */

.wrapper .container .content .TaskApp .taskList__taskRows .taskList__taskRow .taskList__threeDotsIntro {
    right: 300px;
}

.wrapper .container .content .TaskApp .taskList__taskRows .taskList__taskRow .taskList__threeDotsIntro .taskList__threeDotsVal {
    top: -8px;
    left: -25px;
}

/* 3 Dot Pop-up */

body.task .wrapper .container .content .TaskApp .taskList__taskRows .taskList__taskRow .taskList__threeDotsVal .taskList__threeDotsPopup {
    left: 50px;
    display: flex;
    flex-direction: column;
}

button.taskList__popupBt.taskList__popupDeleteBt { order: -1; }
button.taskList__popupBt.taskList__nextTaskBt { order: 5; }
button.taskList__popupBt.taskList__nowSectionBt { order: 10; }
.taskList__popupBt.taskList__popupSectionBt { order: 15; }
.taskList__popupBt.taskList__popupCloneBt { order: 20; }
button.taskList__popupBt.taskList__moveTomorrowBt { order: 25; }
.taskList__popupBt.taskList__popupTargetDateBt { order: 30; }



`);

const addCss = document.createElement('style');
addCss.appendChild(css);
document.head.appendChild(addCss);
