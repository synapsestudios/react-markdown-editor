'use strict';

var _redboxReact2 = require('redbox-react');

var _redboxReact3 = _interopRequireDefault(_redboxReact2);

var _reactTransformCatchErrors3 = require('react-transform-catch-errors');

var _reactTransformCatchErrors4 = _interopRequireDefault(_reactTransformCatchErrors3);

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _reactTransformHmr3 = require('react-transform-hmr');

var _reactTransformHmr4 = _interopRequireDefault(_reactTransformHmr3);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _marked = require('marked');

var _marked2 = _interopRequireDefault(_marked);

var _MarkdownEditorModule = require('./MarkdownEditor.module.css');

var _MarkdownEditorModule2 = _interopRequireDefault(_MarkdownEditorModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _components = {
    MarkdownEditor: {
        displayName: 'MarkdownEditor'
    }
};

var _reactTransformHmr2 = (0, _reactTransformHmr4.default)({
    filename: 'src/MarkdownEditor.jsx',
    components: _components,
    locals: [module],
    imports: [_react3.default]
});

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
    filename: 'src/MarkdownEditor.jsx',
    components: _components,
    locals: [],
    imports: [_react3.default, _redboxReact3.default]
});

function _wrapComponent(id) {
    return function (Component) {
        return _reactTransformHmr2(_reactTransformCatchErrors2(Component, id), id);
    };
}

var MarkdownEditor = _wrapComponent('MarkdownEditor')(_react3.default.createClass({

    displayName: 'MarkdownEditor',

    propTypes: {
        content: _react3.default.PropTypes.string.isRequired,
        handleChange: _react3.default.PropTypes.func.isRequired,
        placeholder: _react3.default.PropTypes.string
    },

    getInitialState: function getInitialState() {
        return {
            editorView: true
        };
    },
    togglePreview: function togglePreview() {
        this.setState({ editorView: !this.state.editorView });
    },
    renderControls: function renderControls() {
        return _react3.default.createElement(
            'div',
            { className: _MarkdownEditorModule2.default.controls },
            _react3.default.createElement(
                'span',
                { className: _MarkdownEditorModule2.default.controlsToggle, onClick: this.togglePreview },
                'Show ',
                this.state.editorView ? 'Preview' : 'Editor'
            )
        );
    },
    renderEditor: function renderEditor() {
        return _react3.default.createElement(
            'div',
            { className: _MarkdownEditorModule2.default.editorContainer },
            _react3.default.createElement('textarea', {
                className: _MarkdownEditorModule2.default.editor,
                id: 'markdownEditor',
                ref: 'markdownEditor',
                placeholder: 'Start typing your markdown...',
                type: 'text',
                onChange: this.props.handleChange,
                value: this.props.content
            })
        );
    },
    renderPreview: function renderPreview() {
        var html = (0, _marked2.default)(this.props.content);

        return _react3.default.createElement(
            'div',
            { className: _MarkdownEditorModule2.default.previewContainer },
            _react3.default.createElement('div', { dangerouslySetInnerHTML: { __html: html } })
        );
    },
    render: function render() {
        var classes = [this.props.className, _MarkdownEditorModule2.default.container];

        return _react3.default.createElement(
            'div',
            { className: (0, _classnames2.default)(classes) },
            this.renderControls(),
            this.state.editorView ? this.renderEditor() : this.renderPreview()
        );
    }
}));

module.exports = MarkdownEditor;