
const steps = new list
([
    new linked_name		("home"			, "../../../index.html"		),
    new separator		(" / "							),

    new linked_name		("nik"			, "../../index.html"		),
    new separator		(" / "							),

    new linked_name		("metaric"		, "../index.html"		),

    new step			("builtin"						),

    new title			("interface"						)
]);

/***************************************************************************************************************/

const adjectives = new list
([
    new adjective
    ([
        new type		("enum struct"		),
        new name		("Sign"			),
        new curly_braces
        ([
            new value		("natural"		),
            new value		("integer"		)
        ])
    ])
]);

