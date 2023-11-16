![](https://badgen.net/badge/Editor.js/v2.0/blue)

# Simple Audio Tool

Provides Audio Block for the [Editor.js](https://editorjs.io).

![](https://res.cloudinary.com/renanrider/image/upload/v1700151279/npm%20files/demo.gif)

Works only with pasted URLs with audio src and requires no server-side uploader.

![](assets/image-uploading.gif)

## Installation

Get the package

```shell
npm i editorjs-audio-player --save
```

Include module at your application

```javascript
import AudioPlayer from 'editorjs-audio-player';
```

Optionally, you can load this tool from CDN [JsDelivr CDN](https://cdn.jsdelivr.net/npm/editorjs-audio-player)


## Usage

Add a new Tool to the `tools` property of the Editor.js initial config.

```javascript
var editor = EditorJS({
  ...

  tools: {
    ...
    audioPlayer: AudioPlayer,,
  }

  ...
});
```

## Config Params

This Tool has no config params


## Output data

| Field          | Type      | Description                     |
| -------------- | --------- | ------------------------------- |
| src            | `string`  | src's url                     |


```json
{
  "type": "audioPlayer",
  "data": {
  "src": "https://file-examples.com/wp-content/storage/2017/11/file_example_MP3_700KB.mp3"
  }
}
```
