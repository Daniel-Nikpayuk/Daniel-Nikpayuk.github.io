
const steps = new list
([
    new linked_name		("home"			, "../../../index.html"		),
    new separator		(" / "							),

    new linked_name		("nik"			, "../../index.html"		),
    new separator		(" / "							),

    new linked_name		("metaric"		, "../index.html"		),

    new step			("builtin"						),
    new step			("interface"						),

    new title			("structure"						),
    new title			("semiotic"						),

    new source			("metaric/builtin/interface/structure/semiotic.hpp"	)
]);

/***************************************************************************************************************/

const index_limits = new list
([
    new template
    ([
        new type			("struct"						),
        new linked_name			("limits"		, "#limits"			),
        new angle_braces
        ([
            new parameter		("typename"		, "RegType"			)
        ])
    ]),

    new collapsible_category		("static members"					),

    new collapsible_list
    ([
        new linked_name			("max"			, "#limits-max"			),
        new linked_name			("min"			, "#limits-min"			)
    ])
]);

const entry_limits = new list
([
    new anchor				("limits"						),
    new template
    ([
        new type			("struct"						),
        new name			("limits"						),
        new angle_braces
        ([
            new parameter		("typename"		, "RegType"			)
        ])
    ]),

    new category			("static members"					),

    new anchor				("limits-max"						),
    new description
    ([
        new member_entry		("max"							),
        new paragraph
        (

            "Returns the maximum value specified by the lexical <em>RegType</em>."

        )
    ]),

    new anchor				("limits-min"						),
    new description
    ([
        new member_entry		("min"							),
        new paragraph
        (

            "Returns the minimum value specified by the lexical <em>RegType</em>."

        )
    ])
]);

/***************************************************************************************************************/

const index_builtin = new list
([
    new template
    ([
        new type			("struct"						),
        new linked_name			("builtin"		, "#builtin"			),
        new angle_braces
        ([
            new parameter		("typename"		, "RegType"			)
        ])
    ]),

    new collapsible_category		("static members"					),

    new collapsible_list
    ([
        new linked_name			("byte"			, "#builtin-byte"		),
        new linked_name			("length"		, "#builtin-length"		),
        new linked_name			("max"			, "#builtin-max"		),
        new linked_name			("min"			, "#builtin-min"		),
        new linked_name			("reg_type"		, "#builtin-reg_type"		),
        new linked_name			("sign"			, "#builtin-sign"		)
    ])
]);

const entry_builtin = new list
([
    new anchor				("builtin"						),
    new template
    ([
        new type			("struct"						),
        new name			("builtin"						),
        new angle_braces
        ([
            new parameter		("typename"		, "RegType"			)
        ])
    ]),

    new category			("static members"					),

    new anchor				("builtin-byte"						),
    new description
    ([
        new member_entry		("byte"							),
        new paragraph
        (

            "Returns <em>constant<8></em>, with its member <em>value</em> adjusted"		+
            " to the lexical <em>RegType</em>. This member is a convenience redundant."

        )
    ]),

    new anchor				("builtin-length"					),
    new description
    ([
        new member_entry		("length"						),
        new paragraph
        (

            "Returns the bit length of the lexical <em>RegType</em>. For example,"		+
            " <em>builtin&lt;unsigned int&gt;::length = 32</em>"				+
            " by most compiler implementations."

        )
    ]),

    new anchor				("builtin-max"						),
    new description
    ([
        new member_entry		("max"							),
        new paragraph
        (

            "Returns the minimum value specified by the lexical <em>RegType</em>."

        )
    ]),

    new anchor				("builtin-min"						),
    new description
    ([
        new member_entry		("min"							),
        new paragraph
        (

            "Returns the minimum value specified by the lexical <em>RegType</em>."

        )
    ]),

    new anchor				("builtin-reg_type"					),
    new description
    ([
        new member_entry		("reg_type"						),
        new paragraph
        (

            "Returns the lexical <em>RegType</em>."

        )
    ]),

    new anchor				("builtin-sign"						),
    new description
    ([
        new member_entry		("sign"							),
        new paragraph
        (

            "Returns <em>Sign::natural</em> if <em>RegType</em> is unsigned,"			+
            " otherwise returns <em>Sign::integer</em> when it's signed."

        )
    ])
]);

/***************************************************************************************************************/

const index_byte_type = new list
([
    new template
    ([
        new type			("struct"							),
        new linked_name			("byte_type"		, "#byte_type"				),
        new angle_braces
        ([
            new parameter		("size_type"		, "N"					),
            new default_value
            (
                new parameter		("Sign"			, "sign"				),
                new value		("Sign::natural"						)
            )
        ])
    ]),

    new collapsible_category		("static members"						),

    new collapsible_list
    ([
        new linked_name			("builtin_type"		, "#byte_type-builtin_type"		),
        new linked_name			("half_type"		, "#byte_type-half_type"		),
        new linked_name			("head"			, "#byte_type-head"			),
        new linked_name			("high_pass"		, "#byte_type-high_pass"		),
        new linked_name			("length"		, "#byte_type-length"			),
//      new linked_name			("lower"		, "#byte_type-lower"			),
        new linked_name			("low_pass"		, "#byte_type-low_pass"			),
        new linked_name			("max"			, "#byte_type-max"			),
        new linked_name			("min"			, "#byte_type-min"			),
        new linked_name			("one"			, "#byte_type-one"			),
        new linked_name			("order"		, "#byte_type-order"			),
        new linked_name			("reg_type"		, "#byte_type-reg_type"			),
        new linked_name			("sign"			, "#byte_type-sign"			),
        new linked_name			("tail"			, "#byte_type-tail"			),
//      new linked_name			("upper"		, "#byte_type-upper"			),
        new linked_name			("zero"			, "#byte_type-zero"			)
    ])
]);

