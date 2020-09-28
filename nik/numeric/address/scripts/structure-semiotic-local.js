
const steps = new list
([
    new linked_name		("home"			, "../../../index.html"		),
    new separator		(" / "							),

    new linked_name		("nik"			, "../../index.html"		),
    new separator		(" / "							),

    new linked_name		("numeric"		, "../index.html"		),

    new step			("address"						),
    new step			("interface"						),

    new title			("structure"						),
    new title			("semiotic"						),

    new source			("numeric/address/interface/structure/semiotic.hpp"	)
]);

/***************************************************************************************************************/

const index_address_1 = new list
([
    new template
    ([
        new type			("struct"						),
        new linked_name			("address"		, "#address-1"			),
        new angle_braces
        ([
            new parameter		( "typename"		, "WordType"			),
            new parameter		( "size_type"		, "length"			)
        ])
    ]),

    new collapsible_category		("static members"					),

    new collapsible_list
    ([
        new linked_name			("type"			, "#address-1-type"		),
        new linked_name			("type_ref"		, "#address-1-type_ref"		),
        new linked_name			("type_ptr"		, "#address-1-type_ptr"		),
            
        new linked_name			("value_type"		, "#address-1-value_type"	),
        new linked_name			("value_type_ref"	, "#address-1-value_type_ref"	),
        new linked_name			("value_type_ptr"	, "#address-1-value_type_ptr"	),
            
        new linked_name			("iterator"		, "#address-1-iterator"		),
        new linked_name			("const_iterator"	, "#address-1-const_iterator"	),
            
        new linked_name			("navigator"		, "#address-1-navigator"	),
        new linked_name			("const_navigator"	, "#address-1-const_navigator"	)
    ]),

    new collapsible_category		("methods"						),

    new collapsible_list
    ([
        new procedure
        ([
            new linked_name		("address"		, "#address-1-address-1"	),
            new parentheses		([]							)
        ]),

        new procedure
        ([
            new linked_name		("address"		, "#address-1-address-2"	),
            new parentheses
            ([
                new argument		("const type &"		, "w"				)
            ])
        ]),

        new procedure
        ([
            new type			("navigator"						),
            new linked_name		("begin"		, "#address-1-begin-1"		),
            new parentheses		([]							)
        ]),

        new procedure
        ([
            new type			("const_navigator"					),
            new linked_name		("begin"		, "#address-1-begin-2"		),
            new parentheses		([]							),
            new keyword			("const"						)
        ]),

        new procedure
        ([
            new type			("navigator"						),
            new linked_name		("end"			, "#address-1-end-1"		),
            new parentheses		([]							)
        ]),

        new procedure
        ([
            new type			("const_navigator"					),
            new linked_name		("end"			, "#address-1-end-2"		),
            new parentheses		([]							),
            new keyword			("const"						)
        ])
    ])
]);

const entry_address_1 = new list
([
    new anchor				("address-1"						),
    new template
    ([
        new type			( "struct"						),
        new name			("address"						),
        new angle_braces
        ([
            new parameter		( "typename"		, "WordType"			),
            new parameter		( "size_type"		, "length"			)
        ])
    ]),

    new category			("static members"					),

    new anchor				("address-1-type"					),
    new member_entry			("type"							),

    new anchor				("address-1-type_ref"					),
    new member_entry			("type_ref"						),

    new anchor				("address-1-type_ptr"					),
    new member_entry			("type_ptr"						),

    new anchor				("address-1-value_type"					),
    new member_entry			("value_type"						),

    new anchor				("address-1-value_type_ref"				),
    new member_entry			("value_type_ref"					),

    new anchor				("address-1-value_type_ptr"				),
    new member_entry			("value_type_ptr"					),

    new anchor				("address-1-iterator"					),
    new member_entry			("iterator"						),

    new anchor				("address-1-const_iterator"				),
    new member_entry			("const_iterator"					),

    new anchor				("address-1-navigator"					),
    new member_entry			("navigator"						),

    new anchor				("address-1-const_navigator"				),
    new member_entry			("const_navigator"					),

    new category			("methods"						),

    new anchor				("address-1-address-1"					),
    new procedure
    ([
        new name			("address"						),
        new parentheses			([]							)
    ]),

    new anchor				("address-1-address-2"					),
    new procedure
    ([
        new name			("address"						),
        new parentheses
        ([
            new argument		("const type &"		, "w"				)
        ])
    ]),

    new anchor				("address-1-begin-1"					),
    new procedure
    ([
        new type			("navigator"						),
        new name			("begin"						),
        new parentheses			([]							)
    ]),

    new anchor				("address-1-begin-2"					),
    new procedure
    ([
        new type			("const_navigator"					),
        new name			("begin"						),
        new parentheses			([]							),
        new keyword			("const"						)
    ]),

    new anchor				("address-1-end-1"					),
    new procedure
    ([
        new type			("navigator"						),
        new name			("end"							),
        new parentheses			([]							)
    ]),

    new anchor				("address-1-end-2"					),
    new procedure
    ([
        new type			("const_navigator"					),
        new name			("end"							),
        new parentheses			([]							),
        new keyword			("const"						)
    ])
]);

