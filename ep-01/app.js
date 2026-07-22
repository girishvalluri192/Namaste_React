const heading = React.createElement(
    "h1",
    {id:'heading'},
    "Hello World from ReactJs");


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);

const nest = ReactDOM.createRoot(document.getElementById("nest"));
const parent = React.createElement('div',{id:"parent"},React.createElement('div',{id:'child'},[React.createElement('h4',{id:'heading'},"Nested Elements from React"),React.createElement('h1',{id:'heading'},"Nested Elements from React")]));
nest.render(parent);