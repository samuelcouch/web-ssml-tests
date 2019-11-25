(function (){
    'use strict';

    const speak_btn = document.getElementById('speak-btn');
    const stop_btn = document.getElementById('stop-btn');
    const ssml_input = document.getElementById('ssml-input');

    const say = function(text_to_speak) {
        const utterance_obj = new SpeechSynthesisUtterance();
        utterance_obj.text = text_to_speak;

        window.speechSynthesis.speak(utterance_obj);
    }

    speak_btn.addEventListener('click', function() {
        if(ssml_input.value.length > 0) {
            say(ssml_input.value);
        }
    })

    stop_btn.addEventListener('click', function() {
        window.speechSynthesis.cancel()
    })
}());
