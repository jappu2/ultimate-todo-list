const Body = function(props) {

    let showingUser = props.showingUser,
    currentUser = props.currentUser,
    showingUserTodos = showingUser.todos;
    let headerText = `Hello ${currentUser.userName}, This is your TO DO list...`
    if (currentUser.userName !== showingUser.userName){
        headerText = `Hello ${currentUser.userName}, This is ${showingUser.userName}'s TO DO list...`
        
    }
    let singleTask = (
        showingUserTodos.map((el, i) => (
            <div className="singleTask" key={i}>
                    <div className="taskTitle">{el}</div> 
                </div>
            )
        )
    )
    if(currentUser.userName === showingUser.userName || currentUser.isAdmin === true){
        singleTask = (
            showingUserTodos.map((el, i) => (
                <div className="singleTask" key={i}>
                        <button className="checkButton" onClick={
                            function (event){
                                event.target.nextElementSibling.style.fontStyle = "italic"
                            }
                        }></button>
                        <div className="taskTitle">{el}</div> 
                        <span className="material-symbols-outlined">delete_forever</span>
                    </div>
                )
            ) 
        )
    }

    // document.querySelector(".checkButton").onClick = function() {
    //         // this.nextElementSibling.style = "font-size: 10px"
    //     }
    //    let buttons = document.querySelectorAll(".checkButton"); 
    // buttons.forEach(el => el.addEventListener("click", function(){
    //     console.log(this)
    // }))
        
    
    

    return(
        <div className="App-body">
            <div className="showingUser">
            {headerText}
            </div>
            <div className="todos">
                {
                    singleTask
                }
            </div>
            <div className="controlTodos">
                <button>add</button>
                <button>clear</button>
            </div>
        </div>
    )

}

export default Body