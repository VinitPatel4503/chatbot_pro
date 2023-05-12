class Chatbox {
    constructor() {
        this.args = {
            openButton: document.querySelector('chatbox__button'),
            chatbox: document.querySelector('chatbox__support'),
            senButton: document.querySelector('send__support'),
        }
        this.state =false
        this.message =[]
    }
    display() {
        const {openButton, chatBox, sendButton} = this.args;

        openButton.addEventListener('click', () => this.toggleState(chatBox))

        sendButton.addEventListener('click', () => this.onSendButton(chatBox))

        const node = chatBox.querySelector('input');
        node.addEventListener("keyup", ({key}) => {
            if (key === "Enter") {
                this.onSendButton(chatBox)
            }
        })
}