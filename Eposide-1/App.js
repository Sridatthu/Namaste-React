// const heading =React.createElement("h1",
//     {id:"heading",xyz:"abc"},
//     "HELLO WORLD  22!");

/* <div id="parent">
    <div id="child1">
       <h1>I am H1</h1>
         <h2>i am H2</h2>
    </div>
    <div id="child2">
       <h1>I am H1</h1>
        <h2>i am H2</h2>
    </div>
</div> */
const parent=React.createElement("div",{id:"parent"},[
    React.createElement("div",{id:"child1"},[
      React.createElement("h1",{},"I AM H1 TAG"),
       React.createElement("h2",{},"I AM H2 TAG")
    ]),
   React.createElement("div",{id:"child2"},[React.createElement("h1",{},"I AM H1 TAG"),React.createElement("h2",{},"I AM H2 TAG")])
]
);



const root=ReactDOM.createRoot(document.getElementById("root"));
 root.render(parent);
