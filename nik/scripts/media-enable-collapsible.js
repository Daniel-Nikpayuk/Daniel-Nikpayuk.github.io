
var collapsible_statuses = new Array();

function toggle_collapsible(collapsible_cell, collapsible_list, collapsible_status)
{
    return function ()
    {
        if (collapsible_status === "open")
        {
            collapsible_cell.style.margin	= "0 5px 0 -11px";
            collapsible_cell.style.borderTop	= "6px solid transparent";
            collapsible_cell.style.borderRight	= "0";
            collapsible_cell.style.borderBottom	= "6px solid transparent";
            collapsible_cell.style.borderLeft	= "6px solid red";

            collapsible_list.style.display	= "none";

            collapsible_status			= "closed";
        }
        else
        {
            collapsible_cell.style.margin	= "0 5px 3px -17px";
            collapsible_cell.style.borderTop	= "6px solid red";
            collapsible_cell.style.borderRight	= "6px solid transparent";
            collapsible_cell.style.borderBottom	= "0";
            collapsible_cell.style.borderLeft	= "6px solid transparent";

            collapsible_list.style.display	= "block";
            collapsible_status			= "open";
        }

	return false;
    }
}

/*******************************************************************************************************/

const index_list		= document.getElementById("syntax_list");
const collapsible_categories	= index_list.getElementsByClassName("collapsible_category");
const collapsible_lists		= index_list.getElementsByClassName("collapsible_list");

for (var k=0; k < collapsible_categories.length; ++k)
{
    collapsible_statuses.push("closed");
    collapsible_categories[k].onclick = toggle_collapsible
    (
        collapsible_categories[k].firstChild,
        collapsible_lists[k],
        collapsible_statuses[k]
    );
}

