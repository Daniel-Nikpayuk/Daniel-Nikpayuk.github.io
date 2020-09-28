
const steps = new list
([
    new linked_name		("home"			, "../../../index.html"		),
    new separator		(" / "							),

    new linked_name		("nik"			, "../../index.html"		),
    new separator		(" / "							),

    new linked_name		("grammaric"		, "../index.html"		),

    new step			("power"						),
    new step			("perspective"						),

    new title			("proximity"						),
    new title			("semiotic"						),

    new source			("grammaric/power/perspective/proximity/semiotic.hpp"	)
]);

/***************************************************************************************************************/

const index_proximity = new list
([
    new template
    ([
        new type			("struct"								),
        new linked_name			("proximity"			, "#proximity"				),

        new angle_braces
        ([
            new parameter		("typename"			, "sub_adjective"			),
            new parameter		("typename"			, "ob_adjective"			)
        ])
    ]),

    new collapsible_category		("methods"								),

    new collapsible_list
    ([
        new procedure
        ([
            new type			("static bool"								),
            new linked_name		("less_than"			, "#proximity-less_than"		),
            new parentheses
            ([
                new argument		("sub_type"			, "sub"					),
                new argument		("ob_type"			, "ob"					),
                new argument		("ob_type"			, "end"					)
            ])
        ]),

        new procedure
        ([
            new type			("static bool"								),
            new linked_name		("less_than_or_equal"		, "#proximity-less_than_or_equal"	),
            new parentheses
            ([
                new argument		("sub_type"			, "sub"					),
                new argument		("ob_type"			, "ob"					),
                new argument		("ob_type"			, "end"					)
            ])
        ]),

        new procedure
        ([
            new type			("static bool"								),
            new linked_name		("greater_than"			, "#proximity-greater_than"		),
            new parentheses
            ([
                new argument		("sub_type"			, "sub"					),
                new argument		("ob_type"			, "ob"					),
                new argument		("ob_type"			, "end"					)
            ])
        ]),

        new procedure
        ([
            new type			("static bool"								),
            new linked_name		("greater_than_or_equal"	, "#proximity-greater_than_or_equal"	),
            new parentheses
            ([
                new argument		("sub_type"			, "sub"					),
                new argument		("ob_type"			, "ob"					),
                new argument		("ob_type"			, "end"					)
            ])
        ])
    ])
]);

/***************************************************************************************************************/

const entry_proximity = new list
([
    new anchor				("proximity"					),
    new template
    ([
        new type			("struct"					),
        new name			("proximity"					),
        new angle_braces
        ([
            new parameter		("typename"		, "sub_adjective"	),
            new parameter		("typename"		, "ob_adjective"	)
        ])
    ]),

    new category			("methods"					),

    new anchor				("proximity-less_than"				),
    new procedure
    ([
        new type			("static bool"					),
        new name			("less_than"					),
        new parentheses
        ([
            new argument		("sub_type"		, "sub"			),
            new argument		("ob_type"		, "ob"			),
            new argument		("ob_type"		, "end"			)
        ])
    ]),

    new anchor				("proximity-less_than_or_equal"			),
    new procedure
    ([
        new type			("static bool"					),
        new name			("less_than_or_equal"				),
        new parentheses
        ([
            new argument		("sub_type"		, "sub"			),
            new argument		("ob_type"		, "ob"			),
            new argument		("ob_type"		, "end"			)
        ])
    ]),

    new anchor				("proximity-greater_than"			),
    new procedure
    ([
        new type			("static bool"					),
        new name			("greater_than"					),
        new parentheses
        ([
            new argument		("sub_type"		, "sub"			),
            new argument		("ob_type"		, "ob"			),
            new argument		("ob_type"		, "end"			)
        ])
    ]),

    new anchor				("proximity-greater_than_or_equal"		),
    new procedure
    ([
        new type			("static bool"					),
        new name			("greater_than_or_equal"			),
        new parentheses
        ([
            new argument		("sub_type"		, "sub"			),
            new argument		("ob_type"		, "ob"			),
            new argument		("ob_type"		, "end"			)
        ])
    ])
]);

