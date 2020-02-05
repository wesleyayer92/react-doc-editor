import React from 'react';

import NewNote from './NewNote';
import NotesList from './NotesList';
import NoteEditor from './NoteEditor';
import SearchBar from './SearchBar';

class NotesApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentNoteId: '',
            searchText: 'this is the search text',
            notes: [
                {
                    id: 'aaaaa',
                    title: 'first note',
                    copy: 'lalala'
                },
                {
                    id: '44444',
                    title: 'second note',
                    copy: 'bababa'
                },
                {
                    id: 'a1b2c5',
                    title: 'third note',
                    copy: 'hahaha'
                },
            ]
        };
    }

    render() {
        return (
            <div>
                <h1>this is my notes app</h1>
                <NewNote />
                <SearchBar 
                    setText={this._setSearchText} 
                    text={this.state.searchText}
                />
                <NotesList 
                    notes={this.state.notes}
                    handleClick={this._selectNote}
                />
                <NoteEditor />
            </div>
        );
    }

    _setSearchText = (searchText) => {
        this.setState({
            searchText
        });
    }

    _selectNote = (currentNoteId) => {
        this.setState({
            currentNoteId
        }, () => {
            console.log('updated current id')
        });
    }
}

export default NotesApp;