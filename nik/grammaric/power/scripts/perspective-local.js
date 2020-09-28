
const steps = new list
([
    new linked_name		("home"			, "../../../index.html"		),
    new separator		(" / "							),

    new linked_name		("nik"			, "../../index.html"		),
    new separator		(" / "							),

    new linked_name		("grammaric"		, "../index.html"		),

    new step			("power"						),

    new title			("perspective"						)
]);

/***************************************************************************************************************/

const index_generic = new list
([
    new adjective
    ([
        new type			("struct"					),
        new linked_name			("generic"		, "#generic"		),

        new curly_braces		([]						)
    ]),

    new collapsible_category		("methods"		 			),

    new collapsible_list
    ([
        new procedure
        ([
            new type			("static sub_type"				),
            new linked_name		("compare"		, "#generic-compare-1"	),
            new parentheses
            ([
                new argument		("adv_type &"		, "adv"			),
                new argument		("sub_type"		, "sub"			),
                new argument		("sub_type"		, "end"			)
            ])
        ]),

        new procedure
        ([
            new type			("static sub_type"				),
            new linked_name		("compare"		, "#generic-compare-2"	),
            new parentheses
            ([
                new argument		("adv_type &"		, "adv"			),
                new argument		("sub_type"		, "sub"			),
                new argument		("ob_type"		, "ob"			),
                new argument		("ob_type"		, "end"			)
            ])
        ]),

        new procedure
        ([
            new type			("static void"					),
            new linked_name		("map"			, "#generic-map-1"	),
            new parentheses
            ([
                new argument		("adv_type &"		, "adv"			),
                new argument		("sub_type"		, "sub"			),
                new argument		("sub_type"		, "end"			)
            ])
        ]),

        new procedure
        ([
            new type			("static sub_type"				),
            new linked_name		("map"			, "#generic-map-2"	),
            new parentheses
            ([
                new argument		("adv_type &"		, "adv"			),
                new argument		("sub_type"		, "sub"			),
                new argument		("ob_type"		, "ob"			),
                new argument		("ob_type"		, "end"			)
            ])
        ]),

        new procedure
        ([
            new type			("static sub_type"				),
            new linked_name		("map"			, "#generic-map-3"	),
            new parentheses
            ([
                new argument		("adv_type &"		, "adv"			),
                new argument		("sub_type"		, "sub"			),
                new argument		("ob1_type"		, "ob1"			),
                new argument		("ob_type"		, "ob"			),
                new argument		("ob_type"		, "end"			)
            ])
        ])
    ])
]);

const entry_generic = new list
([
    new anchor				("generic"					),
    new adjective
    ([
        new type			("struct"					),
        new name			("generic"					),
        new curly_braces		([]						)
    ]),

    new category			("methods"			       		),

    new anchor				("generic-compare-1"				),
    new procedure
    ([
        new type			("static sub_type"				),
        new name			("compare"					),
        new parentheses
        ([
            new argument		("adv_type &"		, "adv"			),
            new argument		("sub_type"		, "sub"			),
            new argument		("sub_type"		, "end"			)
        ])
    ]),

    new anchor				("generic-compare-2"				),
    new procedure
    ([
        new type			("static sub_type"				),
        new name			("compare"					),
        new parentheses
        ([
            new argument		("adv_type &"		, "adv"			),
            new argument		("sub_type"		, "sub"			),
            new argument		("ob_type"		, "ob"			),
            new argument		("ob_type"		, "end"			)
        ])
    ]),

    new anchor				("generic-map-1"				),
    new procedure
    ([
        new type			("static void"					),
        new name			("map"						),
        new parentheses
        ([
            new argument		("adv_type &"		, "adv"			),
            new argument		("sub_type"		, "sub"			),
            new argument		("sub_type"		, "end"			)
        ])
    ]),

    new anchor				("generic-map-2"				),
    new procedure
    ([
        new type			("static sub_type"				),
        new name			("map"						),
        new parentheses
        ([
            new argument		("adv_type &"		, "adv"			),
            new argument		("sub_type"		, "sub"			),
            new argument		("ob_type"		, "ob"			),
            new argument		("ob_type"		, "end"			)
        ])
    ]),

    new anchor				("generic-map-3"				),
    new procedure
    ([
        new type			("static sub_type"				),
        new name			("map"						),
        new parentheses
        ([
            new argument		("adv_type &"		, "adv"			),
            new argument		("sub_type"		, "sub"			),
            new argument		("ob1_type"		, "ob1"			),
            new argument		("ob_type"		, "ob"			),
            new argument		("ob_type"		, "end"			)
        ])
    ])
]);

/***************************************************************************************************************/

const index_Interval = new list
([
    new adjective
    ([
        new type			("enum struct"					),
        new name			("Interval"					),
        new curly_braces
        ([
            new value			("closed"					),
            new value			("closing"					),
            new value			("opening"					),
            new value			("open"						)
        ])
    ])
]);

/***************************************************************************************************************/

const index_Direction = new list
([
    new adjective
    ([
        new type			("enum struct"					),
        new name			("Direction"					),
        new curly_braces
        ([
            new value			("forward"					),
            new value			("backward"					)
        ])
    ])
]);

/***************************************************************************************************************/

