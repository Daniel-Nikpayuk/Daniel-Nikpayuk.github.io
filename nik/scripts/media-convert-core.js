
/*
    In the long run this convert code should be reimplemented with the appropriate grammar:

        Object.assign();

    It is currently implemented with arrays as they have full vendor support.
*/

/***************************************************************/
/***************************************************************/

/*
    sign:
*/

function convert_sign_default(meta, object)
{
    var element = document.createElement(meta);
    element.setAttribute("class", "sign " + object.kind);
    element.innerHTML = object.text;

    return element;
}

function convert_anchor(text)
{
    var element = document.createElement("div");
    element.setAttribute("class", "sign anchor");
    element.setAttribute("id", text);

    return element;
}

/***************************************************************/

const core_convert_sign =
[
    [
        "default",

        function (object)
        {
            return convert_sign_default("span", object);
        }
    ],

    [
        "anchor",

        function (object)
        {
            return convert_anchor(object.text);
        }
    ]
];

/***************************************************************/
/***************************************************************/

/*
    pair:
*/

function convert_pair_default(meta, object)
{
    var element = document.createElement(meta);
    element.setAttribute("class", "pair " + object.kind);

    element.appendChild(convert_object(object.x));
    element.appendChild(convert_object(object.y));

    return element;
}

/*
    Assumes object.x, object.y are signs.
*/

function convert_hyperlink_default(object)
{
    var element = document.createElement("a");
    element.setAttribute("class", "pair " + object.kind);
    element.setAttribute("href", object.y.text);
    element.innerHTML = object.x.text;

    return element;
}

/***************************************************************/

const core_convert_pair =
[
    [
        "default",

        function (object)
        {
            return convert_pair_default("span", object);
        }
    ],

    [
        "link",

        convert_hyperlink_default
    ],

    [
        "linked_name",

        convert_hyperlink_default
    ]
];

/***************************************************************/
/***************************************************************/

/*
    product:
*/

function convert_product_default(meta, object)
{
    var element = document.createElement(meta);
    element.setAttribute("class", "product " + object.kind);

    for (var k = 0; k < object.array.length; ++k)
    {
        element.appendChild(convert_object(object.array[k]));
    }

    return element;
}

/***************************************************************/

const core_convert_product =
[
    [
        "default",

        function (object)
        {
            return convert_product_default("div", object);
        }
    ]
];

/***************************************************************/
/***************************************************************/

/*
    object:
*/

var core_convert_object =
[
    [ "sign"	, core_convert_sign	],

    [ "pair"	, core_convert_pair	],

    [ "product"	, core_convert_product	]
];

/***************************************************************/
/***************************************************************/

function keymap(array, key)
{
    const default_location  = 0;
    const starting_location = 1;

    for (var k=starting_location; k < array.length; ++k)
        if (array[k][0] === key) return array[k][1];

    return array[default_location][1];
}

function convert_object(object)
{
    const core_convert_kind = keymap(core_convert_object, object.tag);

    return keymap(core_convert_kind, object.kind)(object);
}

function convert(id, array)
{
    var element = document.getElementById(id);

    for (var k=0; k < array.length; ++k)
    {
        element.appendChild(convert_object(array[k]));
    }
}

/***************************************************************/
/***************************************************************/

function import_concat(target, source, index)
{
    target[index][1] = target[index][1].concat(source[index][1]);
}

function import_convert_object(convert_object)
{
    // sign:

    import_concat(core_convert_object, convert_object, 0);

    // pair:

    import_concat(core_convert_object, convert_object, 1);

    // product:

    import_concat(core_convert_object, convert_object, 2);
}

