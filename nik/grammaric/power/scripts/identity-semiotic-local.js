
const steps = new list
([
    new linked_name		("home"			, "../../../index.html"		),
    new separator		(" / "							),

    new linked_name		("nik"			, "../../index.html"		),
    new separator		(" / "							),

    new linked_name		("grammaric"		, "../index.html"		),

    new step			("power"						),
    new step			("perspective"						),

    new title			("identity"						),
    new title			("semiotic"						),

    new source			("grammaric/power/perspective/identity/semiotic.hpp"	)
]);

/***************************************************************************************************************/

const index_identity_1 = new list
([
    new template
    ([
        new type			("struct"					),
        new linked_name			("identity"		, "#identity-1"		),
        new angle_braces
        ([
            new parameter		("typename"		, "sub_adjective"	)
        ])
    ]),

    new collapsible_category		("methods"					),

    new collapsible_list
    ([
        new procedure
        ([
            new type			("static bool"					),
            new linked_name		("zero"			, "#identity-1-zero"	),
            new parentheses
            ([
                new argument		("sub_type"		, "sub"			),
                new argument		("sub_type"		, "end"			)
            ])
        ])
    ])
]);

const entry_identity_1 = new list
([
    new anchor				("identity-1"					),
    new template
    ([
        new type			("struct"					),
        new name			("identity"					),
        new angle_braces
        ([
            new parameter		("typename"		, "sub_adjective"	)
        ])
    ]),

    new category			("methods"					),

    new anchor				("identity-1-zero"				),
    new procedure
    ([
        new type			("static bool"					),
        new name			("zero"						),
        new parentheses
        ([
            new argument		("sub_type"		, "sub"			),
            new argument		("sub_type"		, "end"			)
        ])
    ])
]);

/***************************************************************************************************************/

const index_identity_2 = new list
([
    new template
    ([
        new type			("struct"						),
        new linked_name			("identity"		, "#identity-2"			),

        new angle_braces
        ([
            new parameter		("typename"		, "sub_adjective"		),
            new parameter		("typename"		, "ob_adjective"		)
        ])
    ]),

    new collapsible_category		("methods"						),

    new collapsible_list
    ([
        new procedure
        ([
            new type			("static bool"						),
            new linked_name		("equals"		, "#identity-2-equals"		),
            new parentheses
            ([
                new argument		("sub_type"		, "sub"				),
                new argument		("ob_type"		, "ob"				),
                new argument		("ob_type"		, "end"				)
            ])
        ]),

        new procedure
        ([
            new type			("static bool"						),
            new linked_name		("not_equals"		, "#identity-2-not_equals"	),
            new parentheses
            ([
                new argument		("sub_type"		, "sub"				),
                new argument		("ob_type"		, "ob"				),
                new argument		("ob_type"		, "end"				)
            ])
        ])
    ])
]);

const entry_identity_2 = new list
([
    new anchor				("identity-2"					),
    new template
    ([
        new type			("struct"					),
        new name			("identity"					),
        new angle_braces
        ([
            new parameter		("typename"		, "sub_adjective"	),
            new parameter		("typename"		, "ob_adjective"	)
        ])
    ]),

    new category			("methods"					),

    new anchor				("identity-2-equals"				),
    new procedure
    ([
        new type			("static bool"					),
        new name			("equals"					),
        new parentheses
        ([
            new argument		("sub_type"		, "sub"			),
            new argument		("ob_type"		, "ob"			),
            new argument		("ob_type"		, "end"			)
        ])
    ]),

    new anchor				("identity-2-not_equals"			),
    new procedure
    ([
        new type			("static bool"					),
        new name			("not_equals"					),
        new parentheses
        ([
            new argument		("sub_type"		, "sub"			),
            new argument		("ob_type"		, "ob"			),
            new argument		("ob_type"		, "end"			)
        ])
    ])
]);

