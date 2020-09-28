
const steps = new list
([
    new linked_name		("home"			, "../../../index.html"		),
    new separator		(" / "							),

    new linked_name		("nik"			, "../../index.html"		),
    new separator		(" / "							),

    new linked_name		("numeric"		, "../index.html"		),

    new step			("bit"							),
    new step			("interface"						),

    new title			("structure"						),
    new title			("semiotic"						),

    new source			("numeric/bit/interface/structure/semiotic.hpp"		)
]);

/***************************************************************************************************************/

const index_bit_1 = new list
([
    new template
    ([
        new type			("struct"						),
        new linked_name			("bit"			, "#bit-1"			),
        new angle_braces
        ([
            new parameter		( "typename"		, "RegType"			)
        ])
    ]),

    new collapsible_category		("static members"					),

    new collapsible_list
    ([
        new linked_name			("type"			, "#bit-1-type"			),
        new linked_name			("type_ref"		, "#bit-1-type_ref"		),
        new linked_name			("type_ptr"		, "#bit-1-type_ptr"		),
            
        new linked_name			("value_type"		, "#bit-1-value_type"		),
        new linked_name			("value_type_ref"	, "#bit-1-value_type_ref"	),
        new linked_name			("value_type_ptr"	, "#bit-1-value_type_ptr"	),
            
        new linked_name			("iterator"		, "#bit-1-iterator"		),
        new linked_name			("const_iterator"	, "#bit-1-const_iterator"	),
            
        new linked_name			("navigator"		, "#bit-1-navigator"		),
        new linked_name			("const_navigator"	, "#bit-1-const_navigator"	)
    ]),

    new collapsible_category		("methods"						),

    new collapsible_list
    ([
        new procedure
        ([
            new linked_name		("bit"			, "#bit-1-bit"			),
            new parentheses		([]							)
        ]),

        new procedure
        ([
            new type			("navigator"						),
            new linked_name		("begin"		, "#bit-1-begin-1"		),
            new parentheses		([]							)
        ]),

        new procedure
        ([
            new type			("const_navigator"					),
            new linked_name		("begin"		, "#bit-1-begin-2"		),
            new parentheses		([]							),
            new keyword			("const"						)
        ]),

        new procedure
        ([
            new type			("navigator"						),
            new linked_name		("end"			, "#bit-1-end-1"		),
            new parentheses		([]							)
        ]),

        new procedure
        ([
            new type			("const_navigator"					),
            new linked_name		("end"			, "#bit-1-end-2"		),
            new parentheses		([]							),
            new keyword			("const"						)
        ])
    ])
]);

const entry_bit_1 = new list
([
    new anchor				("bit-1"						),
    new template
    ([
        new type			( "struct"						),
        new name			("bit"							),
        new angle_braces
        ([
            new parameter		( "typename"		, "RegType"			)
        ])
    ]),

    new category			("static members"					),

    new anchor				("bit-1-type"						),
    new member_entry			("type"							),

    new anchor				("bit-1-type_ref"					),
    new member_entry			("type_ref"						),

    new anchor				("bit-1-type_ptr"					),
    new member_entry			("type_ptr"						),

    new anchor				("bit-1-value_type"					),
    new member_entry			("value_type"						),

    new anchor				("bit-1-value_type_ref"					),
    new member_entry			("value_type_ref"					),

    new anchor				("bit-1-value_type_ptr"					),
    new member_entry			("value_type_ptr"					),

    new anchor				("bit-1-iterator"					),
    new member_entry			("iterator"						),

    new anchor				("bit-1-const_iterator"					),
    new member_entry			("const_iterator"					),

    new anchor				("bit-1-navigator"					),
    new member_entry			("navigator"						),

    new anchor				("bit-1-const_navigator"				),
    new member_entry			("const_navigator"					),

    new category			("methods"						),

    new anchor				("bit-1-bit"						),
    new procedure
    ([
        new name			("bit"							),
        new parentheses			([]							)
    ]),

    new anchor				("bit-1-begin-1"					),
    new procedure
    ([
        new type			("navigator"						),
        new name			("begin"						),
        new parentheses			([]							)
    ]),

    new anchor				("bit-1-begin-2"					),
    new procedure
    ([
        new type			("const_navigator"					),
        new name			("begin"						),
        new parentheses			([]							),
        new keyword			("const"						)
    ]),

    new anchor				("bit-1-end-1"						),
    new procedure
    ([
        new type			("navigator"						),
        new name			("end"							),
        new parentheses			([]							)
    ]),

    new anchor				("bit-1-end-2"						),
    new procedure
    ([
        new type			("const_navigator"					),
        new name			("end"							),
        new parentheses			([]							),
        new keyword			("const"						)
    ])
]);

