
const steps = new list
([
    new linked_name		("home"			, "../../index.html"		),
    new separator		(" / "							),

    new linked_name		("nik"			, "../index.html"		),

    new title			("grammaric"						)
]);

/***************************************************************************************************************/

const module_pointer = new module
([
    new label			("pointer"		, "enable"			),

    new modify
    ([
        new label		("interface"		, "enable"			),
    ]),

    new modify
    ([
        new label		("structure"						),
        new space		("semiotic"		, "enable"			)
    ])
]);

const module_power = new module
([
    new label			("power"		, "enable"			),

    new modify
    ([
        new label		("perspective"		, "enable"			),
    ]),

    new modify
    ([
        new label		("structure"						),
        new space		("semiotic"		, "enable"			)
    ]),

    new modify
    ([
        new label		("navigator"						),
        new space		("semiotic"		, "enable"			)
    ]),

    new modify
    ([
        new label		("identity"						),
        new space		("semiotic"		, "enable"			)
    ]),

    new modify
    ([
        new label		("proximity"						),
        new space		("semiotic"		, "enable"			)
    ]),

    new modify
    ([
        new label		("functor"						),
        new space		("semiotic"		, "enable"			)
    ]),

    new modify
    ([
        new label		("printer"						),
        new space		("semiotic"		, "enable"			)
    ])
]);

