
const steps = new list
([
    new linked_name		("home"			, "../../../index.html"		),
    new separator		(" / "							),

    new linked_name		("nik"			, "../../index.html"		),
    new separator		(" / "							),

    new linked_name		("numeric"		, "../index.html"		),

    new step			("word"							),
    new step			("interface"						),

    new title			("structure"						),
    new title			("semiotic"						),

    new source			("numeric/word/interface/structure/semiotic.hpp"	)
]);

/***************************************************************************************************************/

const index_word_1 = new list
([
    new template
    ([
        new type			("struct"						),
        new linked_name			("word"			, "#word-1"			),
        new angle_braces
        ([
            new parameter		( "typename"		, "BitType"			),
            new parameter		( "size_type"		, "length"			)
        ])
    ]),

    new collapsible_category		("static members"					),

    new collapsible_list
    ([
        new linked_name			("type"			, "#word-1-type"		),
        new linked_name			("type_ref"		, "#word-1-type_ref"		),
        new linked_name			("type_ptr"		, "#word-1-type_ptr"		),
            
        new linked_name			("value_type"		, "#word-1-value_type"		),
        new linked_name			("value_type_ref"	, "#word-1-value_type_ref"	),
        new linked_name			("value_type_ptr"	, "#word-1-value_type_ptr"	),
            
        new linked_name			("iterator"		, "#word-1-iterator"		),
        new linked_name			("const_iterator"	, "#word-1-const_iterator"	),
            
        new linked_name			("navigator"		, "#word-1-navigator"		),
        new linked_name			("const_navigator"	, "#word-1-const_navigator"	)
    ]),

    new collapsible_category		("methods"						),

    new collapsible_list
    ([
        new procedure
        ([
            new linked_name		("word"			, "#word-1-word-1"		),
            new parentheses		([]							)
        ]),

        new procedure
        ([
            new linked_name		("word"			, "#word-1-word-2"		),
            new parentheses
            ([
                new argument		("const type &"		, "w"				)
            ])
        ]),

        new procedure
        ([
            new type			("navigator"						),
            new linked_name		("begin"		, "#word-1-begin-1"		),
            new parentheses		([]							)
        ]),

        new procedure
        ([
            new type			("const_navigator"					),
            new linked_name		("begin"		, "#word-1-begin-2"		),
            new parentheses		([]							),
            new keyword			("const"						)
        ]),

        new procedure
        ([
            new type			("navigator"						),
            new linked_name		("end"			, "#word-1-end-1"		),
            new parentheses		([]							)
        ]),

        new procedure
        ([
            new type			("const_navigator"					),
            new linked_name		("end"			, "#word-1-end-2"		),
            new parentheses		([]							),
            new keyword			("const"						)
        ])
    ])
]);

const entry_word_1 = new list
([
    new anchor				("word-1"						),
    new template
    ([
        new type			( "struct"						),
        new name			("word"							),
        new angle_braces
        ([
            new parameter		( "typename"		, "BitType"			),
            new parameter		( "size_type"		, "length"			)
        ])
    ]),

    new category			("static members"					),

    new anchor				("word-1-type"						),
    new member_entry			("type"							),

    new anchor				("word-1-type_ref"					),
    new member_entry			("type_ref"						),

    new anchor				("word-1-type_ptr"					),
    new member_entry			("type_ptr"						),

    new anchor				("word-1-value_type"					),
    new member_entry			("value_type"						),

    new anchor				("word-1-value_type_ref"				),
    new member_entry			("value_type_ref"					),

    new anchor				("word-1-value_type_ptr"				),
    new member_entry			("value_type_ptr"					),

    new anchor				("word-1-iterator"					),
    new member_entry			("iterator"						),

    new anchor				("word-1-const_iterator"				),
    new member_entry			("const_iterator"					),

    new anchor				("word-1-navigator"					),
    new member_entry			("navigator"						),

    new anchor				("word-1-const_navigator"				),
    new member_entry			("const_navigator"					),

    new category			("methods"						),

    new anchor				("word-1-word-1"					),
    new procedure
    ([
        new name			("word"							),
        new parentheses			([]							)
    ]),

    new anchor				("word-1-word-2"					),
    new procedure
    ([
        new name			("word"							),
        new parentheses
        ([
            new argument		("const type &"		, "w"				)
        ])
    ]),

    new anchor				("word-1-begin-1"					),
    new procedure
    ([
        new type			("navigator"						),
        new name			("begin"						),
        new parentheses			([]							)
    ]),

    new anchor				("word-1-begin-2"					),
    new procedure
    ([
        new type			("const_navigator"					),
        new name			("begin"						),
        new parentheses			([]							),
        new keyword			("const"						)
    ]),

    new anchor				("word-1-end-1"						),
    new procedure
    ([
        new type			("navigator"						),
        new name			("end"							),
        new parentheses			([]							)
    ]),

    new anchor				("word-1-end-2"						),
    new procedure
    ([
        new type			("const_navigator"					),
        new name			("end"							),
        new parentheses			([]							),
        new keyword			("const"						)
    ])
]);

