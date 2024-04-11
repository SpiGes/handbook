/**
 * @fileOverview Implements the dynamic behavior of collapsible blocks and collapsible group commands
 * within a web application. This script includes classes and initialization logic to manage collapsible
 * elements on the page, allowing them to expand or collapse in response to user interactions.
 * 
 * @title collapsible.js
 * @description This script is designed to enhance the interactivity of a web page by introducing collapsible blocks 
 * and group commands that allow users to easily show or hide content. It defines two main classes, `CollapsibleBlock` 
 * and `CollapsibleGroupCommand`, which handle the dynamic behavior of individual collapsible elements and groups of 
 * elements, respectively.
 * 
 * `CollapsibleBlock` manages the expansion and collapse of content areas, responding to user clicks. It controls 
 * the display of content and changes in the appearance of its associated toggle button and icon, based on its current 
 * state (expanded or collapsed). Each collapsible block can operate independently, or it can be associated with a 
 * group of blocks for synchronized behavior.
 * 
 * `CollapsibleGroupCommand` provides a mechanism to control multiple `CollapsibleBlock` instances as a group. With 
 * a single action, users can expand or collapse all blocks within the same group, enhancing the user experience 
 * by offering a quick way to show or hide grouped information.
 * 
 * The initialization logic, executed when the DOM content is fully loaded, scans the document for elements matching 
 * specified selectors defined in `CollapsibleConstants`. It automatically sets up the collapsible blocks and group 
 * commands based on the structure and attributes of those elements. This process includes attaching event listeners 
 * to toggle buttons and applying initial states to collapsible contents.
 * 
 * @author Raphaël Capocasale
 * @creationDate 2024-04-11
 * @lastUpdated 2024-04-11
 * 
 * @notes Example Usage in a Hugo/Docsy Site:
 * ```html
 * A title - {{<collapsibleGroupCommand groupId="the_group_id">}}
 * 
 * {{<collapsibleBlock groupId="the_group_id">}}
 * A diam maecenas sed enim ut. Nulla facilisi morbi tempus iaculis urna id. Arcu dui vivamus arcu felis bibendum ut tristique.
 * Odio euismod lacinia at quis. Ipsum suspendisse ultrices gravida dictum fusce ut. Tempus egestas sed sed risus pretium quam vulputate. 
 * Massa vitae tortor condimentum lacinia quis vel. Interdum varius sit amet mattis vulputate enim nulla aliquet. Amet dictum sit amet justo.
 * {{</collapsibleBlock>}}
 */

/**
 * The `CollapsibleConstants` class serves as a centralized repository for constants used 
 * within the collapsible components. This includes attributes, selectors, and CSS class names 
 * relevant to the operation and styling of collapsible blocks and their grouping controls.
 */
class CollapsibleConstants {
    /**
     * The attribute name used to denote the group a collapsible block belongs to. 
     * Collapsible blocks with the same group ID can be controlled together.
     */
    static groupIdAttribute = "group-id";

    /**
     * The attribute name for specifying the text to be displayed when a collapsible block 
     * is in its collapsed state.
     */
    static collapsedTextAttribute = "collapsed-text";

    /**
     * The attribute name for specifying the text to be shown when a collapsible block 
     * is in its expanded state.
     */
    static expandedTextAttribute = "expanded-text";

    /**
     * The CSS selector for identifying collapsible block elements in the DOM.
     * This is used to apply JavaScript behaviors and styles dynamically.
     */
    static collapsibleBlockSelector = ".collapsible-block";

    /**
     * The CSS selector for identifying elements that act as commands to control 
     * the visibility of entire groups of collapsible blocks.
     */
    static collapsibleGroupCommandSelector = ".collapsible-group-command";

    /**
     * The CSS class name for the icon indicating that a collapsible block can be expanded. 
     * Typically, this represents a downward pointing chevron or arrow.
     */
    static expandIconClass = "fa-chevron-down";

    /**
     * The CSS class name for the icon indicating that a collapsible block can be collapsed. 
     * Typically, this represents a rightward pointing chevron or arrow.
     */
    static collapseIconClass = "fa-chevron-right";
}

/**
 * Represents a collapsible block component, managing its state (expanded/collapsed),
 * content, and interactions. This class relies on specific DOM structure and CSS classes
 * to control the visibility and appearance of the collapsible content and its toggle button.
 */
class CollapsibleBlock {
    // CSS class to apply to content when the block is expanded.
    static #expandedDisplayClass = "block";
    // CSS class to apply to content when the block is collapsed.
    static #collapsedDisplayClass = "none";
    // Selector for the icon element within the collapsible block.
    static #collapsibleBlockIconSelector = ".collapsible-block__icon";
    // Selector for the button element that toggles the collapsible block.
    static #collapsibleBlockButtonSelector = ".collapsible-block__button";
    // Selector for the content element within the collapsible block.
    static #collapsibleBlockContentSelector = ".collapsible-block__content";

