import "./Card.css";

//the card component is a wrapper that often has rounded corners and a box-shadow

//this props property is so that the classnames that are assigned to this card in other components also work
const Card = (props) => {
  //this is a speacial prop built into react that every component receives, no matter whether you can see it or not
  const classes = "card " + props.className;
  /* 
  the {prope.children{} is ro indicate that this component will 
  have children inside. a shell/wrapper component won't work 
  without this because, out of the box, you can't have other 
  content inside custom components
  */
  return <div className={classes}>{props.children}</div>;
};

export default Card;
