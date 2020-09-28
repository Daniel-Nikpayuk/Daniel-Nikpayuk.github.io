
const steps = new list
([
    new linked_name		("home"			, "../../../index.html"		),
    new separator		(" / "							),

    new linked_name		("nik"			, "../../index.html"		),
    new separator		(" / "							),

    new linked_name		("metaric"		, "../index.html"		),

    new step			("empty"						),
    new step			("interface"						),

    new title			("identity"						),
    new title			("semiotic"						),

    new source			("metaric/empty/interface/identity/semiotic.hpp"	)
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

