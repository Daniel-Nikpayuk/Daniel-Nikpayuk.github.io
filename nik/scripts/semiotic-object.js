
/*
    Each type of object is followed by convenience classes
    (aliases) which are structured the same internally,
    and otherwise share the same tag.
*/

/***************************************************************/

/*
    A sign is a single value object.
    In practice it most often defaults as:

    <element class=kind>text</element>
*/

function sign(kind, text)
{
    this.tag			= "sign";

    this.kind			= kind;
    this.text			= text;
}

    function cell()
    {
        this.tag		= "sign";

        this.kind		= "cell";
        this.text		= "";
    }

    function value(text)
    {
        this.tag		= "sign";

        this.kind		= "value";
        this.text		= text;
    }

    function name(text)
    {
        this.tag		= "sign";

        this.kind		= "name";
        this.text		= text;
    }

    function type(text)
    {
        this.tag		= "sign";

        this.kind		= "type";
        this.text		= text;
    }

    function left(text)
    {
        this.tag		= "sign";

        this.kind		= "left";
        this.text		= text;
    }

    function center(text)
    {
        this.tag		= "sign";

        this.kind		= "center";
        this.text		= text;
    }

    function right(text)
    {
        this.tag		= "sign";

        this.kind		= "right";
        this.text		= text;
    }

    function anchor(id)
    {
        this.tag		= "sign";

        this.kind		= "anchor";
        this.text		= id;
    }

    function paragraph(text)
    {
        this.tag		= "sign";

        this.kind		= "paragraph";
        this.text		= text;
    }

    function separator(text)
    {
        this.tag		= "sign";

        this.kind		= "separator";
        this.text		= text;
    }

    function keyword(text)
    {
        this.tag		= "sign";

        this.kind		= "keyword";
        this.text		= text;
    }

    function href(text)
    {
        this.tag		= "sign";

        this.kind		= "href";
        this.text		= text;
    }

    function source(text)
    {
        this.tag		= "sign";

        this.kind		= "source";
        this.text		= text;
    }

    function step(text)
    {
        this.tag		= "sign";

        this.kind		= "step";
        this.text		= text;
    }

    function title(text)
    {
        this.tag		= "sign";

        this.kind		= "title";
        this.text		= text;
    }

    function category(text)
    {
        this.tag		= "sign";

        this.kind		= "category";
        this.text		= text;
    }

    function member_entry(text)
    {
        this.tag		= "sign";

        this.kind		= "member_entry";
        this.text		= text;
    }

    function static_entry(text)
    {
        this.tag		= "sign";

        this.kind		= "static_entry";
        this.text		= text;
    }

/***************************************************************/

/*
    A pair is a non-atomic object, in the sense
    that it uses general objects in its definition.
*/

function pair(kind, x, y)
{
    this.tag			= "pair";

    this.kind			= kind;
    this.x			= x;
    this.y			= y;
}

    function collapsible_category(text)
    {
        this.tag		= "pair";

        this.kind		= "collapsible_category";
        this.x			= new cell();
        this.y			= new category(text);
    }

    function argument(type_text, name_text)
    {
        this.tag		= "pair";

        this.kind		= "argument";
        this.x			= new type(type_text);
        this.y			= new name(name_text);
    }

    function parameter(type_text, name_text)
    {
        this.tag		= "pair";

        this.kind		= "parameter";
        this.x			= new type(type_text);
        this.y			= new name(name_text);
    }

    function binding(type_text, name_text)
    {
        this.tag		= "pair";

        this.kind		= "binding";
        this.x			= new type(type_text);
        this.y			= new name(name_text);
    }

    function static_binding(type_text, name_text)
    {
        this.tag		= "pair";

        this.kind		= "static_binding";
        this.x			= new type(type_text);
        this.y			= new static_entry(name_text);
    }

    function linked_name(name_text, href_text)
    {
        this.tag		= "pair";

        this.kind		= "linked_name";
        this.x			= new name(name_text);
        this.y			= new href(href_text);
    }

    function default_value(variable, value)
    {
        this.tag		= "pair";

        this.kind		= "default_value";
        this.x			= variable;
        this.y			= value;
    }

    function link(subject, href)
    {
        this.tag		= "pair";

        this.kind		= "link";
        this.x			= subject;
        this.y			= href;
    }

    function label(name, policy = "disable")
    {
        this.tag		= "pair";

        this.kind		= "label";
        this.x			= name;
        this.y			= policy;
    }

    function space(name, policy = "disable")
    {
        this.tag		= "pair";

        this.kind		= "space";
        this.x			= name;
        this.y			= policy;
    }

    function alias_entry(name, value)
    {
        this.tag		= "pair";

        this.kind		= "alias_entry";
        this.x			= name;
        this.y			= value;
    }

/***************************************************************/

/*
    A product is the first recursive non-atomic object,
    which is to say it is structurally recursive.

    It signifies an array of objects (atomic or otherwise).
*/

function product(kind, array)
{
    this.tag			= "product";

    this.kind			= kind;
    this.array			= array;
}

    function angle_braces(array)
    {
        this.tag		= "product";

        this.kind		= "angle_braces";
        this.array		= array;
    }

    function parentheses(array)
    {
        this.tag		= "product";

        this.kind		= "parentheses";
        this.array		= array;
    }

    function curly_braces(array)
    {
        this.tag		= "product";

        this.kind		= "curly_braces";
        this.array		= array;
    }

    function square_brackets(array)
    {
        this.tag		= "product";

        this.kind		= "square_brackets";
        this.array		= array;
    }

    function template(array)
    {
        this.tag		= "product";

        this.kind		= "template";
        this.array		= array;
    }

    function procedure(array)
    {
        this.tag		= "product";

        this.kind		= "procedure";
        this.array		= array;
    }

    function adjective(array)
    {
        this.tag		= "product";

        this.kind		= "adjective";
        this.array		= array;
    }

    function description(array)
    {
        this.tag		= "product";

        this.kind		= "description";
        this.array		= array;
    }

    function enable(array)
    {
        this.tag		= "product";

        this.kind		= "enable";
        this.array		= array;
    }

    function division(array)
    {
        this.tag		= "product";

        this.kind		= "division";
        this.array		= array;
    }

    function partition(array)
    {
        this.tag		= "product";

        this.kind		= "partition";
        this.array		= array;
    }

    function module(array)
    {
        this.tag		= "product";

        this.kind		= "module";
        this.array		= array;
    }

    function modify(array)
    {
        this.tag		= "product";

        this.kind		= "modify";
        this.array		= array;
    }

    function append(array)
    {
        this.tag		= "product";

        this.kind		= "append";
        this.array		= array;
    }

    function collapsible_list(array)
    {
        this.tag		= "product";

        this.kind		= "collapsible_list";
        this.array		= array;
    }

    function list(array)
    {
        this.tag		= "product";

        this.kind		= "list";
        this.array		= array;
    }

