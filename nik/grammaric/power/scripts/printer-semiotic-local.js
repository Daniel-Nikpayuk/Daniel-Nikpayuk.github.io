
const steps = new list
([
    new linked_name		("home"			, "../../../index.html"		),
    new separator		(" / "							),

    new linked_name		("nik"			, "../../index.html"		),
    new separator		(" / "							),

    new linked_name		("grammaric"		, "../index.html"		),

    new step			("power"						),
    new step			("model"						),

    new title			("printer"						),
    new title			("semiotic"						),

    new source			("grammaric/power/model/printer/semiotic.hpp"		)
]);

/***************************************************************************************************************/

const index_printer = new list
([
    new template
    ([
        new type			("struct"						),
        new linked_name			("printer"			, "#printer"		),
        new angle_braces
        ([
            new parameter		("typename"			, "sub_adjective"	)
        ])
    ]),

    new collapsible_category		("methods"						),

    new collapsible_list
    ([
        new procedure
        ([
            new type			("static void"						),
            new linked_name		("print"			, "#printer-print-1"	),
            new parentheses
            ([
                new argument		("sub_type"			, "sub"			),
                new argument		("sub_type"			, "end"			)
            ])
        ]),

        new procedure
        ([
            new type			("static void"						),
            new linked_name		("print"			, "#printer-print-2"	),
            new parentheses
            ([
                new argument		("sub_type"			, "sub"			),
                new argument		("sub_type"			, "end"			),
                new argument		("const separator_type &"	, "s"			)
            ])
        ])
    ])
]);

/***************************************************************************************************************/

const entry_printer = new list
([
    new anchor				("printer"						),
    new template
    ([
        new type			("struct"						),
        new name			("printer"						),
        new angle_braces
        ([
            new parameter		("typename"			, "sub_adjective"	)
        ])
    ]),

    new category			("methods"						),

    new anchor				("printer-print-1"					),
    new procedure
    ([
        new type			("static void"						),
        new name			("print"						),
        new parentheses
        ([
            new argument		("sub_type"			, "sub"			),
            new argument		("sub_type"			, "end"			)
        ])
    ]),

    new anchor				("printer-print-2"					),
    new procedure
    ([
        new type			("static void"						),
        new name			("print"						),
        new parentheses
        ([
            new argument		("sub_type"			, "sub"			),
            new argument		("sub_type"			, "end"			),
            new argument		("const separator_type &"	, "s"			)
        ])
    ])
]);

