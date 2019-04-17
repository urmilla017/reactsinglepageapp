import React from "react";
const NewsDiv = (headlines) => {
  // console.log("headlines:" + JSON.stringify(headlines));
  return (
    Object.keys(headlines.props).map(i => {
      // console.log("headlines[i].title:" + JSON.stringify(headlines.props[i]));
      // console.log("i:" + i);
      return (
        <div key={i} className="newsBox">
          <br />
          <h3 className="newsTitle">{headlines.props[i].title}</h3>
          <h5 className="newsDesc">{headlines.props[i].description}</h5>
          <img src={headlines.props[i].urlToImage} alt='not found' className='newsImage'></img>
          <br />
          <p className="newsContent">{headlines.props[i].content}</p>
          <a href={headlines.props[i].url}>{headlines.props[i].url}</a>
          <br />
          <br />
          <hr />
        </div>
      )
    })
  )
}

export default NewsDiv;