const index_object = new list
([
    new template
    ([
        new type			("struct"							),
        new linked_name			("object"			, "#object"			),
        new angle_braces
        ([
            new parameter		("Interval"			, "ob_interval"			),
            new parameter		("Direction"			, "ob_direction"		)
        ])
    ]),

    new collapsible_category		("static members"						),

    new collapsible_list
    ([
        new linked_name			("type"				, "#object-type"		),
        new linked_name			("interval"			, "#object-interval"		),
            
        new linked_name			("is_closed"			, "#object-is_closed"		),
        new linked_name			("is_closing"			, "#object-is_closing"		),
        new linked_name			("is_opening"			, "#object-is_opening"		),
        new linked_name			("is_open"			, "#object-is_open"		),
            
        new linked_name			("is_initial_open"		, "#object-is_initial_open"	),
        new linked_name			("is_terminal_closed"		, "#object-is_terminal_closed"	),
            
        new linked_name			("close_initial"		, "#object-close_initial"	),
        new linked_name			("open_terminal"		, "#object-open_terminal"	),
        new linked_name			("invert_interval"		, "#object-invert_interval"	),
            
        new linked_name			("direction"			, "#object-direction"		),
        new linked_name			("is_forward"			, "#object-is_forward"		),
        new linked_name			("is_backward"			, "#object-is_backward"		),
            
        new linked_name			("invert_direction"		, "#object-invert_direction"	),
            
        new linked_name			("initial_closed_type"		, "#object-initial_closed_type"	),
        new linked_name			("terminal_open_type"		, "#object-terminal_open_type"	),
        new linked_name			("inverse_type"			, "#object-inverse_type"	)
    ]),

    new collapsible_category		("methods"							),

    new collapsible_list
    ([
        new procedure
        ([
            new type			("inline static size_type"					),
            new linked_name		("distance"			, "#object-distance"		),
            new parentheses
            ([
                new argument		("ob_type"			, "ob"				),
                new argument		("ob_type"			, "end"				)
            ])
        ]),

        new procedure
        ([
            new type			("inline static void"						),
            new linked_name		("first_iteration"		, "#object-first_iteration"	),
            new parentheses
            ([
                new argument		("ob_type &"			, "ob"				)
            ])
        ]),

        new procedure
        ([
            new type			("inline static void"						),
            new linked_name		("main_iteration"		, "#object-main_iteration"	),
            new parentheses
            ([
                new argument		("ob_type &"			, "ob"				)
            ])
        ]),

        new procedure
        ([
            new type			("inline static ob_type"					),
            new linked_name		("shift"			, "#object-shift"		),
            new parentheses
            ([
                new argument		("ob_type"			, "ob"				),
                new argument		("size_type"			, "distance"			)
            ])
        ])
    ])
]);

const entry_object = new list
([
    new anchor				("object"							),
    new template
    ([
        new type			("struct"							),
        new name			("object"							),
        new angle_braces
        ([
            new parameter		("Interval"			, "ob_interval"			),
            new parameter		("Direction"			, "ob_direction"		)
        ])
    ]),

    new category			("static members"		 	      			),

    new anchor				("object-type"							),
    new member_entry			("type"								),

    new anchor				("object-interval"						),
    new member_entry			("interval"							),

    new anchor				("object-is_closed"						),
    new member_entry			("is_closed"							),

    new anchor				("object-is_closing"						),
    new member_entry			("is_closing"							),

    new anchor				("object-is_opening"						),
    new member_entry			("is_opening"							),

    new anchor				("object-is_open"						),
    new member_entry			("is_open"							),

    new anchor				("object-is_initial_open"					),
    new member_entry			("is_initial_open"						),

    new anchor				("object-is_terminal_closed"					),
    new member_entry			("is_terminal_closed"						),

    new anchor				("object-close_initial"						),
    new member_entry			("close_initial"						),

    new anchor				("object-open_terminal"						),
    new member_entry			("open_terminal"						),

    new anchor				("object-invert_interval"					),
    new member_entry			("invert_interval"						),

    new anchor				("object-direction"						),
    new member_entry			("direction"							),

    new anchor				("object-is_forward"						),
    new member_entry			("is_forward"							),

    new anchor				("object-is_backward"						),
    new member_entry			("is_backward"							),

    new anchor				("object-invert_direction"					),
    new member_entry			("invert_direction"						),

    new anchor				("object-initial_closed_type"					),
    new member_entry			("initial_closed_type"						),

    new anchor				("object-terminal_open_type"					),
    new member_entry			("terminal_open_type"						),

    new anchor				("object-inverse_type"						),
    new member_entry			("inverse_type"							),

    new category			("methods"			       				),

    new anchor				("object-distance"						),
    new procedure
    ([
        new type			("inline static size_type"					),
        new name			("distance"							),
        new parentheses
        ([
            new argument		("ob_type"			, "ob"				),
            new argument		("ob_type"			, "end"				)
        ])
    ]),

    new anchor				("object-first_iteration"					),
    new procedure
    ([
        new type			("inline static void"						),
        new name			("first_iteration"						),
        new parentheses
        ([
            new argument		("ob_type &"			, "ob"				)
        ])
    ]),

    new anchor				("object-main_iteration"					),
    new procedure
    ([
        new type			("inline static void"						),
        new name			("main_iteration"						),
        new parentheses
        ([
            new argument		("ob_type &"			, "ob"				)
        ])
    ]),

    new anchor				("object-shift"							),
    new procedure
    ([
        new type			("inline static ob_type"					),
        new name			("shift"							),
        new parentheses
        ([
            new argument		("ob_type"			, "ob"				),
            new argument		("size_type"			, "distance"			)
        ])
    ])
]);

/***************************************************************************************************************/

