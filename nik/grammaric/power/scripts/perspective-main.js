
const path_list = [ steps ];

const syntax_list =
[
    new category("generic"),

    index_generic,

    new category("adjectives"),

    index_Direction,
    index_Interval,
    index_object,

    new category("adverbs"),

    index_compare_equal,
    index_compare_greater_than,
    index_compare_greater_than_or_equal,
    index_compare_less_than,
    index_compare_less_than_or_equal,
    index_compare_not_equal,
    index_compare_zero,
    index_map_assign,
    index_map_print_1,
    index_map_print_2,
    index_map_set
];

const semantics_list =
[
    new category("generic"),

    entry_generic,

    new category("adjectives"),

    entry_object,

    new category("adverbs"),

    entry_compare_equal,
    entry_compare_greater_than,
    entry_compare_greater_than_or_equal,
    entry_compare_less_than,
    entry_compare_less_than_or_equal,
    entry_compare_not_equal,
    entry_compare_zero,
    entry_map_assign,
    entry_map_print_1,
    entry_map_print_2,
    entry_map_set
];

/***************************************************************/

convert("path_list"		, path_list		);
convert("syntax_list"		, syntax_list		);
convert("semantics_list"	, semantics_list	);

