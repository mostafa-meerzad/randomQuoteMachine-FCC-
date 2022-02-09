// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// // import {faGithub} from "@fortawesome/free-brands-svg-icons"
// import * as fabIcon from "@fortawesome/free-brands-svg-icons"
// import * as farIcon from "@fortawesome/free-regular-svg-icons"
// import * as fasIcon from "@fortawesome/free-solid-svg-icons"
// import { ChevronCompactRight} from "react-bootstrap-icons";
// import * as bsIcon from "react-bootstrap-icons";
// // import  * as Icon from "@fortawesome/free-solid-svg-icons";


// ReactDOM.render(
//   <React.StrictMode>
//     <App />

//     {/* <FontAwesomeIcon icon={Icon.faCoffee} /> */}
//     {/* <h2>Hello ReactJs</h2> */}
//     <FontAwesomeIcon
//       icon={fabIcon.faGithub}
//       color="red"
//       style={{ color: "tomato", fontSize: "50px", fontWeight: 100 }}
//     />
//     {/* <FontAwesomeI */}
//     <ChevronCompactRight />
//     <div style={{display:"flex", backgroundColor:"skyBlue", width: "50px", height:"50px", borderRadius: "50%", justifyContent: "center", alignItems: "center"}}>
//       <bsIcon.Twitter />
//     </div>
//   </React.StrictMode>,
//   document.getElementById("root")
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// import React from "react";
// import reactDom from "react-dom";
// import ReactDOM from "react-dom";
// import "./styles/index.css"

// import image from "./assets/SoundCompass-720x480.jpg"


// class MyComponent extends React.Component{
//   constructor(props){
//     super(props)
//   }
//   render(){
//     return(
//       <div className="imgContainer" >
//       <img src={image}/>

//       </div>
//     )
//   }


// }

// ReactDOM.render(<MyComponent/>, document.getElementById('root'))

// import * as farIcon from "@fortawesome/free-regular-svg-icons"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import * as fasIcon from "@fortawesome/free-solid-svg-icons"
import * as fabIcon from "@fortawesome/free-brands-svg-icons";
import {ChevronCompactRight} from "react-bootstrap-icons";
import "./styles/index.css"


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quotes: {
                "johan smith": "test testing somethig",
                "mosh hamidany": "tetst fls llsdf sl kjf odsfjw fjos sfw lf wle l sodifo s owe jsfoije f",
                "bell jons": "loerm somethig is not going well hmmmmmmm hmm hmm"
            },
            authors: ['johan smith', 'mosh hamidany', 'bell jons'],
            selectedQuote: '',
            selectedAuthor: '',
            index: null

        }
        ;

    }

    componentDidMount() {

        const authors = this.state.authors;
        const randIndex = Math.floor(authors.length * Math.random());
        const author = this.state.authors[randIndex];
        const quote = this.state.quotes[author];
        const authorIndex = this.state.authors.indexOf(author);
        this.setState({selectedAuthor: author, selectedQuote: quote, index: authorIndex})


    };


    nextQuoteHandler = () => {
        // let currentAuthor = this.state.selectedAuthor;
        let currentIndex = this.state.index;

        // console.log(`
        // this is currentAuthor : ${currentAuthor}
        // this is currentIndex : ${currentIndex}
        // `)

        let nextIndex = currentIndex + 1;
        let nextAuthor = this.state.authors[nextIndex];
        let nextQuote = this.state.quotes[nextAuthor];
        // let nextQuote = '';

        // console.log(`
        // this is nextIndex : ${nextIndex}
        // this is nextAuthor : ${nextAuthor}
        // `)

        if (nextAuthor === undefined) {
            // console.log("undefined occurred");
            // this.setState(state => ({index: 0, selectedAuthor: state.authors[0], selectedQuote: state.quotes}))
            this.setState({index: 0})
            nextAuthor = this.state.authors[0];
            nextQuote = this.state.quotes[nextAuthor];
            this.setState({index: 0, selectedAuthor: nextAuthor, selectedQuote: nextQuote})

        } else {
            this.setState({index: nextIndex, selectedAuthor: nextAuthor, selectedQuote: nextQuote});

        }

    }


    render() {
        return (
            <div id="quote-box">
                <section id="quote-container">
                    <p id="text">

                        {this.state.selectedQuote}

                    </p>
                    <div id="author-container">
                        <FontAwesomeIcon icon={fasIcon.faMinus} className="hyphen"/>
                        <span id="author">
                            {this.state.selectedAuthor}
            </span>
                        <FontAwesomeIcon icon={fasIcon.faMinus} className="hyphen"/>
                    </div>
                </section>

                <section id="buttons">
                    <ul>
                        <li id="facebook">
                            <a href="#">
                                <FontAwesomeIcon icon={fabIcon.faFacebookF}/>
                            </a>
                        </li>

                        <li id="like">
                            <FontAwesomeIcon icon={fasIcon.faHeart}/>
                        </li>

                        <li id="facebook">
                            <a href="#" target={"_self"}>
                                <FontAwesomeIcon icon={fabIcon.faTwitter}/>
                            </a>
                        </li>

                        <li id="new-quote" onClick={this.nextQuoteHandler}>
                            <div id="icon">
                                <ChevronCompactRight className="next-icon"/>
                                <ChevronCompactRight className="next-icon"/>
                            </div>
                            <span>Next </span>

                        </li>
                    </ul>

                </section>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))