import { Component } from 'react';
import PropTypes from 'prop-types';
import Controls from './Controls';
import Value from './Value';
import Container from './Counter.styled';

class Counter extends Component {
    static defaultProps = {
        initialStep: 1,
        initialValue: 0,
    };

    static propTypes = {
        initialStep: PropTypes.number.isRequired,
        initialValue: PropTypes.number.isRequired,
    }

    state = {
        step: this.props.initialStep,
        value: this.props.initialValue,
    };

    /*
    * The next suntax function cannot use 'this'
    handleIncrement() {
    console.log('click in Up button');
    console.log(this); -> will show underfine
    };
    * But the next one can
    */

    handleDecrement = (e) => {
        console.log(this.props.theme)
        console.log('click in Down button');
        console.log(this);        

        /* 
        * Sometimes the next code does not work, so it is better to use variable for recording event target 
        setTimeout(() => {
            console.log(e.target);
        }, 1000);
        */


        const { target } = e; // -> use desctructurization
        setTimeout(() => {
            console.log(target);
        }, 1000);



        /* 
        * Use only setState to change state inside class. Additionally, the next code just change state, which is based on default state
        this.setState({
            value: 10,
        },
            () => {} --> you can add callback function, but it is rarely
        )

        */

        this.setState(prevState => {
            return {
                value: prevState.value - prevState.step,
            };
        });
    };

    /*
    * setState works on the next rules
   
   currState = {
   value: 1,
   a: 2,
   b: 3,
   }

   update = {
   value: 200,
   }

   * newState = {...currState, ...update} => {a: 2, b: 3, value: 200}
    */
    
    
    
    handleIncrement = (e) => {
        console.log('click in Up button');
        console.log(e);
        console.log(e.target);
        console.log(this);   
        
        this.setState(prevState => {
            return {
                value: prevState.value + prevState.step,
            };
        });
    };

    render() {
        const { colors } = this.props.theme;
        const { value, step } = this.state;

        return (
            <Container colors={ colors }>
                <Value theme={ colors } value={ value }/>
    
            <Controls theme={ colors }
                onDecrement={this.handleDecrement}
                onIncrement={this.handleIncrement}
                step={ step }         
            />
            </Container>
        );
    };
};

export default Counter; // -> for export of class use such export