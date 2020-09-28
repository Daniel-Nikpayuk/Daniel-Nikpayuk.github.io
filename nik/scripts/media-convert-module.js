
/*
    11 x 5

	module
			interface
			structure	semiotic	media
			navigator	semiotic	media
	perspective
			identity	semiotic	media
			proximity	semiotic	media
			functor		semiotic	media
			type		semiotic	media
	model
			printer		semiotic	media
*/

/***************************************************************/
/***************************************************************/
/***************************************************************/

/*
    sign:
*/

const module_convert_sign =
[
];

/***************************************************************/
/***************************************************************/

/*
    pair:
*/

const module_convert_pair =
[
];

/***************************************************************/
/***************************************************************/

const default_module =
[
    new partition
    ([
        new label		("interface"		),

        new division
        ([
            new label		("structure"		),

            new space		("semiotic"		),
            new space		("media"		)
        ]),

        new division
        ([
            new label		("navigator"		),

            new space		("semiotic"		),
            new space		("media"		)
        ])
    ]),

    new partition
    ([
        new label		("perspective"		),

        new division
        ([
            new label		("identity"		),

            new space		("semiotic"		),
            new space		("media"		)
        ]),

        new division
        ([
            new label		("proximity"		),

            new space		("semiotic"		),
            new space		("media"		)
        ]),

        new division
        ([
            new label		("functor"		),

            new space		("semiotic"		),
            new space		("media"		)
        ])
    ]),

    new partition
    ([
        new label		("model"		),

        new division
        ([
            new label		("printer"		),

            new space		("semiotic"		),
            new space		("media"		)
        ])
    ])
];

/***************************************************************/
/***************************************************************/

function get_modifier(modifiers, label_name)
{
    for (var k=0; k < modifiers.length; ++k)
    {
        const modifier = modifiers[k].array;

        if (modifier[0].x === label_name) return modifier;
    }

    return [];
}

function get_label_policy(modifier, default_policy)
{
    return (modifier.length > 0) ? modifier[0].y : default_policy;
}

function get_space_policy(modifier, name, default_policy)
{
    for (var k=1; k < modifier.length; ++k)
    {
        if (modifier[k].x === name) return modifier[k].y;
    }

    return default_policy;
}

/***************************************************************/
/***************************************************************/

function convert_label(text, id_text, href_text, policy)
{
    var meta = (policy === "enable") ? "a" : "span";

    var element = document.createElement(meta);
    element.setAttribute("href", href_text);
    element.setAttribute("id", id_text);
    element.innerHTML = text;

    return element;
}

function append_empty_cell(element, num)
{
    for (var k=0; k < num; ++k)
    {
        element.appendChild(convert_sign_default("span", new cell()));
    }
}

/***************************************************************/

function append_division_label(element, division_name, policy)
{
    const division_id = element.id + "-" + division_name;
    const href_text   = element.id + "/" + division_name + ".html";

    append_empty_cell(element, 2);
    element.appendChild(convert_label(division_name, division_id, href_text, policy));
}

function append_division_space(element, division_name, space_name, policy)
{
    const division_space = division_name + "-" + space_name;
    const href_text      = element.id + "/" + division_space + ".html";

    element.appendChild(convert_label(space_name, division_space, href_text, policy));
}

/***************************************************************/

function append_partition_label(element, partition_name, policy)
{
    const partition_id = element.id + "-" + partition_name;
    const href_text    = element.id + "/" + partition_name + ".html";

    append_empty_cell(element, 1);
    element.appendChild(convert_label(partition_name, partition_id, href_text, policy));
    append_empty_cell(element, 3);
}

function append_partition_division(element, array, modifiers = [])
{
    const label		= array[0];
    const modifier	= get_modifier(modifiers, label.x);
    const label_policy	= get_label_policy(modifier, label.y);

    append_division_label(element, label.x, label_policy);

    for (var k=1; k < array.length; ++k)
    {
        const space		= array[k];
        const space_policy	= get_space_policy(modifier, space.x, space.y);

        append_division_space(element, label.x, space.x, space_policy);
    }
}

/***************************************************************/
/***************************************************************/

function append_module_label(element, module_name, policy)
{
    const module_id = module_name + "-" + module_name;
    const href_text = module_name + ".html"

    var child = convert_label(module_name, module_id, href_text, policy);
    child.setAttribute("class", "module_name");

    element.appendChild(child);
    element.setAttribute("id", module_name);
    append_empty_cell(element, 4);
}

function append_module_partition(element, array, modifiers)
{
    const label		= array[0];
    const modifier	= get_modifier(modifiers, label.x);
    const label_policy	= get_label_policy(modifier, label.y);

    append_partition_label(element, label.x, label_policy);

    for (var k=1; k < array.length; ++k)
    {
        const division = array[k];

        append_partition_division(element, division.array, modifiers);
    }
}

/***************************************************************/

function append_modifiers(element, modifiers)
{
    for (var k=0; k < default_module.length; ++k)
    {
        const partition = default_module[k];
        append_module_partition(element, partition.array, modifiers);
    }
}

function append_appenders(element, appenders)
{
    for (var k=0; k < appenders.length; ++k)
    {
        const object = appenders[k];
        append_partition_division(element, object.array);
    }
}

/***************************************************************/
/***************************************************************/

/*
    product:
*/

function preparse(array)
{
    var split = [ [], [] ]; // modifiers, appenders

    for (var k=1; k < array.length; ++k)
    {
        var pos = (array[k].kind === "append") ? 1 : 0; // optimize?

        split[pos].push(array[k]);
    }

    return split;
}

/***************************************************************/

function convert_module(array)
{
    var split = preparse(array);

    var element = document.createElement("section");
    element.setAttribute("class", "grid-module product module");

    const label = array[0];
    append_module_label(element, label.x, label.y);

    append_modifiers(element, split[0]);
    append_appenders(element, split[1]);

    return element;
}

/***************************************************************/

const module_convert_product =
[
    [
        "module",

        function (object)
        {
            return convert_module(object.array);
        }
    ]
];

/***************************************************************/
/***************************************************************/

/*
    object:
*/

const module_convert_object =
[
    [ "sign"	, module_convert_sign		],

    [ "pair"	, module_convert_pair		],

    [ "product"	, module_convert_product	]
];

/***************************************************************/
/***************************************************************/

/*
    module:
*/

import_convert_object(module_convert_object);