const index_compare_zero = new list
([
    new template
    ([
        new type			("struct"							),
        new linked_name			("compare_zero"		, "#compare_zero"			),
        new angle_braces
        ([
            new parameter		("typename"		, "sub_adjective"			)
        ])
    ]),

    new collapsible_category		("methods"							),

    new collapsible_list
    ([
        new procedure
        ([
            new linked_name		("compare_zero"		, "#compare_zero-compare_zero"		),
            new parentheses		([]								)
        ]),

        new procedure
        ([
            new type			("inline void"							),
            new linked_name		("first_iteration"	, "#compare_zero-first_iteration"	),
            new parentheses
            ([
                new argument		("sub_type &"		, "sub"					)
            ])
        ]),

        new procedure
        ([
            new type			("inline void"							),
            new linked_name		("last_action"		, "#compare_zero-last_action"		),
            new parentheses
            ([
                new argument		("sub_type"		, "sub"					)
            ])
        ]),

        new procedure
        ([
            new type			("inline void"							),
            new linked_name		("main_action"		, "#compare_zero-main_action"		),
            new parentheses
            ([
                new argument		("sub_type"		, "sub"					)
            ])
        ]),

        new procedure
        ([
            new type			("inline void"							),
            new linked_name		("main_iteration"	, "#compare_zero-main_iteration"	),
            new parentheses
            ([
                new argument		("sub_type &"		, "sub"					)
            ])
        ])
    ])
]);

const entry_compare_zero = new list
([
    new anchor				("compare_zero"					),
    new template
    ([
        new type			("struct"					),
        new name			("compare_zero"					),
        new angle_braces
        ([
            new parameter		("typename"		, "sub_adjective"	)
        ])
    ]),

    new category			("methods"			       		),

    new anchor				("compare_zero-compare_zero"			),
    new procedure
    ([
        new name			("compare_zero"					),
        new parentheses			([]						)
    ]),

    new anchor				("compare_zero-first_iteration"			),
    new procedure
    ([
        new type			("inline void"					),
        new name			("first_iteration"				),
        new parentheses
        ([
            new argument		("sub_type &"		, "sub"			)
        ])
    ]),

    new anchor				("compare_zero-last_action"			),
    new procedure
    ([
        new type			("inline void"					),
        new name			("last_action"					),
        new parentheses
        ([
            new argument		("sub_type"		, "sub"			)
        ])
    ]),

    new anchor				("compare_zero-main_action"			),
    new procedure
    ([
        new type			("inline void"					),
        new name			("main_action"					),
        new parentheses
        ([
            new argument		("sub_type"		, "sub"			)
        ])
    ]),

    new anchor				("compare_zero-main_iteration"			),
    new procedure
    ([
        new type			("inline void"					),
        new name			("main_iteration"				),
        new parentheses
        ([
            new argument		("sub_type &"		, "sub"			)
        ])
    ])
]);

/***************************************************************************************************************/

const index_map_set = new list
([
    new template
    ([
        new type			("struct"							),
        new linked_name			("map_set"		, "#map_set"				),
        new angle_braces
        ([
            new parameter		("typename"		, "sub_adjective"			),
            new parameter		("typename"		, "Type"				)
        ])
    ]),

    new collapsible_category		("static members"						),

    new collapsible_list
    ([
        new linked_name			("value_type"		, "map_set-value_type"			)
    ]),

    new collapsible_category		("methods"							),

    new collapsible_list
    ([
        new procedure
        ([
            new linked_name		("map_set"		, "#map_set-map_set"			),
            new parentheses
            ([
                new argument		("value_type"		, "v"					)
            ])
        ]),

        new procedure
        ([
            new type			("inline void"							),
            new linked_name		("first_iteration"	, "#map_set-first_iteration"		),
            new parentheses
            ([
                new argument		("sub_type &"		, "sub"					)
            ])
        ]),

        new procedure
        ([
            new type			("inline void"							),
            new linked_name		("last_action"		, "#map_set-last_action"		),
            new parentheses
            ([
                new argument		("sub_type"		, "sub"					)
            ])
        ]),

        new procedure
        ([
            new type			("inline void"							),
            new linked_name		("main_action"		, "#map_set-main_action"		),
            new parentheses
            ([
                new argument		("sub_type"		, "sub"					)
            ])
        ]),

        new procedure
        ([
            new type			("inline void"							),
            new linked_name		("main_iteration"	, "#map_set-main_iteration"		),
            new parentheses
            ([
                new argument		("sub_type &"		, "sub"					)
            ])
        ])
    ])
]);

const entry_map_set = new list
([
    new anchor				("map_set"					),
    new template
    ([
        new type			("struct"					),
        new name			("map_set"					),
        new angle_braces
        ([
            new parameter		("typename"		, "sub_adjective"	),
            new parameter		("typename"		, "Type"		)
        ])
    ]),

    new category			("static members"		       		),

    new anchor				("map_set-value_type"				),
    new member_entry			("value_type"					),

    new category			("methods"			       		),

    new anchor				("map_set-map_set"				),
    new procedure
    ([
        new name			("map_set"					),
        new parentheses
        ([
            new argument		("value_type"		, "v"			)
        ])
    ]),

    new anchor				("map_set-first_iteration"			),
    new procedure
    ([
        new type			("inline void"					),
        new name			("first_iteration"				),
        new parentheses
        ([
            new argument		("sub_type &"		, "sub"			)
        ])
    ]),

    new anchor				("map_set-last_action"				),
    new procedure
    ([
        new type			("inline void"					),
        new name			("last_action"					),
        new parentheses
        ([
            new argument		("sub_type"		, "sub"			)
        ])
    ]),

    new anchor				("map_set-main_action"				),
    new procedure
    ([
        new type			("inline void"					),
        new name			("main_action"					),
        new parentheses
        ([
            new argument		("sub_type"		, "sub"			)
        ])
    ]),

    new anchor				("map_set-main_iteration"			),
    new procedure
    ([
        new type			("inline void"					),
        new name			("main_iteration"				),
        new parentheses
        ([
            new argument		("sub_type &"		, "sub"			)
        ])
    ])
]);

/***************************************************************************************************************/

