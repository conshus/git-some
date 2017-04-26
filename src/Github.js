import React, { Component } from 'react';



class Github extends Component {
  render() {
    const user = this.props.profile;
    if (this.props.hasLoadedProfile){
      return(
        <section className="fullHeight">

          <div className='row nomargin flex flex-end'>
            <div className='col s12 m4 cutout tab'>
              Code Name:
              <br/>{user.login}
              <br/><a href={user.html_url}>(GitHub Profile)</a>
            </div>
            <div className='col s12 m8'>
              <img className="responsive-img" alt="github" src="gioctocat.png" />
            </div>
          </div>
          <div className='row nomargin flex'>
            <div className='col s12 m4 cutout avatar'>
              <img className="responsive-img" alt="user profile" src={user.avatar_url} />
            </div>
            <div className='col s12 m8 cutout left-align gitInfo'>
              <br/>Real Name: {user.name}
              <br/>Location: {user.location}
              <br/>Blog: {user.blog}
              <br/>Hireable: {user.hireable ? "Yes" : "No"}
              <br/>Bio: {user.bio}
              {console.log(this.props.repos)}
              {/* <br/>Repos:{this.props.repos.map((project, index) => {
                return <Repo key={index} name={project.name} />
              })} */}
            </div>
          </div>
        </section>

      )
    } else {
      return null
    }
  }
}

export default Github

class Repo extends Component {
  render () {
    return <p>{this.props.name}</p>
  }
}
