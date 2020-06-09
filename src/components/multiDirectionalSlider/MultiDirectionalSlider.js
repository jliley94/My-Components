import React from "react";
import BoxSlide from "./BoxSlide";
import "./MultiDirectionalSlider.scss";

export default class MultiDirectionalSlider extends React.Component {
  constructor(props) {
    super(props);
    const startingDirection = Math.round(Math.random() * 3);
    this.state = {
      list: [
        {
          order: 0,
          text: "Hello,",
          textColor: "#FFF",
          backColor: "#648312",
        },
      ],
      coordAdjustment: { x: 0, y: 0 },
      currentIndex: 0,
      direction: startingDirection,
      transitionBackwards: "unset"
    };
    this.slideTransition = this.slideTransition.bind(this);
    this.resetBox = this.resetBox.bind(this);
    this.backwardsSlideTransition = this.backwardsSlideTransition.bind(this);
    
    this.aspectRatio = { x: 20, y: 40 };
    this.availableItems = [
      //List of possible slides which can be used
      {
        order: 0,
        text: "Hello,",
        textColor: "#FFF",
        backColor: "#648312",
      },
      {
        order: 1,
        text: "This is a cool thing i made",
        textColor: "#6c4d08",
        backColor: "#f3c358",
      },
      {
        order: 2,
        text: "Hope you think this is neat",
        textColor: "#1c1a3b",
        backColor: "#8164bc",
      },
      {
        order: 3,
        text: "These placeholders can slide in from 4 directions",
        textColor: "#FFF",
        backColor: "#58d6f3",
      },
      {
        order: 4,
        text: "I've been randomly selected form the list of placeholders",
        textColor: "#600722",
        backColor: "#E15",
      },
    ];
  }
  componentDidMount() {
    this.interval = setInterval(this.slideTransition, 3000);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.state.transitionBackwards === "now") {
      // if moving backwards and has just updated from changes in slideTransition()
      setTimeout(this.backwardsSlideTransition, 0);
    }
  }

  componentWillUnmount() {
    // Clear the interval right before component unmounts
    clearInterval(this.interval);
  }

  nonRepeatingRandom(current) {
    // create a random number which doesnt match the current number
    const maxNo = this.availableItems.length - 1;
    let newRand = Math.round(Math.random() * maxNo);
    while (current === newRand) {
      newRand = Math.round(Math.random() * maxNo);
    }
    return newRand;
  }

  slideTransition() {
    //do slide transition
    const rand = this.nonRepeatingRandom(this.state.currentIndex);
    let adjustedX = 0;
    let adjustedY = 0;
    let newList = this.state.list;

    switch(this.state.direction) {
      case 0: //left
        newList.push(this.availableItems[rand]);
        adjustedX = -this.aspectRatio.x;
        break;
      case 1: //up
        newList.push(this.availableItems[rand]);
        adjustedY = -this.aspectRatio.y;
        break;
      case 2: //right
        newList.unshift(this.availableItems[rand]);
        adjustedX = -this.aspectRatio.x;
        break;
      case 3: //down
        newList.unshift(this.availableItems[rand]);
        adjustedY = -this.aspectRatio.y;
        break;
    }
    
    const newIndex = this.state.list.length - 1;
    
    let newCoords = { x: (newIndex * adjustedX) + "vw", y: (newIndex * adjustedY) + "vh"};

    this.setState({ ...this.state, list: newList, coordAdjustment: newCoords, currentIndex: rand, transitionBackwards: (this.state.direction > 1) ? "now" : "unset" });
    console.log("Transitioned");
  }

  resetBox() {
    let newList = this.state.list;
    if (newList.length > 1) {
      if (this.state.direction > 1) {
        newList.pop();
      } else {  
        newList.shift();
      }
    }
    const newCoords = { x: 0, y: 0};
    
    const randDirection = Math.round(Math.random() * 3); //left or up
    
    this.setState({ ...this.state, list: newList, coordAdjustment: newCoords, direction: randDirection });
    console.log("reset")
  }

  backwardsSlideTransition() {
    const newCoords = { x: 0, y: 0};
    
    this.setState({ ...this.state, coordAdjustment: newCoords, transitionBackwards: "off" });
    console.log("Transitioned backwards")
  }

  render() {
    const deckStyle = {
      transform: `translate(${this.state.coordAdjustment.x}, ${this.state.coordAdjustment.y})`,
      width: (this.state.direction === 0 || this.state.direction === 2) ? `${this.aspectRatio.y}vw` : `${this.aspectRatio.x}vw`,
      transition: ((this.state.direction < 2 && this.state.list.length > 1) || (this.state.transitionBackwards === "off" )) ? "transform 2s ease-in" : ""
    }


    return (
      <div className="mds-box" onClick={this.slideTransition} 
      onTransitionEnd={this.resetBox}
      >
        <div className={`slide-deck`} style={deckStyle}>
          { this.state.list.map((slide, i) => (
            <BoxSlide 
            key={i} 
            content={slide} 
            direction={this.state.direction}
              />
          ))}
        </div>
      </div>
    );
  }
}
