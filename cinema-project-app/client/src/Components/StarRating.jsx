const StarRating = {
  size: 50,
  count: 5,
  color: "grey",
  activeColor: "yellow",
  value: 0,
  // a11y: true,
  isHalf: true,
  // emptyIcon: <i className="far fa-star" />,
  // halfIcon: <i className="fa fa-star-half-alt" />,
  // filledIcon: <i className="fa fa-star" />,
  onChange: (newValue) => {
    console.log(`Example 2: new value is ${newValue}`);
  },
};

export default StarRating;
