let score = JSON.parse(localStorage.getItem('score')) ||
      {wins: 0,
      losses: 0,
      ties: 0};

     

      updateScoreElement();
      //checking if score in localstorage is null and setting to a default
     /* if (score === null){
        score = {
          wins: 0,
          losses: 0,
          ties: 0
        }
      }*/
      //getting item out of local storage
      //use console.log to see it
      //console.log(JSON.parse(localStorage.getItem('score')));

      function playGame(playerMove){
        const compMove = pickComputerMove();
        let result = '';

        if(playerMove === 'scissors'){
            
          if(compMove === 'rock'){
            result = 'You lose.';
          }else if (compMove === 'paper'){
            result = 'You win.';
          } else if(compMove === 'scissors'){
            result = 'Tie.';
          }
        
        }else if (playerMove === 'paper') {
          if(compMove === 'rock'){
            result = 'You win.';
          }else if (compMove === 'paper'){
            result = 'Tie.';
          } else if(compMove === 'scissors'){
            result = 'You lose.';
          }
          
          
        } else if(playerMove === 'rock'){
          if(compMove === 'rock'){
            result ='Tie.';
          }
          else if (compMove === 'paper'){
            result = 'You lose.';
          }else if (compMove === 'scissors'){
            result = 'You win.';
        }
      }

        if (result === 'You win.'){
            score.wins += 1;
        } else if(result === 'You lose.'){
          score.losses +=1;
        } else if(result === 'Tie.'){
          score.ties += 1;
        }
        //saving item in local storage
        localStorage.setItem('message', 'hello');
        //save the score into local storage
        localStorage.setItem('score', JSON.stringify(score));
//ensures that score also updates on the page
        updateScoreElement();

        document.querySelector('.js-result').innerHTML = result;
      document.querySelector('.js-moves').innerHTML = `You<img src="images/${playerMove}-emoji.png" class="move-icon">
      <img src="images/${compMove}-emoji.png" class="move-icon">
    Computer`;

       /* alert(`You picked ${playerMove}. Computer picked ${compMove}. ${result} 
Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`);*/
     

      }

      function updateScoreElement(){
        document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}` ;
      }

      //compmove is now a global variable as it can be accessed anywhere
      // let compMove = '';
      function pickComputerMove(){
        let compMove = '';
        const randomNumber = Math.random();
        if (randomNumber >= 0 && randomNumber < 1/3){
          compMove = 'rock';
        }else if (randomNumber >=1/3 && randomNumber <2/3){
          compMove = 'paper';
        }else if (randomNumber >= 2/3 && randomNumber < 1){
          compMove = 'scissors';
        }
        return compMove;
     }