const index_map_print_1 = new list
([
    new template
    ([
        new type			("struct"							),
        new linked_name			("map_print"		, "#map_print-1"			),
        new angle_braces
        ([
            new parameter		("typename"		, "sub_adjective"			)
        ])
    ]),

    new collapsible_category		("static members"						),

    new collapsible_list
    ([
        new linked_name			("separator_type"	, "#map_print-1-separator_type"		)
    ]),

    new collapsible_category		("methods"							),

    new collapsible_list
    ([
        new procedure
        ([
            new type			("inline void"							),
            new linked_name		("first_iteration"	, "#map_print-1-first_iteration"	),
            new parentheses
            ([
                new argument		("sub_type &"		, "sub"					)
            ])
        ]),

        new procedure
        ([
            new type			("inline void"							),
            new linked_name		("last_action"		, "#map_print-1-last_action"		),
            new parentheses
            ([
                new argument		("sub_type"		, "sub"					)
            ])
        ]),

        new procedure
        ([
            new type			("inline void"							),
            new linked_name		("main_action"		, "#map_print-1-main_action"		),
            new parentheses
            ([
                new argument		("sub_type"		, "sub"					)
            ])
        ]),

        new procedure
        ([
            new type			("inline void"							),
            new linked_name		("main_iteration"	, "#map_print-1-main_iteration"		),
            new parentheses
            ([
                new argument		("sub_type &"		, "sub"					)
            ])
        ])
    ])
]);

const entry_map_print_1 = new list
([
    new anchor				("map_print-1"							),
    new template
    ([
        new type			("struct"							),
        new name			("map_print"							),
        new angle_braces
        ([
            new parameter		("typename"		, "sub_adjective"			)
        ])
    ]),

    new category			("static members"		       				),

    new anchor				("map_print-1-separator_type"					),
    new member_entry			("separator_type"						),

    new category			("methods"			       				),

    new anchor				("map_print-1-first_iteration"					),
    new procedure
    ([
        new type			("inline void"							),
        new name			("first_iteration"						),
        new parentheses
        ([
            new argument		("sub_type &"		, "sub"					)
        ])
    ]),

    new anchor				("map_print-1-last_action"					),
    new procedure
    ([
        new type			("inline void"							),
        new name			("last_action"							),
        new parentheses
        ([
            new argument		("sub_type"		, "sub"					)
        ])
    ]),

    new anchor				("map_print-1-main_action"					),
    new procedure
    ([
        new type			("inline void"							),
        new name			("main_action"							),
        new parentheses
        ([
            new argument		("sub_type"		, "sub"					)
        ])
    ]),

    new anchor				("map_print-1-main_iteration"					),
    new procedure
    ([
        new type			("inline void"							),
        new name			("main_iteration"						),
        new parentheses
        ([
            new argument		("sub_type &"		, "sub"					)
        ])
    ])
]);

/***************************************************************************************************************/

const index_map_print_2 = new list
([
    new template
    ([
        new type			("struct"								),
        new linked_name			("map_print"			, "#map_print-2"			),
        new angle_braces
        ([
            new parameter		("typename"			, "sub_adjective"			),
            new parameter		("typename"			, "Type"				)
        ])
    ]),

    new collapsible_category		("static members"							),

    new collapsible_list
    ([
        new linked_name			("separator_type"		, "#map_print-2-separator_type"		)
    ]),

    new collapsible_category		("methods"								),

    new collapsible_list
    ([
        new procedure
        ([
            new linked_name		("map_print"			, "#map_print-2-map_print"		),
            new parentheses
            ([
                new argument		("const separator_type &"	, "s"					)
            ])
        ]),

        new procedure
        ([
            new type			("inline void"								),
            new linked_name		("first_iteration"		, "#map_print-2-first_iteration"	),
            new parentheses
            ([
                new argument		("sub_type &"			, "sub"					)
            ])
        ]),

        new procedure
        ([
            new type			("inline void"								),
            new linked_name		("last_action"			, "#map_print-2-last_action"		),
            new parentheses
            ([
                new argument		("sub_type"			, "sub"					)
            ])
        ]),

        new procedure
        ([
            new type			("inline void"								),
            new linked_name		("main_action"			, "#map_print-2-main_action"		),
            new parentheses
            ([
                new argument		("sub_type"			, "sub"					)
            ])
        ]),

        new procedure
        ([
            new type			("inline void"								),
            new linked_name		("main_iteration"		, "#map_print-2-main_iteration"		),
            new parentheses
            ([
                new argument		("sub_type &"			, "sub"					)
            ])
        ])
    ])
]);

const entry_map_print_2 = new list
([
    new anchor				("map_print-2"							),
    new template
    ([
        new type			("struct"							),
        new name			("map_print"							),
        new angle_braces
        ([
            new parameter		("typename"			, "sub_adjective"		),
            new parameter		("typename"			, "Type"			)
        ])
    ]),

    new category			("static members"		       				),

    new anchor				("map_print-2-separator_type"					),
    new member_entry			("separator_type"						),

    new category			("methods"			       				),

    new anchor				("map_print-2-map_print"					),
    new procedure
    ([
        new name			("map_print"							),
        new parentheses
        ([
            new argument		("const separator_type &"	, "s"				)
        ])
    ]),

    new anchor				("map_print-2-first_iteration"					),
    new procedure
    ([
        new type			("inline void"							),
        new name			("first_iteration"						),
        new parentheses
        ([
            new argument		("sub_type &"			, "sub"				)
        ])
    ]),

    new anchor				("map_print-2-last_action"					),
    new procedure
    ([
        new type			("inline void"							),
        new name			("last_action"							),
        new parentheses
        ([
            new argument		("sub_type"			, "sub"				)
        ])
    ]),

    new anchor				("map_print-2-main_action"					),
    new procedure
    ([
        new type			("inline void"							),
        new name			("main_action"							),
        new parentheses
        ([
            new argument		("sub_type"			, "sub"				)
        ])
    ]),

    new anchor				("map_print-2-main_iteration"					),
    new procedure
    ([
        new type			("inline void"							),
        new name			("main_iteration"						),
        new parentheses
        ([
            new argument		("sub_type &"			, "sub"				)
        ])
    ])
]);

