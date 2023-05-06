import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

interface AppProps { }
interface AppState {
  count: number;
  count2: number;
  count3: number;
  count4: number;
  count5: number;
  count6: number;
  count7: number;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
      ,count2: 0
      ,count3: 0
      , count4: 0
      , count5: 0
      , count6: 0
      , count7: 0
    };
    this.increment = this.increment.bind(this)
  this.decrement = this.decrement.bind(this)
this.reset = this.reset.bind(this)
      this.increment2 = this.increment2.bind(this)
    this.decrement2 = this.decrement2.bind(this)
   this.reset2 = this.reset2.bind(this)
         this.increment3 = this.increment3.bind(this)
      this.decrement3 = this.decrement3.bind(this)
    this.reset3 = this.reset3.bind(this)
           this.increment4 = this.increment4.bind(this)
         this.decrement4 = this.decrement4.bind(this)
       this.reset4 = this.reset4.bind(this)
              this.increment5 = this.increment5.bind(this)
            this.decrement5 = this.decrement5.bind(this)
          this.reset5 = this.reset5.bind(this)
                    this.increment6 = this.increment6.bind(this)
                 this.decrement6 = this.decrement6.bind(this)
              this.reset6 = this.reset6.bind(this)
                         this.increment7 = this.increment7.bind(this)
                      this.decrement6 = this.decrement6.bind(this)
                   this.reset6 = this.reset6.bind(this)
  }
