import React from "react";
import { Link } from "react-router-dom";
const Cros = (props) => {
  return (
    <>
      <div key={props.Data.id}>
      <div className="cros" >
        <div className="left">
          <div className="view">
            <img src={props.Data.image1} alt="" className="icon4" />
            <div className="contract">
              <h2 style={{color: props.Data.color}}>{props.Data.title}</h2>
              <Link to={"/"}>
                View Contract <img src={props.Data.image2} alt="" />
              </Link>
            </div>
          </div>
          <div className="price">
            <p>
              Price: <span className="span">{props.Data.decs}</span>
            </p>
            <p>{props.Data.decs1}</p>
          </div>
        </div>
        <div className="table-div">
          <div className="table">
            <p>{props.Data.decs2}</p>
            <div className="line1"></div>
            <p>{props.Data.decs3}</p>
          </div>
          <div className="table">
            <p>{props.Data.decs4}</p>
            <div className="line2"></div>
            <p>{props.Data.decs5}</p>
          </div>
        </div>
        <div className="buy-cros">
          <div className="icon51">
            <img src={props.Data.image3} alt="" className="plus" />
            <img src={props.Data.image4} alt="" />
          </div>
          <div>
          <Link to={'/mint'}>
          {props.Data.btn && <button className="mintbtn">MINT</button>}
          </Link>
            <Link to={'/'}>
            <button className="crosbtn">BUY CROS</button>
            </Link>
          
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Cros;