/***************************************************************************************************************/

const index_compare_equal = new list
([
    new template
    ([
        new type			("struct"							),
        new linked_name			("compare_equal"	, "#compare_equal"			),
        new angle_braces
        ([
            new parameter		("typename"		, "sub_adjective"			),
            new parameter		("typename"		, "ob_adjective"			)
        ])
    ]),

    new collapsible_category		("methods"							),

    new collapsible_list
    ([
        new procedure
        ([
            new linked_name		("compare_equal"	, "#compare_equal"			),
            new parentheses		([]								)
        ]),

        new procedure
        ([
            new type			("inline void"							),
            new linked_name		("first_iteration"	, "#compare_equal-first_iteration"	),
            new parentheses
            ([
                new argument		("sub_type &"		, "sub"					)
            ])
        ]),

        new procedure
        ([
            new type			("inline void"							),
            new linked_name		("last_action"		, "#compare_equal-last_action"		),
            new parentheses
            ([
                new argument		("sub_type"		, "sub"					)
            ])
        ]),

        new procedure
        ([
            new type			("inline void"							),
            new linked_name		("main_action"		, "#compare_equal-main_action"		),
            new parentheses
            ([
                new argument		("sub_type"		, "sub"					)
            ])
        ]),

        new procedure
        ([
            new type			("inline void"							),
            new linked_name		("main_iteration"	, "#compare_equal-main_iteration"	),
            new parentheses
            ([
                new argument		("sub_type &"		, "sub"					)
            ])
        ])
    ])
]);

const entry_compare_equal = new list
([
    new anchor				("compare_equal"				),
    new template
    ([
        new type			("struct"					),
        new name			("compare_equal"				),
        new angle_braces
        ([
            new parameter		("typename"		, "sub_adjective"	),
            new parameter		("typename"		, "ob_adjective"	)
        ])
    ]),

    new category			("methods"			       		),

    new anchor				("compare_equal-compare_equal"			),
    new procedure
    ([
        new name			("compare_equal"				),
        new parentheses			([]						)
    ]),

    new anchor				("compare_equal-first_iteration"		),
    new procedure
    ([
        new type			("inline void"					),
        new name			("first_iteration"				),
        new parentheses
        ([
            new argument		("sub_type &"		, "sub"			)
        ])
    ]),

    new anchor				("compare_equal-last_action"			),
    new procedure
    ([
        new type			("inline void"					),
        new name			("last_action"					),
        new parentheses
        ([
            new argument		("sub_type"		, "sub"			)
        ])
    ]),

    new anchor				("compare_equal-main_action"			),
    new procedure
    ([
        new type			("inline void"					),
        new name			("main_action"					),
        new parentheses
        ([
            new argument		("sub_type"		, "sub"			)
        ])
    ]),

    new anchor				("compare_equal-main_iteration"			),
    new procedure
    ([
        new type			("inline void"					),
        new name			("main_iteration"				),
        new parentheses
        ([
            new argument		("sub_type &"		, "sub"			)
        ])
    ])
]);

/***************************************************************************************************************/

const index_compare_not_equal = new list
([
    new template
    ([
        new type			("struct"							),
        new linked_name			("compare_not_equal"	, "#compare_not_equal"			),
        new angle_braces
        ([
            new parameter		("typename"		, "sub_adjective"			),
            new parameter		("typename"		, "ob_adjective"			)
        ])
    ]),

    new collapsible_category		("methods"							),

    new collapsible_list
    ([
        new procedure
        ([
            new linked_name		("compare_not_equal"	, "#compare_not_equal-compare_not_equal"),
            new parentheses		([]								)
        ]),

        new procedure
        ([
            new type			("inline void"							),
            new linked_name		("first_iteration"	, "#compare_not_equal-first_iteration"	),
            new parentheses
            ([
                new argument		("sub_type &"		, "sub"					)
            ])
        ]),

        new procedure
        ([
            new type			("inline void"							),
            new linked_name		("last_action"		, "#compare_not_equal-last_action"	),
            new parentheses
            ([
                new argument		("sub_type"		, "sub"					)
            ])
        ]),

        new procedure
        ([
            new type			("inline void"							),
            new linked_name		("main_action"		, "#compare_not_equal-main_action"	),
            new parentheses
            ([
                new argument		("sub_type"		, "sub"					)
            ])
        ]),

        new procedure
        ([
            new type			("inline void"							),
            new linked_name		("main_iteration"	, "#compare_not_equal-main_iteration"	),
            new parentheses
            ([
                new argument		("sub_type &"		, "sub"					)
            ])
        ])
    ])
]);