/***************************************************************************************************************/

const index_word_2 = new list
([
    new template
    ([
        new type			("struct"						),
        new linked_name			("word"			, "#word-2"			),
        new angle_braces
        ([
            new value			("bit&lt;bool&gt;"					),
            new parameter		( "size_type"		, "length"			)
        ])
    ]),

    new collapsible_category		("static members"					),

    new collapsible_list
    ([
        new linked_name			("type"			, "#word-2-type"		),
        new linked_name			("type_ref"		, "#word-2-type_ref"		),
        new linked_name			("type_ptr"		, "#word-2-type_ptr"		),
            
        new linked_name			("value_type"		, "#word-2-value_type"		),
        new linked_name			("value_type_ref"	, "#word-2-value_type_ref"	),
        new linked_name			("value_type_ptr"	, "#word-2-value_type_ptr"	),
            
        new linked_name			("iterator"		, "#word-2-iterator"		),
        new linked_name			("const_iterator"	, "#word-2-const_iterator"	),
            
        new linked_name			("navigator"		, "#word-2-navigator"		),
        new linked_name			("const_navigator"	, "#word-2-const_navigator"	)
    ]),

    new collapsible_category		("methods"						),

    new collapsible_list
    ([
        new procedure
        ([
            new linked_name		("word"			, "#word-2-word-1"		),
            new parentheses		([]							)
        ]),

        new procedure
        ([
            new linked_name		("word"			, "#word-2-word-2"		),
            new parentheses
            ([
                new argument		("const type &"		, "w"				)
            ])
        ]),

        new procedure
        ([
            new type			("navigator"						),
            new linked_name		("begin"		, "#word-2-begin-1"		),
            new parentheses		([]							)
        ]),

        new procedure
        ([
            new type			("const_navigator"					),
            new linked_name		("begin"		, "#word-2-begin-2"		),
            new parentheses		([]							),
            new keyword			("const"						)
        ]),

        new procedure
        ([
            new type			("navigator"						),
            new linked_name		("end"			, "#word-2-end-1"		),
            new parentheses		([]							)
        ]),

        new procedure
        ([
            new type			("const_navigator"					),
            new linked_name		("end"			, "#word-2-end-2"		),
            new parentheses		([]							),
            new keyword			("const"						)
        ])
    ])
]);

const entry_word_2 = new list
([
    new anchor				("word-2"						),
    new template
    ([
        new type			( "struct"						),
        new name			("word"							),
        new angle_braces
        ([
            new value			("bit&lt;bool&gt;"					),
            new parameter		( "size_type"		, "length"			)
        ])
    ]),

    new category			("static members"					),

    new anchor				("word-2-type"						),
    new member_entry			("type"							),

    new anchor				("word-2-type_ref"					),
    new member_entry			("type_ref"						),

    new anchor				("word-2-type_ptr"					),
    new member_entry			("type_ptr"						),

    new anchor				("word-2-value_type"					),
    new member_entry			("value_type"						),

    new anchor				("word-2-value_type_ref"				),
    new member_entry			("value_type_ref"					),

    new anchor				("word-2-value_type_ptr"				),
    new member_entry			("value_type_ptr"					),

    new anchor				("word-2-iterator"					),
    new member_entry			("iterator"						),

    new anchor				("word-2-const_iterator"				),
    new member_entry			("const_iterator"					),

    new anchor				("word-2-navigator"					),
    new member_entry			("navigator"						),

    new anchor				("word-2-const_navigator"				),
    new member_entry			("const_navigator"					),

    new category			("methods"						),

    new anchor				("word-2-word-1"					),
    new procedure
    ([
        new name			("word"							),
        new parentheses			([]							)
    ]),

    new anchor				("word-2-word-2"					),
    new procedure
    ([
        new name			("word"							),
        new parentheses
        ([
            new argument		("const type &"		, "w"				)
        ])
    ]),

    new anchor				("word-2-begin-1"					),
    new procedure
    ([
        new type			("navigator"						),
        new name			("begin"						),
        new parentheses			([]							)
    ]),

    new anchor				("word-2-begin-2"					),
    new procedure
    ([
        new type			("const_navigator"					),
        new name			("begin"						),
        new parentheses			([]							),
        new keyword			("const"						)
    ]),

    new anchor				("word-2-end-1"						),
    new procedure
    ([
        new type			("navigator"						),
        new name			("end"							),
        new parentheses			([]							)
    ]),

    new anchor				("word-2-end-2"						),
    new procedure
    ([
        new type			("const_navigator"					),
        new name			("end"							),
        new parentheses			([]							),
        new keyword			("const"						)
    ])
]);