increment () {
  this.setState(state =>({
    count: this.state.count + 1
  }));
} 
decrement () {
  this.setState(state =>({
    count: this.state.count - 1
  }));
}
reset () {
  this.setState({
    count: 0
  });
}
  increment2 () {
    this.setState(state =>({
      count2: this.state.count2 + 1
    }));
  } 
  decrement2 () {
    this.setState(state =>({
      count2: this.state.count2 - 1
    }));
  }
  reset2 () {
    this.setState({
      count2: 0
    });
}
increment3 () {
  this.setState(state =>({
    count3: this.state.count3 + 1
  }));
} 
decrement3 () {
  this.setState(state =>({
    count3: this.state.count3 - 1
  }));
}
reset3 () {
  this.setState({
    count3: 0
  });
}
increment4 () {
  this.setState(state =>({
    count4: this.state.count4 + 1
  }));
} 
decrement4 () {
  this.setState(state =>({
    count4: this.state.count4 - 1
  }));
}
reset4 () {
  this.setState({
    count4: 0
  });
}
increment5 () {
  this.setState(state =>({
    count5: this.state.count5 + 1
  }));
} 
decrement5 () {
  this.setState(state =>({
    count5: this.state.count5 - 1
  }));
}
reset5 () {
  this.setState({
    count5: 0
  });
}
increment6 () {
  this.setState(state =>({
    count6: this.state.count6 + 1
  }));
} 
decrement6 () {
  this.setState(state =>({
    count6: this.state.count6 - 1
  }));
}
reset6 () {
  this.setState({
    count6: 0
  });
}
increment7 () {
  this.setState(state =>({
    count7: this.state.count7 + 1
  }));
} 

  render() {
    return (
      <div style={{width: "auto", height: "auto", font: "white", display: "auto, inline-grid", overflow: "hidden", border: "3px solid red", background: "black" }}>
            <section className="Fouls + Free Throws">
        <div>
          <div style={{border: "1px solid green"}}>
          <h1 style={{background: "black", color: "white", display: "inline-grid", padding: "2px 6px 2px 6px", margin: "0px 0px 0px 0px", border: "3px solid black"}}><div style={{color: "white", padding: "8px 8px 8px 8px"}}>Spencer's - <div style={{background: "red", color: "white", display: "inline-grid", padding: "2px 6px 2px 6px"}}>{this.state.count7}</div></div></h1></div>


        <h1 style={{color: "white", margin: "16px 0px 0px 15px"}}>Fouls: <div style={{background: "black", color: "white", display: "inline-grid", padding: "2px 6px 2px 6px"}}>{this.state.count}</div>

          <div style={{margin: "0px 0px 0px 70px", display: "inline"}}>Free Throws: <div style={{background: "black", color: "white", display: "inline-grid", padding: "2px 6px 2px 6px"}}>{this.state.count2}</div></div></h1>

            <div style={{margin: "0px 0px 0px 10px", display: "inline-grid", padding: "10px 5px 5px 5px", background: "green"}}>
        <button style={{ margin: "2px 8px 2px 8px",padding: "6px 6px 6px 6px"}} className='inc' onClick={this.increment}>ADD(1)</button>
         <button style={{padding: "3px 3px 3px 3px", margin: "2px 8px 2px 8px"}} className='dec' onClick={this.decrement}>Subtract(1)</button>
            <button style={{margin: "2px 8px 2px 8px"}} className='reset' onClick={this.reset}>Reset</button>
        </div>

          <div style={{margin: "10px 0px 0px 100px", display: "inline-grid",padding: "5px 5px 5px 5px", background: "purple"}}>
          <button style={{padding: "6px 6px 6px 6px", margin: "7px 8px 2px 8px"}} className='inc2' onClick={this.increment2}>ADD(1)</button>
        <button style={{padding: "3px 3px 3px 3px", margin: "2px 8px 2px 8px"}} className='dec2' onClick={this.decrement2}>Subtract(1)</button><button style={{ margin: "2px 8px 2px 8px"}} className='reset2' onClick={this.reset2}>Reset</button>
        </div>
        </div>
        </section>
        <div>
             
            <section className="Baskets + 3-Pointers">

            <div>
          <h1 style={{background: "black", margin: "20px 1px 0px 1px", border: "1px solid red"}}><div style={{padding: "1px 0px 2px 1px"}}></div></h1>

        <h1 style={{color: "white", margin: "10px 0px 0px 22px"}}>Baskets: <div style={{background: "black", color: "white", display: "inline-grid", padding: "2px 6px 2px 6px"}}>{this.state.count3}</div>

          <div style={{margin: "0px 0px 0px 75px", display: "inline"}}>3-Pntrs: <div style={{background: "black", color: "white", display: "inline-grid", padding: "2px 6px 2px 6px"}}>{this.state.count4}</div></div></h1>

            <div style={{margin: "0px 0px 0px 10px", display: "inline-grid", padding: "10px 3.5px 5px 0px", background: "green"}}>
        <button style={{ margin: "2px 8px 2px 8px", padding: "3px 3px 3px 3px"}} className='inc3' onClick={this.increment3}>ADD(1)</button>
         <button style={{ margin: "2px 8px 2px 8px"}} className='dec3' onClick={this.decrement3}>Subtract(1)</button>
            <button style={{ margin: "2px 8px 2px 8px"}} className='reset3' onClick={this.reset3}>Reset</button>
        </div>

          <div style={{margin: "20px 0px 0px 100px", display: "inline-grid",padding: "5px 5px 5px 5px", background: "purple"}}>
          <button style={{padding: "3px 3px 3px 3px", margin: "7px 8px 2px 8px"}} className='inc4' onClick={this.increment4}>ADD(1)</button>
        <button style={{ margin: "2px 8px 2px 8px"}} className='dec4' onClick={this.decrement4}>Subtract(1)</button><button style={{ margin: "2px 8px 2px 8px"}} className='reset4' onClick={this.reset4}>Reset</button>
        </div>
        </div>
        </section>
<section>
      <section>
      
      <div>
      <h1 style={{background: "black", margin: "20px 1px 10px 1px", border: "1px solid red"}}><div style={{padding: "1px 2px 2px 1px"}}></div></h1>

        <h1 style={{color: "white", margin: "10px 0px 0px 10px"}}>Rebounds: <div style={{background: "black", color: "white", display: "inline-grid", padding: "2px 6px 2px 6px"}}>{this.state.count5}</div>

          <div style={{margin: "10px 0px 0px 90px", display: "inline"}}>Turn-Overs: <div style={{background: "black", color: "white", display: "inline-grid", padding: "4px 6px 2px 6px"}}>{this.state.count6}</div></div></h1>

            <div style={{margin: "10px 0px 0px 10px", display: "inline-grid", padding: "10px 3.5px 5px 5px", background: "green"}}>
        <button style={{ margin: "2px 8px 2px 8px",padding: "3px 3px 3px 3px"}} className='inc5' onClick={this.increment5}>ADD(1)</button>
         <button style={{ margin: "2px 8px 2px 8px"}} className='dec5' onClick={this.decrement5}>Subtract(1)</button>
            <button style={{ margin: "2px 8px 2px 8px"}} className='reset5' onClick={this.reset5}>Reset</button>
        </div>

          <div style={{margin: "20px 0px 0px 100px", display: "inline-grid", padding: "5px 5px 5px 5px", background: "purple"}}>
          <button style={{padding: "3px 3px 3px 3px", margin: "7px 8px 2px 8px"}} className='inc6' onClick={this.increment6}>ADD(1)</button>
        <button style={{ margin: "2px 8px 2px 8px"}} className='dec6' onClick={this.decrement6}>Subtract(1)</button><button style={{margin: "2px 8px 2px 8px"}} className='reset6' onClick={this.reset6}>Reset</button>
        </div>
        </div>
        </section>
       </section>
         
          </div>
  
        <p>
       Spencer was here!
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
