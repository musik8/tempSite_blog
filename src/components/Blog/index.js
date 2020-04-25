import React, {Component}from 'react'
import "./style.scss"




class Blog extends Component {
    constructor(props) {
      super(props);
      this.state = {
        blogItem: [],
        activeIdx: 0,
        load: false,
        toggle: false
      };
      this.displayItems = this.displayItems.bind(this);
      this.displayContent = this.displayContent.bind(this);
      this.toggleBackground = this.toggleBackground.bind(this);
    }
    displayContent = () => {
      var displayItem = [];
      displayItem.push(<div key={1}className="blog-display-content"><div className="preview-content">
        <h2>{this.state.blogItem[this.state.activeIdx].title}</h2>
        <h3>BY: {this.state.blogItem[this.state.activeIdx].by}</h3>
        <h3>DATE: {this.state.blogItem[this.state.activeIdx].date}</h3>
        {this.state.blogItem[this.state.activeIdx].content.map(par => {
              return(<p>{par.p1}</p>)
            })} 
      </div>
      <button className="button-content" onClick={()=>{this.toggleBackground();this.setState({toggle: !this.state.toggle
          })}} >
          <h4>LESS</h4>
          <div className="pop-up"></div>
    </button>
    </div>
    )

    return displayItem;  
  }
  toggleBackground = () => {
    console.log(document.body.style.overflow)
   
    
    if(document.body.style.overflow === "hidden") {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden"
    }
    return null;
  }
    displayItems = () => {

      var blogItemList = [];

      this.state.blogItem.map((item, idx) => {
        blogItemList.push(
        <div key={idx} className="blog-item">
          <div className="preview-content">
            <h2>{item.title}</h2>
            <h3>BY: {item.by}</h3>
            <h3>DATE: {item.date}</h3>
            <p>{item.content[0].p1}</p>
          </div>
          <button className="button-content" onClick={()=>{this.toggleBackground();this.setState({toggle: !this.state.toggle, activeIdx: idx
          })}}>
              <h4>MORE</h4>
              <div className="pop-up"></div>
          </button>
        </div>)

      })

    

      return blogItemList;
    }
  
    componentDidMount() {
      fetch('/data.json')
      .then(res => res.json())
      .then((data) => {
        this.setState({ blogItem: data, load: true })
      })
      .catch(console.log)
    
    }
  
    render() {
      return(<div>
         
          <div className={`blog-display-container ${this.state.toggle}`}>

            { this.state.load ? this.displayContent() : null}
           
          </div>
       
         

          <div className="blog-items-container">
            {this.displayItems()}
          </div>


          
          
  
      </div>)
  
  
  
  
    }
  
  
  }
  
  
  export default Blog
  