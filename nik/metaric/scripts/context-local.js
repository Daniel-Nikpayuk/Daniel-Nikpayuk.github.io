
const steps = new list
([
    new linked_name		("home"			, "../../index.html"	),
    new separator		(" / "						),

    new linked_name		("nik"			, "../index.html"	),

    new title			("metaric"					)
]);

/***************************************************************************************************************/

const module_empty = new module
([
    new label			("empty"		, "enable"		),

    new modify
    ([
        new label		("identity"					),
        new space		("semiotic"		, "enable"		)
    ])
]);

const module_constant = new module
([
    new label			("constant"		, "enable"		),

    new modify
    ([
        new label		("structure"					),
        new space		("semiotic"		, "enable"		)
    ]),

    new modify
    ([
        new label		("identity"					),
        new space		("semiotic"		, "enable"		)
    ]),

    new modify
    ([
        new label		("proximity"					),
        new space		("semiotic"		, "enable"		)
    ]),

    new append
    ([
        new label		("boolean"					),
        new space		("semiotic"		, "enable"		),
        new space		("media"					)
    ])
]);

const module_tuple = new module
([
    new label			("tuple"		, "enable"		)
]);

const module_conditional = new module
([
    new label			("conditional"		, "enable"		),

    new modify
    ([
        new label		("interface"		, "enable"		),
    ]),

    new modify
    ([
        new label		("structure"					),
        new space		("semiotic"		, "enable"		)
    ])
]);

const module_builtin = new module
([
    new label			("builtin"		, "enable"		),

    new modify
    ([
        new label		("interface"		, "enable"		),
    ]),

    new modify
    ([
        new label		("structure"					),
        new space		("semiotic"		, "enable"		)
    ])
]);

