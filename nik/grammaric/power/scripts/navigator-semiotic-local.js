
const steps = new list
([
    new linked_name		("home"			, "../../../index.html"		),
    new separator		(" / "							),

    new linked_name		("nik"			, "../../index.html"		),
    new separator		(" / "							),

    new linked_name		("grammaric"		, "../index.html"		),

    new step			("power"						),
    new step			("interface"						),

    new title			("navigator"						),
    new title			("semiotic"						),

    new source			("grammaric/power/interface/navigator/semiotic.hpp"	)
]);

/***************************************************************************************************************/

const index_copower = new list
([
    new template
    ([
        new type			("struct"						),
        new linked_name			("copower"		, "#copower"			),

        new angle_braces
        ([
            new parameter		("typename"		, "RegType"			),
            new default_value
            (
                new parameter		("Access"		, "access"			),
                new value		("Access::readwrite"					)
            )
        ])
    ]),

    new collapsible_category		("static members"					),

    new collapsible_list
    ([
        new linked_name			("type"			, "#copower-type"		),
        new linked_name			("type_ref"		, "#copower-type_ref"		),
        new linked_name			("type_ptr"		, "#copower-type_ptr"		),
            
        new linked_name			("const_type"		, "#copower-const_type"		),
            
        new linked_name			("value_type"		, "#copower-value_type"		),
        new linked_name			("value_type_ref"	, "#copower-value_type_ref"	),
        new linked_name			("value_type_ptr"	, "#copower-value_type_ptr"	)
    ]),

    new collapsible_category		("methods"						),

    new collapsible_list
    ([
        new procedure
        ([
            new linked_name		("copower"		, "#copower-copower-1"		),
            new parentheses		([]							)
        ]),

        new procedure
        ([
            new linked_name		("copower"		, "#copower-copower-2"		),
            new parentheses
            ([
                new argument		("value_type &"		, "focus"			)
            ])
        ]),

        new procedure
        ([
            new linked_name		("copower"		, "#copower-copower-3"		),
            new parentheses
            ([
                new argument		("const type &"		, "c"				)
            ])
        ]),

        new procedure
        ([
            new type			("const type &"						),
            new linked_name		("operator = "		, "#copower-operator_="		),
            new parentheses
            ([
                new argument		("const type &"		, "c"				)
            ])
        ]),

        new procedure
        ([
            new type			("bool"							),
            new linked_name		("operator == "		, "#copower-operator_=="	),
            new parentheses
            ([
                new argument		("const type &"		, "c"				)
            ]),
            new keyword			("const"						)
        ]),

        new procedure
        ([
            new type			("bool"							),
            new linked_name		("operator != "		, "#copower-operator_!="	),
            new parentheses
            ([
                new argument		("const type &"		, "c"				)
            ]),
            new keyword			("const"						)
        ]),

        new procedure
        ([
            new type			("operator"						),
            new linked_name		("const_type"		, "#copower-const_type"		),
            new parentheses		([]							),
            new keyword			("const"						)
        ]),

        new procedure
        ([
            new type			("value_type_ref"					),
            new linked_name		("operator * "		, "#copower-operator_*"		),
            new parentheses		([]							)
        ]),

        new procedure
        ([
            new type			("type_ref"						),
            new linked_name		("operator ++ "		, "#copower-operator_++"	),
            new parentheses		([]							)
        ]),

        new procedure
        ([
            new type			("type_ref"						),
            new linked_name		("operator += "		, "#copower-operator_+="	),
            new parentheses
            ([
                new argument		("size_type"		, "n"				)
            ])
        ]),

        new procedure
        ([
            new type			("type_ref"						),
            new linked_name		("operator -- "		, "#copower-operator_--"	),
            new parentheses		([]							)
        ]),

        new procedure
        ([
            new type			("type_ref"						),
            new linked_name		("operator -= "		, "#copower-operator_-="	),
            new parentheses
            ([
                new argument		("size_type"		, "n"				)
            ])
        ])
    ])
]);

/***************************************************************************************************************/

const entry_copower = new list
([
    new anchor				("copower"						),
    new template
    ([
        new type			("struct"						),
        new name			("copower"						),
        new angle_braces
        ([
            new parameter		("typename"		, "RegType"			),
            new default_value
            (
                new parameter		("Access"		, "access"			),
                new value		("Access::readwrite"					)
            )
        ])
    ]),

    new category			("static members"					),

    new anchor				("copower-type"						),
    new member_entry			("type"							),

    new anchor				("copower-type_ref"					),
    new member_entry			("type_ref"						),

    new anchor				("copower-type_ptr"					),
    new member_entry			("type_ptr"						),

    new anchor				("copower-const_type"					),
    new member_entry			("const_type"						),

    new anchor				("copower-value_type"					),
    new member_entry			("value_type"						),

    new anchor				("copower-value_type_ref"				),
    new member_entry			("value_type_ref"					),

    new anchor				("copower-value_type_ptr"				),
    new member_entry			("value_type_ptr"					),

    new category			("methods"						),

    new anchor				("copower-copower-1"					),
    new procedure
    ([
        new name			("copower"						),
        new parentheses			([]							)
    ]),

    new anchor				("copower-copower-2"					),
    new procedure
    ([
        new name			("copower"						),
        new parentheses
        ([
            new argument		("value_type &"		, "focus"			)
        ])
    ]),

    new anchor				("copower-copower-3"					),
    new procedure
    ([
        new name			("copower"						),
        new parentheses
        ([
            new argument		("const type &"		, "c"				)
        ])
    ]),

    new anchor				("copower-operator_="					),
    new procedure
    ([
        new type			("const type &"						),
        new name			("operator = "						),
        new parentheses
        ([
            new argument		("const type &"		, "c"				)
        ])
    ]),

    new anchor				("copower-operator_=="					),
    new procedure
    ([
        new type			("bool"							),
        new name			("operator == "						),
        new parentheses
        ([
            new argument		("const type &"		, "c"				)
        ]),
        new keyword			("const"						)
    ]),

    new anchor				("copower-operator_!="					),
    new procedure
    ([
        new type			("bool"							),
        new name			("operator != "						),
        new parentheses
        ([
            new argument		("const type &"		, "c"				)
        ]),
        new keyword			("const"						)
    ]),

    new anchor				("copower-const_type"					),
    new procedure
    ([
        new type			("operator"						),
        new name			("const_type"						),
        new parentheses			([]							),
        new keyword			("const"						)
    ]),

    new anchor				("copower-operator_*"					),
    new procedure
    ([
        new type			("value_type_ref"					),
        new name			("operator * "						),
        new parentheses			([]							)
    ]),

    new anchor				("copower-operator_++"					),
    new procedure
    ([
        new type			("type_ref"						),
        new name			("operator ++ "						),
        new parentheses			([]							)
    ]),

    new anchor				("copower-operator_+="					),
    new procedure
    ([
        new type			("type_ref"						),
        new name			("operator += "						),
        new parentheses
        ([
            new argument		("size_type"		, "n"				)
        ])
    ]),

    new anchor				("copower-operator_--"					),
    new procedure
    ([
        new type			("type_ref"						),
        new name			("operator -- "						),
        new parentheses			([]							)
    ]),

    new anchor				("copower-operator_-="					),
    new procedure
    ([
        new type			("type_ref"						),
        new name			("operator -= "						),
        new parentheses
        ([
            new argument		("size_type"		, "n"				)
        ])
    ])
]);

