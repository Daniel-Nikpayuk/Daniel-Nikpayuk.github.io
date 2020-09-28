
const steps = new list
([
    new linked_name		("home"			, "../../../index.html"		),
    new separator		(" / "							),

    new linked_name		("nik"			, "../../index.html"		),
    new separator		(" / "							),

    new linked_name		("grammaric"		, "../index.html"		),

    new step			("power"						),
    new step			("interface"						),

    new title			("structure"						),
    new title			("semiotic"						),

    new source			("grammaric/power/interface/structure/semiotic.hpp"	)
]);

/***************************************************************************************************************/

const index_power = new list
([
    new template
    ([
        new type			("struct"						),
        new linked_name			("power"		, "#power"			),
        new angle_braces
        ([
            new parameter		("typename"		, "Type"			),
            new parameter		("size_type"		, "length"			)
        ])
    ]),

    new collapsible_category		("static members"					),

    new collapsible_list
    ([
        new linked_name			("type"			, "#power-type"			),
        new linked_name			("type_ref"		, "#power-type_ref"		),
        new linked_name			("type_ptr"		, "#power-type_ptr"		),
        new linked_name			("value_type"		, "#power-value_type"		),
        new linked_name			("value_type_ref"	, "#power-value_type_ref"	),
        new linked_name			("value_type_ptr"	, "#power-value_type_ptr"	),
        new linked_name			("iterator"		, "#power-iterator"		),
        new linked_name			("const_iterator"	, "#power-const_iterator"	)
    ]),

    new collapsible_category		("methods"						),

    new collapsible_list
    ([
        new procedure
        ([
            new linked_name		("power"		, "#power-power"		),
            new parentheses		([]							)
        ]),

        new procedure
        ([
            new type			("iterator"						),
            new linked_name		("begin"		, "#power-begin"		),
            new parentheses		([]							)
        ]),

        new procedure
        ([
            new type			("const_iterator"					),
            new linked_name		("begin"		, "#power-begin"		),
            new parentheses		([]							),
            new keyword			("const"						)
        ]),

        new procedure
        ([
            new type			("iterator"						),
            new linked_name		("end"			, "#power-end"			),
            new parentheses		([]							)
        ]),

        new procedure
        ([
            new type			("const_iterator"					),
            new linked_name		("end"			, "#power-end"			),
            new parentheses		([]							),
            new keyword			("const"						)
        ])
    ])
]);

const entry_power = new list
([
    new anchor				("power"						),
    new template
    ([
        new type			("struct"						),
        new name			("power"						),
        new angle_braces
        ([
            new parameter		("typename"		, "Type"			),
            new parameter		("size_type"		, "length"			)
        ])
    ]),

    new category			("static members"					),

    new anchor				("power-type"						),
    new member_entry			("type"							),

    new anchor				("power-type_ref"					),
    new member_entry			("type_ref"						),

    new anchor				("power-type_ptr"					),
    new member_entry			("type_ptr"						),

    new anchor				("power-value_type"					),
    new member_entry			("value_type"						),

    new anchor				("power-value_type_ref"					),
    new member_entry			("value_type_ref"					),

    new anchor				("power-value_type_ptr"					),
    new member_entry			("value_type_ptr"					),

    new anchor				("power-iterator"					),
    new member_entry			("iterator"						),

    new anchor				("power-const_iterator"					),
    new member_entry			("const_iterator"					),

    new category			("methods"						),

    new anchor				("power-power"						),
    new procedure
    ([
        new name			("power"						),
        new parentheses			([]							)
    ]),

    new anchor				("power-iterator"					),
    new procedure
    ([
        new type			("iterator"						),
        new name			("begin"						),
        new parentheses			([]							)
    ]),

    new anchor				("power-const_iterator"					),
    new procedure
    ([
        new type			("const_iterator"					),
        new name			("begin"						),
        new parentheses			([]							),
        new keyword			("const"						)
    ]),

    new anchor				("power-iterator"					),
    new procedure
    ([
        new type			("iterator"						),
        new name			("end"							),
        new parentheses			([]							)
    ]),

    new anchor				("power-const_iterator"					),
    new procedure
    ([
        new type			("const_iterator"					),
        new name			("end"							),
        new parentheses			([]							),
        new keyword			("const"						)
    ])
]);

