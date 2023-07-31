﻿using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Iterator
{
    public class ConcreteAggregate : Aggregate
    {
        private readonly ArrayList items = new ArrayList();

        public override Iterator CreateIterator()
        {
            return new ConcreteIterator(this);
        }

        public override int Count
        {
            get { return items.Count; }
            protected set { }
        }

        public override object this[int index]
        {
            get { return items[index]; }
            set { items.Insert(index, value); }
        }
    }
}
