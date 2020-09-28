
const steps = new list
([
    new linked_name		("home"			, "../../../index.html"		),
    new separator		(" / "							),

    new linked_name		("nik"			, "../../index.html"		),
    new separator		(" / "							),

    new linked_name		("numeric"		, "../index.html"		),

    new step			("word"							),
    new step			("interface"						),

    new title			("navigator"						),
    new title			("semiotic"						),

    new source			("numeric/word/interface/navigator/semiotic.hpp"	)
]);

/***************************************************************************************************************/

const index_coword = new list
([
    new template
    ([
        new type			("struct"						),
        new linked_name			("coword"		, "#coword"			),
        new angle_braces
        ([
            new parameter		("typename"		, "WordType"			),
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
        new linked_name			("type"			, "#coword-type"		),
        new linked_name			("type_ref"		, "#coword-type_ref"		),
        new linked_name			("type_ptr"		, "#coword-type_ptr"		),
            
        new linked_name			("const_type"		, "#coword-const_type"		),
            
        new linked_name			("bit_type"		, "#coword-bit_type"		),
        new linked_name			("bit_type_ref"		, "#coword-bit_type_ref"	),
        new linked_name			("bit_type_ptr"		, "#coword-bit_type_ptr"	),
            
        new linked_name			("word_type"		, "#coword-word_type"		),
        new linked_name			("word_type_ref"	, "#coword-word_type_ref"	),
        new linked_name			("word_type_ptr"	, "#coword-word_type_ptr"	),
            
        new linked_name			("bit_iterator"		, "#coword-bit_iterator"	),
        new linked_name			("const_bit_iterator"	, "#coword-const_bit_iterator"	),
            
        new linked_name			("word_iterator"	, "#coword-word_iterator"	),
        new linked_name			("const_word_iterator"	, "#coword-const_word_iterator"	)
    ])

    new collapsible_category		("methods"						),

    new collapsible_list
    ([
        new procedure
        ([
            new linked_name		("coword"		, "#coword-coword"		),
            new parentheses		([]							)
        ]),
        
        
        new procedure
        ([
            new linked_name		("coword"		, "#coword-coword"		),
            new parentheses
            ([
                new argument		("power &"		, "l"				)
            ])
        ]),
        
        new procedure
        ([
            new type			("bool"							),
            new linked_name		("operator == "		, "#coword-operator_=="		),
            new parentheses
            ([
                new argument		("const type &"		, "c"				)
            ]),
            new keyword			("const"						)
        ]),
        
        new procedure
        ([
            new type			("bool"							),
            new linked_name		("operator != "		, "#coword-operator_!="		),
            new parentheses
            ([
                new argument		("const type &"		, "c"				)
            ]),
            new keyword			("const"						)
        ]),
        
        new procedure
        ([
            new type			("operator"						),
            new linked_name		("const_type"		, "#coword-const_type"		),
            new parentheses		([]							),
            new keyword			("const"						)
        ]),
        
        new procedure
        ([
            new type			("bit_type_ref"						),
            new linked_name		("operator * "		, "#coword-operator_*"		),
            new parentheses		([]							)
        ]),
        
        new procedure
        ([
            new type			("void"							),
            new linked_name		("operator + "		, "#coword-operator_+"		),
            new parentheses		([]							)
        ]),
        
        new procedure
        ([
            new type			("void"							),
            new linked_name		("operator - "		, "#coword-operator_-"		),
            new parentheses		([]							)
        ]),
        
        new procedure
        ([
            new type			("type_ref"						),
            new linked_name		("operator ++ "		, "#coword-operator_++"		),
            new parentheses		([]							)
        ]),
        
        new procedure
        ([
            new type			("type_ref"						),
            new linked_name		("operator += "		, "#coword-operator_+="		),
            new parentheses
            ([
                new argument		("size_type"		, "n"				)
            ])
        ]),
        
        new procedure
        ([
            new type			("type_ref"						),
            new linked_name		("operator -- "		, "#coword-operator_--"		),
            new parentheses		([]							)
        ]),
        
        new procedure
        ([
            new type			("type_ref"						),
            new linked_name		("operator -= "		, "#coword-operator_-="		),
            new parentheses
            ([
                new argument		("size_type"		, "n"				)
            ])
        ])
    ])
]);

const entry_coword = new list
([
    new anchor				("coword"						),
    new template
    ([
        new type			("struct"						),
        new name			("coword"						),
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

    new anchor				("coword-type"						),
    new member_entry			("type"							),

    new anchor				("coword-type_ref"					),
    new member_entry			("type_ref"						),

    new anchor				("coword-type_ptr"					),
    new member_entry			("type_ptr"						),

    new anchor				("coword-const_type"					),
    new member_entry			("const_type"						),

    new anchor				("coword-bit_type"					),
    new member_entry			("bit_type"						),

    new anchor				("coword-bit_type_ref"					),
    new member_entry			("bit_type_ref"						),

    new anchor				("coword-bit_type_ptr"					),
    new member_entry			("bit_type_ptr"						),

    new anchor				("coword-word_type"					),
    new member_entry			("word_type"						),

    new anchor				("coword-word_type_ref"					),
    new member_entry			("word_type_ref"					),

    new anchor				("coword-word_type_ptr"					),
    new member_entry			("word_type_ptr"					),

    new anchor				("coword-bit_iterator"					),
    new member_entry			("bit_iterator"						),

    new anchor				("coword-const_bit_iterator"				),
    new member_entry			("const_bit_iterator"					),

    new anchor				("coword-word_iterator"					),
    new member_entry			("word_iterator"					),

    new anchor				("coword-const_word_iterator"				),
    new member_entry			("const_word_iterator"					),

    new category			("methods"						),

/*
    new anchor				("coword-coword"					),
    new procedure
    ([
        new name			("coword"						),
        new parentheses			([]							)
    ]),
*/

    new anchor				("coword-coword"					),
    new procedure
    ([
        new name			("coword"						),
        new parentheses
        ([
            new argument		("power &"		, "l"				)
        ])
    ]),

    new anchor				("coword-operator_=="					),
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

    new anchor				("coword-operator_!="					),
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

    new anchor				("coword-const_type"					),
    new procedure
    ([
        new type			("operator"						),
        new name			("const_type"						),
        new parentheses			([]							),
        new keyword			("const"						)
    ]),

    new anchor				("coword-operator_*"					),
    new procedure
    ([
        new type			("bit_type_ref"						),
        new name			("operator * "						),
        new parentheses			([]							)
    ]),

    new anchor				("coword-operator_+"					),
    new procedure
    ([
        new type			("void"							),
        new name			("operator + "						),
        new parentheses			([]							)
    ]),

    new anchor				("coword-operator_-"					),
    new procedure
    ([
        new type			("void"							),
        new name			("operator - "						),
        new parentheses			([]							)
    ]),

    new anchor				("coword-operator_++"					),
    new procedure
    ([
        new type			("type_ref"						),
        new name			("operator ++ "						),
        new parentheses			([]							)
    ]),

    new anchor				("coword-operator_+="					),
    new procedure
    ([
        new type			("type_ref"						),
        new name			("operator += "						),
        new parentheses
        ([
            new argument		("size_type"		, "n"				)
        ])
    ]),

    new anchor				("coword-operator_--"					),
    new procedure
    ([
        new type			("type_ref"						),
        new name			("operator -- "						),
        new parentheses			([]							)
    ]),

    new anchor				("coword-operator_-="					),
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

