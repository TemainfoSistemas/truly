export const dataProperties = [
  {
    name: "data",
    type: "object | array",
    default: "null",
    description: "Sets the data of the Dropdown List",
    options: "any object | any array"
  },
  {
    name: "data.text",
    type: "string",
    default: "text",
    description: "Sets the data item field that represents the item text.",
    options: "any text"
  },
  {
    name: "data.value",
    type: "string",
    default: "value",
    description: "Sets the data item field that represents the item value.",
    options: "any text"
  },
  {
    name: "label",
    type: "string",
    default: "null",
    description: "Create a label together with Dropdown List.",
    options: "any text"
  },
  {
    name: "label.labelPlacement",
    type: "string",
    default: "left",
    description: "Sets the label position.",
    options: "left | top"
  },
  {
    name: "label.labelSize",
    type: "number",
    default: "100",
    description: "Sets the label width.",
    options: "any number"
  },
  {
    name: "placeholder",
    type: "string",
    default: "null",
    description: "Display a help text on dropdown list.",
    options: "any text"
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description: "Disables the dropdown list if set to true.",
    options: "true | false"
  },
  {
    name: "scroll",
    type: "number",
    default: "null | 10 to auto scroll",
    description: "Displays minimum amount of items to create the scroll.",
    options: "any number"
  }
  ];
export const dataProperties2 = [
  {
    name: "type",
    type: "string",
    default: "button",
    description: "Type of button.",
    options: "button | submit | reset"
  },
  {
    name: "text",
    type: "string",
    default: "null",
    description: "Displays a text button.",
    options: "any text"
  },
  {
    name: "size",
    type: "string",
    default: "100px (min)",
    description: "Button size.",
    options: "string | ex: 150px"
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description: "Disables the button if set to true.",
    options: "true | false"
  },
  {
    name: "buttonClass",
    type: "string",
    default: "null",
    description: "Style class of the button.",
    options: "CSS class"
  },
  {
    name: "iconAddonBefore",
    type: "string",
    default: "null",
    description: "Creates an icon in the addon before the button.",
    options: "ion-printer | fa fa-home | any"
  },
  {
    name: "buttonAddonBeforeClass",
    type: "string",
    default: "null",
    description: "Style class of the addon before.",
    options: "CSS class"
  },
  {
    name: "iconAddonAfter",
    type: "string",
    default: "null",
    description: "Creates an icon in the addon after the button.",
    options: "ion-printer | fa fa-home | any"
  },
  {
    name: "buttonAddonAfterClass",
    type: "string",
    default: "null",
    description: "Style class of the addon after.",
    options: "CSS class"
  },
  {
    name: "iconLeftTextButton",
    type: "string",
    default: "null",
    description: "Creates an icon on the left side of the text button.",
    options: "ion-printer | fa fa-home | any"
  },
  {
    name : "iconRightTextButton",
    type : "string",
    default : "null",
    description : "Creates an icon on the right side of the text button.",
    options : "ion-printer | fa fa-home | any"
  },
  {
    name: "toggleClass",
    type: "string",
    default: "null",
    description: "Style class of the toggle button.",
    options: "CSS class"
  },
  {
    name: "checkedItem",
    type: "boolean",
    default: "false",
    description: "Mark button as preselected if set to true.",
    options: "true | false"
  }
];
