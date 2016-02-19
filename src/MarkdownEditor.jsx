'use strict';

import React from 'react';
import classNames from 'classnames';
import marked from 'marked';
import styles from './MarkdownEditor.module.css';

const MarkdownEditor = React.createClass({

    displayName : 'MarkdownEditor',

    propTypes : {
        content      : React.PropTypes.string.isRequired,
        handleChange : React.PropTypes.func.isRequired,
        placeholder  : React.PropTypes.string
    },

    getInitialState()
    {
        return {
            editorView : true
        };
    },

    togglePreview()
    {
        this.setState({ editorView : !this.state.editorView });
    },

    renderControls()
    {
        return (
            <div className={styles.controls}>
                <span className={styles.controlsToggle} onClick={this.togglePreview}>
                    Show {this.state.editorView ? 'Preview' : 'Editor'}
                </span>
            </div>
        );
    },

    renderEditor()
    {
        return (
            <div className={styles.editorContainer}>
                <textarea
                    className   = {styles.editor}
                    id          = 'markdownEditor'
                    ref         = 'markdownEditor'
                    placeholder = 'Start typing your markdown...'
                    type        = 'text'
                    onChange    = {this.props.handleChange}
                    value       = {this.props.content}
                />
            </div>
        );
    },

    renderPreview()
    {
        var html = marked(this.props.content);

        return (
            <div className={styles.previewContainer}>
                <div dangerouslySetInnerHTML={{__html: html}} />
            </div>
        );
    },

    render()
    {
        const classes = [
            this.props.className,
            styles.container
        ];

        return (
            <div className={classNames(classes)}>
                {this.renderControls()}
                {this.state.editorView ? this.renderEditor() : this.renderPreview()}
            </div>
        );
    }
});

module.exports = MarkdownEditor;
