import React, { Component } from 'react';



class Github extends Component {
  render() {
    const user = this.props.profile;
    if (this.props.hasLoadedProfile){
      return(
        <section className="fullHeight">

          <div className='row nomargin flex flex-end'>
            <div className='col s12 m4 cutout tab'>
              <span className="copse">Code Name:</span>
              <br/>{user.login}
              <br/><a href={user.html_url} target="_blank">(GitHub Profile)</a>
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
              <br/><span className="copse">Real Name:</span> {user.name}
              <br/><span className="copse">Location:</span> {user.location}
              <br/><span className="copse">Blog:</span> <a href={user.blog} target="_blank">{user.blog}</a>
              <br/><span className="copse">Hireable:</span> {user.hireable ? "Yes" : "No"}
              <br/><span className="copse">Bio:</span> {user.bio}
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
