
const steps = new list
([
    new linked_name		("home"			, "../../../index.html"		),
    new separator		(" / "							),

    new linked_name		("nik"			, "../../index.html"		),
    new separator		(" / "							),

    new linked_name		("numeric"		, "../index.html"		),

    new step			("word"							),
    new title			("interface"						)
]);

/***************************************************************************************************************/

const adjectives = new list
([
    new adjective
    ([
        new type		("enum struct"		),
        new name		("Depth"		),
        new curly_braces
        ([
            new value		("bit"			),
            new value		("word"			)
        ])
    ])
]);

