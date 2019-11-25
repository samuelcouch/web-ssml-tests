# Simple SpeechSynthesis Example

To test, simply clone the repository and open the `index.html` file in a browser (only tested in Chrome)

## Example SSL

# SSML Samples
Simple 1
```xml
<?xml version="1.0"?>
    <speak version="1.0" xmlns="http://www.w3.org/2001/10/synthesis" xml:lang="en-US">
        <emphasis>Hello World!</emphasis> This is super simple SSML.
    </speak>
```

Simple 2
```xml
<?xml version="1.0"?>
    <speak>
        There are more than<say-as interpret-as="cardinal">100000</say-as> different species of birds in the world. Some of which have wingspans of more than <say-as interpret-as="unit">10 foot</say-as> wide. <prosody pitch="-20Hz">Transpose pitch to 150 Hz</prosody>
    </speak>
```