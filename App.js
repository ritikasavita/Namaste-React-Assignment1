 
let nodes = React.createElement("div",
{id:"parent"},
React.createElement("div",
{id:"child"},[
React.createElement("h1",{},
"siblings1"),
React.createElement("h1",{},"siblings2")
]

)

)

console.log(nodes);
let root = ReactDOM.createRoot(document.getElementById("root"));

root.render(nodes);

