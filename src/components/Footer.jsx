import React from "react";

class Footer extends React.Component {
     currentYear = new Date().getFullYear();
    render() {
        return(
            <footer>
            <p>
                Copyright @ {this.currentYear}
            </p>
            </footer>

        );
    }
}

export default Footer; 