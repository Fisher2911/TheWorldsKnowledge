class AddButton {

    constructor(button, name) {
        this.count = 0;
        this.button = button;
        this.name = name;
    }

    add(count, area, element) {
        let container = document.createElement("div");
        container.classList.add();
        container.id = this.name + "-container-" + count;
        element.classList.add(this.name);
        element.id = this.name + "-" + count;
        container.appendChild(element);
        area.insertBefore(container, this.button);

        let removeButton = document.getElementById("remove-" + this.name + "-" + count);
        if (removeButton != null) return;
        removeButton = document.createElement("span");
        removeButton.classList.add("remove-" + this.name);
        removeButton.classList.add("input");
        removeButton.classList.add("hidden");
        removeButton.innerText = "✖";
        removeButton.id = "remove-" + this.name + "-" + count;
        element.insertAdjacentElement("beforebegin", removeButton);
        this.addRemoveListener(container, removeButton);
        this.addRemoveButtonListener(container, removeButton);
        return new Removable(container, element, removeButton);
    }

    addRemoveListener(container, removeButton) {
        container.addEventListener("mouseover", function() {
            removeButton.classList.remove("hidden");
        });
        container.addEventListener("mouseleave", function() {
            removeButton.classList.add("hidden");
        });
    }

     
    addRemoveButtonListener(container, removeButton) {
        removeButton.addEventListener("click", function() {
            let split = removeButton.id.split("-");
            container.remove();
            return Number.parseInt(split[split.length - 1]);
        });
    }

    getNextResource() {
        while (document.getElementById(this.name + "-container-" + this.count) != null) this.count++;
        return this.count;
    }
}

class Removable {
    
    constructor(container, element, removeButton) {
        this.container = container;
        this.element = element;
        this.removeButton = removeButton;
    }

}