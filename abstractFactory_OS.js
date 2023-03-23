class WindowsFactory {
    createButton() {
        return new WindowsButton();
    }

    createIcon() {
        return new WindowsIcon();
    }
}

class MacOSFactory{
    createButton(){
        return new MacOSButton();
    }

    createIcon() {
        return new MacOSIcon
    }
}

class Button {
    render() {}
}

class Icon {
    render() {}
}

class WindowsButton extends Button {
    render() {
        console.log("Przycisk dla systemu Windows")
    }
}

class MacOSIcon extends Icon{
    render() {
        console.log("Ikona dla systemu MacOS")
    }
}

const os = "Windows";
let factory;
if (os === "Windows"){
    factory
}