import React from 'react';


class Header extends React.Component {
    render() {
        return (
            <h1 className="header_edit" data-heading="Assuis">Assuis</h1>
        )
    }
}

// var h1 = document.querySelector("h1");

// h1.addEventListener("input", function() {
//     this.setAttribute("data-heading", this.innerText);
// });

export default Header