const entry_byte_type = new list
([
    new anchor				("byte_type"							),
    new template
    ([
        new type			("struct"							),
        new name			("byte_type"							),
        new angle_braces
        ([
            new parameter		("size_type"		, "N"					),
            new default_value
            (
                new parameter		("Sign"			, "sign"				),
                new value		("Sign::natural"						)
            )
        ])
    ]),

    new category			("static members"						),

    new anchor				("byte_type-builtin_type"					),
    new description
    ([
        new member_entry		("builtin_type"							),
        new paragraph
        (

            "Returns the derived <em>builtin</em> type, with respect to the bit length <em>N</em>."

        )
    ]),

    new anchor				("byte_type-half_type"						),
    new description
    ([
        new member_entry		("half_type"							),
        new paragraph
        (

            "Returns another <em>byte_type</em> struct with its bit length set to <em>N/2</em>."

        )
    ]),

    new anchor				("byte_type-head"						),
    new description
    ([
        new member_entry		("head"								),
        new paragraph
        (

            "Returns the largest power of 2 available, with respect to the derived <em>reg_type</em>."

        )
    ]),

    new anchor				("byte_type-high_pass"						),
    new description
    ([
        new member_entry		("high_pass"							),
        new paragraph
        (

            "Returns a <em>reg_type</em> instance such that its upper block is bit set as all 1s,"	+
            " while its lower block is bit set as all 0s (eg. 11110000)."

        )
    ]),

    new anchor				("byte_type-length"						),
    new description
    ([
        new member_entry		("length"							),
        new paragraph
        (

            "Returns <em>N</em>, the lexical bit length."

        )
    ]),

/*
    new anchor				("byte_type-lower"						),
    new description
    ([
        new member_entry		("lower"							),
        new paragraph
        (

            "Returns "

        )
    ]),
*/

    new anchor				("byte_type-low_pass"						),
    new description
    ([
        new member_entry		("low_pass"							),
        new paragraph
        (

            "Returns a <em>reg_type</em> instance such that its lower block is bit set as all 1s,"	+
            " while its upper block is bit set as all 0s (eg. 00001111)."

        )
    ]),

    new anchor				("byte_type-max"						),
    new description
    ([
        new member_entry		("max"								),
        new paragraph
        (

            "Returns the derived <em>max</em> value, with respect to the bit length <em>N</em>."

        )
    ]),

    new anchor				("byte_type-min"						),
    new description
    ([
        new member_entry		("min"								),
        new paragraph
        (

            "Returns the derived <em>min</em> value, with respect to the bit length <em>N</em>."

        )
    ]),

    new anchor				("byte_type-one"						),
    new description
    ([
        new member_entry		("one"								),
        new paragraph
        (

            "Returns <em>constant<1></em>, with its <em>member</em> type adjusted to the lexical"	+
            " <em>RegType</em>. This <em>member</em> is redundant for convenience."

        )
    ]),

    new anchor				("byte_type-order"						),
    new description
    ([
        new member_entry		("order"							),
        new paragraph
        (

            "Returns <em>N - 1</em>."

        )
    ]),

    new anchor				("byte_type-reg_type"						),
    new description
    ([
        new member_entry		("reg_type"							),
        new paragraph
        (

            "Returns the derived <em>reg_type</em>, with respect to the bit length <em>N</em>."

        )
    ]),

    new anchor				("byte_type-sign"						),
    new description
    ([
        new member_entry		("sign"								),
        new paragraph
        (

            "Returns the derived <em>Sign</em> type, with respect to the bit length <em>N</em>."

        )
    ]),

    new anchor				("byte_type-tail"						),
    new description
    ([
        new member_entry		("tail"								),
        new paragraph
        (

            "Returns the smallest power of 2 available, with respect to the derived <em>reg_type</em>."	+
            "In the case that <em>sign = natural</em>, the smallest power of two equals zero."

        )
    ]),

/*
    new anchor				("byte_type-upper"						),
    new description
    ([
        new member_entry		("upper"							),
        new paragraph
        (

            "Returns "

        )
    ]),
*/

    new anchor				("byte_type-zero"						),
    new description
    ([
        new member_entry		("zero"								),
        new paragraph
        (

            "Returns <em>constant<0></em>, with its <em>member</em> type adjusted to the lexical"	+
            " <em>RegType</em>. This <em>member</em> is redundant for convenience."

        )
    ])
]);

