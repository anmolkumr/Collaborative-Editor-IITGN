import React, { Component } from "react";
import './Editor.css';


class Editor extends Component {
    componentDidMount() {
        //// Initialize Firebase.
        //// TODO: replace with your Firebase project configuration.
        var config = {
            apiKey: "AIzaSyBLFU3Z6HNzSTB4tjigR-IDMfBw2REWd40",
            authDomain: "colab-monaco.firebaseapp.com",
            databaseURL: "https://colab-monaco-default-rtdb.firebaseio.com",
            projectId: "colab-monaco",
            storageBucket: "colab-monaco.appspot.com",
            messagingSenderId: "193822279869",
            appId: "1:193822279869:web:e3b2ff07c0f936b9a14fd4",
        };
        window.firebase.initializeApp(config);
        //// Get Firebase Database reference.
        var firepadRef = this.getExampleRef();
        //// Create CodeMirror (with lineWrapping on).

        var editor = window.ace.edit("firepad-container");
        editor.setOptions({

            fontSize: 18
        });
        editor.setTheme("ace/theme/tomorrow_night");
        var session = editor.getSession();
        session.setUseWrapMode(true);
        session.setUseWorker(false);
        session.setMode("ace/mode/javascript");

        //// Create Firepad.
        var firepad = window.Firepad.fromACE(firepadRef, editor, {
            defaultText: '',
        });
        //Initalize app
        firepad.on('ready', function () {
            if (firepad.isHistoryEmpty()) {
                firepad.setHtml('<span style="font-size: 24px;">Rich-text editing with <span style="color: red">Firepad!</span></span><br/><br/>Collaborative-editing made easy.\n');
            }
        });
       
    }

    // Helper to get hash from end of URL or generate a random one.
    getExampleRef() {
        var ref = window.firebase.database().ref();
        var hash = window.location.hash.replace(/#/g, '');
        if (hash) {
            ref = ref.child(hash);
        } else {
            ref = ref.push(); // generate unique location.
            window.location = window.location + '#' + ref.key; // add it as a hash to the URL.
        }
        if (typeof console !== 'undefined') {
            console.log('Firebase data: ', ref.toString());
        }
        return ref;
    }

    render() {
        return (
            <div>
                <div id="firepad-container"></div>
            </div>

        );
    }
}
export default Editor;