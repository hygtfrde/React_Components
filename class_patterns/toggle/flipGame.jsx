class Results extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
        {
          this.props.fiftyFifty ? 
          <h1>You Win!</h1> : 
          <h1>You Lose!</h1>
        }
        </div> 
      )
    }
  }
  
  class GameOfChance extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        counter: 1
      };
      this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
      this.setState(state => {
        return {
          counter: state.counter+1
        }
      });
    }
    render() {
      const expression = Math.random()>=0.5;
      return (
        <div>
          <button onClick={this.handleClick}>Play Again</button>
          <Results fiftyFifty={expression}></Results>
          <p>{'Turn: ' + this.state.counter}</p>
        </div>
      );
    }
  }