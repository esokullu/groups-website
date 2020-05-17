import React from 'react';
import {apiGjs} from '../scripts/apiPaths.js';
import isHouseAccount from '../scripts/isHouseAccount.js';

export default class Code extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            code: '',
            language: '',
            loading: '...',
            copyStatus: "Copy"
        }
        this.generateComponentCode = this.generateComponentCode.bind(this);
        this.generateShowFunctionCode = this.generateShowFunctionCode.bind(this);
        this.generateShowFunctionCode = this.generateShowFunctionCode.bind(this);
        this.generateInitiationCode = this.generateInitiationCode.bind(this);
        this.generateIncludeCode = this.generateIncludeCode.bind(this);
        this.generateEventCode = this.generateEventCode.bind(this);
        this.copyHandler = this.copyHandler.bind(this);
    }
    componentWillMount() {
        let code;
        let language;
        if (this.props.type == 'component') {
            code = this.generateComponentCode(this.props.id, this.props.specs);
            language = 'html';
        } else if (this.props.type == 'function') {
            if (this.props.parent.includes('DisplayFunctions')) {
                code = this.generateShowFunctionCode(this.props.id, this.props.specs);
                language = 'js';
            } else if (this.props.parent.includes('ApiFunctions')) {
                code = this.generateCallFunctionCode(this.props.id, this.props.specs);
                language = 'js';
            }
        } else if (this.props.type == 'initiation') {
            code = this.generateInitiationCode(this.props.id, this.props.specs);
            language = 'html';
        } else if (this.props.type == 'include') {
            code = this.generateIncludeCode(this.props.id, this.props.specs);
            language = 'html';
        } else if (this.props.type == 'events') {
            code = this.generateEventCode(this.props.id, this.props.specs);
            language = 'js';
        }
        else if(this.props.type == 'single-signon') {
            code = this.generateSingleSignonCode(this.props.id, this.props.specs);
            language = 'php';
        }
        else if(this.props.type == 'single-signon-js') {
            code = this.generateSingleSignonJSCode(this.props.id, this.props.specs);
            language = 'js';
        }
        this.setState({
            code: code,
            language: language
        });
    }
    componentDidMount() {
        this.setState({
            loading: false
        })
    }
    shouldComponentUpdate(nextProps, nextState) {
        let code;
        if (nextProps.type == 'component') {
            code = this.generateComponentCode(nextProps.id, nextProps.specs);
        } else if (nextProps.type == 'function') {
            if (nextProps.parent.includes('DisplayFunctions')) {
                code = this.generateShowFunctionCode(nextProps.id, nextProps.specs);
            } else if (nextProps.parent.includes('ApiFunctions')) {
                code = this.generateCallFunctionCode(nextProps.id, nextProps.specs);
            }
        } else if (nextProps.type == 'initiation') {
            code = this.generateInitiationCode(nextProps.id, nextProps.specs);
        }
        else if (nextProps.type == 'events') {
            code = this.generateEventCode(nextProps.id, nextProps.specs);
        }
        else if(nextProps.type == 'single-signon') {
            code = this.generateSingleSignonCode(nextProps.id, nextProps.specs);
        }
        else if(nextProps.type == 'single-signon-js') {
            code = this.generateSingleSignonJSCode(nextProps.id, nextProps.specs);
        }
        return (this.state.code != code) || (this.state.loading != nextState.loading) || (this.state.copyStatus != nextState.copyStatus);
    }
    componentWillReceiveProps(nextProps) {
        let code;
        let language;
        if (nextProps.type == 'component') {
            code = this.generateComponentCode(nextProps.id, nextProps.specs);
            language = 'html';
        } else if (nextProps.type == 'function') {
            if (nextProps.parent.includes('DisplayFunctions')) {
                code = this.generateShowFunctionCode(nextProps.id, nextProps.specs);
                language = 'js';
            } else if (nextProps.parent.includes('ApiFunctions')) {
                code = this.generateCallFunctionCode(nextProps.id, nextProps.specs);
                language = 'js';
            }
        } else if (nextProps.type == 'initiation') {
            code = this.generateInitiationCode(nextProps.id, nextProps.specs);
            language = 'js';
        }
        else if (nextProps.type == 'events') {
            code = this.generateEventCode(nextProps.id, nextProps.specs);
            language = 'js';
        }
        else if(nextProps.type == 'single-signon') {
            code = this.generateSingleSignonCode(nextProps.id, nextProps.specs);
            language = 'php';
        }
        else if(nextProps.type == 'single-signon-js') {
            code = this.generateSingleSignonJSCode(nextProps.id, nextProps.specs);
        }
        this.setState({
            code: code,
            language: language
        });
        this.refs.inputCode.parentNode.classList.remove('prettyprinted');
    }
    componentDidUpdate() {
        PR.prettyPrint();
    }
    generateComponentCode(id, specs) {
        let name = id;
        let attributes = {};
        for (let spec of specs) {
            if (!spec.value || spec.value === '') {
                delete attributes[spec.key];
            } else {
                attributes[spec.key] = spec.value;
            }
        }
        let tag = '<graphjs-' + name;
        for (let key of Object.keys(attributes)) {
            tag += ' ' + key + '="' + attributes[key] + '"';
        }
        tag += '></graphjs-' + name + '>';
        return tag;
    }
    generateShowFunctionCode(id, specs) {
        let name = id;
        let attributes = {};
        for (let spec of specs) {
            if (!spec.value || spec.value === '') {
                delete attributes[spec.key];
            } else {
                attributes[spec.key] = spec.value;
            }
        }
        let functionSpecs = Object.keys(attributes).length > 0 ? JSON.stringify(attributes, null, 4) : '';
        return 'GraphJS.' + name + '(' + functionSpecs.replace(/\"([^(\")"]+)\":/g, "$1:") + ')';
    }
    generateCallFunctionCode(id, specs) {
        let name = id;
        let attributes = {};
        for (let spec of specs) {
            if (!spec.value || spec.value === '') {
                delete attributes[spec.key];
            } else {
                attributes[spec.key] = spec.value;
            }
        }
        let values = [];
        for (let value in attributes) {
            values.push(attributes[value]);
        }
        let functionSpecs = values.map(function (item) {
            return '    "' + item + '"';
        }).join(',\n');
        return 'GraphJS.' + name + '(\n' + functionSpecs + (values.length > 0 ? ',\n' : '') + '    function(response) {\n        //Do something\n    }\n)';
    }
    generateInitiationCode(id, specs) {
        let gjsHost = apiGjs; // "https://accounts.graphjs.com";
        if (specs.host != undefined)
            gjsHost = specs.host;
            /*
        else if (!isHouseAccount(id)) {
            gjsHost = "https://gj" + id.toLowerCase().substring(4).replace(/-/g, '') + ".herokuapp.com";
        }
        */
        let attributes = {
            host: gjsHost,
            theme: specs.theme,
            color: specs.color,
            language: specs.language || 'english',
            defaultAvatar: specs.defaultAvatar
        }
        let functionSpecs = Object.keys(attributes).length > 0 ? JSON.stringify(attributes, null, 8) : '';
        return '<script src="https://graphjs.com/v2/graph.js"></script>\n<script>\nGraphJS.init("' + id + '", ' + functionSpecs.replace(/\"([^(\")"]+)\":/g, "$1:") + ')\n</script>';
    }
    generateIncludeCode(id, specs) {
        return '<script src="https://graphjs.com/v2/graph.js"></script>';
    }
    generateEventCode() {
        return '<script>\nGraphJS.on("afterLogin", function() {\n\tconsole.log("We have successfully logged in!");\n\t}\n);\n</script>';
    }
    generateSingleSignonCode() {
        return '<?php\npublic static function encrypt(string $message, string $key): string\{\n\t$key = \\base64_decode($key);\n\t$nonce = \\random_bytes(\n\t\tSODIUM_CRYPTO_SECRETBOX_NONCEBYTES\n\t);\n\t$cipher = \\base64_encode(\n\t\t$nonce.\n\t\t\\sodium_crypto_secretbox(\n\t\t\t$message,\n\t\t\t$nonce,\n\t\t\t$key\n\t\t)\n\t);\n\t\\sodium_memzero($message);\n\t\\sodium_memzero($key);\n\treturn $cipher;\n}\n?>';
    }
    generateSingleSignonJSCode() {
        return "var { secretbox, randomBytes } = require('tweetnacl');\nvar {\n  decodeUTF8,\n  encodeBase64,\n  encodeUTF8,\n  decodeBase64\n} = require('tweetnacl-util');\n\nconst newNonce = () => randomBytes(secretbox.nonceLength);\n\nconst encrypt = (username, key) => {\n\tconst keyUint8Array = decodeBase64(key);\n\tconst nonce = newNonce();\n\tconst messageUint8 = decodeUTF8(username);\n\tconst box = secretbox(messageUint8, nonce, keyUint8Array);\n\tconst fullMessage = new Uint8Array(nonce.length + box.length);\n\tfullMessage.set(nonce);\n\tfullMessage.set(box, nonce.length);\n\tconst base64FullMessage = encodeBase64(fullMessage);\n\treturn base64FullMessage;\n};\n\nconst decrypt = (messageWithNonce, key) => {\n\tconst keyUint8Array = decodeBase64(key);\n\tconst messageWithNonceAsUint8Array = decodeBase64(messageWithNonce);\n\tconst nonce = messageWithNonceAsUint8Array.slice(0, secretbox.nonceLength);\n\tconst message = messageWithNonceAsUint8Array.slice(\n\t\tsecretbox.nonceLength,\n\t\tmessageWithNonce.length\n\t);\n\tconst decrypted = secretbox.open(message, nonce, keyUint8Array);\n\tif (!decrypted) {\n\t\tthrow new Error('Could not decrypt message');\n\t}\n\t\n\tconst base64DecryptedMessage = encodeUTF8(decrypted);\n\treturn base64DecryptedMessage;\n};";
    }
    copyHandler(e) {
        e.preventDefault();
        e.nativeEvent.stopImmediatePropagation();
        const textField = window.document.createElement('textarea');
        textField.innerHTML = this.refs.inputCode.innerText.replace(/\n/g, '\n');
        window.document.body.appendChild(textField);
        textField.select();
        window.document.execCommand('copy');
        window.document.body.removeChild(textField);
        this.setState({
            copyStatus: "Copied"
        });
        setTimeout(() => {
            this.setState({
                copyStatus: "Copy"
            })
        }, 2000);
    }
    render() {
        var canUseDOM = !!(
            typeof window !== 'undefined' &&
            window.document &&
            window.document.createElement
        );
        return (
            <div className="code-container">
                {
                    canUseDOM && this.state.code && document.queryCommandSupported('copy') &&
                    <button className="copy-btn" onClick={this.copyHandler}>
                        {this.state.copyStatus}
                    </button>
                }
                <pre className={'prettyprint' + (this.state.language ? ' lang-' + this.state.language : '')}>
                    <xmp ref="inputCode" className="code" onCopy={this.copyHandler}>{this.state.loading || this.state.code}</xmp>
                </pre>
            </div>
        )
    }
}