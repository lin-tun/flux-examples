/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';
var React = require('react');
var createMessage = require('../actions/createMessage');
var ENTER_KEY_CODE = 13;

class MessageComposer extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.props = props;
        this.state = {text: ''};
        this._onChange = this._onChange.bind(this);
        this._onKeyDown = this._onKeyDown.bind(this);
    }

    _onChange(event, value) {
        this.setState({text: event.target.value});
    }

    _onKeyDown(event) {
        if (event.keyCode === ENTER_KEY_CODE) {
            event.preventDefault();
            event.stopPropagation();

            var text = this.state.text.trim();
            if (text) {
                this.executeAction(createMessage, {
                    text: text
                });
            }
            this.setState({text: ''});
        }
    }
    render() {
        return (
            <textarea
                className="message-composer"
                name="message"
                value={this.state.text}
                onChange={this._onChange}
                onKeyDown={this._onKeyDown}
            />
        );
    }
}

module.exports = MessageComposer;
