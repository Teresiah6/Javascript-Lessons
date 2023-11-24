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

//check if we are playing
      let isAutoPlaying = false;
      //interval Id that is returned by set interval
      let intervalId;
      
// create an arrow function of autoplay
//however using arrow functions here is a matter of personal preference
      /*const autoplay = () =>{
        if (!isAutoPlaying){
          intervalId = setInterval(() =>
         {
           //autoselecting
           const playerMove = pickComputerMove();
           playGame(playerMove);
         }, 1000 );
         isAutoPlaying = true;
       }else{
         clearInterval(intervalId);
         isAutoPlaying = false;

       }

      };
      */
      function autoPlay(){
        if (!isAutoPlaying){
           intervalId = setInterval(() =>
          {
            //autoselecting
            const playerMove = pickComputerMove();
            playGame(playerMove);
          }, 1000 );
          //Question 12t
          document.querySelector('.js-auto-play-button')
            .innerHTML = 'Stop Playing';
          isAutoPlaying = true;
        }else{
          clearInterval(intervalId);
          isAutoPlaying = false;
          //Question 12t
          document.querySelector('.js-auto-play-button')
            .innerHTML = 'Auto Play'

        }
        
      }

      document.querySelector('.js-rock-button')
      .addEventListener('click', () => {
        playGame('rock');
      })

      document.querySelector('.js-paper-button')
      .addEventListener('click', () =>{
        playGame('paper');
      });

      document.querySelector('.js-scissors-button')
      .addEventListener('click', ()=>{
        playGame('scissors');
      });
//question 12v
      document.querySelector('.js-reset-button')
      .addEventListener('click', () => {
        confirmationPop();
        
        });
      //12w
      document.body.addEventListener('keydown', (event)=>{
        if(event.key === 'Backspace'){
          confirmationPop();
          
        }
        
        /*if(event.key === 'Backspace'){
          score.wins = 0;
      score.losses = 0;
      score.ties = 0;
      // removing score from localStorage
      localStorage.removeItem('score');
      updateScoreElement();
        }*/
      });
    
      //question 12u
      document.body.addEventListener('keydown', (event)=>{
        if(event.key === 'a'){
          autoPlay();
        }
      });

      document.querySelector('.js-auto-play-button')
      .addEventListener('click', () =>{
        autoPlay();
      });


      document.body.addEventListener('keydown', (event)=>{
        if(event.key === 'r'){
          playGame('rock')
        }else if(event.key === 'p'){
          playGame('paper');
        } else if (event.key === 's'){
          playGame('scissors');
        }
      });

      function confirmationPop (){
        document.getElementById('confirm').hidden = false;
        

      }
      const yesBtn = document.querySelector('.js-yes-button');
      yesBtn.addEventListener('click',()=>confirmationYes());
      function confirmationYes(){
        if(yesBtn){
              score.wins = 0;
              score.losses = 0;
              score.ties = 0;
              // removing score from localStorage
              localStorage.removeItem('score');
              updateScoreElement();
        }
        document.getElementById('confirm').hidden = true;
      } 
      const noBtn = document.querySelector('.js-no-button');
      noBtn.addEventListener('click', ()=>{
        confirmNo();
      });

      function confirmNo(){
        if (noBtn){
          document.getElementById('confirm').hidden = true;

          return;

        }
        
      }
        
      
    

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