const entry_compare_not_equal = new list
([
    new anchor				("compare_not_equal"				),
    new template
    ([
        new type			("struct"					),
        new name			("compare_not_equal"				),
        new angle_braces
        ([
            new parameter		("typename"		, "sub_adjective"	),
            new parameter		("typename"		, "ob_adjective"	)
        ])
    ]),

    new category			("methods"			       		),

    new anchor				("compare_not_equal-compare_not_equal"		),
    new procedure
    ([
        new name			("compare_not_equal"				),
        new parentheses			([]						)
    ]),

    new anchor				("compare_not_equal-first_iteration"		),
    new procedure
    ([
        new type			("inline void"					),
        new name			("first_iteration"				),
        new parentheses
        ([
            new argument		("sub_type &"		, "sub"			)
        ])
    ]),

    new anchor				("compare_not_equal-last_action"		),
    new procedure
    ([
        new type			("inline void"					),
        new name			("last_action"					),
        new parentheses
        ([
            new argument		("sub_type"		, "sub"			)
        ])
    ]),

    new anchor				("compare_not_equal-main_action"		),
    new procedure
    ([
        new type			("inline void"					),
        new name			("main_action"					),
        new parentheses
        ([
            new argument		("sub_type"		, "sub"			)
        ])
    ]),

    new anchor				("compare_not_equal-main_iteration"		),
    new procedure
    ([
        new type			("inline void"					),
        new name			("main_iteration"				),
        new parentheses
        ([
            new argument		("sub_type &"		, "sub"			)
        ])
    ])
]);

/***************************************************************************************************************/

const index_compare_less_than = new list
([
    new template
    ([
        new type			("struct"					),
        new linked_name			("compare_less_than"	, "#compare_less_than"	),
        new angle_braces
        ([
            new parameter		("typename"		, "sub_adjective"	),
            new parameter		("typename"		, "ob_adjective"	)
        ])
    ]),

    new collapsible_category		("methods"		 			),

    new collapsible_list
    ([
        new procedure
        ([
            new linked_name
            (
                                         "compare_less_than"				,
                                         "#compare_less_than-compare_less_than"
            ),

            new parentheses		([]						)
        ]),

        new procedure
        ([
            new type			("inline void"					),
            new linked_name
            (
                                         "first_iteration"				,
                                         "#compare_less_than-first_iteration"
            ),

            new parentheses
            ([
                new argument		("sub_type &"		, "sub"			)
            ])
        ]),

        new procedure
        ([
            new type			("inline void"					),
            new linked_name
            (
                                         "last_action"					,
                                         "#compare_less_than-last_action"
            ),

            new parentheses
            ([
                new argument		("sub_type"		, "sub"			)
            ])
        ]),

        new procedure
        ([
            new type			("inline void"					),
            new linked_name
            (
                                         "main_action"					,
                                         "#compare_less_than-main_action"
            ),

            new parentheses
            ([
                new argument		("sub_type"		, "sub"			)
            ])
        ]),

        new procedure
        ([
            new type			("inline void"					),
            new linked_name
            (
                                         "main_iteration"				,
                                         "#compare_less_than-main_iteration"
            ),

            new parentheses
            ([
                new argument		("sub_type &"		, "sub"			)
            ])
        ])
    ])
]);

const entry_compare_less_than = new list
([
    new anchor				("compare_less_than"				),
    new template
    ([
        new type			("struct"					),
        new name			("compare_less_than"				),
        new angle_braces
        ([
            new parameter		("typename"		, "sub_adjective"	),
            new parameter		("typename"		, "ob_adjective"	)
        ])
    ]),

    new category			("methods"			       		),

    new anchor				("compare_less_than-compare_less_than"		),
    new procedure
    ([
        new name			("compare_less_than"				),
        new parentheses			([]						)
    ]),

    new anchor				("compare_less_than-first_iteration"		),
    new procedure
    ([
        new type			("inline void"					),
        new name			("first_iteration"				),
        new parentheses
        ([
            new argument		("sub_type &"		, "sub"			)
        ])
    ]),

    new anchor				("compare_less_than-last_action"		),
    new procedure
    ([
        new type			("inline void"					),
        new name			("last_action"					),
        new parentheses
        ([
            new argument		("sub_type"		, "sub"			)
        ])
    ]),

    new anchor				("compare_less_than-main_action"		),
    new procedure
    ([
        new type			("inline void"					),
        new name			("main_action"					),
        new parentheses
        ([
            new argument		("sub_type"		, "sub"			)
        ])
    ]),

    new anchor				("compare_less_than-main_iteration"		),
    new procedure
    ([
        new type			("inline void"					),
        new name			("main_iteration"				),
        new parentheses
        ([
            new argument		("sub_type &"		, "sub"			)
        ])
    ])
]);

/***************************************************************************************************************/

const index_compare_less_than_or_equal = new list
([
    new template
    ([
        new type			("struct"							),
        new linked_name		
        (
                                         "compare_less_than_or_equal"			 		,
                                         "#compare_less_than_or_equal"
        ),

        new angle_braces
        ([
            new parameter		("typename"		, "sub_adjective"			),
            new parameter		("typename"		, "ob_adjective"			)
        ])
    ]),

    new collapsible_category		("methods"							),

    new collapsible_list
    ([
        new procedure
        ([
            new linked_name
            (
                                         "compare_less_than_or_equal"				 	,
                                         "#compare_less_than_or_equal-compare_less_than_or_equal"
            ),

            new parentheses		([]								)
        ]),

        new procedure
        ([
            new type			("inline void"							),
            new linked_name
            (
                                         "first_iteration"						,
                                         "#compare_less_than_or_equal-first_iteration"
            ),

            new parentheses
            ([
                new argument		("sub_type &"		, "sub"					)
            ])
        ]),

        new procedure
        ([
            new type			("inline void"							),
            new linked_name
            (
                                         "last_action"							,
                                         "#compare_less_than_or_equal-last_action"
            ),

            new parentheses
            ([
                new argument		("sub_type"		, "sub"					)
            ])
        ]),

        new procedure
        ([
            new type			("inline void"							),
            new linked_name
            (
                                         "main_action"							,
                                         "#compare_less_than_or_equal-main_action"
            ),

            new parentheses
            ([
                new argument		("sub_type"		, "sub"					)
            ])
        ]),

        new procedure
        ([
            new type			("inline void"							),
            new linked_name
            (
                                         "main_iteration"						,
                                         "#compare_less_than_or_equal-main_iteration"
            ),

            new parentheses
            ([
                new argument		("sub_type &"		, "sub"					)
            ])
        ])
    ])
]);

