let score = JSON.parse(localStorage.getItem('score'))||{Wins:0,Loses:0,Tie:0,};
        
update();

function computer_choice()
{
    const number1 = Math.random();
    let computerMove = '';

    if(number1>=0 && number1<1/3)computerMove='rock';
    else if(number1>=(1/3) && number1<2/3)computerMove='paper';
    else computerMove='scissors';

    return computerMove;            
}

function Result(mychoice,computerchoice)
{
    let ans = '';
    if(mychoice===computerchoice)ans = 'Tie';
    else if((mychoice==='rock' && computerchoice==='scissors')||(mychoice==='scissors' && computerchoice==='paper')||(mychoice==='paper' && computerchoice==='rock'))ans = 'Win';
    else ans = 'Lose';

    if(ans==='Tie')score.Tie++;
    else if(ans=='Win')score.Wins++;
    else score.Loses++;
    
    localStorage.setItem('score',JSON.stringify(score));

    document.querySelector('.js-result').innerHTML=ans;
    document.querySelector('.js-moves').innerHTML=`
        <div class="move">
            <div class="move-img">
                <img class="move-img" src="images/${mychoice}-emoji.png">
            </div>
            <div class="move-img">
                <img class="move-img" src="images/${computerchoice}-emoji.png">
            </div>
        </div>
    `;

    update();
    
}

function update()
{
    document.querySelector('.score-para').innerHTML=`Wins  ${score.Wins} Losses  ${score.Loses} Ties  ${score.Tie}`;

}


document.body.addEventListener('keydown',(event) => {
    if(event.key==='r')Result('rock',computer_choice());
    else if(event.key==='p')Result('paper',computer_choice());
    else if(event.key==='s')Result('scissors',computer_choice());
});


