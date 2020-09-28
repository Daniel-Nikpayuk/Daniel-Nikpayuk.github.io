
const path_list = [ steps ];

const syntax_list =
[
    index_limits,
    index_builtin,
    index_byte_type
];

const semantics_list =
[
    entry_limits,
    entry_builtin,
    entry_byte_type
];

/***************************************************************/

convert("path_list"		, path_list		);
convert("syntax_list"		, syntax_list		);
convert("semantics_list"	, semantics_list	);

