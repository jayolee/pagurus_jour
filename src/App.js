import React, { Component } from 'react';
import { projectList } from './project_list'
import './App.css';
import './projects.scss';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      active: true,
      opacity:1,
      transform: "translateY(700px)",
      detail: 0,
      imgSrc: '',
      width: 0,
      anistat: 1,
      anilist:["","btnBounce"]
    }
    this.exitLink=process.env.PUBLIC_URL + this.props.projecttype;
    this.contents = projectList;
  }


  gotoTopNone() {
    if (this.state.anistat === 1) {
      this.setState({ anistat: 0 })
    }
  }
  gotoTopBounce() {
    if (this.state.anistat === 0) {
      this.setState({ anistat: 1 })
    }
  }
  contentgenerator() {
    let item = "pagurus";
    let element = [];
    let topelement = [];
    let contentelement = [];
    let explalist = Object.keys(this.contents[item].exlpla);
    //topinfo (team, name...)
    for (let i = 0; i < explalist.length; i++) {
      topelement.push(
        <div key={"expla" + i} className="topinfo">
          <span className={"title " + this.props.idnum} >{explalist[i]}: </span>{this.contents[item].exlpla[explalist[i]]}<br />
        </div>
      )
    }
    let contentlist = Object.keys(this.contents[item]);


    for (let i = 4; i < contentlist.length - 1; i++) {
      if (this.contents[item].button && i === 4) {
        i += 1;
      }
      contentelement.push(
        <div key={"sectitle" + i}>
          <div className={"sectitle " + this.props.idnum} >{contentlist[i]}
            <div className={"bar " + this.props.idnum} />
          </div>

          {this.contents[item][contentlist[i]]}
        </div>
      )
    }

    let finalkey = contentlist.length - 1;
    contentelement.push(
      <div key={"sectitle" + finalkey} onMouseOut={this.gotoTopNone.bind(this)} onMouseOver={this.gotoTopBounce.bind(this)} >
        <div className={"sectitle " + this.props.idnum} >
          {contentlist[finalkey]}
          <div className={"bar " + this.props.idnum} />
        </div>
        {this.contents[item][contentlist[finalkey]]}
      </div>
    )

    if (this.contents[item].button) {
      element.push(<div className="contentbox" key="contentbox" style={{ opacity: this.state.opacity, transform: this.state.transform }}>
        <div className="contentBottom" onMouseOut={this.gotoTopNone.bind(this)} onMouseOver={this.gotoTopBounce.bind(this)}></div>
        <div className={"enttitle " + this.props.idnum} >{this.contents[item].projectTitle}

        </div>
        <div className={"maincontent " + this.props.idnum}>
          {this.contents[item].topimg}
          <div className="toptitle ">
            <div className={"qtmark " + this.props.idnum} > <q></q> </div>
            {this.contents[item].quote}

          </div>
          <div className="center">
            {this.contents[item].button}</div>
          <div className="expla">
            {topelement}
          </div>
          <div className="expla">
            {contentelement}
          </div>

        </div>

      </div>
      )
    }
    else {
      element.push(<div className="contentbox" key="contentbox" style={{ opacity: this.state.opacity, transform: this.state.transform }}>
        <div className="contentBottom" onMouseOut={this.gotoTopNone.bind(this)} onMouseOver={this.gotoTopBounce.bind(this)}></div>

        <div className={"enttitle " + this.props.idnum} >{this.contents[item].projectTitle}
        </div>
        <div className="maincontent">
          {this.contents[item].topimg}
          <div className="toptitle ">
            <div className={"qtmark " + this.props.idnum} > <q></q> </div>
            {this.contents[item].quote}
          </div>
          <div className="expla">
            {topelement}
          </div>
          <div className="expla">
            {contentelement}
          </div>

        </div>

      </div>
      )
    }
    return element
  }



  render() {
    return (
      <div style={{ position: "relative", top: "0", left: "0", width: "100%", height: "100%" }}>
        {this.contentgenerator()}
        <div>
          <div className={"gototop " + this.props.idnum} id={this.state.anilist[this.state.anistat]} key="topBtn" style={{ opacity: this.state.opacity }} onClick={(ev) => window.scroll({ top: 0, left: 0, behavior: 'smooth' })} >
            <svg width="30" height="30">
              <path d="M4 15 L15 4 L26 15 M15 4 L15 26" />
            </svg>
            <div className={"gototop_descrip " + this.props.idnum}>Go to Top
          </div>
            <div className={"triangle " + this.props.idnum} />
          </div>
        </div>
      </div>

    );

  }
}

export default App;
