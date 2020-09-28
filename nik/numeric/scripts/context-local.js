
const steps = new list
([
    new linked_name		("home"			, "../../index.html"		),
    new separator		(" / "							),

    new linked_name		("nik"			, "../index.html"		),

    new title			("numeric"						)
]);

/***************************************************************************************************************/

const module_bit = new module
([
    new label			("bit"			, "enable"			),

    new modify
    ([
        new label		("structure"						),
        new space		("semiotic"		, "enable"			)
    ])
]);

const module_word = new module
([
    new label			("word"			, "enable"			),

    new modify
    ([
        new label		("interface"		, "enable"			),
    ]),

    new modify
    ([
        new label		("structure"						),
        new space		("semiotic"		, "enable"			)
    ]),

    new append
    ([
        new label		("uint"							),
        new space		("semiotic"		, "enable"			),
        new space		("media"						)
    ])
]);

const module_address = new module
([
    new label			("address"		, "enable"			),

    new modify
    ([
        new label		("interface"		, "enable"			),
    ]),

    new modify
    ([
        new label		("structure"						),
        new space		("semiotic"		, "enable"			)
    ]),

    new append
    ([
        new label		("uint"							),
        new space		("semiotic"		, "enable"			),
        new space		("media"						)
    ])
]);

