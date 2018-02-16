class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleVisibilityToggle = this.handleVisibilityToggle.bind(this);

        this.state = {
            showDetails: false
        }
    }

    handleVisibilityToggle() {
        this.setState((prevState) => {
            return {
                showDetails: !prevState.showDetails
            }
        });
    }

    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleVisibilityToggle}>
                    {this.state.showDetails ? "Hide details" : "Show details"}
                </button>
                {this.state.showDetails && (
                    <p>Hey. These are some details you can see now!</p>
                )}
            </div>
        )
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'))

// const appRoot = document.getElementById('app');

// const app = {
//    / title: "Visibility Toggle",
//     showDetails: false,
//     details: "Hey. These are some details you can see now!"
// };

// const toggle = () => {
//     app.showDetails = !(app.showDetails);
//     render();
// };

// const render = () => {
//     const template = (
//         <div>
//             <h1>{app.title}</h1>
//             <button onClick={toggle}>{app.showDetails ? "Hide details" : "Show details"}</button>    
//             {app.showDetails && <p>{app.details}</p>}
//         </div>
//     )
//     ReactDOM.render(template, appRoot);
// };

// render();
