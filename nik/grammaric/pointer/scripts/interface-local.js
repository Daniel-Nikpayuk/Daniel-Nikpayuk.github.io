
const steps = new list
([
    new linked_name		("home"			, "../../../index.html"		),
    new separator		(" / "							),

    new linked_name		("nik"			, "../../index.html"		),
    new separator		(" / "							),

    new linked_name		("grammaric"		, "../index.html"		),

    new step			("pointer"						),

    new title			("interface"						)
]);

/***************************************************************************************************************/

const adjectives = new list
([
    new adjective
    ([
        new type		("enum struct"		),
        new name		("Access"		),
        new curly_braces
        ([
            new value		("readonly"		),
            new value		("readwrite"		)
        ])
    ])
]);