/***************************************************************************************************************/

const index_bit_2 = new list
([
    new template
    ([
        new type			("struct"						),
        new linked_name			("bit"			, "#bit-2"			),
        new angle_braces
        ([
            new value			("bool"							)
        ])
    ]),

    new collapsible_category		("static members"					),

    new collapsible_list
    ([
        new linked_name			("type"			, "#bit-2-type"			),
        new linked_name			("type_ref"		, "#bit-2-type_ref"		),
        new linked_name			("type_ptr"		, "#bit-2-type_ptr"		),
            
        new linked_name			("value_type"		, "#bit-2-value_type"		),
        new linked_name			("value_type_ref"	, "#bit-2-value_type_ref"	),
        new linked_name			("value_type_ptr"	, "#bit-2-value_type_ptr"	),
            
        new linked_name			("iterator"		, "#bit-2-iterator"		),
        new linked_name			("const_iterator"	, "#bit-2-const_iterator"	),
            
        new linked_name			("navigator"		, "#bit-2-navigator"		),
        new linked_name			("const_navigator"	, "#bit-2-const_navigator"	)
    ]),

    new collapsible_category		("methods"						),

    new collapsible_list
    ([
        new procedure
        ([
            new linked_name		("bit"			, "#bit-2-bit"			),
            new parentheses		([]							)
        ]),

        new procedure
        ([
            new type			("navigator"						),
            new linked_name		("begin"		, "#bit-2-begin-1"		),
            new parentheses		([]							)
        ]),

        new procedure
        ([
            new type			("const_navigator"					),
            new linked_name		("begin"		, "#bit-2-begin-2"		),
            new parentheses		([]							),
            new keyword			("const"						)
        ]),

        new procedure
        ([
            new type			("navigator"						),
            new linked_name		("end"			, "#bit-2-end-1"		),
            new parentheses		([]							)
        ]),

        new procedure
        ([
            new type			("const_navigator"					),
            new linked_name		("end"			, "#bit-2-end-2"		),
            new parentheses		([]							),
            new keyword			("const"						)
        ])
    ])
]);

const entry_bit_2 = new list
([
    new anchor				("bit-2"						),
    new template
    ([
        new type			( "struct"						),
        new name			("bit"							),
        new angle_braces
        ([
            new value			("bool"							)
        ])
    ]),

    new category			("static members"					),

    new anchor				("bit-2-type"						),
    new member_entry			("type"							),

    new anchor				("bit-2-type_ref"					),
    new member_entry			("type_ref"						),

    new anchor				("bit-2-type_ptr"					),
    new member_entry			("type_ptr"						),

    new anchor				("bit-2-value_type"					),
    new member_entry			("value_type"						),

    new anchor				("bit-2-value_type_ref"					),
    new member_entry			("value_type_ref"					),

    new anchor				("bit-2-value_type_ptr"					),
    new member_entry			("value_type_ptr"					),

    new anchor				("bit-2-iterator"					),
    new member_entry			("iterator"						),

    new anchor				("bit-2-const_iterator"					),
    new member_entry			("const_iterator"					),

    new anchor				("bit-2-navigator"					),
    new member_entry			("navigator"						),

    new anchor				("bit-2-const_navigator"				),
    new member_entry			("const_navigator"					),

    new category			("methods"						),

    new anchor				("bit-2-bit"						),
    new procedure
    ([
        new name			("bit"							),
        new parentheses			([]							)
    ]),

    new anchor				("bit-2-begin-1"					),
    new procedure
    ([
        new type			("navigator"						),
        new name			("begin"						),
        new parentheses			([]							)
    ]),

    new anchor				("bit-2-begin-2"					),
    new procedure
    ([
        new type			("const_navigator"					),
        new name			("begin"						),
        new parentheses			([]							),
        new keyword			("const"						)
    ]),

    new anchor				("bit-2-end-1"						),
    new procedure
    ([
        new type			("navigator"						),
        new name			("end"							),
        new parentheses			([]							)
    ]),

    new anchor				("bit-2-end-2"						),
    new procedure
    ([
        new type			("const_navigator"					),
        new name			("end"							),
        new parentheses			([]							),
        new keyword			("const"						)
    ])
]);

