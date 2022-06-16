import React, { Component } from 'react';
import { PokemonForm } from './PokemonForm';
import PokemonInfo from './PokemonInfo';
import PropTypes from 'prop-types';

import { PokemonContainer } from './Pokemon.styled';

export default class Pokemon extends Component {
  state = {
    pokemonName: null,
  };

  handleSubmit = pokemonName => {
    this.setState({ pokemonName });
  };

  render() {
    const { colors } = this.props;
    const { pokemonName } = this.state;

    return (
        <PokemonContainer style={{margin: '20px'}}> {/* ==> Styles are added inlined*/}
          <PokemonForm
            onSubmit={this.handleSubmit}
            colors={colors}
          />
            <PokemonInfo
              pokemonName={pokemonName}
              colors={colors}
            />
        </PokemonContainer>
    );
  };
};

Pokemon.propTypes = {
  colors: PropTypes.objectOf(PropTypes.string).isRequired,
};


// export default class Pokemon extends Component {
//   state = {
//     pokemonName: null,
//     visible: false,
//   };

//   handleSubmit = pokemonName => {
//     this.setState({ pokemonName });
//   };

//   render() {
//     const { colors } = this.props;
//     const { pokemonName, visible } = this.state;

//     return (
//         <div>
//           <PokemonForm
//             onSubmit={this.handleSubmit}
//             colors={colors}
//           />
//           {/* <Button
//             colors={colors}
//             onClick={() => this.setState(state => ({ visible: !state.visible }))}>
//             {!visible ? 'Show' : 'Hide'}
//           </Button> */}
//           {/* {visible && ( */}
//             <PokemonInfo
//               pokemonName={pokemonName}
//               colors={colors}
//             />
//           {/* )} */}
//         </div>
//     );
//   };
// };