const entry_compare_less_than_or_equal = new list
([
    new anchor				("compare_less_than_or_equal"					),
    new template
    ([
        new type			("struct"							),
        new name			("compare_less_than_or_equal"					),
        new angle_braces
        ([
            new parameter		("typename"		, "sub_adjective"			),
            new parameter		("typename"		, "ob_adjective"			)
        ])
    ]),

    new category			("methods"			       				),

    new anchor				("compare_less_than_or_equal-compare_less_than_or_equal"	),
    new procedure
    ([
        new name			("compare_less_than_or_equal"					),
        new parentheses			([]								)
    ]),

    new anchor				("compare_less_than_or_equal-first_iteration"			),
    new procedure
    ([
        new type			("inline void"							),
        new name			("first_iteration"						),
        new parentheses
        ([
            new argument		("sub_type &"		, "sub"					)
        ])
    ]),

    new anchor				("compare_less_than_or_equal-last_action"			),
    new procedure
    ([
        new type			("inline void"							),
        new name			("last_action"							),
        new parentheses
        ([
            new argument		("sub_type"		, "sub"					)
        ])
    ]),

    new anchor				("compare_less_than_or_equal-main_action"			),
    new procedure
    ([
        new type			("inline void"							),
        new name			("main_action"							),
        new parentheses
        ([
            new argument		("sub_type"		, "sub"					)
        ])
    ]),

    new anchor				("compare_less_than_or_equal-main_iteration"			),
    new procedure
    ([
        new type			("inline void"							),
        new name			("main_iteration"						),
        new parentheses
        ([
            new argument		("sub_type &"		, "sub"					)
        ])
    ])
]);

/***************************************************************************************************************/

const index_compare_greater_than = new list
([
    new template
    ([
        new type			("struct"					),
        new linked_name
        (
                                         "compare_greater_than"				,
                                         "#compare_greater_than"
        ),

        new angle_braces
        ([
            new parameter		("typename"		, "sub_adjective"	),
            new parameter		("typename"		, "ob_adjective"	)
        ])
    ]),

    new collapsible_category		("methods"		 			),

    new collapsible_list
    ([
        new procedure
        ([
            new linked_name
            (
                                         "compare_greater_than"				,
                                         "#compare_greater_than-compare_greater_than"
            ),

            new parentheses		([]						)
        ]),

        new procedure
        ([
            new type			("inline void"					),
            new linked_name
            (
                                         "first_iteration"				,
                                         "#compare_greater_than-first_iteration"
            ),

            new parentheses
            ([
                new argument		("sub_type &"		, "sub"			)
            ])
        ]),

        new procedure
        ([
            new type			("inline void"					),
            new linked_name
            (
                                         "last_action"					,
                                         "#compare_greater_than-last_action"
            ),

            new parentheses
            ([
                new argument		("sub_type"		, "sub"			)
            ])
        ]),

        new procedure
        ([
            new type			("inline void"					),
            new linked_name
            (
                                         "main_action"					,
                                         "#compare_greater_than-main_action"
            ),

            new parentheses
            ([
                new argument		("sub_type"		, "sub"			)
            ])
        ]),

        new procedure
        ([
            new type			("inline void"					),
            new linked_name
            (
                                         "main_iteration"				,
                                         "#compare_greater_than-main_iteration"
            ),

            new parentheses
            ([
                new argument		("sub_type &"		, "sub"			)
            ])
        ])
    ])
]);

const entry_compare_greater_than = new list
([
    new anchor				("compare_greater_than"				),
    new template
    ([
        new type			("struct"					),
        new name			("compare_greater_than"				),
        new angle_braces
        ([
            new parameter		("typename"		, "sub_adjective"	),
            new parameter		("typename"		, "ob_adjective"	)
        ])
    ]),

    new category			("methods"			       		),

    new anchor				("compare_greater_than-compare_greater_than"	),
    new procedure
    ([
        new name			("compare_greater_than"				),
        new parentheses			([]						)
    ]),

    new anchor				("compare_greater_than-first_iteration"		),
    new procedure
    ([
        new type			("inline void"					),
        new name			("first_iteration"				),
        new parentheses
        ([
            new argument		("sub_type &"		, "sub"			)
        ])
    ]),

    new anchor				("compare_greater_than-last_action"		),
    new procedure
    ([
        new type			("inline void"					),
        new name			("last_action"					),
        new parentheses
        ([
            new argument		("sub_type"		, "sub"			)
        ])
    ]),

    new anchor				("compare_greater_than-main_action"		),
    new procedure
    ([
        new type			("inline void"					),
        new name			("main_action"					),
        new parentheses
        ([
            new argument		("sub_type"		, "sub"			)
        ])
    ]),

    new anchor				("compare_greater_than-main_iteration"		),
    new procedure
    ([
        new type			("inline void"					),
        new name			("main_iteration"				),
        new parentheses
        ([
            new argument		("sub_type &"		, "sub"			)
        ])
    ])
]);

/***************************************************************************************************************/

