
/*
    sign:
*/

function convert_member_entry(text)
{
    var element = document.createElement("span");
    element.setAttribute("class", "sign member_entry");

    element.appendChild(convert_sign_default("span", new left("::")));
    element.appendChild(convert_sign_default("span", new name(text)));
    element.appendChild(convert_sign_default("span", new right(";")));

    return element;
}

/***************************************************************/

const main_convert_sign =
[
    [
        "paragraph",

        function (object)
        {
            return convert_sign_default("p", object);
        }
    ],

    [
        "member_entry",

        function (object)
        {
            return convert_member_entry(object.text);
        }
    ]
];

/***************************************************************/
/***************************************************************/

/*
    pair:
*/

function convert_default_value(variable, value)
{
    var element = document.createElement("span");
    element.setAttribute("class", "pair default_value");

    element.appendChild(convert_object(variable));
    element.appendChild(convert_sign_default("span", new center("=")));
    element.appendChild(convert_object(value));

    return element;
}

function convert_collapsible_category(cell, category)
{
    var element = document.createElement("a");
    element.setAttribute("class", "pair collapsible_category");
    element.setAttribute("href", "#");

    element.appendChild(convert_sign_default("span", cell));
    element.appendChild(convert_sign_default("span", category));

    return element;
}

function convert_alias_entry(name, value)
{
    var left_sign = (name.tag === "sign") ? new left("using") : new type("static constexpr");

    var element = document.createElement("span");
    element.setAttribute("class", "pair alias_entry");

    element.appendChild(convert_sign_default("span", left_sign));
    element.appendChild(convert_object(name));

    element.appendChild(convert_sign_default("span", new center(":=")));
    element.appendChild(convert_object(value));

    element.appendChild(convert_sign_default("span", new right(";")));

    return element;
}

/***************************************************************/

const main_convert_pair =
[
    [
        "default_value",

        function (object)
        {
            return convert_default_value(object.x, object.y);
        }
    ],

    [
        "collapsible_category",

        function (object)
        {
            return convert_collapsible_category(object.x, object.y);
        }
    ],

    [
        "alias_entry",

        function (object)
        {
            return convert_alias_entry(object.x, object.y);
        }
    ]
];

/***************************************************************/
/***************************************************************/

/*
    product:
*/

function convert_scope(object, left, right)
{
    var element		= convert_product_default("span", object);
    element.innerHTML	= left + element.innerHTML + right;

    return element;
}

/***************************************************************/

const main_convert_product =
[
    [
        "angle_braces",

        function (object)
        {
            return convert_scope(object, "<", ">");
        }
    ],

    [
        "parentheses",

        function (object)
        {
            return convert_scope(object, "(", ")");
        }
    ],

    [
        "curly_braces",

        function (object)
        {
            return convert_scope(object, "{", "}");
        }
    ],

    [
        "square_brackets",

        function (object)
        {
            return convert_scope(object, "[", "]");
        }
    ]
];

/***************************************************************/
/***************************************************************/

/*
    object:
*/

const main_convert_object =
[
    [ "sign"	, main_convert_sign	],

    [ "pair"	, main_convert_pair	],

    [ "product"	, main_convert_product	]
];

/***************************************************************/
/***************************************************************/

/*
    main:
*/

import_convert_object(main_convert_object);