/***************************************************************************************************************/

const index_address_2 = new list
([
    new template
    ([
        new type			("struct"						),
        new linked_name			("address"		, "#address-2"			),
        new angle_braces
        ([
            new value			( "word&lt;bit&lt;bool&gt;&gt;"				),
            new parameter		( "size_type"		, "length"			)
        ])
    ]),

    new collapsible_category		("static members"					),

    new collapsible_list
    ([
        new linked_name			("type"			, "#address-2-type"		),
        new linked_name			("type_ref"		, "#address-2-type_ref"		),
        new linked_name			("type_ptr"		, "#address-2-type_ptr"		),
            
        new linked_name			("value_type"		, "#address-2-value_type"	),
        new linked_name			("value_type_ref"	, "#address-2-value_type_ref"	),
        new linked_name			("value_type_ptr"	, "#address-2-value_type_ptr"	),
            
        new linked_name			("iterator"		, "#address-2-iterator"		),
        new linked_name			("const_iterator"	, "#address-2-const_iterator"	),
            
        new linked_name			("navigator"		, "#address-2-navigator"	),
        new linked_name			("const_navigator"	, "#address-2-const_navigator"	)
    ]),

    new collapsible_category		("methods"						),

    new collapsible_list
    ([
        new procedure
        ([
            new linked_name		("address"		, "#address-2-address-1"	),
            new parentheses		([]							)
        ]),

        new procedure
        ([
            new linked_name		("address"		, "#address-2-address-2"	),
            new parentheses
            ([
                new argument		("const type &"		, "w"				)
            ])
        ]),

        new procedure
        ([
            new type			("navigator"						),
            new linked_name		("begin"		, "#address-2-begin-1"		),
            new parentheses		([]							)
        ]),

        new procedure
        ([
            new type			("const_navigator"					),
            new linked_name		("begin"		, "#address-2-begin-2"		),
            new parentheses		([]							),
            new keyword			("const"						)
        ]),

        new procedure
        ([
            new type			("navigator"						),
            new linked_name		("end"			, "#address-2-end-1"		),
            new parentheses		([]							)
        ]),

        new procedure
        ([
            new type			("const_navigator"					),
            new linked_name		("end"			, "#address-2-end-2"		),
            new parentheses		([]							),
            new keyword			("const"						)
        ])
    ])
]);

const entry_address_2 = new list
([
    new anchor				("address-2"						),
    new template
    ([
        new type			( "struct"						),
        new name			("address"						),
        new angle_braces
        ([
            new value			( "word&lt;bit&lt;bool&gt;&gt;"				),
            new parameter		( "size_type"		, "length"			)
        ])
    ]),

    new category			("static members"					),

    new anchor				("address-2-type"					),
    new member_entry			("type"							),

    new anchor				("address-2-type_ref"					),
    new member_entry			("type_ref"						),

    new anchor				("address-2-type_ptr"					),
    new member_entry			("type_ptr"						),

    new anchor				("address-2-value_type"					),
    new member_entry			("value_type"						),

    new anchor				("address-2-value_type_ref"				),
    new member_entry			("value_type_ref"					),

    new anchor				("address-2-value_type_ptr"				),
    new member_entry			("value_type_ptr"					),

    new anchor				("address-2-iterator"					),
    new member_entry			("iterator"						),

    new anchor				("address-2-const_iterator"				),
    new member_entry			("const_iterator"					),

    new anchor				("address-2-navigator"					),
    new member_entry			("navigator"						),

    new anchor				("address-2-const_navigator"				),
    new member_entry			("const_navigator"					),

    new category			("methods"						),

    new anchor				("address-2-address-1"					),
    new procedure
    ([
        new name			("address"						),
        new parentheses			([]							)
    ]),

    new anchor				("address-2-address-2"					),
    new procedure
    ([
        new name			("address"						),
        new parentheses
        ([
            new argument		("const type &"		, "w"				)
        ])
    ]),

    new anchor				("address-2-begin-1"					),
    new procedure
    ([
        new type			("navigator"						),
        new name			("begin"						),
        new parentheses			([]							)
    ]),

    new anchor				("address-2-begin-2"					),
    new procedure
    ([
        new type			("const_navigator"					),
        new name			("begin"						),
        new parentheses			([]							),
        new keyword			("const"						)
    ]),

    new anchor				("address-2-end-1"					),
    new procedure
    ([
        new type			("navigator"						),
        new name			("end"							),
        new parentheses			([]							)
    ]),

    new anchor				("address-2-end-2"					),
    new procedure
    ([
        new type			("const_navigator"					),
        new name			("end"							),
        new parentheses			([]							),
        new keyword			("const"						)
    ])
]);

