import React from 'react';
import axios from 'axios';

class Quote extends React.Component {
    constructor() {
        super()
        this.state = {
            quote: "Genarate Qoute",
            author: "Author",
            img: "https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png",
        }
        
        this.fetchQuote = this.fetchQuote.bind(this)
    }
    
    componentDidMount(){
        this.fetchQuote()
    }
    
    fetchQuote(){
        axios.get("https://thesimpsonsquoteapi.glitch.me/quotes")
        .then(res => {
            const data = res.data[0]
            this.setState({
                quote:data.quote,
                author: data.character,
                img:data.image
            })
            console.log(res.data[0])
        })
        .catch(err => {
            console.log(err)
        })
    }

    render() {
        return (
            <div className="quote-wrapper" >
                <div>
                    <img src={this.state.img} alt="quote char" />
                    <div>
                        <span>{this.state.quote}</span>
                        <br />
                        <i>-{this.state.author}</i>
                    </div>
                </div>
                <button onClick={this.fetchQuote} >Genarate</button>
            </div>
        )
    }
}

export default Quote