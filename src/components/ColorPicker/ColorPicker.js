import { Component } from "react";
import { PickerButton, Container } from "./ColorPicker.jsx";

class ColorPicker extends Component {
    state = { activeOptionIdx: 0 };
    
    setActiveColor = index => {
        this.setState({ activeOptionIdx: index });
    };

    render() {
        const { activeOptionIdx } = this.state;
        const { options } = this.props;
        const { label } = options[activeOptionIdx];
        
        return (
            <Container color={label} >
                <h2>Color Picker</h2>
                <div>
                    {options.map(({ label, color }, index) => (
                        <PickerButton
                            key={label}
                            color={color}
                            index={index}
                            active={activeOptionIdx}
                            onClick={() => this.setActiveColor(index)}
                        ></PickerButton>

                        /*
                        * Alternative styling by using className, which can be added to separate function
                       const someClassName = ['SomeStyles'];
                       if (index === this.state.activeOptionIdx) {
                          someClassName.push('SomeAdditionalStyle')
                       }
                       className={someClassName.join()}
                        */
                   
                        
                    ))}
                    <p>Chosen Color: { label } </p>
                </div>
            </Container>
        );
    };
};

export default ColorPicker;