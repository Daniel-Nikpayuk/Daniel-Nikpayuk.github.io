
const steps = new list
([
    new linked_name		("home"			, "../../index.html"	),
    new separator		(" / "						),

    new linked_name		("nik"			, "../index.html"	),
    new separator		(" / "						),

    new linked_name		("metaric"		, "index.html"		),

    new title			("empty"					)
]);

/***************************************************************************************************************/

const policies = new list
([
    new template
    ([
        new type			("struct"					),
        new name			("act"						),
        new angle_braces
        ([
            new parameter		("struct"		, "Expression"		)
        ])
    ])
]);

