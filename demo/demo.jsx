'use strict';

import React from 'react';
import MarkdownEditor from '../src/MarkdownEditor';
import styles from './demo.module.css';

const MarkdownEditorDemo = React.createClass({

    displayName : 'MarkdownEditorDemo',

    getInitialState()
    {
        return {
            content : ''
        };
    },

    handleChange(event)
    {
        this.setState({ content : event.target.value});
    },

    render()
    {
        return (
            <div className={styles.demo__wrapper}>
                <MarkdownEditor
                    content      = {this.state.content}
                    handleChange = {this.handleChange}
                />
            </div>
        );
    }

});

export default MarkdownEditorDemo;
