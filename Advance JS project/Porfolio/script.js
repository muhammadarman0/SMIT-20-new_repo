/* ============ FOOTER YEAR ============ */
document.getElementById('year').textContent = new Date().getFullYear();

/* ============ CUSTOM CURSOR ============ */
const cursorDot = document.querySelector('.cursor-dot');
if (cursorDot) {
    window.addEventListener('mousemove', (e) => {
        cursorDot.style.left = e.clientX + 'px';
        cursorDot.style.top = e.clientY + 'px';
    });
    document.querySelectorAll('a, button').forEach(el => {
        el.addEventListener('mouseenter', () => cursorDot.style.transform = 'translate(-50%,-50%) scale(2.4)');
        el.addEventListener('mouseleave', () => cursorDot.style.transform = 'translate(-50%,-50%) scale(1)');
    });
}

/* ============ NAVBAR SCROLL STATE + MOBILE TOGGLE ============ */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
});

const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.classList.toggle('open', isOpen);
    navToggle.setAttribute('aria-expanded', isOpen);
});
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        navToggle.classList.remove('open');
        navToggle.setAttribute('aria-expanded', false);
    });
});

/* ============ SCROLL REVEAL ============ */
const revealEls = document.querySelectorAll('.reveal');
const skillFills = document.querySelectorAll('.skill-fill');
const skillPercents = document.querySelectorAll('.skill-percent');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.15 });

revealEls.forEach(el => revealObserver.observe(el));

/* animate skill bars + count-up percentages once visible */
const skillsSection = document.getElementById('skills');
let skillsAnimated = false;

function animateSkills() {
    if (skillsAnimated) return;
    skillsAnimated = true;
    skillFills.forEach(fill => {
        fill.style.width = fill.dataset.width + '%';
    });
    skillPercents.forEach(el => {
        const target = parseInt(el.dataset.target, 10);
        let current = 0;
        const step = Math.max(1, Math.round(target / 40));
        const timer = setInterval(() => {
            current += step;
            if (current >= target) { current = target; clearInterval(timer); }
            el.textContent = current + '%';
        }, 25);
    });
}

const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateSkills();
            skillsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.3 });

if (skillsSection) skillsObserver.observe(skillsSection);

/* ============ TIC TAC TOE ============ */
(function ticTacToe() {
    const board = document.getElementById('ttBoard');
    const status = document.getElementById('ttStatus');
    const resetBtn = document.getElementById('ttResetBtn');
    if (!board) return;

    const cells = Array.from(board.querySelectorAll('.tt-cell'));
    let state = Array(9).fill(null);
    let currentPlayer = 'X';
    let gameOver = false;

    const WIN_LINES = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    function checkWinner() {
        for (const line of WIN_LINES) {
            const [a, b, c] = line;
            if (state[a] && state[a] === state[b] && state[a] === state[c]) {
                return { winner: state[a], line };
            }
        }
        if (state.every(cell => cell)) return { winner: 'draw' };
        return null;
    }

    function render() {
        cells.forEach((cell, i) => {
            cell.textContent = state[i] || '';
            cell.classList.toggle('o', state[i] === 'O');
            cell.disabled = !!state[i] || gameOver;
        });
    }

    function handleClick(i) {
        if (state[i] || gameOver) return;
        state[i] = currentPlayer;
        const result = checkWinner();
        render();

        if (result) {
            gameOver = true;
            if (result.winner === 'draw') {
                status.textContent = "It's a draw!";
            } else {
                status.textContent = `Player ${result.winner} wins! 🎉`;
                result.line.forEach(idx => cells[idx].classList.add('win'));
            }
            cells.forEach(c => c.disabled = true);
            return;
        }

        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        status.textContent = `Player ${currentPlayer}'s turn`;
    }

    cells.forEach((cell, i) => cell.addEventListener('click', () => handleClick(i)));

    resetBtn.addEventListener('click', () => {
        state = Array(9).fill(null);
        currentPlayer = 'X';
        gameOver = false;
        cells.forEach(c => c.classList.remove('win'));
        status.textContent = "Player X's turn";
        render();
    });

    render();
})();

/* ============ STONE PAPER SCISSORS ============ */
(function rockPaperScissors() {
    const buttons = document.querySelectorAll('.rps-btn');
    const status = document.getElementById('rpsStatus');
    const playerScoreEl = document.getElementById('rpsPlayerScore');
    const cpuScoreEl = document.getElementById('rpsCpuScore');
    const resetBtn = document.getElementById('rpsResetBtn');
    if (!buttons.length) return;

    const CHOICES = ['rock', 'paper', 'scissors'];
    const EMOJI = { rock: '🪨', paper: '📄', scissors: '✂️' };
    const BEATS = { rock: 'scissors', paper: 'rock', scissors: 'paper' };

    let playerScore = 0;
    let cpuScore = 0;

    function play(choice) {
        const cpuChoice = CHOICES[Math.floor(Math.random() * 3)];
        let outcome;

        if (choice === cpuChoice) {
            outcome = "It's a tie!";
        } else if (BEATS[choice] === cpuChoice) {
            outcome = 'You win this round!';
            playerScore++;
        } else {
            outcome = 'CPU wins this round!';
            cpuScore++;
        }

        playerScoreEl.textContent = playerScore;
        cpuScoreEl.textContent = cpuScore;
        status.textContent = `You: ${EMOJI[choice]}  vs  CPU: ${EMOJI[cpuChoice]} — ${outcome}`;
    }

    buttons.forEach(btn => {
        btn.addEventListener('click', () => play(btn.dataset.choice));
    });

    resetBtn.addEventListener('click', () => {
        playerScore = 0;
        cpuScore = 0;
        playerScoreEl.textContent = '0';
        cpuScoreEl.textContent = '0';
        status.textContent = 'Make your move';
    });
})();