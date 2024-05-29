const title = document.getElementById("title");
const clock = document.getElementById("clock");
const rounds = document.getElementById("rounds")
const decreaseBtn = document.getElementById("decrease");
const increaseBtn = document.getElementById("increase");
const restartBtn = document.getElementById("restart");
const stateBtn = document.getElementById("state");
const increaseRoundBtn = document.getElementById("increaseMaxRound");
const decreaseRoundBtn = document.getElementById("decreaseMaxRound");
var work = true, rest = false, superRest = false, initTimer = 25, workTimer = 1500, running = false, timerLoop = 0, round = 1, roundMax = 4;
const playPauseBtn = document.createElement("i"); playPauseBtn.className = "fas fa-play"; playPauseBtn.style = "color: #ffffff";



stateBtn.addEventListener('click', playPause)
clock.addEventListener('click', playPause)
restartBtn.addEventListener('click', init)


const increaseWork = () => {if(work) {if (workTimer < 3600) {workTimer += 300; initTimer += 5;if (!running){atualizarPagina()}}}};
const decreaseWork = () => {if(work) {if (workTimer > 300) {workTimer -= 300; initTimer -= 5;if (!running){atualizarPagina()}}}};
decreaseBtn.addEventListener('click', decreaseWork);
increaseBtn.addEventListener('click', increaseWork);


const increaseRound = () => {if (roundMax < 8) {roundMax++};if (!running){atualizarPagina()}};
const decreaseRound = () => {if (roundMax > 4) {roundMax--};if (!running){atualizarPagina()}};
decreaseRoundBtn.addEventListener('click', decreaseRound);
increaseRoundBtn.addEventListener('click', increaseRound);


function playPause () {
    running = !running
    if (running) {playPauseBtn.className = "fas fa-pause"; ;timerLoop = setInterval(atualizarPagina, 1000)};
    if (!running) {playPauseBtn.className = "fas fa-play";clearInterval(timerLoop)};
};


function endRun() {
    if (!superRest && rest) { if (round == roundMax){superRest = true};if (round < roundMax){round++}};
    if (work) {if (workTimer == 0) {timeToRest()}};
    if (rest) {if (workTimer == 0) {timeToWork()}};
    if (superRest && !rest) {if (round == roundMax) {round = 1; superRest = false}};
};


function timeToRest () {
    if(work) {rest = true; work = false};
    title.innerHTML = "Hora do Descanso!";
    if (round < roundMax) {workTimer = initTimer / 5 * 60;};
    if (round == roundMax) {workTimer = Math.round(((initTimer / 2.3) + roundMax * 2) * 60)};

};


function timeToWork () {
    if(rest) {work = true;rest = false};
    title.innerHTML = "Hora de Trabalhar!";
    workTimer = initTimer * 60;
};


function atualizarPagina() {
    if (running){if (workTimer > 0) {workTimer--} else {endRun()}};
    const minutos = Math.floor(workTimer / 60).toString().padStart(2, '0');
    const segundos = Math.floor(workTimer % 60).toString().padStart(2, '0');
    clock.innerHTML = `${minutos}:${segundos}`;
    rounds.innerHTML = `Rodadas: ${round}/${roundMax}`;
};


function init () {
    round = 1; 
    if (superRest) {superRest = false};
    running = false;
    clearInterval(timerLoop)
    timeToWork();
    atualizarPagina();
    stateBtn.appendChild(playPauseBtn)
};
init();
