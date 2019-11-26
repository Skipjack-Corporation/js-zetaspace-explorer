import React, { Component } from 'react'

class NodeListComponent extends Component
{
  state = {
    nodes: []
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
  
    fetch('http://localhost:8080/nodes')
    .then(res => res.json())
    .then((data) => {
      console.log("returned nodes.....")
      self.setState({ nodes: data })
    })
    .catch(console.log)
  }
  
  render() {
      return (
          <div className="table-responsive">
            <h2>Peers</h2>          
            <table className="table table-striped table-sm">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Endpoint</th>
                  <th>Country</th>
                  <th>Status (Active | Inactive)</th>
                </tr>
              </thead>
              <tbody>
                {
                  this.state.nodes.map((node) => (
                  <tr>
                    <td>{node.Key}</td>
                    <td>{node.Name}</td>
                    <td>{node.Host + ":" + node.Port}</td>
                    <td>{node.Country}</td>
                    <td>active</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
      )
  }
}

export default NodeListComponent