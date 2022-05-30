import React from "react";

function ColorItem(props) {
  console.log(props)
  return (
    <li style={{ color: props.color }}>{props.color}</li>
  )
}

function ColorList() {
  const colors = [
    "firebrick",
    "rebeccapurple",
    "salmon",
    "darkslategray",
    "hotpink",
  ];


  const colorElements = colors.map((element) => {
    return (
      <ColorItem key={element} color={element}></ColorItem>
    )
  }
  )


  return (
    <div>
      <h1>Top 5 CSS Colors</h1>
      <ol>
        {colorElements}
      </ol>
    </div>
  );
}

export default ColorList;