    // The root element of the collapsible block component.
    #rootElement = null;
    // The group ID attribute value.
    #groupId = null;
    // The content element that is shown/hidden.
    #contentElement = null;
    // The icon element that indicates the current state (expanded/collapsed).
    #iconElement = null;
    // The button element that toggles the collapsible state.
    #buttonElement = null;
    // Indicates whether the block is currently expanded.
    #isExpanded = false;
    // The text to display on the toggle button when the block is collapsed.
    #collapsedText = null;
    // The text to display on the toggle button when the block is expanded.
    #expandedText = null;

    /**
     * Initializes a new instance of the CollapsibleBlock class.
     * @param {Element} element The DOM element that acts as the root of the collapsible block.
     * @throws {Error} If the element is invalid or essential attributes are missing.
     */
    constructor(element) {
        if (!element || !(element instanceof Element)) {
            throw new Error("Invalid or missing DOM element");
        }
        this.#rootElement = element;

        this.#groupId = this.#rootElement.getAttribute(CollapsibleConstants.groupIdAttribute);
        if (this.#groupId === null) {
            throw new Error("Root Element does not have a valid 'group-id' attribute.");
        }
        
        this.#iconElement = this.#rootElement.querySelector(CollapsibleBlock.#collapsibleBlockIconSelector);
        if (this.#iconElement === null) {
            throw new Error("Root Element parent does not have an Icon element.");
        }

        this.#buttonElement = this.#rootElement.querySelector(CollapsibleBlock.#collapsibleBlockButtonSelector);
        if (this.#buttonElement === null) {
            throw new Error("Root Element parent does not have a Button element.");
        }

        this.#contentElement = this.#rootElement.querySelector(CollapsibleBlock.#collapsibleBlockContentSelector);
        if (this.#contentElement === null) {
            throw new Error("Root Element parent does not have a Content element.");
        }

        this.#collapsedText = this.#rootElement.getAttribute(CollapsibleConstants.collapsedTextAttribute);
        if (this.#collapsedText === null) {
            throw new Error("Root element does not have a collapsed text attribute.");
        }
        
        this.#expandedText = this.#rootElement.getAttribute(CollapsibleConstants.expandedTextAttribute);
        if (this.#expandedText === null) {
            throw new Error("Root element does not have an expanded text attribute.");
        }
        
        this.#initialize();
    }

    /**
     * Sets up the initial state of the collapsible block and registers event listeners.
     * By default, the block is initialized in a collapsed state.
     */
    #initialize() {
        this.#buttonElement.addEventListener("click", () => this.toggle());
        this.collapse();
    }

    /**
     * Gets the group ID of the collapsible block, if it is part of a group.
     * @return {string|null} The group ID, or null if not part of a group.
     */
    get groupId() {
        return this.#groupId;
    }

    /**
     * Toggles the collapsible block between its expanded and collapsed states.
     */
    toggle() {
        if(this.#isExpanded){
            this.collapse()
        } else {
            this.expand();
        }
    }

    /**
     * Expands the collapsible block, showing its content and updating the toggle button and icon.
     */
    expand(){
        this.#isExpanded = true;
        this.#buttonElement.textContent  = this.#expandedText;
        this.#contentElement.style.display = CollapsibleBlock.#expandedDisplayClass;
        this.#iconElement.classList.remove(CollapsibleConstants.collapseIconClass);
        this.#iconElement.classList.add(CollapsibleConstants.expandIconClass);
    }

    /**
     * Collapses the collapsible block, hiding its content and updating the toggle button and icon.
     */
    collapse(){
        this.#isExpanded = false;
        this.#buttonElement.textContent  = this.#collapsedText;
        this.#contentElement.style.display = CollapsibleBlock.#collapsedDisplayClass;
        this.#iconElement.classList.remove(CollapsibleConstants.expandIconClass);
        this.#iconElement.classList.add(CollapsibleConstants.collapseIconClass);
    }
}

/**
 * Represents a controller for a group of `CollapsibleBlock` instances, 
 * providing a unified command to collapse or expand all blocks within the group.
 * This class interacts with specific DOM elements to provide group-wide toggle functionality.
 */
class CollapsibleGroupCommand {
    // Selector for the button element within the group command component.
    static #collapsibleGroupCommandButtonSelector = ".collapsible-group-command__button";
    // Selector for the icon element within the group command component.
    static #collapsibleGroupCommandIconSelector = ".collapsible-group-command__icon";

