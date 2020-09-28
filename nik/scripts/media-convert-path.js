
/*
    sign:
*/

function convert_source(text)
{
    var href_text = "https://github.com/Daniel-Nikpayuk/nik/blob/master/" + text;

    var element = document.createElement("span");
    element.setAttribute("class", "sign source");

    var link = document.createElement("a");
    link.setAttribute("href", href_text);
    link.innerHTML = "source";

    element.appendChild(link);
    element.innerHTML = "[" + element.innerHTML + "]";

    return element;
}

/***************************************************************/

const path_convert_sign =
[
    [
        "source",

        function (object)
        {
            return convert_source(object.text);
        }
    ]
];

/***************************************************************/
/***************************************************************/

/*
    pair:
*/

const path_convert_pair =
[
];

/***************************************************************/
/***************************************************************/

/*
    product:
*/

const path_convert_product =
[
];

/***************************************************************/
/***************************************************************/

/*
    object:
*/

const path_convert_object =
[
    [ "sign"	, path_convert_sign	],

    [ "pair"	, path_convert_pair	],

    [ "product"	, path_convert_product	]
];

/***************************************************************/
/***************************************************************/

/*
    path:
*/

import_convert_object(path_convert_object);

