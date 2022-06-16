import { Component } from "react";
import DropdownBtn from "./Dropdown.styled";

class Dropdown extends Component {
    state = {
        visible: false,
    };

    toggle = () => {
        this.setState(prevState => ({
            visible: !prevState.visible,
        }));
    };

    render() {
        const { visible } = this.state;
        const { parts, theme } = this.props;
        return (
            <div>
                <DropdownBtn theme={theme} onClick={this.toggle}>{ visible ? 'Hide' : 'Show'}</DropdownBtn>
                
                {visible && (
                    <div>{ parts }</div>
                )}
        </div>
    )
    };
}

export default Dropdown;