    // The root element of the collapsible group command component.
    #rootElement = null;
    // The button element that toggles the state of all collapsible blocks in the group.
    #buttonElement = null;
    // An array of CollapsibleBlock instances that are controlled by this command.
    #groupBlocks = [];
    // Indicates whether the blocks in the group are currently expanded.
    #isExpanded = false;
    // The icon element that indicates the current state (expanded/collapsed) of the group.
    #iconElement = null;
    // The text to display on the toggle button when the group is collapsed.
    #collapsedText = null;
    // The text to display on the toggle button when the group is expanded.
    #expandedText = null;

    /**
     * Initializes a new instance of the CollapsibleGroupCommand class.
     * @param {Element} element The DOM element that acts as the root of the collapsible group command.
     * @param {Array<CollapsibleBlock>} groupObjects An array of CollapsibleBlock instances to be controlled.
     * @throws {Error} If the element is invalid, missing, or if essential attributes are missing.
     */
    constructor(element, groupObjects) {
        if (!element) {
            throw new Error("Invalid or missing DOM element");
        }
        this.#rootElement = element;

        if (groupObjects === null) {
            throw new Error("groupObjects parameter must be not null");
        }
        this.#groupBlocks = groupObjects;

        this.#buttonElement = this.#rootElement.querySelector(CollapsibleGroupCommand.#collapsibleGroupCommandButtonSelector);
        if (this.#buttonElement === null) {
            throw new Error("Root element does not have a button element.");
        }
        
        this.#iconElement = this.#rootElement.querySelector(CollapsibleGroupCommand.#collapsibleGroupCommandIconSelector);
        if (this.#iconElement === null) {
            throw new Error("Root element does not have an icon element.");
        }
        
        this.#collapsedText = this.#rootElement.getAttribute(CollapsibleConstants.collapsedTextAttribute);
        if (this.#collapsedText === null) {
            throw new Error("Root element does not have a collapsed text attribute.");
        }
        
        this.#expandedText = this.#rootElement.getAttribute(CollapsibleConstants.expandedTextAttribute);
        if (this.#expandedText === null) {
            throw new Error("Root element does not have an expanded text attribute.");
        }

        this.#initialize();
    }

    /**
     * Sets up the initial state of the collapsible group command and registers event listeners.
     * By default, the group is initialized in a collapsed state.
     */
    #initialize() {
        this.#buttonElement.addEventListener("click", () => this.toggleAll());
        this.collapseAll();
    }

    /**
     * Toggles the state of all collapsible blocks in the group between expanded and collapsed.
     */
    toggleAll() {
        if(this.#isExpanded) {
            this.collapseAll();
        } else {
            this.expandAll();
        }
    }

    /**
     * Collapses all collapsible blocks in the group, updates the toggle button and icon to represent the collapsed state.
     */
    collapseAll() {
        this.#isExpanded = false;
        this.#buttonElement.textContent  = this.#collapsedText;
        this.#groupBlocks.forEach(item => item.collapse());
        this.#iconElement.classList.remove(CollapsibleConstants.expandIconClass);
        this.#iconElement.classList.add(CollapsibleConstants.collapseIconClass);
    }

   /**
     * Expands all collapsible blocks in the group, updates the toggle button and icon to represent the expanded state.
     */
    expandAll() {
        this.#isExpanded = true;
        this.#buttonElement.textContent  = this.#expandedText;
        this.#groupBlocks.forEach(item => item.expand());
        this.#iconElement.classList.remove(CollapsibleConstants.collapseIconClass);
        this.#iconElement.classList.add(CollapsibleConstants.expandIconClass);
    }
}

// Listen for the DOMContentLoaded event to ensure the DOM is fully loaded before executing the script.
document.addEventListener('DOMContentLoaded', function () {
    // An array to hold all the CollapsibleBlock instances.
    const collapsibleBlocks = [];
    // Query the DOM for elements matching the collapsible block selector.
    document.querySelectorAll(CollapsibleConstants.collapsibleBlockSelector).forEach(collapsibleBlockElement => {
        collapsibleBlocks.push(new CollapsibleBlock(collapsibleBlockElement));
    });

    // An array to hold all the CollapsibleGroupCommand instances.
    const collapsibleGroupCommands = [];
    // Query the DOM for elements matching the collapsible group command selector.
    document.querySelectorAll(CollapsibleConstants.collapsibleGroupCommandSelector).forEach(collapsibleGroupCommandElement => {
        // Extract the groupId attribute value to identify which group the command controls.
        const groupId = collapsibleGroupCommandElement.getAttribute(CollapsibleConstants.groupIdAttribute);
        // Filter the collapsibleBlocks array to get only those blocks that belong to the current group.
        const filteredCollapsibleBlocks = collapsibleBlocks.filter(item => item.groupId === groupId);
        // Create a new CollapsibleGroupCommand instance with the filtered blocks and add it to the array.
        collapsibleGroupCommands.push(new CollapsibleGroupCommand(collapsibleGroupCommandElement, filteredCollapsibleBlocks));
    });
});