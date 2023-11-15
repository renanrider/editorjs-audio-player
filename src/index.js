import { IconPlay } from "@codexteam/icons";

export default class AudioPlayer {
  constructor({ data }) {
    this.data = data;

    /**
     * Nodes cache
     */

    this.nodes = {
      wrapper: null,
      input: null,
      audio: null,
    };
  }

  static get toolbox() {
    return {
      title: "AudioPlayer",
      icon: IconPlay,
    };
  }

  render() {
    this.nodes.wrapper = document.createElement("div");
    this.nodes.input = document.createElement("input");
    this.nodes.audio = document.createElement("audio");
    this.nodes.wrapper.classList.add("wrapper");
    this.nodes.audio.setAttribute("controls", "controls");
    this.nodes.input.type = "text";
    this.nodes.input.name = "audioUrl";
    this.nodes.input.placeholder = "Enter your url of audio file";
    this.nodes.input.value = this.data.src ? this.data.src : "";
    this.nodes.input.classList.add("input");
    this.nodes.input.addEventListener("change", () => {
      const src = this.nodes.input?.value;
      if (src) {
        this.nodes.audio.setAttribute("src", src);
      } else {
        this.nodes.audio.removeAttribute("src");
      }
    });

    const { src } = this.data;
    if (src) {
      this.nodes.audio.setAttribute("src", src);
    }

    this.nodes.wrapper.appendChild(this.nodes.input);
    this.nodes.wrapper.appendChild(this.nodes.audio);

    return this.nodes.wrapper;
  }

  save(blockContent) {
    const src = blockContent.querySelector("audio").src;

    return {
      src,
    };
  }

  validate(savedData) {
    if (savedData.src === "" && !savedData.src.trim()) {
      return false;
    }

    return true;
  }
}
