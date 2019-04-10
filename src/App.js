import React from "react";
import {Component} from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import "./App.css";

class App extends Component {
  constructor(props){
    // this will create the original component called Component
    super(props);
    // only for definition inside the constructor
    this.state = { 
      friends: friends 
    };
  }
  // state = {
  //   stuff: 1
  // }
  changeStuff(friendId){
    //this.setState({stuff: snapple});
    // console.log(this.state);
    var temp = this.state.friends;
    temp.splice(friendId, 1);
    this.setState({
      friends: temp
    });
    console.log(friendId);
  }
  handleClickArb(){
    //"this" our context is always going to be App if you use bind
    this.changeStuff(27);
  }
  render(){
    return (
      <Wrapper>
        <h1 className="title">Friends List</h1>
        { 
          this.state.friends.map( (friend, index) => {
            return (
              <FriendCard
                key={"friend" + index}
                name={friend.name}
                image={friend.image}
                occupation={friend.occupation}
                location={friend.location}
                appStuff={this.state.friends}
                appChanger={() => {this.changeStuff(index);}}
              />
            );
          })
        }
      </Wrapper>
    );
  }
}

export default App;
