
const steps = new list
([
    new linked_name		("home"			, "../../../index.html"		),
    new separator		(" / "							),

    new linked_name		("nik"			, "../../index.html"		),
    new separator		(" / "							),

    new linked_name		("metaric"		, "../index.html"		),

    new step			("constant"						),
    new step			("interface"						),

    new title			("structure"						),
    new title			("semiotic"						),

    new source			("metaric/constant/interface/structure/semiotic.hpp"	)
]);

/***************************************************************************************************************/

const aliases = new list
([
    new alias_entry
    (
        new name			("boolean"		),
        new template
        ([
            new name			("constant"		),
            new angle_braces
            ([
                new value		("bool"			),
                new value		("Value"		)
            ])
        ])
    ),

    new alias_entry
    (
        new name			("zero"			),
        new template
        ([
            new name			("constant"		),
            new angle_braces
            ([
                new value		("RegType"		),
                new value		("0"			)
            ])
        ])
    ),

    new alias_entry
    (
        new name			("one"			),
        new template
        ([
            new name			("constant"		),
            new angle_braces
            ([
                new value		("RegType"		),
                new value		("1"			)
            ])
        ])
    ),

    new alias_entry
    (
        new name			("two"			),
        new template
        ([
            new name			("constant"		),
            new angle_braces
            ([
                new value		("RegType"		),
                new value		("2"			)
            ])
        ])
    ),

    new alias_entry
    (
        new name			("three"		),
        new template
        ([
            new name			("constant"		),
            new angle_braces
            ([
                new value		("RegType"		),
                new value		("3"			)
            ])
        ])
    ),

    new alias_entry
    (
        new name			("nibble"		),
        new template
        ([
            new name			("constant"		),
            new angle_braces
            ([
                new value		("RegType"		),
                new value		("4"			)
            ])
        ])
    ),

    new alias_entry
    (
        new name			("byte"			),
        new template
        ([
            new name			("constant"		),
            new angle_braces
            ([
                new value		("RegType"		),
                new value		("8"			)
            ])
        ])
    )
]);

/***************************************************************************************************************/

const index_constant_1 = new list
([
    new template
    ([
        new type			("struct"						),
        new linked_name			("constant"		, "#constant-1"			),
        new angle_braces
        ([
            new parameter		("typename"		, "Type"			)
        ])
    ]),

    new collapsible_category		("static members"					),

    new collapsible_list
    ([
        new linked_name			("type"			, "#constant-1-type"		),
        new linked_name			("rtn"			, "#constant-1-rtn"		),
        new linked_name			("value_type"		, "#constant-1-value_type"	)
    ])
]);

const entry_constant_1 = new list
([
    new anchor				("constant-1"						),
    new template
    ([
        new type			("struct"						),
        new name			("constant"						),
        new angle_braces
        ([
            new parameter		("typename"		, "Type"			)
        ])
    ]),

    new category			("static members"					),

    new anchor				("constant-1-type"					),
    new alias_entry
    (
        new name			("type"							),
        new value			("constant"						)
    ),

    new anchor				("constant-1-rtn"					),
    new alias_entry
    (
        new name			("rtn"							),
        new value			("constant"						)
    ),

    new anchor				("constant-1-value_type"				),
    new alias_entry
    (
        new name			("value_type"						),
        new value			("Type"							)
    )
]);

/***************************************************************************************************************/

const index_constant_2 = new list
([
    new template
    ([
        new type			("struct"						),
        new linked_name			("constant"		, "#constant-2"			),
        new angle_braces
        ([
            new parameter		("typename"		, "Type"			),
            new parameter		("Type"			, "Value"			)
        ])
    ]),

    new collapsible_category		("static members"					),

    new collapsible_list
    ([
        new linked_name			("type"			, "#constant-2-type"		),
        new linked_name			("rtn"			, "#constant-2-rtn"		),
        new linked_name			("value_type"		, "#constant-2-value_type"	),
        new linked_name			("value"		, "#constant-2-value"		)
    ])
]);

const entry_constant_2 = new list
([
    new anchor				("constant-2"						),
    new template
    ([
        new type			("struct"						),
        new name			("struct"		, "constant"			),
        new angle_braces
        ([
            new parameter		("typename"		, "Type"			),
            new parameter		("Type"			, "Value"			)
        ])
    ]),

    new category			("static members"					),

    new anchor				("constant-2-type"					),
    new alias_entry
    (
        new name			("type"							),
        new value			("constant"						)
    ),

    new anchor				("constant-2-rtn"					),
    new alias_entry
    (
        new name			("rtn"							),
        new value			("constant"						)
    ),

    new anchor				("constant-2-value_type"				),
    new alias_entry
    (
        new name			("value_type"						),
        new value			("Type"							)
    ),

    new anchor				("constant-2-value"					),
    new alias_entry
    (
        new binding			("value_type"		, "value"			),
        new value			("Value"						)
    )
]);

