
const steps = new list
([
    new linked_name		("home"			, "../../../index.html"		),
    new separator		(" / "							),

    new linked_name		("nik"			, "../../index.html"		),
    new separator		(" / "							),

    new linked_name		("metaric"		, "../index.html"		),

    new step			("conditional"						),
    new step			("interface"						),

    new title			("structure"						),
    new title			("semiotic"						),

    new source			("metaric/conditional/interface/structure/semiotic.hpp"	)
]);

/***************************************************************************************************************/

const index_conditional = new list
([
    new template
    ([
        new type			("struct"							),
        new linked_name			("conditional"		, "#conditional"			),
        new angle_braces
        ([
            new parameter		("typename"		, "Predicate"				),
            new parameter		("typename"		, "Expression1"				),
            new parameter		("typename"		, "Expression2"				)
        ])
    ]),

    new collapsible_category		("static members"						),

    new collapsible_list
    ([
        new linked_name			("rtn"			, "#conditional-rtn"			)
    ])
]);

const entry_conditional = new list
([
    new anchor				("conditional"							),
    new template
    ([
        new type			("struct"							),
        new name			("conditional"							),
        new angle_braces                
        ([                              
            new parameter		("typename"		, "Predicate"				),
            new parameter		("typename"		, "Expression1"				),
            new parameter		("typename"		, "Expression2"				)
        ])                              	
    ]),

    new category			("static members"						),

    new anchor				("conditional-rtn"						),
    new description
    ([
        new member_entry		("rtn"								),
        new paragraph
        (

            "When <em>rtn</em> is called, <strong>conditional</strong> evaluates the"			+
            " <em>Predicate</em> returning a <em>boolean</em>, then (by default) passively returns"	+
            " the appropriate <em>Expression</em> (unevaluated). If you want to actively return"	+
            " the <em>Expression</em> (evaluate it before returning), use <em>act<&hellip;></em>."	+
            " Keep in mind this assumes the given <em>Expression</em> has its own <em>rtn</em>."

        )
    ])
]);

/***************************************************************************************************************/

const index_block = new list
([
    new template
    ([
        new type			("struct"							),
        new linked_name			("block"		, "#block"				),
        new angle_braces
        ([
            new parameter		("struct"		, "if_then&lt;&hellip;&gt;"		),
            new parameter		("struct"		, "else_then&lt;&hellip;&gt;&hellip; "	),
            new parameter		("struct"		, "then<&hellip;>"			)
        ])
    ]),

    new collapsible_category		("static members"						),

    new collapsible_list
    ([
        new linked_name			("rtn"			, "#block-rtn"				)
    ])
]);

const entry_block = new list
([
    new anchor				("block"							),
    new template
    ([
        new type			("struct"							),
        new name			("block"							),
        new angle_braces
        ([
            new parameter		("struct"		, "if_then&lt;&hellip;&gt;"		),
            new parameter		("struct"		, "else_then&lt;&hellip;&gt;&hellip; "	),
            new parameter		("struct"		, "then&lt;&hellip;&gt;"		)
        ])
    ]),

    new category			("static members"						),

    new anchor				("block-rtn"							),
    new description
    ([
        new member_entry		("rtn"								),
        new paragraph
        (

            "When <em>rtn</em> is called, <strong>block</strong> evaluates the <em>Predicate</em>"	+
            " within <em>if_then<&hellip;></em> returning a <em>boolean</em>, then (by default)"	+
            " passively returns the appropriate <em>Expression</em> (unevaluated). Otherwise,"		+
            " <strong>block</strong> recursively continues the evaluation looking at any existing"	+
            " <em>else_then<&hellip;></em> adjectives, where it also passively returns the"		+
            " appropriate <em>Expression</em> (unevaluated). Finally, if all such predicates"		+
            " evaluate to false booleans, it returns the <em>Expression</em> (unevaluated)"		+
            " within the <em>then<&hellip;></em> adjective."

        ),

        new paragraph
        (

            "If you want to actively return the sought after <em>Expression</em>"			+
            " (evaluating it before returning), use <em>act<&hellip;></em>. Keep in mind this"		+
            " assumes the <em>Expression</em> has its own <em>rtn</em>."

        )
    ])
]);

