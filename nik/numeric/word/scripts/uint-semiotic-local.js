
const steps = new list
([
    new linked_name		("home"			, "../../../index.html"		),
    new separator		(" / "							),

    new linked_name		("nik"			, "../../index.html"		),
    new separator		(" / "							),

    new linked_name		("numeric"		, "../index.html"		),

    new step			("word"							),
    new step			("model"						),

    new title			("uint"							),
    new title			("semiotic"						)
]);

/***************************************************************************************************************/

const index_uint = new list
([
    new template
    ([
        new type		("struct"						),
        new linked_name		("uint"			, "#uint"			),
        new angle_braces
        ([
        ])
    ])
]);

const entry_uint = new list
([
    new anchor			("uint"							),
    new template
    ([
        new type		("struct"						),
        new name		("uint"							),
        new angle_braces
        ([
        ])
    ])
]);