const index_compare_greater_than_or_equal = new list
([
    new template
    ([
        new type			("struct"							),
        new linked_name
        (				 "compare_greater_than_or_equal"				,
                                         "#compare_greater_than_or_equal"
        ),

        new angle_braces
        ([
            new parameter		("typename"		, "sub_adjective"			),
            new parameter		("typename"		, "ob_adjective"			)
        ])
    ]),

    new collapsible_category		("methods"							),

    new collapsible_list
    ([
        new procedure
        ([
            new linked_name
            (
                                         "compare_greater_than_or_equal"				,
                                         "#compare_greater_than_or_equal-compare_greater_than_or_equal"
            ),

            new parentheses		([]								)
        ]),

        new procedure
        ([
            new type			("inline void"							),
            new linked_name
            (
                                         "first_iteration"						,
                                         "#compare_greater_than_or_equal-first_iteration"
            ),

            new parentheses
            ([
                new argument		("sub_type &"		, "sub"					)
            ])
        ]),

        new procedure
        ([
            new type			("inline void"							),
            new linked_name
            (
                                         "last_action"							,
                                         "#compare_greater_than_or_equal-last_action"
            ),

            new parentheses
            ([
                new argument		("sub_type"		, "sub"					)
            ])
        ]),

        new procedure
        ([
            new type			("inline void"							),
            new linked_name
            (
                                         "main_action"							,
                                         "#compare_greater_than_or_equal-main_action"
            ),

            new parentheses
            ([
                new argument		("sub_type"		, "sub"					)
            ])
        ]),

        new procedure
        ([
            new type			("inline void"							),
            new linked_name
            (
                                         "main_iteration"						,
                                         "#compare_greater_than_or_equal-main_iteration"
            ),

            new parentheses
            ([
                new argument		("sub_type &"		, "sub"					)
            ])
        ])
    ])
]);

const entry_compare_greater_than_or_equal = new list
([
    new anchor				("compare_greater_than_or_equal"				),
    new template
    ([
        new type			("struct"							),
        new name			("compare_greater_than_or_equal"				),
        new angle_braces
        ([
            new parameter		("typename"		, "sub_adjective"			),
            new parameter		("typename"		, "ob_adjective"			)
        ])
    ]),

    new category			("methods"			       				),

    new anchor				("compare_greater_than_or_equal-compare_greater_than_or_equal"	),
    new procedure
    ([
        new name			("compare_greater_than_or_equal"				),
        new parentheses			([]								)
    ]),

    new anchor				("compare_greater_than_or_equal-first_iteration"		),
    new procedure
    ([
        new type			("inline void"							),
        new name			("first_iteration"						),
        new parentheses
        ([
            new argument		("sub_type &"		, "sub"					)
        ])
    ]),

    new anchor				("compare_greater_than_or_equal-last_action"			),
    new procedure
    ([
        new type			("inline void"							),
        new name			("last_action"							),
        new parentheses
        ([
            new argument		("sub_type"		, "sub"					)
        ])
    ]),

    new anchor				("compare_greater_than_or_equal-main_action"			),
    new procedure
    ([
        new type			("inline void"							),
        new name			("main_action"							),
        new parentheses
        ([
            new argument		("sub_type"		, "sub"					)
        ])
    ]),

    new anchor				("compare_greater_than_or_equal-main_iteration"			),
    new procedure
    ([
        new type			("inline void"							),
        new name			("main_iteration"						),
        new parentheses
        ([
            new argument		("sub_type &"		, "sub"					)
        ])
    ])
]);

/***************************************************************************************************************/

const index_map_assign = new list
([
    new template
    ([
        new type			("struct"						),
        new linked_name			("map_assign"		, "#map_assign"			),
        new angle_braces
        ([
            new parameter		("typename"		, "sub_adjective"		),
            new parameter		("typename"		, "ob_adjective"		)
        ])
    ]),

    new collapsible_category		("methods"						),

    new collapsible_list
    ([
        new procedure
        ([
            new type			("inline void"						),
            new linked_name		("first_iteration"	, "#map_assign-first_iteration"	),
            new parentheses
            ([
                new argument		("sub_type &"		, "sub"				)
            ])
        ]),

        new procedure
        ([
            new type			("inline void"						),
            new linked_name		("last_action"		, "#map_assign-last_action"	),
            new parentheses
            ([
                new argument		("sub_type"		, "sub"				)
            ])
        ]),

        new procedure
        ([
            new type			("inline void"						),
            new linked_name		("main_action"		, "#map_assign-main_action"	),
            new parentheses
            ([
                new argument		("sub_type"		, "sub"				)
            ])
        ]),

        new procedure
        ([
            new type			("inline void"						),
            new linked_name		("main_iteration"	, "#map_assign-main_iteration"	),
            new parentheses
            ([
                new argument		("sub_type &"		, "sub"				)
            ])
        ])
    ])
]);

const entry_map_assign = new list
([
    new anchor				("map_assign"					),
    new template
    ([
        new type			("struct"					),
        new name			("map_assign"					),
        new angle_braces
        ([
            new parameter		("typename"		, "sub_adjective"	),
            new parameter		("typename"		, "ob_adjective"	)
        ])
    ]),

    new category			("methods"			       		),

    new anchor				("map_assign-first_iteration"			),
    new procedure
    ([
        new type			("inline void"					),
        new name			("first_iteration"				),
        new parentheses
        ([
            new argument		("sub_type &"		, "sub"			)
        ])
    ]),

    new anchor				("map_assign-last_action"			),
    new procedure
    ([
        new type			("inline void"					),
        new name			("last_action"					),
        new parentheses
        ([
            new argument		("sub_type"		, "sub"			)
        ])
    ]),

    new anchor				("map_assign-main_action"			),
    new procedure
    ([
        new type			("inline void"					),
        new name			("main_action"					),
        new parentheses
        ([
            new argument		("sub_type"		, "sub"			)
        ])
    ]),

    new anchor				("map_assign-main_iteration"			),
    new procedure
    ([
        new type			("inline void"					),
        new name			("main_iteration"				),
        new parentheses
        ([
            new argument		("sub_type &"		, "sub"			)
        ])
    ])
]);

