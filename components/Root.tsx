import React, {Component} from 'react';
import {StyleSheet, View, TextInput, Button, FlatList} from 'react-native';
import {connect} from 'react-redux';
import {ThunkDispatch} from 'redux-thunk';
import {Action} from 'redux';

import ListItem from './ListItem';
import {thunkSearchPokemon} from '../actions/pokemon';
import {IPokemon} from '../interfaces';
import {AppState} from '../store';

interface PropsPokemons {
  pokemons: IPokemon[];
}

interface PropsAdd {
  add: (name: String) => void;
}

type Props = PropsPokemons & PropsAdd;

interface State {
  placeName: string;
  places: [];
}

class Root extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      placeName: '',
      places: [],
    };
  }

  placeSubmitHandler = (): void => {
    if (this.state.placeName.trim() === '') {
      return;
    }
    this.props.add(this.state.placeName.toLowerCase());
  };

  placeNameChangeHandler = (value: string): void => {
    return this.setState({
      placeName: value,
    });
  };

  placesOutput = (): React.ReactElement<Props> => {
    return (
      <FlatList
        style={styles.listContainer}
        data={this.props.pokemons}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}: {item: IPokemon}) => (
          <ListItem imageUrl={item.imageUrl} name={item.name} />
        )}
      />
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Enter pokemon name or ID"
            style={styles.placeInput}
            value={this.state.placeName}
            onChangeText={this.placeNameChangeHandler}
          />
          <Button title="Search" onPress={this.placeSubmitHandler} />
        </View>
        <View style={styles.listContainer}>{this.placesOutput()}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  placeInput: {
    width: '70%',
  },
  placeButton: {
    width: '30%',
  },
  listContainer: {
    width: '100%',
  },
});

const mapStateToProps = (state: AppState): PropsPokemons => {
  return {
    pokemons: state.listPage.pokemons,
  };
};

const mapDispatchToProps = (
  dispatch: ThunkDispatch<State, void, Action>,
): PropsAdd => {
  return {
    add: (name: string): void => {
      dispatch(thunkSearchPokemon(name));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Root);
