import React from "react";

class Content extends React.Component {
  render() {
    const styles = {
      span: {
        color: "blue",
      },
      green: {
        color: "green",
      },
    };

    let innerStr = "этот див из класса Контент зеленого цвета";
    return (
      <div>
        <h5 style={styles.span}>"этот див из класса Контент синего цвета"</h5>
        <h5 style={styles.green}>{this.props.iCanSee && innerStr}</h5>
      </div>
    );
  }
}

const styles = {
  div: {
    color: "red",
    fontSize: "24px",
  },
  h2: {
    color: "blue",
  },
};

class AnotherContent extends React.Component {
  render() {
    let anotherContent ='this is AnotherContent div'
    return <div> {this.props.othercontent && anotherContent} </div>;
  }
}

function App(props) {
  let str = "hello";
  let num = 545645465;

  return (


    <div style={styles.div}>

    <div>
    <AnotherContent othercontent/>
    <AnotherContent othercontent ={false}  />
    <AnotherContent othercontent ={false} />
    </div>
      <h1>
        {" "}
        {str} {num}{" "}
      </h1>
      <h1>
        {" "}
        {str} {num}{" "}
      </h1>
      <h2>
        <Content iCanSee />
        <Content iCanSee />
      </h2>
    </div>
  );
}

// class App extends React.Component{
//   render(){

//     let hello = "hello classes";
//     let num = 546465;
// return(
//   <div>
//     <h1> {hello} {num} </h1>
//   </div>
// )
//   }
// }
export default App;
