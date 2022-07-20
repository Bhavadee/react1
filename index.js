const nav = (
<nav>
<div className = "nav">
    <h1>bhavi's cafe</h1>
    <ul className = "navList">
        <li>meanu</li>
        <li>contact</li>
        <li>about</li>
    </ul>
</div>
</nav>

)
const content = (
<div>
    <h1>All tea's and snack avilable</h1>
       
        <ol>
            <li className = "bb">
                <h2>dosa with karam</h2>
                <img src="https://www.ticklingpalates.com/wp-content/uploads/2022/03/plain-dosa.jpg" width="120px" />
            </li>
            <br/>
            <li className = "bb">
                <h2>litti choka</h2>
                <img src="https://www.secondrecipe.com/wp-content/uploads/2019/11/litti-chokha-1.jpg" width="120px" />
            </li>
            <br/>
            <li className = "bb">
                <h2>iddli</h2>
                <img src="https://www.vegrecipesofindia.com/wp-content/uploads/2021/06/idli-recipe-4.jpg" width="120px" />
            </li>
            <br />
           
        </ol>

        <h4>litti choka is free for my bihari friends</h4>
    </div>
)






ReactDOM.render(nav,document.getElementById("root1"))
ReactDOM.render(content,document.getElementById("root"))