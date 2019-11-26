import React, {Component} from 'react'

class ContentListComponent extends Component {


  state = {
    contents: []
  }
  
  componentDidMount() {
    var self = this
    self.list();
  
    setInterval(function(){
      self.list()
    }, 3000)
  }
  
  list(){
    var self = this
  
    fetch('http://localhost:8080/contents')
    .then(res => res.json())
    .then((data) => {
      console.log("returned contents.....")
      self.setState({ contents: data })
    })
    .catch(console.log)
  }

  render() {
    return (
        <div className="table-responsive">
          <h2>Distributed Contents</h2>          
          <table className="table table-striped table-sm">
            <thead>
              <tr>
                <th>ID</th>
                <th>Hash</th>
                <th>Peers</th>
                <th>File</th>                
                <th>Size (bytes)</th>                
                <th>Status (Good|Broken)</th>
              </tr>
            </thead>
            <tbody>
              {
                this.state.contents.map((content) => (
                <tr>
                  <td>{content.Hs}</td>
                  <td>{content.Hs}</td>
                  <td>{content.Ep}</td>
                  <td>{content.Fp}</td>
                  <td>{content.Le}</td>
                  <td>Good</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
    )
  }
}



export default ContentListComponent