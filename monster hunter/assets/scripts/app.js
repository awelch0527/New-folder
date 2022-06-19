const ATTACK_VALUE = 10;
const MONSTER_ATTACK_VALUE = 14;
const STRONG_ATTACK_VALUE = 40;
const INSTANT_KILL_ATTACK_VALUE = 10000;
const HEAL_VALUE = 19;

const enteredValue = prompt('Choose Max Life');

let initialMaxLife = parseInt(enteredValue);

if (isNaN(initialMaxLife) || initialMaxLife <= 0){
    let initialMaxLife = 100;
}


let currentMonsterHealth = initialMaxLife;
let currentPlayerHealth = initialMaxLife;

adjustHealthBars(initialMaxLife);

function reset() {
    currentMonsterHealth = initialMaxLife;
    currentPlayerHealth = initialMaxLife;
    resetGame(initialMaxLife);
}

function endRound (){
    const damageToPlayer = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    currentPlayerHealth -= damageToPlayer
    if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
        alert('You Won');
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
        alert('You Lost');
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0){
        alert(' You Have  Draw');
       
    }

    if (currentMonsterHealth <= 0 || currentPlayerHealth <= 0) {
        reset()
    }

}
function attackMode (mode) {
    let maxDamage;
    if (mode === 'ATTACK'){
        maxDamage = ATTACK_VALUE;
     } else if ( mode === 'STRONG_ATTACK'){
         maxDamage = STRONG_ATTACK_VALUE;
     } else if ( mode === 'INSTANT_KILL') {
         maxDamage = INSTANT_KILL_ATTACK_VALUE;
     }
     const damage = dealMonsterDamage(maxDamage);
     currentMonsterHealth -= damage;
     endRound()
    }

function attackMonster() {
    attackMode('ATTACK');
}

function instantKill() {
    attackMode('INSTANT_KILL')
}


function strongAttackMonster() {
    attackMode('STRONG_ATTACK');
}

function healPlayer () {
    increasePlayerHealth(HEAL_VALUE);
    currentPlayerHealth += HEAL_VALUE;  
    endRound();

}

function runAwayHandler () {
    reset();
    alert('You flown the battle');
    
}

killBtn.addEventListener('click', instantKill)
attackBtn.addEventListener('click', attackMonster);
strongAttackBtn.addEventListener('click', strongAttackMonster)
healBtn.addEventListener('click', healPlayer);
runAwayBtn.addEventListener('click',runAwayHandler);