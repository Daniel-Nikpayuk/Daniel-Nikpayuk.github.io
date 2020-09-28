import graph;
unitsize(1cm);

struct pair_list
{
	pair current;
	pair car(){return current;}

	pair_list next;
	pair_list cdr(){return next;}

	static pair_list pair_list(pair c, pair_list n) {pair_list l=new pair_list; l.current=c; l.next=n; return l;}
	static pair_list pair_list(int count, int pos=0, pair make_pair(int))
	{
		pair_list _graph(int c, int p)
		{
			if (c == 0) return null;
			return pair_list(make_pair(p), _graph(c-1, p+1));
		}

		pair_list list=new pair_list;
		if (count > 0)
		{
			list.current=make_pair(pos);
			list.next=_graph(count-1, pos+1);
		}

		return list;
	}

	void draw(pen color=black)
	{
		pair_list list=cdr();
		if (list != null)
		{
			draw(car()--list.car(), color);
			list.draw(color);
		}
	}
}
from pair_list unravel pair_list;

struct delayed_pair_list
{
	typedef delayed_pair_list force_type();
	typedef force_type delay_type();

	pair current;
	pair car(){return current;}

	delayed_pair_list next;
	force_type force;
	delayed_pair_list cdr(){next=force(); return next;}

	delay_type delay;
	static delayed_pair_list delayed_pair_list(int count, int pos=0, pair make_pair(int))
	{
		delayed_pair_list list=new delayed_pair_list;
		list.current=make_pair(pos);
		list.delay=new force_type()
		{
			return new delayed_pair_list()
			{
				if (count == 0) return null;
				return delayed_pair_list(count-1, pos+1, make_pair);
			};
		};
		list.force=list.delay();

		return list;
	}

	void draw(pen color0=black, pen color1=color0, real incr=0.00909, real t=0)
	{
		delayed_pair_list list=cdr();
		if (list != null)
		{
			draw(car()--list.car(), t*color0+t*color1);
			list.draw(color0, color1, incr=incr, t=t+incr);
		}
	}
}
from delayed_pair_list unravel delayed_pair_list;

///////////////////////////////////////////////

delayed_pair_list spiral=delayed_pair_list(200, new pair(int pos){return pos*(cos(pos),sin(pos));});
spiral.draw(blue, yellow);

