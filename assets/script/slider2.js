let Ps = document.querySelectorAll('.happy-custom-slider');
const nextP = document.querySelector('.nextP');
const prevP = document.querySelector('.prevP');
let targetP = 0;

function updateVisibility() {
    Ps.forEach((p, index) => {
        if (index === targetP) {
            p.style.opacity = '1';
            p.style.visibility = 'visible';
        } else {
            p.style.opacity = '0';
            setTimeout(() => {
                p.style.visibility = 'hidden'; 
            }, 500);
        }
    });
}

function goNextP() {
    if (targetP < Ps.length - 1) {
        targetP++;
    } else {
        targetP = 0;
    }
    updateVisibility();
}

function goPrevP() {
    if (targetP > 0) {
        targetP--;
    } else {
        targetP = Ps.length - 1;
    }
    updateVisibility();
}


updateVisibility();


nextP.addEventListener('click', goNextP);
prevP.addEventListener('click', goPrevP);
