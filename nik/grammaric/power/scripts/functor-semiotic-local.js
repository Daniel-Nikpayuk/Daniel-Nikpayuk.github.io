
const steps = new list
([
    new linked_name		("home"			, "../../../index.html"		),
    new separator		(" / "							),

    new linked_name		("nik"			, "../../index.html"		),
    new separator		(" / "							),

    new linked_name		("grammaric"		, "../index.html"		),

    new step			("power"						),
    new step			("perspective"						),

    new title			("functor"						),
    new title			("semiotic"						),

    new source			("grammaric/power/perspective/functor/semiotic.hpp"	)
]);

/***************************************************************************************************************/

const index_functor_1 = new list
([
    new template
    ([
        new type			("struct"					),
        new linked_name			("functor"		, "#functor-1"		),
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
            new type			("static void"					),
            new linked_name		("set"			, "#functor-1-set"	),
            new parentheses
            ([
                new argument		("sub_type"		, "sub"			),
                new argument		("sub_type"		, "end"			),
                new argument		("value_type"		, "value"		)
            ])
        ])
    ])
]);

const entry_functor_1 = new list
([
    new anchor				("functor-1"					),
    new template
    ([
        new type			("struct"					),
        new name			("functor"					),
        new angle_braces
        ([
            new parameter		("typename"		, "sub_adjective"	)
        ])
    ]),

    new category			("methods"					),

    new anchor				("functor-1-set"				),
    new procedure
    ([
        new type			("static void"					),
        new name			("set"						),
        new parentheses
        ([
            new argument		("sub_type"		, "sub"			),
            new argument		("sub_type"		, "end"			),
            new argument		("value_type"		, "value"		)
        ])
    ])
]);

/***************************************************************************************************************/

const index_functor_2 = new list
([
    new template
    ([
        new type			("struct"					),
        new linked_name			("functor"		, "#functor-2"		),
        new angle_braces
        ([
            new parameter		("typename"		, "sub_adjective"	),
            new parameter		("typename"		, "ob_adjective"	)
        ])
    ]),

    new collapsible_category		("methods"					),

    new collapsible_list
    ([
        new procedure
        ([
            new type			("static sub_type"				),
            new linked_name		("assign"		, "#functor-2-assign"	),
            new parentheses
            ([
                new argument		("sub_type"		, "sub"			),
                new argument		("ob_type"		, "ob"			),
                new argument		("ob_type"		, "end"			)
            ])
        ])
    ])
]);

const entry_functor_2 = new list
([
    new anchor				("functor-2"					),
    new template
    ([
        new type			("struct"					),
        new name			("functor"					),
        new angle_braces
        ([
            new parameter		("typename"		, "sub_adjective"	),
            new parameter		("typename"		, "ob_adjective"	)
        ])
    ]),

    new category			("methods"					),

    new anchor				("functor-2-assign"				),
    new procedure
    ([
        new type			("static sub_type"				),
        new name			("assign"					),
        new parentheses
        ([
            new argument		("sub_type"		, "sub"			),
            new argument		("ob_type"		, "ob"			),
            new argument		("ob_type"		, "end"			)
        ])
    ])
]);

