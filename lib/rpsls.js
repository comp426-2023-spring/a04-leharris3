export { rps, rpsls }

const result = {
  rock: {
    rock: 'tie',
    paper: 'win',
    scissors: 'lose',
    lizard: 'lose',
    spock: 'win'
  },
  paper: {
    rock: 'lose',
    paper: 'tie',
    scissors: 'win',
    lizard: 'win',
    spock: 'lose'
  },
  scissors: {
    rock: 'win',
    paper: 'lose',
    scissors: 'tie',
    lizard: 'lose',
    spock: 'win'
  },
  lizard: {
    rock: 'win',
    paper: 'lose',
    scissors: 'win',
    lizard: 'tie',
    spock: 'lose'
  },
  spock: {
    rock: 'lose',
    paper: 'win',
    scissors: 'lose',
    lizard: 'win',
    spock: 'tie'
  }
}

function rps(shot) {
  //Rock Paper Scissors
  const choices = ['rock', 'paper', 'scissors']
  const choice = Math.floor(Math.random() * 3)
  const c = choices[choice]

  switch (shot ? shot.toLowerCase() : null) {
    case null:
      return { player: c }
    case 'rock':
    case 'paper':
    case 'scissors':
      const player = shot.toLowerCase();
      const opponent = c;
      const resultVal = result[opponent][player];
      return { player, opponent, result: resultVal };
    default:
      console.error(`${shot} is not an option`);
      throw new RangeError();
  }
}

function rpsls(shot) {
  //Rock Paper Scissors Lizard Spock
  const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock']
  const choice = Math.floor(Math.random() * 5)
  const c = choices[choice]

  switch (shot ? shot.toLowerCase() : null) {
    case null:
      return { player: c }
    case 'rock':
    case 'paper':
    case 'scissors':
    case 'lizard':
    case 'spock':
      const player = shot.toLowerCase();
      const opponent = c;
      const resultVal = result[opponent][player];
      return { player, opponent, result: resultVal };
    default:
      throw new RangeError();
  }
}
