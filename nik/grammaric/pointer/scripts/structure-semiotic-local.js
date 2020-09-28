
const steps = new list
([
    new linked_name		("home"			, "../../../index.html"		),
    new separator		(" / "							),

    new linked_name		("nik"			, "../../index.html"		),
    new separator		(" / "							),

    new linked_name		("grammaric"		, "../index.html"		),

    new step			("pointer"						),
    new step			("interface"						),

    new title			("structure"						),
    new title			("semiotic"						),

    new source			("grammaric/pointer/interface/structure/semiotic.hpp"	)
]);

/***************************************************************************************************************/

const aliases = new list
([
    new alias_entry
    (
        new name		("read_type"						),
        new template
        ([
            new name		("pointer"						),
            new angle_braces
            ([
                new value	("0"							),
                new value	("Type"							),
                new value	("access"						)
            ])
        ])
    )
]);

/***************************************************************************************************************/

const index_pointer = new list
([
    new template
    ([
        new type			("struct"					),
        new linked_name			("pointer"		, "#pointer"		),
        new angle_braces
        ([
            new parameter		("size_type"		, "N"			),
            new parameter		("typename"		, "Type"		),
            new default_value
            (
                new parameter		("Access"		, "access"		),
                new value		("Access::readwrite"				)
            )
        ])
    ]),

    new collapsible_category		("static members"				),

    new collapsible_list
    ([
        new linked_name			("rtn"			, "#pointer-rtn"	)
    ])
]);

const entry_pointer = new list
([
    new anchor				("pointer"					),
    new template
    ([
        new type			("struct"					),
        new name			("pointer"					),
        new angle_braces
        ([
            new parameter		("size_type"		, "N"			),
            new parameter		("typename"		, "Type"		),
            new default_value
            (
                new parameter		("Access"		, "access"		),
                new value		("Access::readwrite"				)
            )
        ])
    ]),

    new category			("static members"				),

    new anchor				("pointer-rtn"					),
    new description
    ([
        new member_entry		("rtn"						),

        new paragraph
        (

            "Returns a nested pointer to <em>Type</em>. For example, if <em>N = 3</em>,"+
            " then <em>rtn = ***Type</em>. The <em>access</em> value determines if"	+
            " <em>Type</em> is a <em>const</em> or not. For example,"			+
            " <em>pointer<5, char, readonly></em> equals <em>***** (const Type)</em>."

        ),

        new paragraph
        (

            "Finally, in the special case of the alias, <em>read_type</em>"		+
            " can be used to translate back and forth between a <em>Type</em>"		+
            " and <em>Type const</em>. This also works between <em>Type *</em>"		+
            " and <em>Type const *</em>."

        )
    ])
]);

