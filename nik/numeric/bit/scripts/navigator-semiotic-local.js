
const steps = new list
([
    new linked_name		("home"			, "../../../index.html"		),
    new separator		(" / "							),

    new linked_name		("nik"			, "../../index.html"		),
    new separator		(" / "							),

    new linked_name		("numeric"		, "../index.html"		),

    new step			("bit"							),
    new step			("interface"						),

    new title			("navigator"						),
    new title			("semiotic"						),

    new source			("numeric/bit/interface/navigator/semiotic.hpp"		)
]);

/***************************************************************************************************************/

const index_cobit = new list
([
    new template
    ([
        new type			("struct"						),
        new linked_name			("cobit"		, "#cobit"			),
        new angle_braces
        ([
            new parameter		("typename"		, "BitType"			),
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
        new linked_name			("type"			, "#cobit-type"			),
        new linked_name			("type_ref"		, "#cobit-type_ref"		),
        new linked_name			("type_ptr"		, "#cobit-type_ptr"		),
            
        new linked_name			("const_type"		, "#cobit-const_type"		),
            
        new linked_name			("value_type"		, "#cobit-value_type"		),
        new linked_name			("value_type_ref"	, "#cobit-value_type_ref"	),
        new linked_name			("value_type_ptr"	, "#cobit-value_type_ptr"	),
            
        new linked_name			("bit_iterator"		, "#cobit-bit_iterator"		),
        new linked_name			("const_bit_iterator"	, "#cobit-const_bit_iterator"	)
    ])

    new collapsible_category		("methods"						),

    new collapsible_list
    ([
        new procedure
        ([
            new linked_name		("cobit"		, "#cobit-cobit"		),
            new parentheses		([]							)
        ]),

        new procedure
        ([
            new linked_name		("cobit"		, "#cobit-cobit"		),
            new parentheses
            ([
                new argument		("value_type &"		, "focus"			)
            ])
        ]),

        new procedure
        ([
            new type			("bool"							),
            new linked_name		("operator == "		, "#cobit-operator_=="		),
            new parentheses
            ([
                new argument		("const type &"		, "c"				)
            ]),
            new keyword			("const"						)
        ]),

        new procedure
        ([
            new type			("bool"							),
            new linked_name		("operator != "		, "#cobit-operator_!="		),
            new parentheses
            ([
                new argument		("const type &"		, "c"				)
            ]),
            new keyword			("const"						)
        ]),

        new procedure
        ([
            new type			("operator"						),
            new linked_name		("const_type"		, "#cobit-const_type"		),
            new parentheses		([]							),
            new keyword			("const"						)
        ]),

        new procedure
        ([
            new type			("value_type_ref"					),
            new linked_name		("operator * "		, "#cobit-operator_*"		),
            new parentheses		([]							)
        ]),

        new procedure
        ([
            new type			("void"							),
            new linked_name		("operator + "		, "#cobit-operator_+"		),
            new parentheses		([]							)
        ]),

        new procedure
        ([
            new type			("void"							),
            new linked_name		("operator - "		, "#cobit-operator_-"		),
            new parentheses		([]							)
        ])
    ])
]);

const entry_cobit = new list
([
    new anchor				("cobit"						),
    new template
    ([
        new type			("struct"						),
        new name			("cobit"						),
        new angle_braces
        ([
            new parameter		("typename"		, "BitType"			),
            new default_value
            (
                new parameter		("Access"		, "access"			),
                new value		("Access::readwrite"					)
            )
        ])
    ]),

    new category			("static members"					),

    new anchor				("cobit-type"						),
    new member_entry			("type"							),

    new anchor				("cobit-type_ref"					),
    new member_entry			("type_ref"						),

    new anchor				("cobit-type_ptr"					),
    new member_entry			("type_ptr"						),

    new anchor				("cobit-const_type"					),
    new member_entry			("const_type"						),

    new anchor				("cobit-value_type"					),
    new member_entry			("value_type"						),

    new anchor				("cobit-value_type_ref"					),
    new member_entry			("value_type_ref"					),

    new anchor				("cobit-value_type_ptr"					),
    new member_entry			("value_type_ptr"					),

    new anchor				("cobit-bit_iterator"					),
    new member_entry			("bit_iterator"						),

    new anchor				("cobit-const_bit_iterator"				),
    new member_entry			("const_bit_iterator"					),

    new category			("methods"						),

    new anchor				("cobit-cobit"						),
    new procedure
    ([
        new name			("cobit"						),
        new parentheses			([]							)
    ]),

    new anchor				("cobit-cobit"						),
    new procedure
    ([
        new name			("cobit"						),
        new parentheses
        ([
            new argument		("value_type &"		, "focus"			)
        ])
    ]),

    new anchor				("cobit-operator_=="					),
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

    new anchor				("cobit-operator_!="					),
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

    new anchor				("cobit-const_type"					),
    new procedure
    ([
        new type			("operator"						),
        new name			("const_type"						),
        new parentheses			([]							),
        new keyword			("const"						)
    ]),

    new anchor				("cobit-operator_*"					),
    new procedure
    ([
        new type			("value_type_ref"					),
        new name			("operator * "						),
        new parentheses			([]							)
    ]),

    new anchor				("cobit-operator_+"					),
    new procedure
    ([
        new type			("void"							),
        new name			("operator + "						),
        new parentheses			([]							)
    ]),

    new anchor				("cobit-operator_-"					),
    new procedure
    ([
        new type			("void"							),
        new name			("operator - "						),
        new parentheses			([]							)
    ])
]);

