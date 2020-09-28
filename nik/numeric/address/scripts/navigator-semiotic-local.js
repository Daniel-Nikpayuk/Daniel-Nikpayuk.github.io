
const steps = new list
([
    new linked_name		("home"			, "../../../index.html"		),
    new separator		(" / "							),

    new linked_name		("nik"			, "../../index.html"		),
    new separator		(" / "							),

    new linked_name		("numeric"		, "../index.html"		),

    new step			("address"						),
    new step			("interface"						),

    new title			("navigator"						),
    new title			("semiotic"						),

    new source			("numeric/address/interface/navigator/semiotic.hpp"	)
]);

/***************************************************************************************************************/

const index_coaddress = new list
([
    new template
    ([
        new type			("struct"								),
        new linked_name			("coaddress"			, "#coaddress"				),
        new angle_braces
        ([
            new parameter		("typename"			, "AddressType"				),
            new default_value
            (
                new parameter		("Access"			, "access"				),
                new value		("Access::readwrite"							)
            )
        ])
    ]),

    new collapsible_category		("static members"							),

    new collapsible_list
    ([
        new linked_name			("type"				, "#coaddress-type"			),
        new linked_name			("type_ref"			, "#coaddress-type_ref"			),
        new linked_name			("type_ptr"			, "#coaddress-type_ptr"			),
                    
        new linked_name			("const_type"			, "#coaddress-const_type"		),
                    
        new linked_name			("bit_type"			, "#coaddress-bit_type"			),
        new linked_name			("bit_type_ref"			, "#coaddress-bit_type_ref"		),
        new linked_name			("bit_type_ptr"			, "#coaddress-bit_type_ptr"		),
                    
        new linked_name			("word_type"			, "#coaddress-word_type"		),
        new linked_name			("word_type_ref"		, "#coaddress-word_type_ref"		),
        new linked_name			("word_type_ptr"		, "#coaddress-word_type_ptr"		),
                    
        new linked_name			("address_type"			, "#coaddress-address_type"		),
        new linked_name			("address_type_ref"		, "#coaddress-address_type_ref"		),
        new linked_name			("address_type_ptr"		, "#coaddress-address_type_ptr"		),

        new linked_name			("bit_iterator"			, "#coaddress-bit_iterator"		),
        new linked_name			("const_bit_iterator"		, "#coaddress-const_bit_iterator"	),

        new linked_name			("word_iterator"		, "#coaddress-word_iterator"		),
        new linked_name			("const_word_iterator"		, "#coaddress-const_word_iterator"	),

        new linked_name			("address_iterator"		, "#coaddress-address_iterator"		),
        new linked_name			("const_address_iterator"	, "#coaddress-const_address_iterator"	)
    ])

    new collapsible_category		("methods"								),

    new collapsible_list
    ([
        new procedure
        ([
            new linked_name		("coaddress"			, "#coaddress-coaddress"		),
            new parentheses		([]									)
        ]),
        
        
        new procedure
        ([
            new linked_name		("coaddress"			, "#coaddress-coaddress"		),
            new parentheses
            ([
                new argument		("power &"			, "l"					)
            ])
        ]),
        
        new procedure
        ([
            new type			("bool"									),
            new linked_name		("operator == "			, "#coaddress-operator_=="		),
            new parentheses
            ([
                new argument		("const type &"			, "c"					)
            ]),
            new keyword			("const"								)
        ]),
        
        new procedure
        ([
            new type			("bool"									),
            new linked_name		("operator != "			, "#coaddress-operator_!="		),
            new parentheses
            ([
                new argument		("const type &"			, "c"					)
            ]),
            new keyword			("const"								)
        ]),
        
        new procedure
        ([
            new type			("operator"								),
            new linked_name		("const_type"			, "#coaddress-const_type"		),
            new parentheses		([]									),
            new keyword			("const"								)
        ]),
        
        new procedure
        ([
            new type			("bit_type_ref"								),
            new linked_name		("operator * "			, "#coaddress-operator_*"		),
            new parentheses		([]									)
        ]),
        
        new procedure
        ([
            new type			("void"									),
            new linked_name		("operator + "			, "#coaddress-operator_+"		),
            new parentheses		([]									)
        ]),
        
        new procedure
        ([
            new type			("void"									),
            new linked_name		("operator - "			, "#coaddress-operator_-"		),
            new parentheses		([]									)
        ]),
        
        new procedure
        ([
            new type			("type_ref"								),
            new linked_name		("operator ++ "			, "#coaddress-operator_++"		),
            new parentheses		([]									)
        ]),
        
        new procedure
        ([
            new type			("type_ref"								),
            new linked_name		("operator += "			, "#coaddress-operator_+="		),
            new parentheses
            ([
                new argument		("size_type"			, "n"					)
            ])
        ]),
        
        new procedure
        ([
            new type			("type_ref"								),
            new linked_name		("operator -- "			, "#coaddress-operator_--"		),
            new parentheses		([]									)
        ]),
        
        new procedure
        ([
            new type			("type_ref"								),
            new linked_name		("operator -= "			, "#coaddress-operator_-="		),
            new parentheses
            ([
                new argument		("size_type"			, "n"					)
            ])
        ])
    ])
]);

