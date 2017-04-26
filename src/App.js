import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import Github from './Github'
import './App.css';

let searchValue;
let tiyGithub = ['bgates', 'ChrisLebbano', 'JCR08', 'ddsheard', 'wjwjr', 'conshus', 'tyjdavis', 'Filusmarvin' ]

class App extends Component {
  constructor () {
    super()
    this.state = {
      hasLoadedProfile: false,
      profile: { login:'conshus' },
      hasLoadedRepos: false,
      repos:[]
    }
  }

  componentDidMount (){
    axios.get('https://api.github.com/users/'+this.state.profile.login)
      .then(response => {this.setState({ profile: response.data, hasLoadedProfile: true})});
    axios.get('https://api.github.com/users/'+this.state.profile.login+'/repos')
      .then(response => this.setState({repos: response.data, hasLoadedRepos: true}))

  }
  handleChange(event) {
    console.log(event.target.value);
    searchValue = event.target.value;
    //this.setState({ text: event.target.value});
  }

  searchClick(){
    console.log(searchValue);
    axios.get('https://api.github.com/users/'+searchValue)
      .then(response => {this.setState({ profile: response.data, hasLoadedProfile: true})});
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <ul id='slide-out' className='side-nav fixed'>
            <li className="search">
              <div className="search-wrapper card">
                <input id="search" onChange={this.handleChange.bind(this)} />
                  <i className="material-icons searchIcon" onClick={this.searchClick.bind(this)}>search</i>
              </div>
            </li>
          </ul>
          {console.log(this.state.hasLoadedRepos)}
          <a href="#" data-activates="slide-out" className="button-collapse hide-on-large-only"><i className="material-icons">menu</i></a>
          <Github profile={this.state.profile} hasLoadedProfile={this.state.hasLoadedProfile}/>
          <Github repos={this.state.repos} hasLoadedRepos={this.state.hasLoadedRepos}/>
        </div>
      </div>
    );
  }
}

export default App;
