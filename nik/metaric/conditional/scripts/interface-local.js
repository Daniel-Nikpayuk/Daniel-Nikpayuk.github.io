
const steps = new list
([
    new linked_name		("home"			, "../../../index.html"		),
    new separator		(" / "							),

    new linked_name		("nik"			, "../../index.html"		),
    new separator		(" / "							),

    new linked_name		("metaric"		, "../index.html"		),

    new step			("conditional"						),

    new title			("interface"						)
]);

/***************************************************************************************************************/

const adjectives = new list
([
    new template
    ([
        new type			("struct"					),
        new name			("if_then"					),
        new angle_braces
        ([
            new parameter		("typename"		, "Predicate"		),
            new parameter		("typename"		, "Expression"		)
        ])
    ]),

    new template
    ([
        new type			("struct"					),
        new name			("else_then"					),
        new angle_braces
        ([
            new parameter		("typename"		, "Predicate"		),
            new parameter		("typename"		, "Expression"		)
        ])
    ]),

    new template
    ([
        new type			("struct"					),
        new name			("then"						),
        new angle_braces
        ([
            new parameter		("typename"		, "Expression"		)
        ])
    ])
]);