const entry_coaddress = new list
([
    new anchor				("coaddress"								),
    new template
    ([
        new type			("struct"								),
        new name			("coaddress"								),
        new angle_braces
        ([
            new parameter		("typename"			, "BitType"				),
            new default_value
            (
                new parameter		("Access"			, "access"				),
                new value		("Access::readwrite"							)
            )
        ])
    ]),

    new category			("static members"							),

    new anchor				("coaddress-type"							),
    new member_entry			("type"									),

    new anchor				("coaddress-type_ref"							),
    new member_entry			("type_ref"								),

    new anchor				("coaddress-type_ptr"							),
    new member_entry			("type_ptr"								),

    new anchor				("coaddress-const_type"							),
    new member_entry			("const_type"								),

    new anchor				("coaddress-bit_type"							),
    new member_entry			("bit_type"								),

    new anchor				("coaddress-bit_type_ref"						),
    new member_entry			("bit_type_ref"								),

    new anchor				("coaddress-bit_type_ptr"						),
    new member_entry			("bit_type_ptr"								),

    new anchor				("coaddress-word_type"							),
    new member_entry			("word_type"								),

    new anchor				("coaddress-word_type_ref"						),
    new member_entry			("word_type_ref"							),

    new anchor				("coaddress-word_type_ptr"						),
    new member_entry			("word_type_ptr"							),

    new anchor				("coaddress-address_type"						),
    new member_entry			("address_type"								),

    new anchor				("coaddress-address_type_ref"						),
    new member_entry			("address_type_ref"							),

    new anchor				("coaddress-address_type_ptr"						),
    new member_entry			("address_type_ptr"							),

    new anchor				("coaddress-bit_iterator"						),
    new member_entry			("bit_iterator"								),

    new anchor				("coaddress-const_bit_iterator"						),
    new member_entry			("const_bit_iterator"							),

    new anchor				("coaddress-word_iterator"						),
    new member_entry			("word_iterator"							),

    new anchor				("coaddress-const_word_iterator"					),
    new member_entry			("const_word_iterator"							),

    new anchor				("coaddress-address_iterator"						),
    new member_entry			("address_iterator"							),

    new anchor				("coaddress-const_address_iterator"					),
    new member_entry			("const_address_iterator"						),

    new category			("methods"								),

/*
    new anchor				("coaddress-coaddress"							),
    new procedure
    ([
        new name			("coaddress"								),
        new parentheses			([]									)
    ]),
*/

    new anchor				("coaddress-coaddress"							),
    new procedure
    ([
        new name			("coaddress"			, "#coaddress-coaddress"		),
        new parentheses
        ([
            new argument		("power &"			, "l"					)
        ])
    ]),

    new anchor				("coaddress-operator_=="						),
    new procedure
    ([
        new type			("bool"									),
        new name			("operator == "								),
        new parentheses
        ([
            new argument		("const type &"			, "c"					)
        ]),
        new keyword			("const"								)
    ]),

    new anchor				("coaddress-operator_!="						),
    new procedure
    ([
        new type			("bool"									),
        new name			("operator != "								),
        new parentheses
        ([
            new argument		("const type &"			, "c"					)
        ]),
        new keyword			("const"								)
    ]),

    new anchor				("coaddress-const_type"							),
    new procedure
    ([
        new type			("operator"								),
        new name			("const_type"								),
        new parentheses			([]									),
        new keyword			("const"								)
    ]),

    new anchor				("coaddress-operator_*"							),
    new procedure
    ([
        new type			("bit_type_ref"								),
        new name			("operator * "								),
        new parentheses			([]									)
    ]),

    new anchor				("coaddress-operator_+"							),
    new procedure
    ([
        new type			("void"									),
        new name			("operator + "								),
        new parentheses			([]									)
    ]),

    new anchor				("coaddress-operator_-"							),
    new procedure
    ([
        new type			("void"									),
        new name			("operator - "								),
        new parentheses			([]									)
    ]),

    new anchor				("coaddress-operator_++"						),
    new procedure
    ([
        new type			("type_ref"								),
        new name			("operator ++ "								),
        new parentheses			([]									)
    ]),

    new anchor				("coaddress-operator_+="						),
    new procedure
    ([
        new type			("type_ref"								),
        new name			("operator += "								),
        new parentheses
        ([
            new argument		("size_type"			, "n"					)
        ])
    ]),

    new anchor				("coaddress-operator_--"						),
    new procedure
    ([
        new type			("type_ref"								),
        new name			("operator -- "								),
        new parentheses			([]									)
    ]),

    new anchor				("coaddress-operator_-="						),
    new procedure
    ([
        new type			("type_ref"								),
        new name			("operator -= "								),
        new parentheses
        ([
            new argument		("size_type"			, "n"					)
        ])
    ])
]);

