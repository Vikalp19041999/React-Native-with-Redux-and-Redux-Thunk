import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native';
import { getPeople } from './redux/store';
import { connect } from 'react-redux';

class PeopleList extends Component {

    componentDidMount() {
        this.props.getPeople()
    }

    render() {
        const { people, loading } = this.props;
        if (!loading) {
            return (
                <View style={styles.container}>
                    {
                        people.length ? people.map((person, i) => <Text key={i}>{person.name}</Text>) : <Text>No people</Text>
                    }
                </View>
            )
        }
        else {
            return (
                <View style={styles.container}>
                    <Text style={styles.text}>Loading.....</Text>
                </View>
            )
        }
    }
}

const mapStateToProps = state => ({
    people: state.people,
    loading: state.loading
})

const mapDispatchToProps = {
    getPeople,
}

export default connect(mapStateToProps, mapDispatchToProps)(PeopleList)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 5
    },
    instructions: {
        textAlign: 'center',
        color: 'black',
        marginBottom: 5
    }
})